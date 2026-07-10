// src/server/db/add-languages.js
// Agrega alemán (de), francés (fr), portugués (pt) y chino simplificado (zh)
// como nuevos idiomas soportados, junto con la traduccion de todo el
// contenido de negocio existente. Es re-ejecutable: borra las filas de
// estos 4 idiomas antes de insertarlas de nuevo.
import pkg from 'pg'
import dotenv from 'dotenv'

dotenv.config()
const { Client } = pkg
const client = new Client({ connectionString: process.env.DATABASE_URL })

const NEW_LANGS = ['de', 'fr', 'pt', 'zh']

const languages = [
    ['de', 'Deutsch'],
    ['fr', 'Français'],
    ['pt', 'Português'],
    ['zh', '简体中文'],
]

// benefit_translation: benefit_id, language, name
const benefits = {
    de: [
        [1, 'Private Krankenversicherung'],
        [2, 'Lebensversicherung'],
        [3, 'Team-Integrationsräume'],
        [4, 'Geburtstagsfrühstück'],
        [5, 'Viter-Jubiläum'],
        [6, 'Zusätzlicher Leistungsbonus'],
        [7, 'Hochzeitsurlaub'],
        [8, 'Abschlussgeschenk'],
        [9, 'Geschenk zur Geburt eines Kindes'],
        [10, 'Schulungen und Kurse'],
        [11, 'Willkommenspaket'],
    ],
    fr: [
        [1, 'Assurance santé privée'],
        [2, 'Assurance vie'],
        [3, "Espaces d'intégration d'équipe"],
        [4, "Petit-déjeuner d'anniversaire"],
        [5, 'Anniversaire Viter'],
        [6, 'Prime supplémentaire de performance'],
        [7, 'Congé de mariage'],
        [8, "Cadeau de fin d'études"],
        [9, 'Cadeau de naissance'],
        [10, 'Formations et cours'],
        [11, 'Kit de bienvenue'],
    ],
    pt: [
        [1, 'Plano de saúde privado'],
        [2, 'Seguro de vida'],
        [3, 'Espaços de integração da equipe'],
        [4, 'Café da manhã de aniversário'],
        [5, 'Aniversário Viter'],
        [6, 'Bônus extra por desempenho'],
        [7, 'Licença por casamento'],
        [8, 'Presente de formatura'],
        [9, 'Presente por nascimento de filho(a)'],
        [10, 'Treinamentos e cursos'],
        [11, 'Kit de boas-vindas'],
    ],
    zh: [
        [1, '私人医疗保险'],
        [2, '人寿保险'],
        [3, '团队融合活动空间'],
        [4, '生日早餐'],
        [5, 'Viter周年庆'],
        [6, '绩效额外奖金'],
        [7, '婚假'],
        [8, '毕业礼物'],
        [9, '新生儿礼物'],
        [10, '培训与课程'],
        [11, '欢迎礼包'],
    ],
}

// job_translation: job_id, language, title, experience
const jobs = {
    de: [
        [1, 'iOS-Entwickler', '5 Jahre Erfahrung'],
        [2, 'Full-Stack-Ingenieur', '10 Jahre Erfahrung'],
        [3, 'DBA-Ingenieur', '4 Jahre Erfahrung'],
    ],
    fr: [
        [1, 'Développeur iOS', "5 ans d'expérience"],
        [2, 'Ingénieur Full Stack', "10 ans d'expérience"],
        [3, 'Ingénieur DBA', "4 ans d'expérience"],
    ],
    pt: [
        [1, 'Desenvolvedor iOS', '5 anos de experiência'],
        [2, 'Engenheiro Full Stack', '10 anos de experiência'],
        [3, 'Engenheiro DBA', '4 anos de experiência'],
    ],
    zh: [
        [1, 'iOS开发工程师', '5年经验'],
        [2, '全栈工程师', '10年经验'],
        [3, '数据库管理工程师(DBA)', '4年经验'],
    ],
}

