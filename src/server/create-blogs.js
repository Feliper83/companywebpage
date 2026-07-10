// src/server/create-blogs.js
// Crea los blogs por sector (Telecom, Call Center, Financiero) en ES + EN.
// Inserciones parametrizadas dentro de una transaccion.
import pkg from 'pg';
import dotenv from 'dotenv';

dotenv.config();
const { Client } = pkg;

const blogs = [
    {
        slug: 'telecommunications',
        author: 'Felipe Gómez',
        published_at: '2026-07-09 10:00:00',
        display_order: 1,
        translations: {
            es: {
                title: 'Telecomunicaciones: del colapso operativo a la red inteligente',
                content: `Las empresas de telecomunicaciones operan al límite: redes saturadas, clientes que exigen conectividad perfecta y márgenes cada vez más estrechos. La tecnología que debería sostenerlas muchas veces se convierte en su mayor freno.

## Los dolores del sector
- **Fuga de clientes (churn):** un cliente insatisfecho cambia de operador en minutos.
- **Redes saturadas y caídas:** la demanda de datos crece más rápido que la capacidad.
- **Aprovisionamiento manual:** activar servicios toma días y genera errores.
- **Fraude y ciberataques:** pérdidas millonarias por fraude de tráfico e identidad.
- **Soporte reactivo:** los problemas se resuelven cuando el cliente ya está molesto.

## El problema de fondo
La mayoría de operadores gestiona su red y su relación con el cliente sobre sistemas legacy aislados, sin visibilidad en tiempo real ni capacidad predictiva. Se apaga el incendio, no se previene.

## La resolución
El camino es pasar de una red reactiva a una **red inteligente y autónoma**: que se monitorea sola, predice fallas antes de que ocurran y automatiza el aprovisionamiento de extremo a extremo.

## Tecnologías modernas que lo hacen posible
- **IA / Machine Learning** para predicción de fallas y mantenimiento predictivo.
- **Modelos de churn** que identifican clientes en riesgo antes de que se vayan.
- **Automatización de red (SDN / NFV)** para aprovisionar servicios en minutos.
- **Analítica en tiempo real y Big Data** sobre el tráfico de la red.
- **Edge computing y 5G** para latencia mínima y nuevos servicios.

En Cybevite ayudamos a los operadores a convertir su red en un activo inteligente: menos caídas, menos fuga de clientes y operaciones que se anticipan al problema.`,
            },
            en: {
                title: 'Telecommunications: From Operational Overload to the Intelligent Network',
                content: `Telecom companies operate on the edge: saturated networks, customers who demand flawless connectivity, and ever-tighter margins. The technology meant to support them often becomes their biggest bottleneck.

## The industry's pain points
- **Customer churn:** an unhappy customer switches providers in minutes.
- **Saturated networks and outages:** data demand grows faster than capacity.
- **Manual provisioning:** activating services takes days and is error-prone.
- **Fraud and cyberattacks:** millions lost to traffic and identity fraud.
- **Reactive support:** issues get fixed only after the customer is already upset.

## The root problem
Most operators run their network and customer relationships on isolated legacy systems, with no real-time visibility or predictive capability. They fight fires instead of preventing them.

## The resolution
The path forward is moving from a reactive network to an **intelligent, autonomous network**: one that monitors itself, predicts failures before they happen, and automates provisioning end to end.

## Modern technologies that make it real
- **AI / Machine Learning** for failure prediction and predictive maintenance.
- **Churn models** that flag at-risk customers before they leave.
- **Network automation (SDN / NFV)** to provision services in minutes.
- **Real-time analytics and Big Data** over network traffic.
- **Edge computing and 5G** for minimal latency and new services.

At Cybevite we help operators turn their network into an intelligent asset: fewer outages, less churn, and operations that stay ahead of the problem.`,
            },
        },
    },
    {
        slug: 'call-center',
        author: 'Ana López',
        published_at: '2026-07-09 11:00:00',
        display_order: 2,
        translations: {
            es: {
                title: 'Call Centers: de la frustración del cliente a la experiencia inteligente',
                content: `Nadie quiere llamar a un call center. Largas esperas, repetir el problema tres veces y agentes sin contexto han convertido al soporte en una de las mayores fuentes de frustración del cliente.

## Los dolores del sector
- **Tiempos de espera altos** y abandono de llamadas.
- **Alta rotación de agentes:** capacitar cuesta y el conocimiento se pierde.
- **Consultas repetitivas** que saturan a los agentes.
- **Falta de contexto:** el cliente repite su historia en cada canal.
- **Costos operativos** que crecen con el volumen.

## El problema de fondo
El modelo tradicional depende al 100% de la capacidad humana para tareas que, en su mayoría, son repetitivas y automatizables. El agente pierde tiempo en lo simple y no le queda energía para lo complejo.

## La resolución
Un modelo híbrido donde la **IA resuelve lo repetitivo** y el agente humano se enfoca en lo que aporta valor, con contexto completo del cliente en todos los canales.

## Tecnologías modernas que lo hacen posible
- **IA conversacional y voicebots** (NLP / LLMs) para atender 24/7.
- **Copilotos de agente** que sugieren respuestas y resumen el caso en tiempo real.
- **Speech y sentiment analytics** para detectar clientes molestos y actuar a tiempo.
- **IVR inteligente** que entiende lenguaje natural, no menús interminables.
- **Omnicanalidad con RAG** para respuestas basadas en la base de conocimiento real.

En Cybevite diseñamos centros de contacto donde la tecnología reduce la fricción: menos espera, agentes más efectivos y clientes que vuelven satisfechos.`,
            },
            en: {
                title: 'Call Centers: From Customer Frustration to an Intelligent Experience',
                content: `Nobody wants to call a call center. Long waits, repeating the same problem three times, and agents with no context have turned support into one of the biggest sources of customer frustration.

## The industry's pain points
- **High wait times** and call abandonment.
- **High agent turnover:** training is costly and knowledge is lost.
- **Repetitive queries** that overwhelm agents.
- **Lack of context:** the customer retells their story on every channel.
- **Operating costs** that grow with volume.

## The root problem
The traditional model relies 100% on human capacity for tasks that are mostly repetitive and automatable. Agents waste time on the simple and have no energy left for the complex.

## The resolution
A hybrid model where **AI handles the repetitive** and human agents focus on what adds value, with full customer context across every channel.

## Modern technologies that make it real
- **Conversational AI and voicebots** (NLP / LLMs) for 24/7 service.
- **Agent copilots** that suggest answers and summarize the case in real time.
- **Speech and sentiment analytics** to detect upset customers and act in time.
- **Intelligent IVR** that understands natural language, not endless menus.
- **Omnichannel with RAG** for answers grounded in the real knowledge base.

At Cybevite we design contact centers where technology reduces friction: less waiting, more effective agents, and customers who come back satisfied.`,
            },
        },
    },
    {
        slug: 'financial-services',
        author: 'María Torres',
        published_at: '2026-07-09 12:00:00',
        display_order: 3,
        translations: {
            es: {
                title: 'Sector financiero: seguridad, cumplimiento y velocidad sin fricción',
                content: `En finanzas, la confianza lo es todo. Pero los clientes de hoy esperan abrir una cuenta en minutos, pagar en un clic y estar 100% seguros, mientras la regulación y el fraude aprietan por el otro lado.

## Los dolores del sector
- **Fraude en tiempo real:** ataques cada vez más sofisticados.
- **Cumplimiento regulatorio (KYC / AML):** costoso, manual y con alto riesgo de multas.
- **Sistemas legacy** que frenan la innovación y encarecen cada cambio.
- **Onboarding lento** que hace perder clientes en el primer paso.
- **Silos de datos** que impiden una visión real del riesgo.

## El problema de fondo
La banca tradicional se construyó sobre infraestructura rígida y procesos manuales pensados para otra época. Hoy compite contra fintechs nativas digitales que se mueven en días, no en meses.

## La resolución
Modernizar el core, automatizar el cumplimiento y usar datos en tiempo real para **detectar el fraude antes de que ocurra** y ofrecer experiencias ágiles sin sacrificar seguridad.

## Tecnologías modernas que lo hacen posible
- **Machine Learning para detección de fraude** en tiempo real.
- **KYC / AML automatizado** con biometría y verificación documental por IA.
- **Open banking y APIs** para conectar el ecosistema financiero.
- **RPA** para automatizar procesos regulatorios y de back office.
- **Cloud y analítica en tiempo real** para escalar con seguridad.

En Cybevite ayudamos a instituciones financieras a innovar con seguridad: cumplimiento más simple, fraude bajo control y experiencias que compiten con las mejores fintechs.`,
            },
            en: {
                title: 'Financial Services: Security, Compliance, and Frictionless Speed',
                content: `In finance, trust is everything. But today's customers expect to open an account in minutes, pay in one click, and be 100% secure, while regulation and fraud squeeze from the other side.

## The industry's pain points
- **Real-time fraud:** increasingly sophisticated attacks.
- **Regulatory compliance (KYC / AML):** costly, manual, and with high risk of fines.
- **Legacy systems** that slow innovation and make every change expensive.
- **Slow onboarding** that loses customers at the very first step.
- **Data silos** that prevent a real view of risk.

## The root problem
Traditional banking was built on rigid infrastructure and manual processes designed for another era. Today it competes against digital-native fintechs that move in days, not months.

## The resolution
Modernize the core, automate compliance, and use real-time data to **detect fraud before it happens** while delivering agile experiences without sacrificing security.

## Modern technologies that make it real
- **Machine Learning for fraud detection** in real time.
- **Automated KYC / AML** with biometrics and AI-based document verification.
- **Open banking and APIs** to connect the financial ecosystem.
- **RPA** to automate regulatory and back-office processes.
- **Cloud and real-time analytics** to scale securely.

At Cybevite we help financial institutions innovate securely: simpler compliance, fraud under control, and experiences that compete with the best fintechs.`,
            },
        },
    },
];

const client = new Client({
    connectionString: process.env.DATABASE_URL,
    ssl: { rejectUnauthorized: false },
});

async function run() {
    try {
        await client.connect();
        await client.query('BEGIN');

        for (const b of blogs) {
            const res = await client.query(
                'INSERT INTO cybevite.blog_post (slug, author, published_at, display_order) VALUES ($1, $2, $3, $4) RETURNING id',
                [b.slug, b.author, b.published_at, b.display_order]
            );
            const blogPostId = res.rows[0].id;

            for (const lang of ['es', 'en']) {
                const tr = b.translations[lang];
                await client.query(
                    'INSERT INTO cybevite.blog_post_translation (blog_post_id, lang_code, title, content) VALUES ($1, $2, $3, $4)',
                    [blogPostId, lang, tr.title, tr.content]
                );
            }
            console.log(`Blog creado: ${b.slug} (id ${blogPostId})`);
        }

        await client.query('COMMIT');
        console.log('Todos los blogs fueron creados correctamente');
    } catch (err) {
        await client.query('ROLLBACK').catch(() => {});
        console.error('Error creando blogs:', err);
        process.exitCode = 1;
    } finally {
        await client.end();
    }
}

run();
