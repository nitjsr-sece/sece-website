import React, { useState } from "react";

// Array of event options remains the same
const eventOptions = [
    "Nexus Got Latent",
    "Perfect Pixel",
    "Decoduino",
    "CodeNexus",
    "Jab We Guess",
    "Robotics Renaissance",
    "Dare 2 Pair",
];

const RegistrationPage = () => {
    // State for form data
    const [form, setForm] = useState({
        name: "",
        regno: "",
        email: "",
        phone: "",
        event: "",
    });

    // State to track the submission/loading process
    const [isSubmitting, setIsSubmitting] = useState(false);

    // Handles changes for all text inputs
    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    // Handles the form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Step 1: handleSubmit function started."); // Checkpoint 1

        setIsSubmitting(true); // <-- Starts the loading state

        // Your EmailJS credentials
        const serviceId = 'service_coj0bden';
        const templateId = 'template_c7um7hs';
        const publicKey = 'kY03-3SS1uexpPEeV';

        // The parameters object must match the variables in your EmailJS template
        const data = {
            service_id: serviceId,
            template_id: templateId,
            user_id: publicKey,
            template_params: {
                name: form.name,
                email: form.email,
                regno: form.regno,
                phone: form.phone,
                event: form.event,
            }
        };

        console.log("Step 2: Credentials and parameters are set.", data.template_params); // Checkpoint 2

        // Use fetch to send the email directly to the EmailJS API
        fetch('https://api.emailjs.com/api/v1.0/email/send', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
            .then((response) => {
                if (response.ok) {
                    console.log("Step 3: SUCCESS!", response.status, response.statusText); // Checkpoint 3 (Success)
                    alert('Registration successful! A confirmation email has been sent.');
                    window.location.reload(); // Reloads the page on success
                } else {
                    // If the response is not OK, get the error text and throw it
                    return response.text().then(text => {
                        throw new Error(text || 'Network response was not ok');
                    });
                }
            })
            .catch((err) => {
                console.error('Step 3: FAILED...', err); // Checkpoint 3 (Failure)
                alert('Oops! Something went wrong. The error has been logged to the console.');
            })
            .finally(() => {
                console.log("Step 4: Process finished."); // Checkpoint 4
                setIsSubmitting(false); // <-- Ends the loading state
            });
    };


    // --- INLINE STYLES FOR CONSISTENCY ---
    const inputStyle = {
        width: "100%",
        padding: "0.75rem",
        borderRadius: "0.5rem",
        border: "1px solid #9375c6",
        background: "#333",
        color: "#fff",
        fontSize: "1rem",
        boxSizing: 'border-box'
    };

    const selectStyle = {
        ...inputStyle,
        appearance: 'none',
        backgroundImage: `url('data:image/svg+xml;utf8,<svg fill="white" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 10l5 5 5-5z"/><path d="M0 0h24v24H0z" fill="none"/></svg>')`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'right 0.7rem center',
        backgroundSize: '1.5em',
        paddingRight: '2.5rem',
    };
    // --- END: INLINE STYLES ---

    return (
        <div
            className="registration-page"
            style={{
                marginTop: 70,
                display: "flex",
                justifyContent: "center",
                background: "#000",
                padding: "40px 20px",
                width: '100%',
                boxSizing: 'border-box',
                minHeight: 'calc(100vh - 70px)'
            }}
        >
            <form
                onSubmit={handleSubmit}
                className="registration-form"
                style={{
                    background: "#222",
                    padding: "2.5rem",
                    borderRadius: "1.2rem",
                    color: "#fff",
                    boxShadow: "0 4px 32px #9375c6",
                    maxWidth: "400px",
                    width: "100%",
                }}
            >
                <h2
                    style={{
                        color: "#9375c6",
                        marginBottom: "2rem",
                        textAlign: "center",
                        fontWeight: "bold",
                    }}
                >
                    Event Registration
                </h2>

                <div style={{ marginBottom: "1.5rem" }}>
                    <label htmlFor="event-select" style={{ display: "block", marginBottom: "0.5rem", color: "#9375c6" }}>
                        Event Name:
                    </label>
                    <select
                        id="event-select"
                        name="event"
                        value={form.event}
                        onChange={handleChange}
                        required
                        style={selectStyle}
                    >
                        <option value="" disabled>Select an event</option>
                        {eventOptions.map((ev) => (
                            <option key={ev} value={ev} style={{ background: '#333', color: 'white' }}>
                                {ev}
                            </option>
                        ))}
                    </select>
                </div>

                <div style={{ marginBottom: "1.5rem" }}>
                    <label style={{ display: "block", marginBottom: "0.5rem" }}>Name:</label>
                    <input type="text" name="name" value={form.name} onChange={handleChange} required style={inputStyle} />
                </div>

                <div style={{ marginBottom: "1.5rem" }}>
                    <label style={{ display: "block", marginBottom: "0.5rem" }}>Registration No:</label>
                    <input type="text" name="regno" value={form.regno} onChange={handleChange} required style={inputStyle} />
                </div>

                <div style={{ marginBottom: "1.5rem" }}>
                    <label style={{ display: "block", marginBottom: "0.5rem" }}>Email Id:</label>
                    <input type="email" name="email" value={form.email} onChange={handleChange} required style={inputStyle} />
                </div>

                <div style={{ marginBottom: "2rem" }}>
                    <label style={{ display: "block", marginBottom: "0.5rem" }}>Phone Number:</label>
                    <input type="tel" name="phone" value={form.phone} onChange={handleChange} required style={inputStyle} />
                </div>

                {/* --- EDITED BUTTON WITH LOADING STATE --- */}
                <button
                    type="submit"
                    disabled={isSubmitting}
                    style={{
                        background: "linear-gradient(90deg, #bb0cf0, #9375c6)",
                        color: "#fff",
                        padding: "0.9rem 0",
                        border: "none",
                        borderRadius: "0.5rem",
                        fontWeight: "bold",
                        fontSize: "1.1rem",
                        width: "100%",
                        cursor: isSubmitting ? 'wait' : 'pointer', // Changes cursor during submission
                        opacity: isSubmitting ? 0.7 : 1, // Fades the button when disabled
                        boxShadow: "0 2px 8px #9375c6",
                    }}
                >
                    {isSubmitting ? 'Registering...' : 'Register'}
                </button>
            </form>
        </div>
    );
};

export default RegistrationPage;