-- Insertar beneficios base
INSERT INTO university.benefit DEFAULT VALUES; -- Repetir 11 veces
INSERT INTO university.benefit DEFAULT VALUES;
INSERT INTO university.benefit DEFAULT VALUES;
INSERT INTO university.benefit DEFAULT VALUES;
INSERT INTO university.benefit DEFAULT VALUES;
INSERT INTO university.benefit DEFAULT VALUES;
INSERT INTO university.benefit DEFAULT VALUES;
INSERT INTO university.benefit DEFAULT VALUES;
INSERT INTO university.benefit DEFAULT VALUES;
INSERT INTO university.benefit DEFAULT VALUES;
INSERT INTO university.benefit DEFAULT VALUES;

-- Insertar traducciones en español
INSERT INTO university.benefit_translation (benefit_id, language, name) VALUES
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
INSERT INTO university.benefit_translation (benefit_id, language, name) VALUES
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
INSERT INTO university.job (location, skills, image) VALUES
('Remote - LATAM', ARRAY['Swift', 'Swift UI', 'Scrum', 'Design work'], '/images/details-1.jpg'),
('Remote - LATAM', ARRAY['Java (8, 17)', 'Spring Boot', 'Microservicios', 'Angular', 'Scrum'], '/images/details-1.jpg'),
('Remote - LATAM', ARRAY['Oracle 18c and 19c', 'RMAN', 'Oracle Data Guard', 'Oracle Enterprise Manager', 'DATAPUMP', 'Performance tuning', 'Scripting in bash and PL/SQL'], '/images/details-1.jpg');

-- Traducciones en español
INSERT INTO university.job_translation (job_id, language, title, experience) VALUES
(1, 'es', 'Desarrollador iOS', '5 años de experiencia'),
(2, 'es', 'Ingeniero Full Stack', '10 años de experiencia'),
(3, 'es', 'Ingeniero DBA', '4 años de experiencia');

-- Traducciones en inglés
INSERT INTO university.job_translation (job_id, language, title, experience) VALUES
(1, 'en', 'iOS Developer', '5 years of experience'),
(2, 'en', 'Full Stack Engineer', '10 years of experience'),
(3, 'en', 'DBA Engineer', '4 years of experience');





-- 1. Idiomas soportados
 INSERT INTO  university.language (code, name) VALUES
  ('es', 'Español'),
  ('en', 'English');

-- 2. Secciones
 INSERT INTO  university.section (slug, display_order) VALUES
  ('home',        1),
  ('services',    2),
  ('about-us',    3),
  ('projects',    4),
  ('pricing',     5),
  ('contact',     6);

-- 2.1 Traducciones de secciones
 INSERT INTO  university.section_translation (section_id, lang_code, title, description, cta_text) VALUES
  -- Home
  (1, 'es', 'Bienvenido a Cybevite', 'En Cybevite transformamos tus ideas en soluciones de software escalables y seguras.', 'Descubre cómo podemos ayudarte'),
  (1, 'en', 'Welcome to Cybevite', 'At Cybevite, we turn your ideas into scalable, secure software solutions.', 'See how we can help you'),
  -- Services
  (2, 'es', 'Nuestros Servicios', 'Ofrecemos un catálogo completo de servicios para impulsar tu negocio con tecnología de punta.', 'Explora todos nuestros servicios'),
  (2, 'en', 'Our Services', 'We offer a full suite of services to drive your business with cutting-edge technology.', 'Explore all our services'),
  -- About Us
  (3, 'es', 'Conócenos', 'En Cybevite reunimos talento latinoamericano y experiencia global.', 'Más sobre nuestro equipo'),
  (3, 'en', 'About Us', 'At Cybevite, we blend Latin American talent with global experience.', 'Learn more about our team'),
  -- Projects
  (4, 'es', 'Proyectos Destacados', 'Descubre casos de éxito donde transformamos retos en soluciones innovadoras.', 'Ver estudios de caso'),
  (4, 'en', 'Featured Projects', 'Explore success stories where we turned challenges into innovative solutions.', 'View case studies'),
  -- Pricing
  (5, 'es', 'Tarifas Transparentes', 'Planes flexibles ajustados a tus necesidades, sin costos ocultos.', 'Solicita una cotización'),
  (5, 'en', 'Transparent Pricing', 'Flexible plans that fit your needs, with no hidden fees.', 'Request a quote'),
  -- Contact
  (6, 'es', 'Hablemos', '¿Listo para llevar tu proyecto al siguiente nivel? Escríbenos y te contactamos en 24h.', 'Contáctanos ahora'),
  (6, 'en', 'Get in Touch', 'Ready to take your project to the next level? Write to us and we’ll get back to you within 24h.', 'Contact us now');

