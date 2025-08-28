import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n
    .use(initReactI18next)
    .init({
        resources: {
            en: {
                translation: {
                    home: "Home",
                    solutions: "Solutions",
                    about: "About Us",
                    growth: "Professional growth",
                    blog: "CybeBlog",
                    title: "Software Solutions For",
                    subtitle: "Small Business, Startups, Enterprise",
                    description:
                        "Boost your business with cutting-edge software solutions tailored to the needs of modern enterprises.",
                    button: "Learn More",
                    navbar: {
                        contact_menu: "Contact"

                    },
                    blogs:{
                        lookArticle: "View article",
                        notAvailable: "There are not blogs available"
                    },
                    contact: {
                        title: "Contacts",
                        button_title: "Create",
                        name: "Name",
                        email: "Email",
                        phone: "Phone",
                        message: "Message"
                    },
                    jobs: {
                      title: "Employment opportunities",
                        applyPosition:"Apply Now"
                    },
                    benefit:{
                      title: "Benefit",
                      description: "Discover the perks of being part of our people-first team."
                    },
                    career:{
                        title: "Grow Through Transformation",
                        description: "It’s good to be part of something, but being part of a great team means achieving the impossible. Join DreamCode and turn your purpose into impact.",
                        sloganTitle: "Benefits of Viter Team",
                        sloganDescription: "We are a family that works hard and enjoys life. We foster the professional and personal growth of our team, turning each workday into a space of well-being and value for everyone."
                    },
                    footer: {
                        about_title: "About Cybevite",
                        about_text: "We build custom software solutions for small businesses, startups, and enterprises across the USA & LATAM.",
                        about_slogan: "Trusted. Innovative. Reliable.",
                        links_title: "Quick Links",
                        link_home: "Home",
                        link_solutions: "Solutions",
                        link_abouts: "Acerca de",
                        link_careers: "Career Growth",
                        link_blogs: "Blogs",
                        contact_title: "Contact",
                        contact_cta: "Request a Quote",
                        copyright: "All Rights Reserved."
                    }
                }
            },
            es: {
                translation: {
                    home: "Inicio",
                    solutions: "Soluciones",
                    about: "Sobre nosotros",
                    growth: "Crecimiento profesional",
                    blog: "CybeBlog",
                    title: "Soluciones de Software Para",
                    subtitle: "Pequeñas Empresas, Startups, Corporaciones",
                    description:
                        "Impulsa tu negocio con soluciones de software innovadoras adaptadas a las necesidades de las empresas modernas.",
                    button: "Saber más",
                    navbar: {
                        contact_menu: "Contacto"
                    },
                    blogs:{
                        lookArticle: "Ver Articulo",
                        notAvailable: "No hay blogs disponibles"
                    },
                    contact: {
                        title: "Contactos",
                        button_title: "Crear",
                        name: "Nombre",
                        email: "Email",
                        phone: "Telefono",
                        message: "Mensaje"
                    },
                    jobs: {
                        title: "Opotunidades de empleo",
                        applyPosition:"Aplicar"
                    },
                    benefit:{
                        title: "Beneficios",
                        description: "Conoce los beneficios de ser parte de nuestro equipo humano."
                    },
                    career:{
                        title: "Transforma para crecer",
                        description: "Ser parte de algo es bueno, pero ser parte de un gran equipo es lograr lo que otros consideran impensable. Únete y desarrolla tu propósito en Cybevite.",
                        sloganTitle: "Benefitios de Viter Team",
                        sloganDescription: "Somos una familia que trabaja y disfruta la vida. Promovemos el desarrollo profesional y personal de nuestro equipo, haciendo de cada día de trabajo un espacio de bienestar y valor para todos."
                    },
                    footer: {
                        about_title: "Acerca de Cybevite",
                        about_text: "Creamos soluciones de software a medida para pequeñas empresas, startups y corporaciones en USA y LATAM.",
                        about_slogan: "Confiable. Innovadora. Segura.",
                        links_title: "Enlaces Rápidos",
                        link_home: "Inicio",
                        link_solutions: "Soluciones",
                        link_abouts: "Acerca de",
                        link_careers: "Carrera",
                        link_blogs: "Blogs",
                        contact_title: "Contacto",
                        contact_cta: "Solicitar Cotización",
                        copyright: "Todos los derechos reservados."
                    }
                }
            }
        },
        lng: "es", // idioma inicial
        fallbackLng: "en",
        interpolation: { escapeValue: false }
    });

export default i18n;
