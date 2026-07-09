-- ============================================================
-- MIGRACIÓN: Reemplazar servicios existentes por 6 nuevos
-- Ejecutar contra la BD de producción en AWS
-- Las traducciones se eliminan en cascada automáticamente
-- ============================================================

BEGIN;

-- 1. Eliminar servicios existentes (cascade borra service_translation)
DELETE FROM cybevite.service;

-- 2. Resetear secuencia de IDs
ALTER SEQUENCE cybevite.service_id_seq RESTART WITH 1;
ALTER SEQUENCE cybevite.service_translation_id_seq RESTART WITH 1;

-- 3. Insertar los 6 nuevos servicios
INSERT INTO cybevite.service (slug, icon_path, display_order) VALUES
  ('ai-solutions',               '/images/solutions/ai-solutions.jpg',               1),
  ('enterprise-automation',      '/images/solutions/enterprise-automation.jpg',      2),
  ('custom-software-engineering','/images/solutions/custom-software-engineering.jpg',3),
  ('systems-integration',        '/images/solutions/systems-integration.jpg',        4),
  ('data-intelligence',          '/images/solutions/data-intelligence.jpg',          5),
  ('digital-product-development','/images/solutions/digital-product-development.jpg',6);

-- 4. Insertar traducciones en español e inglés

INSERT INTO cybevite.service_translation (service_id, lang_code, name, summary, details) VALUES

-- ── 1. AI Solutions ───────────────────────────────────────────
(1, 'es',
 'AI Solutions',
 'Convierte la inteligencia artificial en una ventaja competitiva.',
 'Diseñamos e implementamos soluciones basadas en IA que automatizan procesos, aceleran decisiones y mejoran la productividad de las organizaciones. Desde asistentes inteligentes hasta agentes autónomos capaces de ejecutar tareas complejas, construimos soluciones adaptadas a cada negocio.

Casos de uso: AI Agents · AI Assistants · Document Intelligence · Knowledge Search · Generative AI · RAG Systems · Voice AI · AI Workflows'),

(1, 'en',
 'AI Solutions',
 'Turn artificial intelligence into a competitive advantage.',
 'We design and implement AI-powered solutions that automate processes, accelerate decisions, and improve organizational productivity. From intelligent assistants to autonomous agents capable of executing complex tasks, we build solutions tailored to each business.

Use cases: AI Agents · AI Assistants · Document Intelligence · Knowledge Search · Generative AI · RAG Systems · Voice AI · AI Workflows'),

-- ── 2. Enterprise Automation ─────────────────────────────────
(2, 'es',
 'Enterprise Automation',
 'Elimine tareas manuales y acelere sus operaciones.',
 'Automatizamos procesos empresariales que consumen tiempo, generan errores o limitan el crecimiento de la organización. Integramos personas, sistemas e inteligencia artificial para crear operaciones más eficientes.

Casos de uso: Approval Workflows · Document Processing · Notifications · Process Automation · Operational Automation · Business Rules · Human-in-the-loop Automation'),

(2, 'en',
 'Enterprise Automation',
 'Eliminate manual tasks and accelerate your operations.',
 'We automate business processes that consume time, generate errors, or limit organizational growth. We integrate people, systems, and artificial intelligence to create more efficient operations.

Use cases: Approval Workflows · Document Processing · Notifications · Process Automation · Operational Automation · Business Rules · Human-in-the-loop Automation'),

-- ── 3. Custom Software Engineering ───────────────────────────
(3, 'es',
 'Custom Software Engineering',
 'Software diseñado para su negocio.',
 'Desarrollamos plataformas, aplicaciones y soluciones empresariales cuando los productos existentes no resuelven las necesidades de su organización. Construimos software escalable, seguro y preparado para evolucionar junto con su empresa.

Incluye: Enterprise Applications · Customer Portals · Internal Platforms · SaaS Products · Mobile Applications · APIs · Backend Systems'),

(3, 'en',
 'Custom Software Engineering',
 'Software designed for your business.',
 'We develop platforms, applications, and enterprise solutions when existing products do not meet your organization''s needs. We build scalable, secure software ready to evolve alongside your company.

Includes: Enterprise Applications · Customer Portals · Internal Platforms · SaaS Products · Mobile Applications · APIs · Backend Systems'),

-- ── 4. Systems Integration ───────────────────────────────────
(4, 'es',
 'Systems Integration',
 'Conecte toda su operación.',
 'Las empresas pierden tiempo porque la información está distribuida entre múltiples sistemas. Integramos ERPs, plataformas, aplicaciones, APIs y servicios para que toda la organización funcione como un solo ecosistema.

Integramos: ERP · CRM · Legacy Systems · Cloud Services · APIs · Identity Providers · Data Sources'),

(4, 'en',
 'Systems Integration',
 'Connect your entire operation.',
 'Companies lose time because information is scattered across multiple systems. We integrate ERPs, platforms, applications, APIs, and services so the entire organization works as a single ecosystem.

We integrate: ERP · CRM · Legacy Systems · Cloud Services · APIs · Identity Providers · Data Sources'),

-- ── 5. Data & Intelligence ───────────────────────────────────
(5, 'es',
 'Data & Intelligence',
 'Transforme datos en decisiones.',
 'Diseñamos plataformas de datos que permiten consolidar información, generar indicadores y facilitar la toma de decisiones mediante analítica e inteligencia artificial.

Incluye: Dashboards · Data Pipelines · Data Warehouses · Analytics · Reporting · Predictive Models'),

(5, 'en',
 'Data & Intelligence',
 'Transform data into decisions.',
 'We design data platforms that consolidate information, generate key indicators, and facilitate decision-making through analytics and artificial intelligence.

Includes: Dashboards · Data Pipelines · Data Warehouses · Analytics · Reporting · Predictive Models'),

-- ── 6. Digital Product Development ───────────────────────────
(6, 'es',
 'Digital Product Development',
 'Creamos productos digitales preparados para crecer.',
 'Acompañamos a empresas y startups en el diseño, desarrollo y evolución de productos digitales desde la idea inicial hasta la operación en producción.

Incluye: Product Discovery · MVP Development · Product Scaling · Cloud Architecture · Continuous Delivery'),

(6, 'en',
 'Digital Product Development',
 'We build digital products ready to scale.',
 'We guide companies and startups through the design, development, and evolution of digital products from the initial idea to production.

Includes: Product Discovery · MVP Development · Product Scaling · Cloud Architecture · Continuous Delivery');

COMMIT;
