import {useLocation, useNavigate} from "react-router-dom";
import React from "react";


export default function Solution() {

    const {state} = useLocation();
    const navigate = useNavigate();



    if (!state) {
        return (<div className="container">
                <p>No se encontró el contenido del blog.</p>
                <button className="btn btn-secondary" onClick={() => navigate("/")}>
                    Volver
                </button>
            </div>);
    }

    const {title, description, image} = state;

    return (<div>
            {image && (<img
                    src={image}
                    alt={title}
                    className="card-img-top"
                    style={{objectFit: "cover", height: "300px"}}
                />)}

            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p className="card-text">{description}</p>

                <button className="btn btn-outline-primary mt-3" onClick={() => navigate("/solutions")}>
                    ← Volver a Solutiones
                </button>
            </div>


        </div>


    );
}