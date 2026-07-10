// src/server/delete-blogs.js
// Elimina TODOS los blogs de la base de datos, haciendo un backup previo.
import fs from 'fs';
import pkg from 'pg';
import dotenv from 'dotenv';

dotenv.config();
const { Client } = pkg;

const client = new Client({
    connectionString: process.env.DATABASE_URL,
    ssl: { rejectUnauthorized: false },
});

async function run() {
    try {
        await client.connect();

        // 1) Backup de los blogs actuales antes de borrar
        const backup = {
            generated_at: new Date().toISOString(),
            blog_post: (await client.query('SELECT * FROM cybevite.blog_post ORDER BY id')).rows,
            blog_post_translation: (await client.query('SELECT * FROM cybevite.blog_post_translation ORDER BY id')).rows,
            content_image: (await client.query('SELECT * FROM cybevite.content_image WHERE blog_post_id IS NOT NULL ORDER BY id')).rows,
        };
        const stamp = backup.generated_at.replace(/[:.]/g, '-');
        const backupPath = `./db/blogs-backup-${stamp}.json`;
        fs.writeFileSync(backupPath, JSON.stringify(backup, null, 2), 'utf8');
        console.log(`Backup guardado en ${backupPath} (${backup.blog_post.length} posts, ${backup.blog_post_translation.length} traducciones)`);

        // 2) Borrado
        const sql = fs.readFileSync('./db/delete-blogs.sql', 'utf8');
        await client.query(sql);
        console.log('Blogs eliminados correctamente de la base de datos');
    } catch (err) {
        console.error('Error eliminando blogs:', err);
        process.exitCode = 1;
    } finally {
        await client.end();
    }
}

run();
