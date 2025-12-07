-- Insertar beneficios base
INSERT INTO cybevite.benefit DEFAULT VALUES; -- Repetir 11 veces
INSERT INTO cybevite.benefit DEFAULT VALUES;
INSERT INTO cybevite.benefit DEFAULT VALUES;
INSERT INTO cybevite.benefit DEFAULT VALUES;
INSERT INTO cybevite.benefit DEFAULT VALUES;
INSERT INTO cybevite.benefit DEFAULT VALUES;
INSERT INTO cybevite.benefit DEFAULT VALUES;
INSERT INTO cybevite.benefit DEFAULT VALUES;
INSERT INTO cybevite.benefit DEFAULT VALUES;
INSERT INTO cybevite.benefit DEFAULT VALUES;
INSERT INTO cybevite.benefit DEFAULT VALUES;

-- Insertar traducciones en español
INSERT INTO cybevite.benefit_translation (benefit_id, language, name) VALUES
(1, 'es', 'Medicina prepagada'),
(2, 'es', 'Seguro de vida'),
(3, 'es', 'Espacios de integración para todos'),
(4, 'es', 'Desayuno cumpleaños'),
(5, 'es', 'Aniversario Viter'),
(6, 'es', 'Bonificación extralegal por resultados'),
(7, 'es', 'Licencia por matrimonio'),
(8, 'es', 'Regalo por pregrado'),
(9, 'es', 'Regalo por nacimiento de hij@'),
(10, 'es', 'Capacitaciones y cursos'),
(11, 'es', 'Kit de bienvenida');

-- Traducciones en inglés (puedes ajustar según tu preferencia)
INSERT INTO cybevite.benefit_translation (benefit_id, language, name) VALUES
(1, 'en', 'Private healthcare'),
(2, 'en', 'Life insurance'),
(3, 'en', 'Team integration spaces'),
(4, 'en', 'Birthday breakfast'),
(5, 'en', 'Viter anniversary'),
(6, 'en', 'Extra bonus for performance'),
(7, 'en', 'Marriage leave'),
(8, 'en', 'Graduation gift'),
(9, 'en', 'Newborn gift'),
(10, 'en', 'Training and courses'),
(11, 'en', 'Welcome kit');

-- Insertar trabajos base
INSERT INTO cybevite.job (location, skills, image) VALUES
('Remote - LATAM', ARRAY['Swift', 'Swift UI', 'Scrum', 'Design work'], '/images/jobs/ios-developer.jpg'),
('Remote - LATAM', ARRAY['Java (8, 17)', 'Spring Boot', 'Microservicios', 'Angular', 'Scrum'], '/images/jobs/fullstack-engineer.jpg'),
('Remote - LATAM', ARRAY['Oracle 18c and 19c', 'RMAN', 'Oracle Data Guard', 'Oracle Enterprise Manager', 'DATAPUMP', 'Performance tuning', 'Scripting in bash and PL/SQL'], '/images/jobs/dba-engineer.jpg');

-- Traducciones en español
INSERT INTO cybevite.job_translation (job_id, language, title, experience) VALUES
(1, 'es', 'Desarrollador iOS', '5 años de experiencia'),
(2, 'es', 'Ingeniero Full Stack', '10 años de experiencia'),
(3, 'es', 'Ingeniero DBA', '4 años de experiencia');

-- Traducciones en inglés
INSERT INTO cybevite.job_translation (job_id, language, title, experience) VALUES
(1, 'en', 'iOS Developer', '5 years of experience'),
(2, 'en', 'Full Stack Engineer', '10 years of experience'),
(3, 'en', 'DBA Engineer', '4 years of experience');





-- 1. Idiomas soportados
 INSERT INTO  cybevite.language (code, name) VALUES
  ('es', 'Español'),
  ('en', 'English');

-- 2. Secciones
 INSERT INTO  cybevite.section (slug, display_order) VALUES
  ('home',        1),
  ('services',    2),
  ('about-us',    3),
  ('projects',    4),
  ('pricing',     5),
  ('contact',     6);

