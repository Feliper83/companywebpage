import React from "react";

import { useNavigate } from "react-router-dom";

export default function BlogCard({ title, description, image }) {

    const navigate = useNavigate();

    const handleClick = () => {
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
                    <button className="btn btn-primary" onClick={handleClick}>
                        Ver artículo
                    </button>
                </div>
            </div>
        </div>
    );
}