// section_translation: section_id, lang_code, title, description, cta_text
const sections = {
    de: [
        [1, 'Willkommen bei Cybevite',
            'Bei Cybevite glauben wir, dass Technologie die treibende Kraft hinter der Transformation von Unternehmen ist. Wir wurden mit der Mission gegründet, Unternehmen in den Vereinigten Staaten auf ihrem Weg zu Digitalisierung, Automatisierung und Sicherheit zu unterstützen. Unser Ansatz vereint technisches Fachwissen, strategische Vision und spezialisiertes Talent, um Technologielösungen zu schaffen, die wirklich einen Unterschied machen. Wir bieten maßgeschneiderte Softwareentwicklung, Software Augmentation, Lösungen für künstliche Intelligenz und Cybersicherheit mit IAM (Identity & Access Management). Über die Technologie hinaus sind wir ein strategischer Partner, der die Bedürfnisse des Marktes versteht und greifbare Ergebnisse liefert. Bei Cybevite bauen wir nicht nur Systeme – wir schaffen Vertrauen, Skalierbarkeit und Zukunft.',
            'Erfahren Sie, wie wir Ihnen helfen können'],
        [2, 'Unsere Leistungen',
            '🌟 Kurz & Kraftvoll (Slogan-Stil) Innovation bedeutet nicht nur neue Ideen, sondern die Entwicklung von Technologie, die Unternehmen und Leben verändert. Wo Vision auf Technologie trifft, wird Innovation Wirklichkeit. Die Zukunft gestalten durch mutige Innovation und intelligente Technologie. 📢 Social-Media-Beitrag-Stil Technologische Innovation ist der Motor, der den Fortschritt antreibt. Bei Cybevite verwandeln wir Ideen in Lösungen, die Unternehmen befähigen, in einer sich ständig verändernden digitalen Welt zu wachsen, sich abzusichern und erfolgreich zu sein. 💡 Unternehmenswebsite-Stil Technologische Innovation steht im Mittelpunkt all unseres Handelns. Durch die Kombination von Kreativität, Fachwissen und strategischem Denken liefern wir Lösungen, die nicht nur die Herausforderungen von heute lösen, sondern auch die Chancen von morgen antizipieren.',
            'Entdecken Sie alle unsere Leistungen'],
        [3, 'Unsere Geschichte: Innovation mit Sinn',
            'Cybevite entstand aus dem Traum einer Gruppe von Ingenieuren, die sich leidenschaftlich für Technologie begeistern und davon überzeugt sind, dass Innovation für jedes Unternehmen zugänglich sein sollte, unabhängig von seiner Größe. Von Anfang an sahen wir die USA als ein Ökosystem, in dem digitale Transformation konstant ist und Vertrauen das wertvollste Gut darstellt. Wir begannen mit kleinen maßgeschneiderten Softwareprojekten, erkannten aber schnell, dass Unternehmen mehr brauchten: einen strategischen Verbündeten, der sie während ihrer gesamten digitalen Transformation begleiten kann — von der Softwareentwicklung und KI-Implementierung bis hin zur Teamerweiterung und dem Schutz kritischer Systeme. Heute ist Cybevite mehr als ein Technologieanbieter: Wir sind ein vertrauenswürdiger Partner. Unsere Mission ist klar — intelligente, sichere und skalierbare Lösungen zu schaffen, die Unternehmen helfen, in einer hart umkämpften digitalen Welt erfolgreich zu sein. Was uns auszeichnet, ist unser menschzentrierter Ansatz. Wir glauben, dass Technologie mächtig ist, aber noch mächtiger ist die Art und Weise, wie Menschen sie nutzen. Deshalb kombinieren wir Talent, Innovation und Vision, um Ergebnisse zu liefern, die wirklich zählen. Unser Ziel ist es, gemeinsam mit unseren Kunden weiter an einer Zukunft zu bauen, in der Technologie Wachstum, Vertrauen und Chancen bedeutet.',
            'Erfahren Sie mehr über unser Team'],
        [4, 'Ausgewählte Projekte', 'Entdecken Sie Erfolgsgeschichten, in denen wir Herausforderungen in innovative Lösungen verwandelt haben.', 'Fallstudien ansehen'],
        [5, 'Transparente Preise', 'Flexible Pläne, die zu Ihren Bedürfnissen passen, ohne versteckte Kosten.', 'Angebot anfordern'],
        [6, 'Kontaktieren Sie uns', 'Bereit, Ihr Projekt auf die nächste Stufe zu heben? Schreiben Sie uns und wir melden uns innerhalb von 24 Stunden bei Ihnen.', 'Jetzt kontaktieren'],
    ],
    fr: [
        [1, 'Bienvenue chez Cybevite',
            "Chez Cybevite, nous croyons que la technologie est le moteur de la transformation des entreprises. Notre mission est d'accompagner les entreprises aux États-Unis dans leur parcours vers la digitalisation, l'automatisation et la sécurité. Notre approche combine expertise technique, vision stratégique et talents spécialisés pour créer des solutions technologiques qui font vraiment la différence. Nous proposons du développement logiciel sur mesure, de l'augmentation d'équipe, des solutions d'intelligence artificielle et de la cybersécurité avec IAM (Identity & Access Management). Au-delà de la technologie, nous sommes un partenaire stratégique qui comprend les besoins du marché et livre des résultats concrets. Chez Cybevite, nous ne construisons pas seulement des systèmes — nous construisons la confiance, l'évolutivité et l'avenir.",
            'Découvrez comment nous pouvons vous aider'],
        [2, 'Nos services',
            "🌟 Court & Percutant (Style slogan) L'innovation ne se limite pas à de nouvelles idées, elle consiste à créer une technologie qui transforme les entreprises et les vies. Là où la vision rencontre la technologie, l'innovation devient réalité. Façonner l'avenir grâce à une innovation audacieuse et une technologie intelligente. 📢 Style réseaux sociaux L'innovation technologique est le moteur qui propulse le progrès. Chez Cybevite, nous transformons les idées en solutions qui permettent aux entreprises de croître, de se sécuriser et de réussir dans un monde numérique en constante évolution. 💡 Style site web corporatif L'innovation technologique est au cœur de tout ce que nous faisons. En combinant créativité, expertise et réflexion stratégique, nous proposons des solutions qui résolvent non seulement les défis d'aujourd'hui, mais anticipent aussi les opportunités de demain.",
            'Découvrez tous nos services'],
        [3, 'Notre histoire : l\'innovation avec un but',
            "Cybevite est né du rêve d'un groupe d'ingénieurs passionnés de technologie, convaincus que l'innovation devait être accessible à toutes les entreprises, quelle que soit leur taille. Dès le départ, nous avons vu les États-Unis comme un écosystème où la transformation numérique est constante et où la confiance est l'actif le plus précieux. Nous avons commencé avec de petits projets de développement logiciel sur mesure, mais avons rapidement compris que les entreprises avaient besoin de plus : un allié stratégique capable de les accompagner tout au long de leur parcours de transformation numérique — du développement logiciel et de la mise en œuvre de l'IA, à l'augmentation d'équipe et à la protection des systèmes critiques. Aujourd'hui, Cybevite est plus qu'un fournisseur de technologie : nous sommes un partenaire de confiance. Notre mission est claire : créer des solutions intelligentes, sécurisées et évolutives qui aident les entreprises à prospérer dans un monde numérique hautement concurrentiel. Ce qui nous distingue, c'est notre approche centrée sur l'humain. Nous croyons que la technologie est puissante, mais que la façon dont les gens l'utilisent l'est encore plus. C'est pourquoi nous combinons talent, innovation et vision pour livrer des résultats qui comptent vraiment. Notre objectif est de continuer à construire, avec nos clients, un avenir où la technologie rime avec croissance, confiance et opportunité.",
            'En savoir plus sur notre équipe'],
        [4, 'Projets phares', 'Découvrez des histoires de réussite où nous avons transformé des défis en solutions innovantes.', 'Voir les études de cas'],
        [5, 'Tarification transparente', 'Des forfaits flexibles adaptés à vos besoins, sans frais cachés.', 'Demander un devis'],
        [6, 'Contactez-nous', 'Prêt à faire passer votre projet au niveau supérieur ? Écrivez-nous et nous vous répondrons sous 24h.', 'Contactez-nous maintenant'],
    ],
    pt: [
        [1, 'Bem-vindo à Cybevite',
            'Na Cybevite, acreditamos que a tecnologia é a força motriz por trás da transformação empresarial. Nascemos com a missão de apoiar empresas nos Estados Unidos em sua jornada rumo à digitalização, automação e segurança. Nossa abordagem combina expertise técnica, visão estratégica e talento especializado para criar soluções tecnológicas que realmente fazem a diferença. Oferecemos desenvolvimento de software sob medida, software augmentation, soluções de inteligência artificial e cibersegurança com IAM (Identity & Access Management). Além da tecnologia, somos um parceiro estratégico que entende as necessidades do mercado e entrega resultados tangíveis. Na Cybevite, não construímos apenas sistemas — construímos confiança, escalabilidade e futuro.',
            'Veja como podemos ajudá-lo'],
        [2, 'Nossos Serviços',
            '🌟 Curto e Poderoso (Estilo Slogan) Inovação não é apenas sobre novas ideias, é sobre criar tecnologia que transforma negócios e vidas. Onde a visão encontra a tecnologia, a inovação se torna realidade. Moldando o futuro por meio de inovação ousada e tecnologia inteligente. 📢 Estilo Post de Redes Sociais A inovação tecnológica é o motor que impulsiona o progresso. Na Cybevite, transformamos ideias em soluções que capacitam empresas a crescer, se proteger e ter sucesso em um mundo digital em constante mudança. 💡 Estilo Site Corporativo A inovação tecnológica está no centro de tudo o que fazemos. Ao combinar criatividade, expertise e pensamento estratégico, entregamos soluções que não apenas resolvem os desafios de hoje, mas também antecipam as oportunidades de amanhã.',
            'Explore todos os nossos serviços'],
        [3, 'Nossa História: Inovação com Propósito',
            'A Cybevite nasceu do sonho de um grupo de engenheiros apaixonados por tecnologia e convencidos de que a inovação deveria estar ao alcance de todas as empresas, independentemente do seu tamanho. Desde o início, vimos os EUA como um ecossistema onde a transformação digital é constante e a confiança é o ativo mais valioso. Começamos com pequenos projetos de software sob medida, mas rapidamente percebemos que as empresas precisavam de mais: um aliado estratégico capaz de acompanhá-las em toda a sua jornada de transformação digital — desde o desenvolvimento de software e a implementação de IA até o reforço de equipes e a proteção de sistemas críticos. Hoje, a Cybevite é mais do que uma fornecedora de tecnologia: somos um parceiro de confiança. Nossa missão é clara — criar soluções inteligentes, seguras e escaláveis que ajudem as empresas a prosperar em um mundo digital altamente competitivo. O que nos diferencia é nossa abordagem centrada nas pessoas. Acreditamos que a tecnologia é poderosa, mas a forma como as pessoas a utilizam é ainda mais poderosa. Por isso, combinamos talento, inovação e visão para entregar resultados que realmente importam. Nosso objetivo é continuar construindo, junto com nossos clientes, um futuro onde tecnologia signifique crescimento, confiança e oportunidade.',
            'Saiba mais sobre nossa equipe'],
        [4, 'Projetos em Destaque', 'Conheça histórias de sucesso em que transformamos desafios em soluções inovadoras.', 'Ver estudos de caso'],
        [5, 'Preços Transparentes', 'Planos flexíveis que se adaptam às suas necessidades, sem taxas ocultas.', 'Solicitar orçamento'],
        [6, 'Fale Conosco', 'Pronto para levar seu projeto para o próximo nível? Escreva para nós e responderemos em até 24h.', 'Fale conosco agora'],
    ],
    zh: [
        [1, '欢迎来到Cybevite',
            '在Cybevite，我们坚信技术是推动企业变革的核心动力。我们的使命是帮助美国企业在数字化、自动化和安全领域不断前行。我们将技术专长、战略眼光与专业人才相结合，打造真正带来改变的技术解决方案。我们提供定制软件开发、软件增强（人才外包）、人工智能解决方案，以及基于IAM（身份与访问管理）的网络安全服务。除了技术本身，我们更是一个懂得市场需求、交付切实成果的战略合作伙伴。在Cybevite，我们不只是构建系统，更是在构建信任、可扩展性与未来。',
            '了解我们如何为您提供帮助'],
        [2, '我们的服务',
            '🌟 简短有力（标语风格）创新不仅仅是新想法，更是创造能够改变企业和生活的技术。当愿景遇见技术，创新便成为现实。以大胆的创新和智能技术塑造未来。📢 社交媒体风格 技术创新是推动进步的引擎。在Cybevite，我们将想法转化为解决方案，帮助企业在不断变化的数字世界中实现扩展、保障安全并取得成功。💡 企业官网风格 技术创新是我们所做一切的核心。通过将创造力、专业知识与战略思维相结合，我们提供的解决方案不仅能解决当下的挑战，还能预见未来的机遇。',
            '探索我们的全部服务'],
        [3, '我们的故事：有目标的创新',
            '在Cybevite诞生于一群热爱技术的工程师的梦想，他们坚信无论企业规模大小，创新都应该触手可及。从一开始，我们就将美国视为一个数字化转型持续发生、信任是最宝贵资产的生态系统。我们最初从小型定制软件项目起步，但很快意识到企业需要的更多：一个能够在整个数字化转型旅程中提供支持的战略盟友——从软件开发、人工智能实施，到团队增强和关键系统保护。如今，Cybevite不仅仅是一家技术提供商：我们是值得信赖的合作伙伴。我们的使命很明确——打造智能、安全、可扩展的解决方案，帮助企业在竞争激烈的数字世界中蓬勃发展。让我们与众不同的是以人为本的理念。我们相信技术本身很强大，但人们如何运用技术更为重要。因此，我们将人才、创新与远见相结合，交付真正有意义的成果。我们的目标是与客户携手共建一个未来——在这个未来里，技术意味着增长、信任与机遇。',
            '了解更多关于我们团队的信息'],
        [4, '精选项目', '探索我们将挑战转化为创新解决方案的成功案例。', '查看案例研究'],
        [5, '透明定价', '灵活的方案满足您的需求，无隐藏费用。', '获取报价'],
        [6, '联系我们', '准备好让您的项目更上一层楼了吗？给我们留言，我们将在24小时内回复您。', '立即联系我们'],
    ],
}

