"use client";
import { useEffect, useState } from "react";
import {useTranslation} from "react-i18next";

export default function Contact() {
    const { t, i18n } = useTranslation();
    const [contacts, setContacts] = useState([]);
    const [form, setForm] = useState({
        name: "",
        email: "",
        phone: "",
        message: "",
    });

    // Cargar contactos al inicio
    useEffect(() => {
        fetch("/api/contacts")
            .then((res) => res.json())
            .then((data) => setContacts(data));
    }, []);

    // Manejo de formulario
    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const res = await fetch("/api/contacts", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(form),
        });

        if (res.ok) {
            const newContact = await res.json();
            setContacts([newContact, ...contacts]);
            setForm({ name: "", email: "", phone: "", message: "" });
        }
    };

    return (
        <div className="p-6">

            <h2 className="fw-bold mb-3 text-primary text-lg-center text-uppercase">
                {t("contact.title")}
            </h2>


            {/* Formulario */}
            <form onSubmit={handleSubmit} className="flex flex-column gap-3 mb-6">
                    <div className="form-group">
                        <input
                            type="text"
                            name="name"
                            placeholder={t("contact.name")}
                            value={form.name}
                            onChange={handleChange}
                            className="form-control form-control-lg"
                            required
                        />
                    </div>
                    <div className="form-group">
                        <input
                            type="email"
                            name={t("contact.email")}
                            placeholder={t("contact.email")}
                            value={form.email}
                            onChange={handleChange}
                            className="form-control"
                            required
                        />
                    </div>
                    <div className="form-group">
                        <input
                            type="text"
                            name="phone"
                            placeholder={t("contact.phone")}
                            value={form.phone}
                            onChange={handleChange}
                            className="form-control form-control-lg"
                        />
                    </div>
                    <div className="form-group">
                    <textarea
                        name="message"
                        placeholder={t("contact.message")}
                        value={form.message}
                        onChange={handleChange}
                        className="form-control"
                    />
                    </div>
                    <hr/>
                    <div className="form-group">
                        <button
                            type="submit"
                            className="form-control flex align-content-end btn btn-outline-primary btn-sm"
                        >
                            {t("contact.button_title")}
                        </button>
                    </div>
                </form>

            </div>
            );
            }
