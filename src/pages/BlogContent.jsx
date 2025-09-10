import {useLocation, useNavigate } from "react-router-dom";
import { Card } from "primereact/card";
import { Tag } from "primereact/tag";
import ReactMarkdown from "react-markdown";

export default function BlogContent() {
    const { state } = useLocation();
    const navigate = useNavigate();

    if (!state) {
        return (
            <div className="container">
                <p>No se encontró el contenido del blog.</p>
                <button className="btn btn-primary" onClick={() => navigate("/")}>
                    Volver
                </button>
            </div>
        );
    }

    const { titulo, contenido, imagen, autor, fecha } = state;

    const header = imagen ? (
        <img
            alt={titulo}
            src={imagen}
            style={{ objectFit: "cover", width: "100%", height: "250px" }}
        />
    ) : null;

    const footer = (
        <div className="d-flex justify-content-between align-items-center mt-3 text-white-50">
            <div>
                {autor && <span>✍️ {autor}</span>}
                {fecha && <span> • {new Date(fecha).toLocaleDateString()}</span>}
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
        <div className="container py-5 bg-dark min-vh-100 text-white text-justify">
            {imagen && (
                <img
                    src={imagen}
                    alt={titulo}
                    className="card-img-top"
                    style={{objectFit: "cover", height: "300px"}}
                />
            )}


            <Card
                title={titulo}
                subTitle="Artículo del blog"
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
                            {contenido}

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