// service_translation: service_id, lang_code, name, summary, details
const services = {
    de: [
        [1, 'AI Solutions', 'Verwandeln Sie künstliche Intelligenz in einen Wettbewerbsvorteil.',
            'Wir entwerfen und implementieren KI-gestützte Lösungen, die Prozesse automatisieren, Entscheidungen beschleunigen und die organisatorische Produktivität verbessern. Von intelligenten Assistenten bis hin zu autonomen Agenten, die komplexe Aufgaben ausführen können, entwickeln wir maßgeschneiderte Lösungen für jedes Unternehmen.\n\nAnwendungsfälle: AI Agents · AI Assistants · Document Intelligence · Knowledge Search · Generative AI · RAG-Systeme · Voice AI · AI Workflows'],
        [2, 'Enterprise Automation', 'Eliminieren Sie manuelle Aufgaben und beschleunigen Sie Ihre Abläufe.',
            'Wir automatisieren Geschäftsprozesse, die Zeit kosten, Fehler verursachen oder das organisatorische Wachstum einschränken. Wir integrieren Menschen, Systeme und künstliche Intelligenz, um effizientere Abläufe zu schaffen.\n\nAnwendungsfälle: Genehmigungsworkflows · Dokumentenverarbeitung · Benachrichtigungen · Prozessautomatisierung · Betriebsautomatisierung · Geschäftsregeln · Human-in-the-loop-Automatisierung'],
        [3, 'Custom Software Engineering', 'Software, entwickelt für Ihr Unternehmen.',
            'Wir entwickeln Plattformen, Anwendungen und Unternehmenslösungen, wenn bestehende Produkte den Anforderungen Ihres Unternehmens nicht gerecht werden. Wir bauen skalierbare, sichere Software, die bereit ist, sich mit Ihrem Unternehmen weiterzuentwickeln.\n\nBeinhaltet: Unternehmensanwendungen · Kundenportale · interne Plattformen · SaaS-Produkte · mobile Anwendungen · APIs · Backend-Systeme'],
        [4, 'Systems Integration', 'Verbinden Sie Ihren gesamten Betrieb.',
            'Unternehmen verlieren Zeit, weil Informationen über mehrere Systeme verstreut sind. Wir integrieren ERPs, Plattformen, Anwendungen, APIs und Dienste, damit die gesamte Organisation als ein einziges Ökosystem funktioniert.\n\nWir integrieren: ERP · CRM · Altsysteme · Cloud-Dienste · APIs · Identity Provider · Datenquellen'],
        [5, 'Data & Intelligence', 'Verwandeln Sie Daten in Entscheidungen.',
            'Wir entwerfen Datenplattformen, die Informationen konsolidieren, wichtige Kennzahlen generieren und die Entscheidungsfindung durch Analytik und künstliche Intelligenz erleichtern.\n\nBeinhaltet: Dashboards · Datenpipelines · Data Warehouses · Analytik · Reporting · Vorhersagemodelle'],
        [6, 'Digital Product Development', 'Wir entwickeln digitale Produkte, die bereit zum Skalieren sind.',
            'Wir begleiten Unternehmen und Startups bei der Gestaltung, Entwicklung und Weiterentwicklung digitaler Produkte – von der ersten Idee bis zur Produktion.\n\nBeinhaltet: Product Discovery · MVP-Entwicklung · Produktskalierung · Cloud-Architektur · Continuous Delivery'],
    ],
    fr: [
        [1, 'AI Solutions', "Transformez l'intelligence artificielle en avantage concurrentiel.",
            "Nous concevons et mettons en œuvre des solutions basées sur l'IA qui automatisent les processus, accélèrent les décisions et améliorent la productivité organisationnelle. Des assistants intelligents aux agents autonomes capables d'exécuter des tâches complexes, nous construisons des solutions adaptées à chaque entreprise.\n\nCas d'usage : AI Agents · AI Assistants · Document Intelligence · Knowledge Search · Generative AI · Systèmes RAG · Voice AI · AI Workflows"],
        [2, 'Enterprise Automation', 'Éliminez les tâches manuelles et accélérez vos opérations.',
            "Nous automatisons les processus métier qui consomment du temps, génèrent des erreurs ou limitent la croissance de l'organisation. Nous intégrons les personnes, les systèmes et l'intelligence artificielle pour créer des opérations plus efficaces.\n\nCas d'usage : Workflows d'approbation · Traitement de documents · Notifications · Automatisation des processus · Automatisation opérationnelle · Règles métier · Automatisation avec supervision humaine (human-in-the-loop)"],
        [3, 'Custom Software Engineering', 'Un logiciel conçu pour votre entreprise.',
            "Nous développons des plateformes, des applications et des solutions d'entreprise lorsque les produits existants ne répondent pas aux besoins de votre organisation. Nous construisons des logiciels évolutifs et sécurisés, prêts à évoluer avec votre entreprise.\n\nComprend : Applications d'entreprise · Portails clients · Plateformes internes · Produits SaaS · Applications mobiles · APIs · Systèmes back-end"],
        [4, 'Systems Integration', 'Connectez l\'ensemble de votre activité.',
            "Les entreprises perdent du temps parce que les informations sont dispersées entre plusieurs systèmes. Nous intégrons les ERP, plateformes, applications, APIs et services afin que toute l'organisation fonctionne comme un seul écosystème.\n\nNous intégrons : ERP · CRM · Systèmes hérités (legacy) · Services cloud · APIs · Fournisseurs d'identité · Sources de données"],
        [5, 'Data & Intelligence', 'Transformez les données en décisions.',
            "Nous concevons des plateformes de données qui consolident l'information, génèrent des indicateurs clés et facilitent la prise de décision grâce à l'analytique et à l'intelligence artificielle.\n\nComprend : Tableaux de bord · Pipelines de données · Entrepôts de données (Data Warehouses) · Analytique · Reporting · Modèles prédictifs"],
        [6, 'Digital Product Development', 'Nous créons des produits numériques prêts à évoluer.',
            "Nous accompagnons les entreprises et les startups dans la conception, le développement et l'évolution de produits numériques, de l'idée initiale jusqu'à la production.\n\nComprend : Product Discovery · Développement de MVP · Mise à l'échelle du produit · Architecture cloud · Livraison continue (Continuous Delivery)"],
    ],
    pt: [
        [1, 'AI Solutions', 'Transforme a inteligência artificial em uma vantagem competitiva.',
            'Projetamos e implementamos soluções baseadas em IA que automatizam processos, aceleram decisões e melhoram a produtividade organizacional. De assistentes inteligentes a agentes autônomos capazes de executar tarefas complexas, construímos soluções sob medida para cada negócio.\n\nCasos de uso: AI Agents · AI Assistants · Document Intelligence · Knowledge Search · Generative AI · Sistemas RAG · Voice AI · AI Workflows'],
        [2, 'Enterprise Automation', 'Elimine tarefas manuais e acelere suas operações.',
            'Automatizamos processos de negócio que consomem tempo, geram erros ou limitam o crescimento organizacional. Integramos pessoas, sistemas e inteligência artificial para criar operações mais eficientes.\n\nCasos de uso: Fluxos de Aprovação · Processamento de Documentos · Notificações · Automação de Processos · Automação Operacional · Regras de Negócio · Automação com Supervisão Humana (Human-in-the-loop)'],
        [3, 'Custom Software Engineering', 'Software projetado para o seu negócio.',
            'Desenvolvemos plataformas, aplicativos e soluções corporativas quando os produtos existentes não atendem às necessidades da sua organização. Construímos software escalável e seguro, pronto para evoluir junto com a sua empresa.\n\nInclui: Aplicações Corporativas · Portais de Clientes · Plataformas Internas · Produtos SaaS · Aplicativos Móveis · APIs · Sistemas de Backend'],
        [4, 'Systems Integration', 'Conecte toda a sua operação.',
            'As empresas perdem tempo porque as informações estão espalhadas em vários sistemas. Integramos ERPs, plataformas, aplicativos, APIs e serviços para que toda a organização funcione como um único ecossistema.\n\nIntegramos: ERP · CRM · Sistemas Legados · Serviços em Nuvem · APIs · Provedores de Identidade · Fontes de Dados'],
        [5, 'Data & Intelligence', 'Transforme dados em decisões.',
            'Projetamos plataformas de dados que consolidam informações, geram indicadores-chave e facilitam a tomada de decisões por meio de análise e inteligência artificial.\n\nInclui: Dashboards · Pipelines de Dados · Data Warehouses · Analytics · Relatórios · Modelos Preditivos'],
        [6, 'Digital Product Development', 'Criamos produtos digitais prontos para escalar.',
            'Guiamos empresas e startups pelo design, desenvolvimento e evolução de produtos digitais, desde a ideia inicial até a produção.\n\nInclui: Product Discovery · Desenvolvimento de MVP · Escalonamento de Produto · Arquitetura em Nuvem · Entrega Contínua (Continuous Delivery)'],
    ],
    zh: [
        [1, 'AI Solutions', '将人工智能转化为您的竞争优势。',
            '我们设计并实施基于人工智能的解决方案，实现流程自动化、加速决策并提升组织生产力。从智能助手到能够执行复杂任务的自主智能体，我们为每家企业打造量身定制的解决方案。\n\n应用场景：AI智能体·AI助手·文档智能·知识检索·生成式AI·RAG系统·语音AI·AI工作流'],
        [2, 'Enterprise Automation', '消除人工重复操作，加速企业运营。',
            '我们对耗费时间、易产生错误或限制组织增长的业务流程进行自动化改造。我们将人员、系统与人工智能相结合，打造更高效的运营模式。\n\n应用场景：审批流程·文档处理·通知提醒·流程自动化·运营自动化·业务规则·人机协同自动化（Human-in-the-loop）'],
        [3, 'Custom Software Engineering', '为您的企业量身定制软件。',
            '当现有产品无法满足贵组织的需求时，我们为您开发平台、应用程序和企业解决方案。我们打造可扩展、安全可靠的软件，能够随贵公司一同发展演进。\n\n包括：企业级应用·客户门户·内部平台·SaaS产品·移动应用·API接口·后端系统'],
        [4, 'Systems Integration', '连接您的整体业务运营。',
            '由于信息分散在多个系统中，企业往往因此浪费大量时间。我们对ERP、平台、应用程序、API和各类服务进行整合，使整个组织如同一个统一的生态系统般运转。\n\n我们整合：ERP系统·CRM系统·遗留系统·云服务·API接口·身份提供商·数据源'],
        [5, 'Data & Intelligence', '将数据转化为决策依据。',
            '我们设计数据平台，整合信息、生成关键指标，并通过数据分析与人工智能助力企业决策。\n\n包括：仪表盘·数据管道·数据仓库·数据分析·报表·预测模型'],
        [6, 'Digital Product Development', '我们打造可随时扩展的数字产品。',
            '我们陪伴企业和初创公司完成数字产品从最初创意到开发、演进直至上线的全过程。\n\n包括：产品探索（Product Discovery）·MVP开发·产品规模化·云架构·持续交付（Continuous Delivery）'],
    ],
}

