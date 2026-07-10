// src/server/create-blog-retail.js
// Crea el blog de Retail & E-commerce en ES + EN.
// Insercion parametrizada dentro de una transaccion.
import pkg from 'pg';
import dotenv from 'dotenv';

dotenv.config();
const { Client } = pkg;

const blog = {
    slug: 'retail-ecommerce',
    author: 'Felipe Gómez',
    published_at: '2026-07-10 09:00:00',
    display_order: 4,
    translations: {
        es: {
            title: 'Retail y e-commerce: del carrito abandonado a la venta unificada',
            content: `El cliente de retail hoy entra por la app, compara en el local físico y termina comprando en el marketplace. Para el negocio, ese mismo cliente aparece como tres personas distintas en tres sistemas que no se hablan entre sí.

## Los dolores del sector
- **Abandono de carrito:** fricción en el checkout hace perder hasta el 70% de las ventas iniciadas.
- **Quiebres de stock y sobre-stock:** el inventario se actualiza por lotes, no en tiempo real, y nunca coincide entre canales.
- **Experiencia fragmentada:** el cliente repite su historial de compra en cada canal porque nadie lo reconoce.
- **Fraude en pagos y devoluciones:** chargebacks y devoluciones fraudulentas erosionan el margen.
- **Recomendaciones genéricas:** ofertas que no responden a lo que el cliente realmente busca.

## El problema de fondo
La mayoría de los retailers construyó su tienda física, su e-commerce y su presencia en marketplaces como sistemas separados, cada uno con su propio inventario, su propio cliente y su propia lógica de precios. No hay una sola fuente de verdad, así que cada canal optimiza su propio resultado y pierde la venta que el cliente sí quería hacer.

## La resolución
El camino es pasar de canales aislados a **comercio unificado**: un solo inventario, un solo perfil de cliente y una sola decisión de precio y stock visibles en tiempo real desde cualquier punto de contacto.

## Tecnologías modernas que lo hacen posible
- **Motores de recomendación con IA** que personalizan en tiempo real según comportamiento, no solo historial.
- **Sincronización de inventario en tiempo real (unified commerce)** entre tienda física, app y marketplaces.
- **Forecasting de demanda con Machine Learning** para anticipar quiebres de stock antes de que ocurran.
- **Detección de fraude en checkout** con scoring en milisegundos, sin fricción para el cliente legítimo.
- **Búsqueda conversacional con RAG** que entiende lenguaje natural sobre el catálogo real.

En Cybevite ayudamos a retailers a unificar sus canales en una sola experiencia: menos carritos abandonados, inventario que nunca miente y clientes que vuelven porque los conocés de verdad.`,
        },
        en: {
            title: 'Retail & E-commerce: From Abandoned Carts to Unified Commerce',
            content: `Today's retail customer opens the app, compares in the physical store, and finishes the purchase on a marketplace. For the business, that same customer shows up as three different people in three systems that never talk to each other.

## The industry's pain points
- **Cart abandonment:** checkout friction loses up to 70% of started purchases.
- **Stockouts and overstock:** inventory updates in batches, not in real time, and never matches across channels.
- **Fragmented experience:** the customer repeats their purchase history on every channel because no one recognizes them.
- **Payment fraud and returns abuse:** chargebacks and fraudulent returns erode margin.
- **Generic recommendations:** offers that don't reflect what the customer is actually looking for.

## The root problem
Most retailers built their physical store, e-commerce site, and marketplace presence as separate systems, each with its own inventory, its own customer, and its own pricing logic. There's no single source of truth, so every channel optimizes for itself and loses the sale the customer actually wanted to make.

## The resolution
The path forward is moving from siloed channels to **unified commerce**: one inventory, one customer profile, and one pricing and stock decision, visible in real time from any touchpoint.

## Modern technologies that make it real
- **AI-powered recommendation engines** that personalize in real time based on behavior, not just history.
- **Real-time inventory sync (unified commerce)** across physical stores, apps, and marketplaces.
- **Demand forecasting with Machine Learning** to anticipate stockouts before they happen.
- **Checkout fraud detection** with millisecond scoring and zero friction for legitimate customers.
- **Conversational search with RAG** that understands natural language over the real catalog.

At Cybevite we help retailers unify their channels into a single experience: fewer abandoned carts, inventory that never lies, and customers who come back because you actually know them.`,
        },
    },
};

const client = new Client({
    connectionString: process.env.DATABASE_URL,
    ssl: { rejectUnauthorized: false },
});

async function run() {
    try {
        await client.connect();
        await client.query('BEGIN');

        const res = await client.query(
            'INSERT INTO cybevite.blog_post (slug, author, published_at, display_order) VALUES ($1, $2, $3, $4) RETURNING id',
            [blog.slug, blog.author, blog.published_at, blog.display_order]
        );
        const blogPostId = res.rows[0].id;

        for (const lang of ['es', 'en']) {
            const tr = blog.translations[lang];
            await client.query(
                'INSERT INTO cybevite.blog_post_translation (blog_post_id, lang_code, title, content) VALUES ($1, $2, $3, $4)',
                [blogPostId, lang, tr.title, tr.content]
            );
        }

        await client.query('COMMIT');
        console.log(`Blog creado: ${blog.slug} (id ${blogPostId})`);
    } catch (err) {
        await client.query('ROLLBACK').catch(() => {});
        console.error('Error creando el blog:', err);
        process.exitCode = 1;
    } finally {
        await client.end();
    }
}

run();
