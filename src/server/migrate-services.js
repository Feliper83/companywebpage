// src/server/migrate-services.js
import fs from 'fs';
import pkg from 'pg';
import dotenv from 'dotenv';

dotenv.config();
const { Client } = pkg;

// Lee el SQL desde un archivo externo
const sql = fs.readFileSync('./db/migrate-services.sql', 'utf8');

const client = new Client({
    connectionString: process.env.DATABASE_URL,
});

async function runMigration() {
    try {
        await client.connect();
        await client.query(sql);
        console.log('✅ Migración de servicios ejecutada correctamente');
    } catch (err) {
        console.error('❌ Error ejecutando la migración', err);
    } finally {
        await client.end();
    }
}

runMigration();