// project_translation: project_id, lang_code, title, description
const projects = {
    de: [
        [1, 'E-Commerce-Plattform', 'Entwicklung eines Online-Shops mit Integration von Zahlungsgateways und Admin-Dashboard.'],
        [2, 'Unternehmens-App', 'Native iOS- und Android-App mit Push-Benachrichtigungen und Analysen.'],
    ],
    fr: [
        [1, 'Plateforme e-commerce', 'Développement d\'une boutique en ligne avec intégration de passerelles de paiement et tableau de bord d\'administration.'],
        [2, 'Application mobile d\'entreprise', 'Application native iOS et Android avec notifications push et analytique.'],
    ],
    pt: [
        [1, 'Plataforma de E-commerce', 'Desenvolvimento de loja online com integração de gateways de pagamento e painel administrativo.'],
        [2, 'Aplicativo Móvel Corporativo', 'Aplicativo nativo para iOS e Android com notificações push e análises.'],
    ],
    zh: [
        [1, '电商平台', '开发在线商店，集成支付网关与管理后台。'],
        [2, '企业移动应用', '支持推送通知与数据分析的iOS与Android原生应用。'],
    ],
}

// pricing_plan_translation: pricing_plan_id, lang_code, name, description, price_from
const pricingPlans = {
    de: [
        [1, 'Basis', 'Entwicklung eines einzelnen Moduls und grundlegendes QA.', 1500.00],
        [2, 'Professional', 'Mehrere Module und Integrationen.', 4000.00],
        [3, 'Enterprise', 'Maßgeschneidertes Projekt mit 24/7-Support.', null],
    ],
    fr: [
        [1, 'Basique', 'Développement d\'un seul module et QA de base.', 1500.00],
        [2, 'Professionnel', 'Plusieurs modules et intégrations.', 4000.00],
        [3, 'Enterprise', 'Projet sur mesure avec support 24/7.', null],
    ],
    pt: [
        [1, 'Básico', 'Desenvolvimento de um único módulo e QA básico.', 1500.00],
        [2, 'Profissional', 'Múltiplos módulos e integrações.', 4000.00],
        [3, 'Enterprise', 'Projeto sob medida com suporte 24/7.', null],
    ],
    zh: [
        [1, '基础版', '单一模块开发及基础质量保证（QA）。', 1500.00],
        [2, '专业版', '多模块开发及系统集成。', 4000.00],
        [3, '企业版', '定制化项目，提供7x24小时支持。', null],
    ],
}

// about_section_translation: about_section_id, lang_code, title, content
const aboutSections = {
    de: [
        [1, 'Unsere Mission', 'Bei Cybevite ist es unsere Mission, Unternehmen mit Nearshore-Softwarelösungen zu stärken, die Wachstum und Innovation beschleunigen.'],
        [2, 'Unser Team', 'Wir sind eine vielfältige Gruppe von Ingenieuren, Designern und Strategen, die sich verpflichtet haben, hochwertige Software termingerecht und im Rahmen des Budgets zu liefern.'],
    ],
    fr: [
        [1, 'Notre mission', 'Chez Cybevite, notre mission est de renforcer les entreprises grâce à des solutions logicielles near-shore qui accélèrent la croissance et l\'innovation.'],
        [2, 'Notre équipe', 'Nous sommes un groupe diversifié d\'ingénieurs, de designers et de stratèges engagés à livrer des logiciels de haute qualité, dans les délais et le budget impartis.'],
    ],
    pt: [
        [1, 'Nossa Missão', 'Na Cybevite, nossa missão é fortalecer empresas com soluções de software near-shore que aceleram o crescimento e a inovação.'],
        [2, 'Nossa Equipe', 'Somos um grupo diverso de engenheiros, designers e estrategistas comprometidos em entregar software de alta qualidade dentro do prazo e do orçamento.'],
    ],
    zh: [
        [1, '我们的使命', '在Cybevite，我们的使命是通过近岸（near-shore）软件解决方案助力企业加速增长与创新。'],
        [2, '我们的团队', '我们是一支由工程师、设计师和战略专家组成的多元化团队，致力于按时、按预算交付高质量的软件。'],
    ],
}

