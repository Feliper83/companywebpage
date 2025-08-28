import {useLocation, useNavigate } from "react-router-dom";


export default function BlogContent() {
    const { state } = useLocation();
    const navigate = useNavigate();

    if (!state) {
        return (
            <div className="container">
                <p>No se encontró el contenido del blog.</p>
                <button className="btn btn-secondary" onClick={() => navigate("/")}>
                    Volver
                </button>
            </div>
        );
    }

    const { titulo, contenido, imagen, autor, fecha } = state;

    return (
        <div >
            {imagen && (
                <img
                    src={imagen}
                    alt={titulo}
                    className="card-img-top"
                    style={{objectFit: "cover", height: "300px"}}
                />
            )}

            <div className="card-body">
                <h2 className="card-title">{titulo}</h2>
                <p className="card-text">{contenido}</p>
                <div className="text-muted small">
                    {autor && <span>Por {autor}</span>}
                    {fecha && <span> • {new Date(fecha).toLocaleDateString()}</span>}
                </div>
                <button className="btn btn-outline-primary mt-3" onClick={() => navigate("/blogs")}>
                    ← Volver a blogs
                </button>
            </div>


        </div>
    );
}