-- 3. Servicios
 INSERT INTO  university.service (slug, icon_path, display_order) VALUES
  ('java',     '/images/project-1.jpg',     1),
  ('python',   '/images/project-2.jpg',   2),
  ('go',       '/images/project-3.jpg',       3),
  ('cloud',    '/images/project-4.jpg',    4),
  ('ai',       '/images/project-5.jpg',       5),
  ('devops',   '/images/project-6.jpg',   6);

-- 3.1 Traducciones de servicios
 INSERT INTO  university.service_translation (service_id, lang_code, name, summary, details) VALUES
  (1, 'es', 'Java',    'Aplicaciones empresariales robustas con Java 17.',      'Desarrollo con Spring Boot, microservicios y optimización de rendimiento.'),
  (1, 'en', 'Java',    'Enterprise-grade applications with Java 17.',              'Development with Spring Boot, microservices, and performance tuning.'),
  (2, 'es', 'Python',  'Automatización y análisis de datos con Django.',           'Soluciones back-end con Flask y procesamiento de datos escalable.'),
  (2, 'en', 'Python',  'Automation and data analytics with Django.',             'Back-end solutions with Flask and scalable data processing.'),
  (3, 'es', 'Go',      'Microservicios de alto rendimiento en Go.',               'APIs RESTful y concurrencia efectiva para baja latencia.'),
  (3, 'en', 'Go',      'High-performance microservices in Go.',                   'RESTful APIs and effective concurrency for low latency.'),
  (4, 'es', 'Cloud',   'Arquitectura y migración en AWS, Azure y GCP.',           'Diseño de infraestructuras escalables y seguras en la nube.'),
  (4, 'en', 'Cloud',   'Architecture and migration on AWS, Azure & GCP.',        'Design of scalable, secure cloud infrastructures.'),
  (5, 'es', 'IA',      'Modelos de Machine Learning y visión por computadora.',   'Entrenamiento y despliegue de modelos para decisiones inteligentes.'),
  (5, 'en', 'AI',      'Machine Learning & computer vision models.',              'Training and deployment of models for intelligent decisions.'),
  (6, 'es', 'DevOps',  'CI/CD, Docker, Kubernetes y GitLab CI/CD.',               'Automatización de despliegues, monitoreo y gestión de infraestructura.'),
  (6, 'en', 'DevOps',  'CI/CD, Docker, Kubernetes & GitLab CI/CD.',              'Deployment automation, monitoring, and infrastructure management.');

-- 4. Proyectos
 INSERT INTO  university.project (slug, image_path, start_date, end_date, display_order) VALUES
  ('ecommerce-platform', '/projects/ecommerce.jpg', '2024-01-15', '2024-06-30', 1),
  ('mobile-app',         '/projects/mobile.jpg',    '2023-09-01', '2024-02-28', 2);

-- 4.1 Traducciones de proyectos
 INSERT INTO  university.project_translation (project_id, lang_code, title, description) VALUES
  (1, 'es', 'Plataforma de e-commerce', 'Desarrollo de tienda en línea con integración de pasarelas de pago y panel de administración.'),
  (1, 'en', 'E-commerce Platform',        'Online store development with payment gateway integration and admin dashboard.'),
  (2, 'es', 'App Móvil Corporativa',      'Aplicación nativa para iOS y Android con notificaciones push y analítica.'),
  (2, 'en', 'Corporate Mobile App',       'Native iOS & Android app with push notifications and analytics.');

-- 5. Planes de precios
 INSERT INTO  university.pricing_plan (slug, display_order) VALUES
  ('basic',        1),
  ('professional', 2),
  ('enterprise',   3);