-- 2.1 Traducciones de secciones
 INSERT INTO  cybevite.section_translation (section_id, lang_code, title, description, cta_text) VALUES
  -- Home
  (1, 'es',
      'Cybevite: Innovación Tecnológica para Empresas en Estados Unidos',
      'En Cybevite creemos que la tecnología es el motor que impulsa la transformación empresarial. Nacimos con la misión de acompañar a compañías en Estados Unidos en su camino hacia la digitalización, la automatización y la seguridad. Nuestro enfoque combina experiencia técnica, visión estratégica y talento especializado para crear soluciones tecnológicas que marcan la diferencia.
       Ofrecemos desarrollo de software a la medida, software augmentation, soluciones de inteligencia artificial y ciberseguridad con IAM (Identity & Access Management). Más allá de la tecnología, somos un socio estratégico que entiende las necesidades del mercado y entrega resultados tangibles.
       En Cybevite no construimos solo sistemas: construimos confianza, escalabilidad y futuro.',
      'Descubre cómo podemos ayudarte'),
  (1, 'en',
       'Welcome to Cybevite',
       'At Cybevite, we believe technology is the driving force behind business transformation.
        We were born with the mission of supporting companies in the United States on their journey toward digitalization, automation, and security.
        Our approach blends technical expertise, strategic vision, and specialized talent to craft technology solutions that truly make a difference.
        We offer custom software development, software augmentation, artificial intelligence solutions, and cybersecurity with IAM (Identity & Access Management).
        Beyond technology, we are a strategic partner that understands market needs and delivers tangible results.
        At Cybevite, we don’t just build systems — we build trust, scalability, and the future.',
       'See how we can help you'),


  -- Services
  (2, 'es', 'Innovación Tecnológica',
  'En Cybevite creemos que la tecnología es el motor que impulsa la transformación empresarial. Nacimos con la misión de acompañar a compañías en Estados Unidos en su camino hacia la digitalización, la automatización y la seguridad. Nuestro enfoque combina experiencia técnica, visión estratégica y talento especializado para crear soluciones tecnológicas que marcan la diferencia.
   Ofrecemos desarrollo de software a la medida, software augmentation, soluciones de inteligencia artificial y ciberseguridad con IAM (Identity & Access Management). Más allá de la tecnología, somos un socio estratégico que entiende las necesidades del mercado y entrega resultados tangibles.
   En Cybevite no construimos solo sistemas: construimos confianza, escalabilidad y futuro.',
  'Explora todos nuestros servicios'),
  (2, 'en', 'Our Services',
  '🌟 Short & Powerful (Tagline Style)
   Innovation is not just about new ideas, it’s about creating technology that transforms businesses and lives.
   Where vision meets technology, innovation becomes reality.
   Shaping the future through bold innovation and smart technology.
   📢 Social Media Post Style
   Innovation in technology is the engine that drives progress. At Cybevite, we turn ideas into solutions that empower companies to scale, secure, and succeed in an ever-changing digital world.
   💡 Corporate Website Style
   Technology innovation is at the heart of everything we do. By combining creativity, expertise, and strategic thinking, we deliver solutions that not only solve today’s challenges but also anticipate tomorrow’s opportunities.',
  'Explore all our services'),
  -- About Us
  (3, 'es', 'Nuestra Historia: Innovación con propósito',
        'Cybevite nació del sueño de un grupo de ingenieros apasionados por la tecnología y convencidos de que la innovación debía estar al alcance de todas las empresas, sin importar su tamaño. Desde el inicio, vimos en Estados Unidos un ecosistema donde la necesidad de transformación digital es constante y donde la confianza es el activo más importante.
         Comenzamos trabajando en pequeños proyectos de desarrollo de software, pero rápidamente entendimos que las compañías necesitaban algo más: un aliado estratégico capaz de acompañarlas en todo el ciclo de su transformación digital, desde la construcción de software, la implementación de IA y el refuerzo de sus equipos, hasta la protección de sus sistemas más críticos.
         Hoy, Cybevite es más que un proveedor de tecnología: somos un socio confiable. Nuestra misión es clara: crear soluciones inteligentes, seguras y escalables que permitan a las empresas crecer en un mundo digital altamente competitivo.
         Nos diferencia nuestro enfoque humano. Creemos que la tecnología es poderosa, pero aún más poderosa es la forma en la que las personas la utilizan. Por eso combinamos talento, innovación y visión de futuro para ofrecer resultados que importan.
         Nuestro objetivo es seguir construyendo, junto con nuestros clientes, un futuro donde la tecnología sea sinónimo de crecimiento, confianza y oportunidades.',
         'Más sobre nuestro equipo'),
  (3, 'en', 'Our Story: Innovation with Purpose',
        'Cybevite was born from the dream of a group of engineers passionate about technology and convinced that innovation should be accessible to every business, no matter its size. From the very beginning, we saw the U.S. as an ecosystem where digital transformation is constant and where trust is the most valuable asset.
         We started with small custom software projects, but quickly realized companies needed more: a strategic ally capable of supporting them through their entire digital transformation journey — from software development and AI implementation, to team augmentation and protecting critical systems.
         Today, Cybevite is more than a technology provider: we are a trusted partner. Our mission is clear — to create smart, secure, and scalable solutions that help businesses thrive in a highly competitive digital world.
         What sets us apart is our human-centric approach. We believe technology is powerful, but even more powerful is how people use it. That’s why we combine talent, innovation, and vision to deliver results that truly matter.
         Our goal is to keep building, together with our clients, a future where technology means growth, trust, and opportunity.',
        'Learn more about our team'),
  -- Projects
  (4, 'es',
        'Proyectos Destacados',
        'Descubre casos de éxito donde transformamos retos en soluciones innovadoras.',
        'Ver estudios de caso'),
  (4, 'en',
        'Featured Projects',
        'Explore success stories where we turned challenges into innovative solutions.',
        'View case studies'),
  -- Pricing
  (5, 'es', 'Tarifas Transparentes', 'Planes flexibles ajustados a tus necesidades, sin costos ocultos.', 'Solicita una cotización'),
  (5, 'en', 'Transparent Pricing', 'Flexible plans that fit your needs, with no hidden fees.', 'Request a quote'),
  -- Contact
  (6, 'es', 'Hablemos', '¿Listo para llevar tu proyecto al siguiente nivel? Escríbenos y te contactamos en 24h.', 'Contáctanos ahora'),
  (6, 'en', 'Get in Touch', 'Ready to take your project to the next level? Write to us and we’ll get back to you within 24h.', 'Contact us now');

