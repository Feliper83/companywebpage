import { useLocation, useNavigate } from "react-router-dom";
import React from "react";
import {Card} from "primereact/card";
import ReactMarkdown from "react-markdown";
import {Tag} from "primereact/tag";

export default function Solution() {
    const { state } = useLocation();
    const navigate = useNavigate();

    if (!state) {
        return (
            <div className="container py-5 text-center">
                <p className="text-muted">No se encontró el contenido del artículo.</p>
                <button className="btn btn-secondary mt-3" onClick={() => navigate("/")}>
                    Volver
                </button>
            </div>
        );
    }

    const { title, description, image } = state;

    const header = image ? (
        <img
            alt={title}
            src={image}
            style={{ objectFit: "cover", width: "100%", height: "250px" }}
        />
    ) : null;

    const footer = (
        <div className="d-flex justify-content-between align-items-center mt-3 text-white-50">
            <div>
                {<span>✍️ Cybevite</span>}
                {<span> • 09/09/2025</span>}
            </div>
            <button
                className="btn btn-primary"
                onClick={() => navigate("/blogs")}
            >
                ← Volver a blogs
            </button>
        </div>
    );

    return (
        <div className="container my-5">


            <Card
                title={title}
                subTitle="Solution"
                header={header}
                footer={footer}
                className="shadow-lg border-0"
                style={{ backgroundColor: "#1a1a1a", color: "white" }}
            >
                {/* Renderiza contenido con markdown con estilo oscuro */}
                <div className="blog-content" style={{color: "white"}}>
                    <p
                        className="fs-5 lh-lg text-muted"
                        style={{textAlign: "justify"}}
                    >
                        <ReactMarkdown>
                            {description}

                        </ReactMarkdown>
                    </p>
                </div>
                <div className="mt-3">
                    <Tag value="Blog" severity="info" className="me-2"/>
                    <Tag value="Tecnología" severity="success" />
                </div>
            </Card>

        </div>
);
}