// blog_post_translation: blog_post_id, lang_code, title, content
const blogPosts = {
    de: [
        [1, 'Telekommunikation: Vom operativen Kollaps zum intelligenten Netzwerk',
            'Telekommunikationsunternehmen arbeiten am Limit: überlastete Netze, Kunden, die eine einwandfreie Konnektivität fordern, und immer engere Margen. Die Technologie, die sie eigentlich unterstützen soll, wird oft zu ihrem größten Engpass.\n\n## Die Schmerzpunkte der Branche\n- **Kundenabwanderung (Churn):** Ein unzufriedener Kunde wechselt innerhalb von Minuten den Anbieter.\n- **Überlastete Netze und Ausfälle:** Die Datennachfrage wächst schneller als die Kapazität.\n- **Manuelle Bereitstellung:** Die Aktivierung von Diensten dauert Tage und ist fehleranfällig.\n- **Betrug und Cyberangriffe:** Millionenverluste durch Verkehrs- und Identitätsbetrug.\n- **Reaktiver Support:** Probleme werden erst behoben, wenn der Kunde bereits verärgert ist.\n\n## Das Kernproblem\nDie meisten Betreiber verwalten ihr Netzwerk und ihre Kundenbeziehungen mit isolierten Legacy-Systemen, ohne Echtzeit-Transparenz oder Vorhersagefähigkeit. Sie löschen Brände, anstatt sie zu verhindern.\n\n## Die Lösung\nDer Weg führt von einem reaktiven Netzwerk zu einem **intelligenten, autonomen Netzwerk**: eines, das sich selbst überwacht, Ausfälle vorhersagt, bevor sie eintreten, und die Bereitstellung vollständig automatisiert.\n\n## Moderne Technologien, die dies möglich machen\n- **KI / Machine Learning** zur Ausfallvorhersage und vorausschauenden Wartung.\n- **Churn-Modelle**, die gefährdete Kunden erkennen, bevor sie abwandern.\n- **Netzwerkautomatisierung (SDN / NFV)**, um Dienste in Minuten bereitzustellen.\n- **Echtzeitanalytik und Big Data** über den Netzwerkverkehr.\n- **Edge Computing und 5G** für minimale Latenz und neue Dienste.\n\nBei Cybevite helfen wir Betreibern, ihr Netzwerk in ein intelligentes Asset zu verwandeln: weniger Ausfälle, weniger Kundenabwanderung und Abläufe, die dem Problem stets einen Schritt voraus sind.'],
        [2, 'Call Center: Von der Kundenfrustration zur intelligenten Erfahrung',
            'Niemand möchte gerne bei einem Call Center anrufen. Lange Wartezeiten, das dreimalige Wiederholen desselben Problems und Mitarbeiter ohne Kontext haben den Support zu einer der größten Quellen der Kundenfrustration gemacht.\n\n## Die Schmerzpunkte der Branche\n- **Hohe Wartezeiten** und Anrufabbrüche.\n- **Hohe Mitarbeiterfluktuation:** Schulungen sind teuer und Wissen geht verloren.\n- **Wiederholende Anfragen**, die Mitarbeiter überlasten.\n- **Fehlender Kontext:** Der Kunde erzählt seine Geschichte bei jedem Kanal erneut.\n- **Betriebskosten**, die mit dem Volumen steigen.\n\n## Das Kernproblem\nDas traditionelle Modell verlässt sich zu 100 % auf menschliche Kapazität für Aufgaben, die größtenteils repetitiv und automatisierbar sind. Mitarbeiter verschwenden Zeit mit einfachen Aufgaben und haben keine Energie mehr für komplexe Fälle.\n\n## Die Lösung\nEin hybrides Modell, bei dem **KI das Repetitive übernimmt** und sich menschliche Mitarbeiter auf das konzentrieren, was echten Mehrwert schafft – mit vollständigem Kundenkontext über alle Kanäle hinweg.\n\n## Moderne Technologien, die dies möglich machen\n- **Conversational AI und Voicebots** (NLP / LLMs) für einen 24/7-Service.\n- **Agenten-Copiloten**, die in Echtzeit Antworten vorschlagen und den Fall zusammenfassen.\n- **Sprach- und Sentiment-Analytik**, um verärgerte Kunden zu erkennen und rechtzeitig zu handeln.\n- **Intelligentes IVR**, das natürliche Sprache versteht, statt endloser Menüs.\n- **Omnichannel mit RAG** für Antworten, die auf der echten Wissensdatenbank basieren.\n\nBei Cybevite gestalten wir Contact Center, in denen Technologie Reibung reduziert: weniger Wartezeit, effektivere Mitarbeiter und Kunden, die zufrieden zurückkehren.'],
        [3, 'Finanzdienstleistungen: Sicherheit, Compliance und reibungslose Geschwindigkeit',
            'Im Finanzwesen ist Vertrauen alles. Doch die Kunden von heute erwarten, ein Konto in Minuten zu eröffnen, mit einem Klick zu bezahlen und dabei 100 % sicher zu sein, während Regulierung und Betrug von der anderen Seite Druck ausüben.\n\n## Die Schmerzpunkte der Branche\n- **Betrug in Echtzeit:** immer ausgefeiltere Angriffe.\n- **Regulatorische Compliance (KYC / AML):** kostspielig, manuell und mit hohem Bußgeldrisiko.\n- **Legacy-Systeme**, die Innovation bremsen und jede Änderung teuer machen.\n- **Langsames Onboarding**, das Kunden bereits beim ersten Schritt verliert.\n- **Daten-Silos**, die eine echte Risikosicht verhindern.\n\n## Das Kernproblem\nDas traditionelle Bankwesen wurde auf starrer Infrastruktur und manuellen Prozessen aufgebaut, die für eine andere Ära konzipiert wurden. Heute konkurriert es mit digital-nativen Fintechs, die sich in Tagen statt Monaten bewegen.\n\n## Die Lösung\nDen Kern modernisieren, Compliance automatisieren und Echtzeitdaten nutzen, um **Betrug zu erkennen, bevor er geschieht**, während agile Erfahrungen geliefert werden, ohne die Sicherheit zu opfern.\n\n## Moderne Technologien, die dies möglich machen\n- **Machine Learning zur Betrugserkennung** in Echtzeit.\n- **Automatisiertes KYC / AML** mit Biometrie und KI-basierter Dokumentenprüfung.\n- **Open Banking und APIs** zur Vernetzung des Finanzökosystems.\n- **RPA** zur Automatisierung von regulatorischen und Back-Office-Prozessen.\n- **Cloud und Echtzeitanalytik** zur sicheren Skalierung.\n\nBei Cybevite helfen wir Finanzinstituten, sicher zu innovieren: einfachere Compliance, Betrug unter Kontrolle und Erfahrungen, die mit den besten Fintechs mithalten können.'],
        [4, 'Einzelhandel & E-Commerce: Vom abgebrochenen Warenkorb zum Unified Commerce',
            'Der Einzelhandelskunde von heute öffnet die App, vergleicht im physischen Geschäft und schließt den Kauf auf einem Marktplatz ab. Für das Unternehmen erscheint derselbe Kunde als drei verschiedene Personen in drei Systemen, die nie miteinander kommunizieren.\n\n## Die Schmerzpunkte der Branche\n- **Warenkorbabbrüche:** Reibung beim Checkout lässt bis zu 70 % der begonnenen Käufe verloren gehen.\n- **Fehlbestände und Überbestände:** Der Lagerbestand wird stapelweise statt in Echtzeit aktualisiert und stimmt nie zwischen den Kanälen überein.\n- **Fragmentierte Erfahrung:** Der Kunde wiederholt seine Kaufhistorie bei jedem Kanal, weil ihn niemand erkennt.\n- **Zahlungsbetrug und Retourenmissbrauch:** Rückbuchungen und betrügerische Rücksendungen schmälern die Marge.\n- **Generische Empfehlungen:** Angebote, die nicht widerspiegeln, wonach der Kunde wirklich sucht.\n\n## Das Kernproblem\nDie meisten Einzelhändler haben ihr physisches Geschäft, ihren E-Commerce-Shop und ihre Marktplatzpräsenz als getrennte Systeme aufgebaut, jedes mit eigenem Lagerbestand, eigenem Kunden und eigener Preislogik. Es gibt keine einzige Quelle der Wahrheit, sodass jeder Kanal für sich optimiert und den Verkauf verliert, den der Kunde eigentlich tätigen wollte.\n\n## Die Lösung\nDer Weg führt von isolierten Kanälen zu **Unified Commerce**: ein Lagerbestand, ein Kundenprofil und eine Preis- und Bestandsentscheidung, die in Echtzeit von jedem Berührungspunkt aus sichtbar ist.\n\n## Moderne Technologien, die dies möglich machen\n- **KI-gestützte Empfehlungsmaschinen**, die in Echtzeit basierend auf Verhalten, nicht nur auf Historie, personalisieren.\n- **Echtzeit-Bestandssynchronisation (Unified Commerce)** zwischen physischen Geschäften, Apps und Marktplätzen.\n- **Nachfrageprognose mit Machine Learning**, um Fehlbestände vorherzusehen, bevor sie auftreten.\n- **Betrugserkennung beim Checkout** mit Bewertung in Millisekunden und ohne Reibung für legitime Kunden.\n- **Konversationelle Suche mit RAG**, die natürliche Sprache über den echten Katalog versteht.\n\nBei Cybevite helfen wir Einzelhändlern, ihre Kanäle zu einer einzigen Erfahrung zu vereinen: weniger abgebrochene Warenkörbe, ein Lagerbestand, der nie lügt, und Kunden, die zurückkommen, weil Sie sie wirklich kennen.'],
    ],
    fr: [
        [1, 'Télécommunications : de la surcharge opérationnelle au réseau intelligent',
            "Les entreprises de télécommunications opèrent à la limite : réseaux saturés, clients exigeant une connectivité irréprochable et marges toujours plus étroites. La technologie censée les soutenir devient souvent leur plus grand frein.\n\n## Les points de douleur du secteur\n- **Attrition client (churn) :** un client insatisfait change d'opérateur en quelques minutes.\n- **Réseaux saturés et pannes :** la demande de données croît plus vite que la capacité.\n- **Provisionnement manuel :** l'activation des services prend des jours et génère des erreurs.\n- **Fraude et cyberattaques :** des millions perdus à cause de la fraude sur le trafic et l'identité.\n- **Support réactif :** les problèmes ne sont résolus qu'une fois le client déjà mécontent.\n\n## Le problème de fond\nLa plupart des opérateurs gèrent leur réseau et leur relation client sur des systèmes hérités isolés, sans visibilité en temps réel ni capacité prédictive. On éteint l'incendie au lieu de le prévenir.\n\n## La résolution\nLa voie à suivre consiste à passer d'un réseau réactif à un **réseau intelligent et autonome** : un réseau qui se surveille lui-même, prédit les pannes avant qu'elles ne surviennent et automatise le provisionnement de bout en bout.\n\n## Les technologies modernes qui rendent cela possible\n- **IA / Machine Learning** pour la prédiction des pannes et la maintenance prédictive.\n- **Modèles de churn** qui identifient les clients à risque avant qu'ils ne partent.\n- **Automatisation réseau (SDN / NFV)** pour provisionner des services en quelques minutes.\n- **Analytique en temps réel et Big Data** sur le trafic réseau.\n- **Edge computing et 5G** pour une latence minimale et de nouveaux services.\n\nChez Cybevite, nous aidons les opérateurs à transformer leur réseau en un actif intelligent : moins de pannes, moins d'attrition client, et des opérations qui anticipent toujours le problème."],
        [2, 'Centres d\'appels : de la frustration client à l\'expérience intelligente',
            "Personne n'a envie d'appeler un centre d'appels. Les longues attentes, le fait de répéter trois fois le même problème et des agents sans contexte ont fait du support l'une des plus grandes sources de frustration client.\n\n## Les points de douleur du secteur\n- **Temps d'attente élevés** et abandon d'appels.\n- **Fort turnover des agents :** la formation coûte cher et les connaissances se perdent.\n- **Requêtes répétitives** qui submergent les agents.\n- **Manque de contexte :** le client répète son histoire à chaque canal.\n- **Coûts opérationnels** qui augmentent avec le volume.\n\n## Le problème de fond\nLe modèle traditionnel repose à 100 % sur la capacité humaine pour des tâches majoritairement répétitives et automatisables. L'agent perd du temps sur le simple et n'a plus d'énergie pour le complexe.\n\n## La résolution\nUn modèle hybride où **l'IA prend en charge le répétitif** et où l'agent humain se concentre sur ce qui apporte de la valeur, avec un contexte client complet sur tous les canaux.\n\n## Les technologies modernes qui rendent cela possible\n- **IA conversationnelle et voicebots** (NLP / LLM) pour un service 24/7.\n- **Copilotes d'agents** qui suggèrent des réponses et résument le dossier en temps réel.\n- **Analytique vocale et de sentiment** pour détecter les clients mécontents et agir à temps.\n- **IVR intelligent** qui comprend le langage naturel, plutôt que des menus interminables.\n- **Omnicanalité avec RAG** pour des réponses basées sur la véritable base de connaissances.\n\nChez Cybevite, nous concevons des centres de contact où la technologie réduit la friction : moins d'attente, des agents plus efficaces et des clients qui reviennent satisfaits."],
        [3, 'Services financiers : sécurité, conformité et rapidité sans friction',
            "Dans la finance, la confiance est primordiale. Mais les clients d'aujourd'hui s'attendent à ouvrir un compte en quelques minutes, à payer en un clic et à être sécurisés à 100 %, tandis que la réglementation et la fraude exercent une pression de l'autre côté.\n\n## Les points de douleur du secteur\n- **Fraude en temps réel :** des attaques de plus en plus sophistiquées.\n- **Conformité réglementaire (KYC / AML) :** coûteuse, manuelle et avec un risque élevé d'amendes.\n- **Systèmes hérités** qui freinent l'innovation et rendent chaque changement coûteux.\n- **Onboarding lent** qui fait perdre des clients dès la première étape.\n- **Silos de données** qui empêchent une vision réelle du risque.\n\n## Le problème de fond\nLa banque traditionnelle a été construite sur une infrastructure rigide et des processus manuels conçus pour une autre époque. Aujourd'hui, elle est en concurrence avec des fintechs nativement numériques qui évoluent en quelques jours, et non en quelques mois.\n\n## La résolution\nModerniser le cœur du système, automatiser la conformité et utiliser des données en temps réel pour **détecter la fraude avant qu'elle ne se produise**, tout en offrant des expériences agiles sans sacrifier la sécurité.\n\n## Les technologies modernes qui rendent cela possible\n- **Machine Learning pour la détection de fraude** en temps réel.\n- **KYC / AML automatisé** avec biométrie et vérification documentaire par IA.\n- **Open banking et APIs** pour connecter l'écosystème financier.\n- **RPA** pour automatiser les processus réglementaires et de back-office.\n- **Cloud et analytique en temps réel** pour évoluer en toute sécurité.\n\nChez Cybevite, nous aidons les institutions financières à innover en toute sécurité : une conformité plus simple, une fraude sous contrôle et des expériences qui rivalisent avec les meilleures fintechs."],
        [4, 'Commerce de détail et e-commerce : du panier abandonné au commerce unifié',
            "Le client du retail d'aujourd'hui entre par l'application, compare en magasin physique et termine son achat sur une marketplace. Pour l'entreprise, ce même client apparaît comme trois personnes différentes dans trois systèmes qui ne communiquent jamais entre eux.\n\n## Les points de douleur du secteur\n- **Abandon de panier :** la friction au moment du paiement fait perdre jusqu'à 70 % des achats initiés.\n- **Ruptures de stock et surstocks :** l'inventaire est mis à jour par lots, et non en temps réel, et ne correspond jamais entre les canaux.\n- **Expérience fragmentée :** le client répète son historique d'achat sur chaque canal parce que personne ne le reconnaît.\n- **Fraude au paiement et abus de retours :** les rétrofacturations et les retours frauduleux érodent la marge.\n- **Recommandations génériques :** des offres qui ne reflètent pas ce que le client recherche réellement.\n\n## Le problème de fond\nLa plupart des détaillants ont construit leur magasin physique, leur site e-commerce et leur présence sur les marketplaces comme des systèmes séparés, chacun avec son propre inventaire, son propre client et sa propre logique de prix. Il n'existe pas de source unique de vérité, si bien que chaque canal optimise son propre résultat et perd la vente que le client voulait réellement faire.\n\n## La résolution\nLa voie à suivre consiste à passer de canaux cloisonnés au **commerce unifié** : un seul inventaire, un seul profil client, et une seule décision de prix et de stock, visible en temps réel depuis n'importe quel point de contact.\n\n## Les technologies modernes qui rendent cela possible\n- **Moteurs de recommandation basés sur l'IA** qui personnalisent en temps réel selon le comportement, pas seulement l'historique.\n- **Synchronisation d'inventaire en temps réel (commerce unifié)** entre magasins physiques, applications et marketplaces.\n- **Prévision de la demande par Machine Learning** pour anticiper les ruptures de stock avant qu'elles ne surviennent.\n- **Détection de fraude au checkout** avec un scoring en quelques millisecondes, sans friction pour le client légitime.\n- **Recherche conversationnelle avec RAG** qui comprend le langage naturel sur le véritable catalogue.\n\nChez Cybevite, nous aidons les détaillants à unifier leurs canaux en une seule expérience : moins de paniers abandonnés, un inventaire qui ne ment jamais, et des clients qui reviennent parce que vous les connaissez vraiment."],
    ],
    pt: [
        [1, 'Telecomunicações: da sobrecarga operacional à rede inteligente',
            'As empresas de telecomunicações operam no limite: redes saturadas, clientes que exigem conectividade impecável e margens cada vez mais estreitas. A tecnologia que deveria sustentá-las muitas vezes se torna seu maior gargalo.\n\n## As dores do setor\n- **Fuga de clientes (churn):** um cliente insatisfeito troca de operadora em minutos.\n- **Redes saturadas e quedas:** a demanda por dados cresce mais rápido que a capacidade.\n- **Provisionamento manual:** ativar serviços leva dias e gera erros.\n- **Fraude e ciberataques:** perdas milionárias com fraude de tráfego e de identidade.\n- **Suporte reativo:** os problemas são resolvidos somente quando o cliente já está insatisfeito.\n\n## O problema de fundo\nA maioria das operadoras gerencia sua rede e o relacionamento com o cliente em sistemas legados isolados, sem visibilidade em tempo real nem capacidade preditiva. Apaga-se o incêndio, em vez de preveni-lo.\n\n## A resolução\nO caminho é passar de uma rede reativa para uma **rede inteligente e autônoma**: que se monitora sozinha, prevê falhas antes que ocorram e automatiza o provisionamento de ponta a ponta.\n\n## Tecnologias modernas que tornam isso possível\n- **IA / Machine Learning** para previsão de falhas e manutenção preditiva.\n- **Modelos de churn** que identificam clientes em risco antes que eles saiam.\n- **Automação de rede (SDN / NFV)** para provisionar serviços em minutos.\n- **Analytics em tempo real e Big Data** sobre o tráfego da rede.\n- **Edge computing e 5G** para latência mínima e novos serviços.\n\nNa Cybevite, ajudamos as operadoras a transformar sua rede em um ativo inteligente: menos quedas, menos fuga de clientes e operações que se antecipam ao problema.'],
        [2, 'Call Centers: da frustração do cliente à experiência inteligente',
            'Ninguém quer ligar para um call center. Longas esperas, repetir o mesmo problema três vezes e agentes sem contexto transformaram o suporte em uma das maiores fontes de frustração do cliente.\n\n## As dores do setor\n- **Altos tempos de espera** e abandono de chamadas.\n- **Alta rotatividade de agentes:** treinar custa caro e o conhecimento se perde.\n- **Consultas repetitivas** que sobrecarregam os agentes.\n- **Falta de contexto:** o cliente repete sua história em cada canal.\n- **Custos operacionais** que crescem com o volume.\n\n## O problema de fundo\nO modelo tradicional depende 100% da capacidade humana para tarefas em sua maioria repetitivas e automatizáveis. O agente perde tempo com o simples e não sobra energia para o complexo.\n\n## A resolução\nUm modelo híbrido em que a **IA resolve o repetitivo** e o agente humano se concentra no que agrega valor, com contexto completo do cliente em todos os canais.\n\n## Tecnologias modernas que tornam isso possível\n- **IA conversacional e voicebots** (NLP / LLMs) para atendimento 24/7.\n- **Copilotos de agente** que sugerem respostas e resumem o caso em tempo real.\n- **Speech e sentiment analytics** para detectar clientes insatisfeitos e agir a tempo.\n- **IVR inteligente** que entende linguagem natural, em vez de menus intermináveis.\n- **Omnicanalidade com RAG** para respostas baseadas na base de conhecimento real.\n\nNa Cybevite, projetamos centrais de atendimento onde a tecnologia reduz o atrito: menos espera, agentes mais eficazes e clientes que voltam satisfeitos.'],
        [3, 'Setor Financeiro: segurança, conformidade e velocidade sem fricção',
            'No setor financeiro, a confiança é tudo. Mas os clientes de hoje esperam abrir uma conta em minutos, pagar com um clique e estar 100% seguros, enquanto a regulamentação e a fraude pressionam do outro lado.\n\n## As dores do setor\n- **Fraude em tempo real:** ataques cada vez mais sofisticados.\n- **Conformidade regulatória (KYC / AML):** custosa, manual e com alto risco de multas.\n- **Sistemas legados** que freiam a inovação e encarecem cada mudança.\n- **Onboarding lento** que faz perder clientes já no primeiro passo.\n- **Silos de dados** que impedem uma visão real do risco.\n\n## O problema de fundo\nA banca tradicional foi construída sobre infraestrutura rígida e processos manuais pensados para outra época. Hoje ela compete com fintechs nativas digitais que se movem em dias, não em meses.\n\n## A resolução\nModernizar o núcleo, automatizar a conformidade e usar dados em tempo real para **detectar fraudes antes que aconteçam**, oferecendo experiências ágeis sem sacrificar a segurança.\n\n## Tecnologias modernas que tornam isso possível\n- **Machine Learning para detecção de fraude** em tempo real.\n- **KYC / AML automatizado** com biometria e verificação documental por IA.\n- **Open banking e APIs** para conectar o ecossistema financeiro.\n- **RPA** para automatizar processos regulatórios e de back-office.\n- **Cloud e analytics em tempo real** para escalar com segurança.\n\nNa Cybevite, ajudamos instituições financeiras a inovar com segurança: conformidade mais simples, fraude sob controle e experiências que competem com as melhores fintechs.'],
        [4, 'Varejo e E-commerce: do carrinho abandonado ao comércio unificado',
            'O cliente de varejo hoje entra pelo aplicativo, compara na loja física e finaliza a compra em um marketplace. Para o negócio, esse mesmo cliente aparece como três pessoas diferentes em três sistemas que nunca conversam entre si.\n\n## As dores do setor\n- **Abandono de carrinho:** a fricção no checkout faz perder até 70% das compras iniciadas.\n- **Rupturas e excesso de estoque:** o inventário é atualizado em lotes, não em tempo real, e nunca coincide entre os canais.\n- **Experiência fragmentada:** o cliente repete seu histórico de compras em cada canal porque ninguém o reconhece.\n- **Fraude em pagamentos e abuso de devoluções:** chargebacks e devoluções fraudulentas corroem a margem.\n- **Recomendações genéricas:** ofertas que não refletem o que o cliente realmente procura.\n\n## O problema de fundo\nA maioria dos varejistas construiu sua loja física, seu e-commerce e sua presença em marketplaces como sistemas separados, cada um com seu próprio estoque, seu próprio cliente e sua própria lógica de preços. Não existe uma única fonte de verdade, então cada canal otimiza seu próprio resultado e perde a venda que o cliente realmente queria fazer.\n\n## A resolução\nO caminho é passar de canais isolados para o **comércio unificado**: um único inventário, um único perfil de cliente e uma única decisão de preço e estoque, visíveis em tempo real a partir de qualquer ponto de contato.\n\n## Tecnologias modernas que tornam isso possível\n- **Motores de recomendação com IA** que personalizam em tempo real com base no comportamento, não apenas no histórico.\n- **Sincronização de estoque em tempo real (comércio unificado)** entre lojas físicas, aplicativos e marketplaces.\n- **Previsão de demanda com Machine Learning** para antecipar rupturas de estoque antes que aconteçam.\n- **Detecção de fraude no checkout** com pontuação em milissegundos, sem fricção para o cliente legítimo.\n- **Busca conversacional com RAG** que entende linguagem natural sobre o catálogo real.\n\nNa Cybevite, ajudamos varejistas a unificar seus canais em uma única experiência: menos carrinhos abandonados, estoque que nunca mente e clientes que voltam porque você realmente os conhece.'],
    ],
    zh: [
        [1, '电信行业：从运营超载到智能网络',
            '电信企业始终在临界点运营：网络饱和、客户要求无懈可击的连接质量，而利润空间却不断收窄。本应支撑业务的技术，往往反而成为最大的瓶颈。\n\n## 行业痛点\n- **客户流失（Churn）：** 不满意的客户几分钟内就会更换运营商。\n- **网络饱和与中断：** 数据需求的增长速度超过了网络容量的扩展速度。\n- **人工开通配置：** 服务激活需要数天时间，且容易出错。\n- **欺诈与网络攻击：** 流量欺诈与身份欺诈造成数百万美元的损失。\n- **被动式支持：** 问题往往在客户已经不满之后才得到解决。\n\n## 根本问题\n大多数运营商在孤立的传统遗留系统上管理网络与客户关系，缺乏实时可视性和预测能力。他们只是在"救火"，而非"防火"。\n\n## 解决方案\n未来的方向是从被动响应式网络转向**智能自治网络**：能够自我监控、在故障发生前进行预测，并实现端到端的自动化配置。\n\n## 实现这一目标的现代技术\n- **人工智能/机器学习**，用于故障预测和预测性维护。\n- **客户流失预测模型**，在客户流失前识别高风险客户。\n- **网络自动化（SDN/NFV）**，在几分钟内完成服务配置。\n- **实时分析与大数据**，用于网络流量分析。\n- **边缘计算与5G**，实现最低延迟并支持新型服务。\n\n在Cybevite，我们帮助运营商将网络转变为智能资产：更少的网络中断、更低的客户流失率，以及能够先于问题发生而采取行动的运营模式。'],
        [2, '呼叫中心：从客户不满到智能体验',
            '没有人愿意主动给呼叫中心打电话。漫长的等待、同一个问题重复讲三遍，以及缺乏背景信息的客服人员，让客户支持成为客户不满的主要来源之一。\n\n## 行业痛点\n- **等待时间过长**及通话放弃率高。\n- **客服人员流失率高：** 培训成本高，且知识随人员流失而流失。\n- **重复性咨询**使客服人员不堪重负。\n- **缺乏上下文信息：** 客户在每个渠道都要重新讲述自己的问题。\n- **运营成本**随着业务量增长而不断攀升。\n\n## 根本问题\n传统模式100%依赖人力来处理大多数重复且可自动化的任务。客服人员将大量时间耗费在简单问题上，却没有精力处理复杂问题。\n\n## 解决方案\n一种混合模式：由**人工智能处理重复性工作**，人工客服则专注于真正创造价值的事务，并在所有渠道中拥有完整的客户背景信息。\n\n## 实现这一目标的现代技术\n- **对话式AI与语音机器人**（NLP/大语言模型），实现7x24小时服务。\n- **客服坐席副驾（Copilot）**，实时建议回复并总结案例。\n- **语音与情绪分析**，及时发现不满客户并采取行动。\n- **智能IVR**，能理解自然语言，而非依赖繁琐的菜单选项。\n- **基于RAG的全渠道支持**，答案基于真实的知识库。\n\n在Cybevite，我们设计能够减少摩擦的客服中心：更短的等待时间、更高效的客服人员，以及满意而归的客户。'],
        [3, '金融服务：安全、合规与无摩擦的速度',
            '在金融行业，信任就是一切。但如今的客户期望能在几分钟内开户、一键完成支付，并且100%安全，而与此同时，监管与欺诈风险也在不断施压。\n\n## 行业痛点\n- **实时欺诈：** 攻击手段日益复杂精密。\n- **监管合规（KYC/AML）：** 成本高、依赖人工，且面临较高的罚款风险。\n- **遗留系统：** 拖慢创新速度，使每一次变更都成本高昂。\n- **开户流程缓慢：** 在第一步就流失客户。\n- **数据孤岛：** 阻碍对风险的全面把控。\n\n## 根本问题\n传统银行业建立在为另一个时代设计的僵化基础设施和人工流程之上。如今，它正与以数天而非数月速度推进业务的数字原生金融科技公司（fintech）竞争。\n\n## 解决方案\n对核心系统进行现代化改造、实现合规自动化，并利用实时数据**在欺诈发生之前就将其识别出来**，同时在不牺牲安全性的前提下提供敏捷的客户体验。\n\n## 实现这一目标的现代技术\n- **用于欺诈检测的机器学习**，实时识别风险。\n- **自动化KYC/AML**，结合生物识别与AI文档验证。\n- **开放银行与API**，连接整个金融生态系统。\n- **RPA（机器人流程自动化）**，用于自动化监管与后台流程。\n- **云计算与实时分析**，实现安全的规模化扩展。\n\n在Cybevite，我们帮助金融机构安全地实现创新：更简化的合规流程、可控的欺诈风险，以及能够媲美顶尖金融科技公司的客户体验。'],
        [4, '零售与电商：从购物车放弃到全渠道统一零售',
            '如今的零售客户通过App浏览商品、在实体店对比试用，最终却在电商平台上完成购买。对企业而言，这原本是同一位客户，却在三个互不相通的系统中被当作三个不同的人。\n\n## 行业痛点\n- **购物车放弃：** 结账环节的摩擦导致高达70%已开始的购买流程被放弃。\n- **缺货与库存积压：** 库存以批次而非实时方式更新，各渠道之间的数据从不一致。\n- **体验割裂：** 客户在每个渠道都要重新讲述自己的购买历史，因为没有人认得出他们。\n- **支付欺诈与退货滥用：** 拒付（chargeback）和欺诈性退货不断侵蚀利润。\n- **千篇一律的推荐：** 优惠信息无法反映客户真正的需求。\n\n## 根本问题\n大多数零售商将实体门店、电商网站和第三方平台各自建成独立系统，每个系统都有自己的库存、自己的客户数据和自己的定价逻辑。没有统一的数据源，导致每个渠道都在为自身结果做优化，反而失去了客户真正想完成的那笔交易。\n\n## 解决方案\n未来的方向是从彼此孤立的渠道转向**全渠道统一零售（Unified Commerce）**：统一库存、统一客户画像，统一的价格与库存决策，可在任何触点实时呈现。\n\n## 实现这一目标的现代技术\n- **AI驱动的推荐引擎**，根据实时行为而非仅仅历史记录进行个性化推荐。\n- **实时库存同步（全渠道统一零售）**，覆盖实体门店、App和第三方平台。\n- **基于机器学习的需求预测**，提前预判缺货情况。\n- **结账环节欺诈检测**，以毫秒级评分实现零摩擦放行合法客户。\n- **基于RAG的对话式搜索**，能够理解基于真实商品目录的自然语言查询。\n\n在Cybevite，我们帮助零售商将各个渠道整合为统一体验：减少购物车放弃、库存数据永不失真，以及因真正了解客户而不断回流的忠实顾客。'],
    ],
}

