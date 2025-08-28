import React, { useState } from "react";
import { InputText } from "primereact/inputtext";
import { Dropdown } from "primereact/dropdown";
import { InputTextarea } from "primereact/inputtextarea";
import { Button } from "primereact/button";

export default function JobApplicationForm() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        job_id: "",
        resumeUrl: "",
        coverLetter: "",
    });

    const positions = [
        { label: "iOS Developer (Swift, SwiftUI)", value: 1 },
        { label: "Backend Java Developer (Java 8/17, Spring Boot, Microservices, Angular)", value: 2 },
        { label: "Oracle Database Administrator (DBA)", value: 3 }
    ];

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch("/api/apply", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                const data = await response.json();
                alert("✅ Application sent successfully!");
                console.log(data);
            } else {
                let errorMsg = "Unknown error";
                try {
                    const error = await response.json();
                    errorMsg = error.message || JSON.stringify(error);
                } catch {
                    errorMsg = await response.text();
                }
                alert("❌ Error: " + errorMsg);
            }


        } catch (err) {
            console.error("Error submitting application:", err);
            alert("⚠️ Something went wrong.");
        }
    };

    return (
        <div className="container mt-5">
            <h2 className="mb-4 text-center">Job Application Form</h2>

            <form
                onSubmit={handleSubmit}
                className="p-4 border rounded shadow-sm bg-light"
            >
                {/* Full Name */}
                <div className="mb-3">
                    <label className="form-label">Full Name</label>
                    <InputText
                        className="form-control"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Enter your full name"
                        required
                    />
                </div>

                {/* Email */}
                <div className="mb-3">
                    <label className="form-label">Email</label>
                    <InputText
                        className="form-control"
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="Enter your email"
                        required
                    />
                </div>

                {/* Phone */}
                <div className="mb-3">
                    <label className="form-label">Phone</label>
                    <InputText
                        className="form-control"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="Enter your phone number"
                        required
                    />
                </div>

                {/* Position */}
                <div className="mb-3">
                    <label className="form-label">Position Applying For</label>
                    <Dropdown
                        value={formData.job_id}
                        options={positions}
                        onChange={(e) =>
                            setFormData({ ...formData, job_id: e.value })
                        }
                        placeholder="Select a position"
                        className="form-select"
                    />
                </div>


                <div className="form-label">
                    <label className="form-label">Resume</label>
                    <InputText
                        className="form-control"
                        value={formData.resumeUrl}
                        onChange={(e) => setFormData({ ...formData, resumeUrl: e.target.value })}
                        placeholder="Enter your resume URL "
                    />
                </div>

                <div className="mb-3">
                    <label className="form-label">Cover Letter</label>
                    <InputTextarea
                        rows={5}
                        className="form-control"
                        value={formData.coverLetter}
                        onChange={(e) =>
                            setFormData({ ...formData, coverLetter: e.target.value })
                        }
                        placeholder="Write your cover letter"
                    />
                </div>

                <Button
                    type="submit"
                    label="Submit Application"
                    icon="pi pi-send"
                    className="btn btn-primary mt-auto w-100"
                />
            </form>
        </div>
    );
}
