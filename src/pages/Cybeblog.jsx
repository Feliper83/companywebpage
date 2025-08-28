
import React, { useState, useEffect } from "react";
import {useTranslation} from "react-i18next";
import { useLanguage } from "../pages/LanguageProvider.jsx";
import {useNavigate} from "react-router-dom";


export default function CybeBlogs() {
    const [blogs, setBlogs] = useState([]);

    const { language } = useLanguage();
    const { t, i18n } = useTranslation();
    const lang = language || i18n.language || "es";

    const navigate = useNavigate();

    useEffect(() => {
        const fetchBlogs = async () => {
            try {
                const res = await fetch(`/api/blogs?lang_code=${lang}`);
                const data = await res.json();
                setBlogs(Array.isArray(data) ? data : []);
            } catch (err) {
                console.error("Error fetching blogs:", err);
                setBlogs([]);
            }
        };
        fetchBlogs();
    }, [language, i18n.language]);


    const handleClick = (title, description, image) => {
        navigate("/blog", {
            state: {
                titulo: title,
                contenido: description,
                imagen: image,
                autor: "Felipe",
                fecha: "03/06/1983",
            },
        });
    };

    return (
        <div className="container my-5">
            <h2 className="text-center mb-4"> {lang === "es" ? "Nuestros Blogs" : "Our Blogs"}</h2>
            <div className="row g-4">
                {blogs.length > 0 ? (
                    blogs.map((blog) => {
                        const image =
                            blog.blog_post?.images?.[0]?.image_path || null;

                        const title =
                            blog.title ||
                            blog.blog_post?.translations?.find(t => t.lang_code === 'es')?.title ||
                            "Sin título";

                        const description = blog.content || "";

                        return (

                            <div className="col-12 col-md-6 col-lg-4 mb-4">
                                <div className="card h-100 shadow-sm">
                                    {image && (
                                        <img
                                            src={image}
                                            className="card-img-top"
                                            alt={title}
                                            style={{
                                                height: "200px",
                                                objectFit: "cover",
                                            }}
                                        />
                                    )}
                                    <div className="card-body d-flex flex-column">
                                        <h5 className="card-title">{title}</h5>
                                        <p className="card-text text-muted flex-grow-1">
                                            {description}
                                        </p>
                                        <button className="btn btn-primary" onClick={() => handleClick(title,description,image)}>
                                            {t("blogs.lookArticle")}
                                        </button>
                                    </div>
                                </div>
                            </div>

                        );
                    })
                ) : (
                    <p className="text-center">{t("blogs.notAvailable")}</p>
                )}
            </div>
        </div>
    );
}