// company_translation: company_id, language, name, slogan, description
const company = {
    de: ['Cybevite.', 'Die Zukunft gestalten', 'Tech Solutions Inc. ist ein Unternehmen, das sich der Softwareentwicklung, der Technologieberatung und KI-Lösungen für Unternehmen in Lateinamerika und den USA widmet.'],
    fr: ['Cybevite.', "Innover pour l'avenir", "Tech Solutions Inc. est une entreprise dédiée au développement de logiciels, au conseil technologique et aux solutions d'intelligence artificielle pour les entreprises en Amérique latine et aux États-Unis."],
    pt: ['Cybevite.', 'Inovando o Futuro', 'A Tech Solutions Inc. é uma empresa dedicada ao desenvolvimento de software, consultoria tecnológica e soluções de inteligência artificial para empresas na América Latina e nos EUA.'],
    zh: ['Cybevite.', '引领未来创新', 'Tech Solutions Inc. 是一家专注于软件开发、技术咨询以及为拉丁美洲和美国企业提供人工智能解决方案的公司。'],
}

async function run() {
    await client.connect()
    try {
        await client.query('BEGIN')

        for (const [code, name] of languages) {
            await client.query(
                'INSERT INTO cybevite.language (code, name) VALUES ($1, $2) ON CONFLICT (code) DO NOTHING',
                [code, name]
            )
        }

        for (const lang of NEW_LANGS) {
            await client.query('DELETE FROM cybevite.benefit_translation WHERE language = $1', [lang])
            for (const [benefitId, name] of benefits[lang]) {
                await client.query(
                    'INSERT INTO cybevite.benefit_translation (benefit_id, language, name) VALUES ($1, $2, $3)',
                    [benefitId, lang, name]
                )
            }

            await client.query('DELETE FROM cybevite.job_translation WHERE language = $1', [lang])
            for (const [jobId, title, experience] of jobs[lang]) {
                await client.query(
                    'INSERT INTO cybevite.job_translation (job_id, language, title, experience) VALUES ($1, $2, $3, $4)',
                    [jobId, lang, title, experience]
                )
            }

            await client.query('DELETE FROM cybevite.section_translation WHERE lang_code = $1', [lang])
            for (const [sectionId, title, description, ctaText] of sections[lang]) {
                await client.query(
                    'INSERT INTO cybevite.section_translation (section_id, lang_code, title, description, cta_text) VALUES ($1, $2, $3, $4, $5)',
                    [sectionId, lang, title, description, ctaText]
                )
            }

            await client.query('DELETE FROM cybevite.service_translation WHERE lang_code = $1', [lang])
            for (const [serviceId, name, summary, details] of services[lang]) {
                await client.query(
                    'INSERT INTO cybevite.service_translation (service_id, lang_code, name, summary, details) VALUES ($1, $2, $3, $4, $5)',
                    [serviceId, lang, name, summary, details]
                )
            }

            await client.query('DELETE FROM cybevite.project_translation WHERE lang_code = $1', [lang])
            for (const [projectId, title, description] of projects[lang]) {
                await client.query(
                    'INSERT INTO cybevite.project_translation (project_id, lang_code, title, description) VALUES ($1, $2, $3, $4)',
                    [projectId, lang, title, description]
                )
            }

            await client.query('DELETE FROM cybevite.pricing_plan_translation WHERE lang_code = $1', [lang])
            for (const [planId, name, description, priceFrom] of pricingPlans[lang]) {
                await client.query(
                    'INSERT INTO cybevite.pricing_plan_translation (pricing_plan_id, lang_code, name, description, price_from) VALUES ($1, $2, $3, $4, $5)',
                    [planId, lang, name, description, priceFrom]
                )
            }

            await client.query('DELETE FROM cybevite.about_section_translation WHERE lang_code = $1', [lang])
            for (const [aboutSectionId, title, content] of aboutSections[lang]) {
                await client.query(
                    'INSERT INTO cybevite.about_section_translation (about_section_id, lang_code, title, content) VALUES ($1, $2, $3, $4)',
                    [aboutSectionId, lang, title, content]
                )
            }

            await client.query('DELETE FROM cybevite.blog_post_translation WHERE lang_code = $1', [lang])
            for (const [blogPostId, title, content] of blogPosts[lang]) {
                await client.query(
                    'INSERT INTO cybevite.blog_post_translation (blog_post_id, lang_code, title, content) VALUES ($1, $2, $3, $4)',
                    [blogPostId, lang, title, content]
                )
            }

            await client.query('DELETE FROM cybevite.company_translation WHERE language = $1', [lang])
            const [name, slogan, description] = company[lang]
            await client.query(
                'INSERT INTO cybevite.company_translation (company_id, language, name, slogan, description) VALUES (1, $1, $2, $3, $4)',
                [lang, name, slogan, description]
            )
        }

        await client.query('COMMIT')
        console.log('✅ Idiomas y traducciones agregados correctamente (de, fr, pt, zh)')
    } catch (err) {
        await client.query('ROLLBACK')
        console.error('❌ Error agregando idiomas, se hizo rollback', err)
        throw err
    } finally {
        await client.end()
    }
}

run()