-- 3. Servicios
 INSERT INTO  cybevite.service (slug, icon_path, display_order) VALUES
  ('software-augumentation',     '/images/solutions/software-augmentation.jpg',     1),
  ('ai',   '/images/solutions/artificial-intelligence.jpg',   2),
  ('iam',       '/images/solutions/iam.jpg',       3),
  ('software-development',    '/images/solutions/software-development.jpg',    4);

-- 3.1 Traducciones de servicios
 INSERT INTO  cybevite.service_translation (service_id, lang_code, name, summary, details) VALUES
  (1, 'es', 'Software Augmentation',    'Refuerza tu equipo sin frenar tu crecimiento.',
  'Los proyectos tecnológicos requieren rapidez, talento y experiencia. Nuestro servicio de Software Augmentation te conecta con ingenieros especializados en desarrollo, QA, DevOps y arquitectura de software, que se integran como parte de tu equipo remoto.
   Este modelo te permite ampliar tu capacidad de trabajo sin aumentar tus costos de contratación interna. Nos encargamos de seleccionar perfiles que se adapten a tu cultura empresarial y aporten conocimiento inmediato a los proyectos en curso.
   Ejemplo: una startup de salud digital en California necesitaba acelerar el lanzamiento de su plataforma de telemedicina. Con nuestro equipo de desarrolladores en backend y QA, lograron poner en marcha el producto 3 meses antes de lo previsto.'),

  (1, 'en', 'Java',    'Enterprise-grade applications with Java 17.',              'Development with Spring Boot, microservices, and performance tuning.'),
  (2, 'es', 'Soluciones de Inteligencia Artificial',
  'Convierte tus datos en tu mayor ventaja competitiva.',
  'La Inteligencia Artificial no es solo una tendencia: es la herramienta que está redefiniendo el futuro empresarial. En Cybevite aplicamos modelos de IA que permiten automatizar procesos, detectar patrones invisibles y mejorar la toma de decisiones.
   Ofrecemos soluciones como:
   Asistentes virtuales inteligentes.
   Motores de recomendación para e-commerce.
   Modelos predictivos de demanda y comportamiento.
   Análisis automatizado de grandes volúmenes de datos.
   Ejemplo: un e-commerce en Florida aumentó sus ventas en un 30% gracias a un motor de recomendaciones personalizadas que diseñamos con IA, basado en el historial de compras y preferencias de cada cliente.
   En Cybevite creemos que la IA no reemplaza a las personas, sino que potencia su capacidad de crear y decidir.'),
  (2, 'en',
  'Turn your data into your greatest competitive advantage.',
  'Artificial Intelligence is no longer just a trend — it’s a tool reshaping the business landscape. At Cybevite, we design AI-powered solutions that automate processes, uncover hidden patterns, and enhance decision-making.
   We offer solutions such as:
   Intelligent virtual assistants
   E-commerce recommendation engines
   Predictive demand and behavior models
   Automated analysis of large-scale data
   Example: an e-commerce company in Florida increased sales by 30% thanks to a personalized recommendation engine we built using AI, based on purchase history and customer preferences.
   At Cybevite, we believe AI doesn’t replace people — it amplifies their ability to create and decide.',
   'Back-end solutions with Flask and scalable data processing.'),

  (3, 'es',
  'Security starts with identity.',
  'La seguridad comienza en la identidad',
  'Information security is no longer optional. At Cybevite, we protect your company with advanced Identity & Access Management (IAM) solutions that ensure only the right people have access to the right resources.
   We implement multifactor authentication, privilege management, access control, and continuous monitoring — always aligned with international standards such as HIPAA, SOC 2, and GDPR.
   Example: a financial services firm in New York dramatically reduced unauthorized access attempts by implementing an IAM solution with biometric authentication and real-time alerts.
   With Cybevite, your company isn’t just more secure — it’s more trustworthy for clients and partners.'),
  (3, 'en', 'Go',      'High-performance microservices in Go.',                   'RESTful APIs and effective concurrency for low latency.'),

  (4, 'es',
  'Software Development',
  'Tu negocio es único. Tu software también debe serlo.',
  'Cada empresa tiene procesos, metas y desafíos propios. En Cybevite diseñamos y desarrollamos software a la medida que refleja la identidad de tu organización. Nos alejamos de las soluciones genéricas y construimos plataformas que se integran con tus operaciones, evolucionan contigo y generan un impacto real en la productividad.
   Nuestros proyectos abarcan desde aplicaciones web escalables, sistemas empresariales internos y plataformas móviles, hasta integraciones con APIs externas y sistemas heredados. Aplicamos metodologías ágiles, lo que nos permite entregarte resultados en menos tiempo y con mayor flexibilidad.
   Ejemplo: ayudamos a una empresa de logística en Texas a desarrollar un sistema propio de gestión de rutas con integración a mapas en tiempo real. El resultado fue una reducción del 40% en los tiempos de entrega y una mejora en la satisfacción de los clientes.
   Con Cybevite, cada línea de código tiene un propósito: hacer crecer tu negocio.'),
  (4, 'en',
  'Your business is unique. Your software should be too',
  'Every company has its own processes, goals, and challenges. At Cybevite, we design and build custom software that reflects the identity of your organization. We move away from generic solutions and create platforms that integrate seamlessly into your operations, evolve with you, and deliver measurable productivity gains.
   Our projects range from scalable web applications, internal enterprise systems, and mobile platforms to API integrations and legacy system modernization. Using agile methodologies, we deliver results faster, with more flexibility.
   Example: we helped a logistics company in Texas develop a proprietary route management system with real-time map integration. The result: a 40% reduction in delivery times and improved customer satisfaction.
   With Cybevite, every line of code has one purpose: growing your business.',
  'Your business is unique. Your software should be too.');

-- 4. Proyectos
 INSERT INTO  cybevite.project (slug, image_path, start_date, end_date, display_order) VALUES
  ('ecommerce-platform', '/projects/ecommerce.jpg', '2024-01-15', '2024-06-30', 1),
  ('mobile-app',         '/projects/mobile.jpg',    '2023-09-01', '2024-02-28', 2);

-- 4.1 Traducciones de proyectos
 INSERT INTO  cybevite.project_translation (project_id, lang_code, title, description) VALUES
  (1, 'es', 'Plataforma de e-commerce', 'Desarrollo de tienda en línea con integración de pasarelas de pago y panel de administración.'),
  (1, 'en', 'E-commerce Platform',        'Online store development with payment gateway integration and admin dashboard.'),
  (2, 'es', 'App Móvil Corporativa',      'Aplicación nativa para iOS y Android con notificaciones push y analítica.'),
  (2, 'en', 'Corporate Mobile App',       'Native iOS & Android app with push notifications and analytics.');

-- 5. Planes de precios
 INSERT INTO  cybevite.pricing_plan (slug, display_order) VALUES
  ('basic',        1),
  ('professional', 2),
  ('enterprise',   3);

-- 5.1 Traducciones de planes
 INSERT INTO  cybevite.pricing_plan_translation (pricing_plan_id, lang_code, name, description, price_from) VALUES
  (1, 'es', 'Básico',      'Desarrollo de un módulo y QA básico.',           1500.00),
  (1, 'en', 'Basic',       'Single module development and basic QA.',        1500.00),
  (2, 'es', 'Profesional', 'Módulos múltiples e integraciones.',             4000.00),
  (2, 'en', 'Professional','Multiple modules and integrations.',             4000.00),
  (3, 'es', 'Enterprise',  'Proyecto a medida con soporte 24/7.',            NULL),
  (3, 'en', 'Enterprise',  'Custom project with 24/7 support.',              NULL);

-- 6. Mensajes de contacto (ejemplos de prueba)
 INSERT INTO  cybevite.contact_message (name, email, subject, message, received_at) VALUES
  ('María Pérez', 'maria@cliente.com', 'Consulta de servicios', 'Hola, me gustaría saber más sobre sus paquetes de DevOps.', '2025-05-06 10:15'),
  ('John Smith',  'john@company.com',  'Cotización Java',       'Necesito una cotización para un proyecto en Java.',       '2025-05-06 11:30');

-- 7. Imágenes de contenido (opcional)
 INSERT INTO  cybevite.content_image (section_id, project_id, image_path, caption, display_order) VALUES
  (2, NULL, '/images/services-overview.jpg', 'Visión general de servicios', 1),
  (NULL, 1, '/images/ecommerce-screenshot.png', 'Interfaz de la tienda',    1);

INSERT INTO cybevite.about_section (slug, display_order) VALUES
  ('our-mission', 1),
  ('our-team',    2);


-- 3) Localized content for each section
INSERT INTO cybevite.about_section_translation (about_section_id, lang_code, title, content) VALUES
  -- Our Mission
  (1, 'en', 'Our Mission',
     'At Cybevite, our mission is to empower businesses with near-shore software solutions that accelerate growth and innovation.'),
  (1, 'es', 'Nuestra Misión',
     'En Cybevite, nuestra misión es potenciar a las empresas con soluciones de software near-shore que aceleren su crecimiento e innovación.'),
  -- Our Team
  (2, 'en', 'Our Team',
     'We are a diverse group of engineers, designers and strategists committed to delivering high-quality software on time and within budget.'),
  (2, 'es', 'Nuestro Equipo',
     'Somos un grupo diverso de ingenieros, diseñadores y estrategas comprometidos a entregar software de alta calidad a tiempo y dentro del presupuesto.');

-- 4) Example images for About sections
INSERT INTO cybevite.content_image (about_section_id, image_path, caption, display_order) VALUES
  (1, '/images/team-member-1.jpg', 'Collaborating to achieve our mission', 1),
  (2, '/images/team-member-2.jpg',    'The Cybevite team in action',     1);

-- 1) Blog posts
INSERT INTO cybevite.blog_post (slug, author, published_at, display_order) VALUES
  ('artificial-intelligence', 'Felipe Gómez',    '2025-05-01 10:00:00', 1),
  ('cloud-computing', 'Ana López',     '2025-05-05 14:30:00', 2),
  ('cibersecurity',     'María Torres',    '2025-05-10 09:15:00', 3);

-- 2) Translations for each post
INSERT INTO cybevite.blog_post_translation (blog_post_id, lang_code, title, content) VALUES
  -- Post 1: Welcome to Cybevite
  (1, 'en', 'The Silent Revolution: How Artificial Intelligence is Transforming Business',
     'Over the past five years, AI has gone from futuristic promise to an essential driver of modern organizations. Today, companies of all sizes are adopting AI solutions to boost productivity, cut costs, and deliver personalized customer experiences.
      One of the biggest shifts AI brings is task automation, freeing human teams to focus on strategic and creative work. Beyond efficiency, AI reveals hidden patterns in data, generating insights once thought impossible.
      In healthcare, AI detects diseases in early stages. In e-commerce, it powers personalized recommendations. In finance, it anticipates fraud in real time. Its applications are nearly limitless.
      The future isn’t humans vs. machines — it’s a collaboration where AI amplifies human creativity. At Cybevite, we embrace that vision: using AI not to replace, but to empower people.'),
  (1, 'es', 'La revolución silenciosa: cómo la Inteligencia Artificial está transformando los negocios',
     'Tradicionalmente, las empresas se protegían con firewalls y sistemas de defensa perimetral. Sin embargo, en un mundo digital e hiperconectado, donde los empleados trabajan desde múltiples ubicaciones y dispositivos, la verdadera frontera de seguridad se ha desplazado: ahora está en la identidad digital.
      El 70% de las brechas de seguridad provienen de accesos mal gestionados. Contraseñas débiles, privilegios innecesarios y cuentas inactivas son el blanco perfecto para los ciberdelincuentes. Es aquí donde entra el Identity & Access Management (IAM) como la estrategia más efectiva.
      Con IAM, las empresas pueden asegurarse de que cada usuario acceda solo a lo que necesita, cuando lo necesita, y bajo un marco de control estricto. Autenticación multifactor, biometría y monitoreo en tiempo real son algunas de las herramientas clave.
      Proteger la identidad no es solo una cuestión técnica, es una decisión de confianza. Las compañías que invierten en IAM transmiten seguridad a sus clientes y socios, convirtiéndose en marcas más fuertes y resilientes.
      En Cybevite trabajamos cada día para que la identidad de tu empresa sea un activo protegido, no una vulnerabilidad.'),

  -- Post 2: The Advantages of Near-Shore Development
  (2, 'en', 'Identity: The New Business Security Perimeter',
     'Traditionally, companies relied on firewalls and perimeter defenses. But in today’s digital, hyperconnected world — where employees work from multiple locations and devices — the true security boundary has shifted: it now lies in digital identity.
      70% of security breaches come from poorly managed access: weak passwords, unnecessary privileges, and inactive accounts are easy targets for cybercriminals. This is where Identity & Access Management (IAM) becomes the most effective defense.
      IAM ensures that each user accesses only what they need, when they need it, under strict controls. Tools like multifactor authentication, biometrics, and real-time monitoring are key to this approach.
      Protecting identity isn’t just technical — it’s about trust. Companies that invest in IAM send a powerful message: they safeguard their clients and partners, making their brand stronger and more resilient.
      At Cybevite, we work every day to turn your company’s identity into a protected asset, not a vulnerability.'),
  (2, 'es', 'La identidad: el nuevo perímetro de seguridad empresarial',
     'Tradicionalmente, las empresas se protegían con firewalls y sistemas de defensa perimetral. Sin embargo, en un mundo digital e hiperconectado, donde los empleados trabajan desde múltiples ubicaciones y dispositivos, la verdadera frontera de seguridad se ha desplazado: ahora está en la identidad digital.
      El 70% de las brechas de seguridad provienen de accesos mal gestionados. Contraseñas débiles, privilegios innecesarios y cuentas inactivas son el blanco perfecto para los ciberdelincuentes. Es aquí donde entra el Identity & Access Management (IAM) como la estrategia más efectiva.
      Con IAM, las empresas pueden asegurarse de que cada usuario acceda solo a lo que necesita, cuando lo necesita, y bajo un marco de control estricto. Autenticación multifactor, biometría y monitoreo en tiempo real son algunas de las herramientas clave.
      Proteger la identidad no es solo una cuestión técnica, es una decisión de confianza. Las compañías que invierten en IAM transmiten seguridad a sus clientes y socios, convirtiéndose en marcas más fuertes y resilientes.
      En Cybevite trabajamos cada día para que la identidad de tu empresa sea un activo protegido, no una vulnerabilidad.'),

  -- Post 3: Scaling Your Business with AI
  (3, 'en', 'The Power of the Cloud: The Future of Enterprise Infrastructure',
     'Cloud computing has completely reshaped how businesses think about IT infrastructure. What once required massive investments in physical servers and constant maintenance is now available on demand, scaling as fast as your business grows.
      The cloud offers scalability, flexibility, and cost reduction. A startup can begin with minimal resources and scale to thousands of users in minutes without buying a single server. A corporation can migrate mission-critical processes to the cloud for agility and resilience.
      Cloud platforms also unlock access to advanced tools like AI, big data, and real-time analytics — without owning infrastructure. This levels the playing field, enabling smaller companies to compete with industry giants.
      The future is hybrid and multi-cloud. Companies that embrace this shift will not only optimize costs, but also be ready to innovate faster.
      At Cybevite, we help clients make the leap to the cloud with security, strategy, and vision.'),
  (3, 'es', 'El poder de la nube: el futuro de la infraestructura empresarial',
     'El cloud computing ha cambiado por completo la manera en que las empresas conciben su infraestructura tecnológica. Lo que antes requería grandes inversiones en servidores físicos y mantenimiento constante, hoy se encuentra disponible bajo demanda, en plataformas que crecen a la misma velocidad que tu negocio.
      La nube ofrece escalabilidad, flexibilidad y reducción de costos. Una startup puede comenzar con recursos mínimos y escalar en minutos a miles de usuarios sin necesidad de comprar un solo servidor. Una corporación puede migrar procesos críticos al cloud para ganar agilidad y resiliencia.
      Además, la nube habilita el acceso a herramientas avanzadas como inteligencia artificial, big data y análisis en tiempo real, sin necesidad de infraestructura propia. Esto nivela el terreno de juego, permitiendo que empresas pequeñas compitan con gigantes de la industria.
      El futuro es híbrido y multi-cloud. Las empresas que adopten esta tecnología no solo optimizarán sus costos, sino que estarán preparadas para innovar más rápido.
      En Cybevite ayudamos a nuestros clientes a dar el salto al cloud con seguridad, estrategia y visión de futuro.');



-- Insertar la compañía (datos generales)
INSERT INTO cybevite.company
(email, phone, website, address, logo_url, facebook, twitter, linkedin, instagram)
VALUES
(
  'contact@cybevite.com',
  '+57 123 456 7890',
  'https://www.cybevite.com',
  'Carrera 10 #20-30, Bogotá, Colombia',
  '/images/logo.png',
  'https://www.facebook.com/techsolutions',
  'https://twitter.com/techsolutions',
  'https://www.linkedin.com/company/106832962/admin/dashboard/',
  'https://www.instagram.com/techsolutions'
);

-- Insertar traducciones
INSERT INTO cybevite.company_translation (company_id, language, name, slogan, description)
VALUES
-- Español
(1, 'es',
 'Cybevite.',
 'Innovando el Futuro',
 'Tech Solutions Inc. es una compañía dedicada al desarrollo de software, consultoría tecnológica y soluciones de inteligencia artificial para empresas en LATAM y USA.'
),
-- Inglés
(1, 'en',
 'Cybevite.',
 'Innovating the Future',
 'Tech Solutions Inc. is a company dedicated to software development, technology consulting, and AI solutions for businesses in LATAM and USA.'
);