-- 5.1 Traducciones de planes
 INSERT INTO  university.pricing_plan_translation (pricing_plan_id, lang_code, name, description, price_from) VALUES
  (1, 'es', 'Básico',      'Desarrollo de un módulo y QA básico.',           1500.00),
  (1, 'en', 'Basic',       'Single module development and basic QA.',        1500.00),
  (2, 'es', 'Profesional', 'Módulos múltiples e integraciones.',             4000.00),
  (2, 'en', 'Professional','Multiple modules and integrations.',             4000.00),
  (3, 'es', 'Enterprise',  'Proyecto a medida con soporte 24/7.',            NULL),
  (3, 'en', 'Enterprise',  'Custom project with 24/7 support.',              NULL);

-- 6. Mensajes de contacto (ejemplos de prueba)
 INSERT INTO  university.contact_message (name, email, subject, message, received_at) VALUES
  ('María Pérez', 'maria@cliente.com', 'Consulta de servicios', 'Hola, me gustaría saber más sobre sus paquetes de DevOps.', '2025-05-06 10:15'),
  ('John Smith',  'john@company.com',  'Cotización Java',       'Necesito una cotización para un proyecto en Java.',       '2025-05-06 11:30');

-- 7. Imágenes de contenido (opcional)
 INSERT INTO  university.content_image (section_id, project_id, image_path, caption, display_order) VALUES
  (2, NULL, '/images/services-overview.jpg', 'Visión general de servicios', 1),
  (NULL, 1, '/images/ecommerce-screenshot.png', 'Interfaz de la tienda',    1);

INSERT INTO university.about_section (slug, display_order) VALUES
  ('our-mission', 1),
  ('our-team',    2);


-- 3) Localized content for each section
INSERT INTO university.about_section_translation (about_section_id, lang_code, title, content) VALUES
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
INSERT INTO university.content_image (about_section_id, image_path, caption, display_order) VALUES
  (1, '/images/team-member-1.jpg', 'Collaborating to achieve our mission', 1),
  (2, '/images/team-member-2.jpg',    'The Cybevite team in action',     1);

-- 1) Blog posts
INSERT INTO university.blog_post (slug, author, published_at, display_order) VALUES
  ('welcome-to-cybevite', 'Felipe Gómez',    '2025-05-01 10:00:00', 1),
  ('near-shore-advantages', 'Ana López',     '2025-05-05 14:30:00', 2),
  ('scaling-with-ai',     'María Torres',    '2025-05-10 09:15:00', 3);

-- 2) Translations for each post
INSERT INTO university.blog_post_translation (blog_post_id, lang_code, title, content) VALUES
  -- Post 1: Welcome to Cybevite
  (1, 'en', 'Welcome to Cybevite',
     'We’re thrilled to launch our new company blog! Here you’ll find insights on software development, near-shore partnerships, and more. Stay tuned for regular updates.'),
  (1, 'es', 'Bienvenidos a Cybevite',
     '¡Estamos emocionados de lanzar nuestro nuevo blog corporativo! Aquí encontrarás ideas sobre desarrollo de software, alianzas near-shore y mucho más. Mantente al tanto de nuestras actualizaciones.'),

  -- Post 2: The Advantages of Near-Shore Development
  (2, 'en', 'The Advantages of Near-Shore Development',
     'Discover why near-shore software development in Latin America offers cost savings, cultural alignment, and overlapping time zones for smoother collaboration.'),
  (2, 'es', 'Ventajas del Desarrollo Near-Shore',
     'Descubre por qué el desarrollo de software near-shore en América Latina ofrece ahorros de costos, alineación cultural y zonas horarias compartidas para una colaboración más fluida.'),

  -- Post 3: Scaling Your Business with AI
  (3, 'en', 'Scaling Your Business with AI',
     'Learn how integrating AI-powered solutions can automate repetitive tasks, improve decision-making, and enable rapid scaling of your operations.'),
  (3, 'es', 'Escalando tu Negocio con IA',
     'Aprende cómo la integración de soluciones impulsadas por IA puede automatizar tareas repetitivas, mejorar la toma de decisiones y permitir una escalada rápida de tus operaciones.');



-- Insertar la compañía (datos generales)
INSERT INTO university.company
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
INSERT INTO university.company_translation (company_id, language, name, slogan, description)
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
