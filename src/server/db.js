import pg from 'pg';
const { Pool } = pg;

console.log("🔌 Inicializando PostgreSQL Pool con:", process.env.DATABASE_URL?.split('@')[1] || 'DB configurada');

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: process.env.NODE_ENV === 'production' ? { rejectUnauthorized: false } : false,
  max: 10,
  idleTimeoutMillis: 30000,
  connectionTimeoutMillis: 2000,
});

// Test connection
pool.on('connect', () => {
  console.log('✅ PostgreSQL connected');
});

pool.on('error', (err) => {
  console.error('❌ PostgreSQL error:', err);
});

export const query = (text, params) => pool.query(text, params);

export default { query };
