// src/server/seed.js
import fs from 'fs';
import pkg from 'pg';
import dotenv from 'dotenv';

dotenv.config();
const { Client } = pkg;

// Lee el SQL desde un archivo externo
const sql = fs.readFileSync('./src/server/db/seed.sql', 'utf8');

const client = new Client({
    connectionString: process.env.DATABASE_URL, // Usa tu cadena de conexión a Postgres
});

async function runSeed() {
    try {
        await client.connect();
        await client.query(sql);
        console.log('✅ Seed ejecutado correctamente');
    } catch (err) {
        console.error('❌ Error ejecutando el seed', err);
    } finally {
        await client.end();
    }
}

runSeed();
