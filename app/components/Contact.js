'use client'

import React, { useState } from 'react'
import './css/contact.css'

const Contact = () => {

    const [form, setForm] = useState({
        name: "",
        email: "",
        message: "",
    });
    const [success, setSuccess] = useState(false)

    const handleSubmit = async (e) => {
        e.preventDefault();

        const res = await fetch("/api/contact", {
            method: "Post",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(form)
        });

        const data = await res.json();
        if (data.success) {
            setForm({ name: "", email: "", message: "" });
            setSuccess(true);
        }
    };

    return (
        <section id='conatct'>

            <div className='form-container'>
                <h3>Contact Us</h3>

                <form onSubmit={handleSubmit}>

                    <input type="text" placeholder='Your Name' value={form.name} onChange={(e) => setForm({
                        ...form, name: e.target.value
                    })} required />

                    <input type="text" placeholder='Your Email' value={form.email} onChange={(e) => setForm({
                        ...form, email: e.target.value
                    })} required />

                    <textarea placeholder='Your Message' value={form.message} rows={5} cols={27} onChange={(e) => setForm({
                        ...form, message: e.target.value
                    })} />

                    <button type='submit'>
                        Submit
                    </button>

                </form>

                {success && <p>Your was message sent sexusfully!</p>}

            </div>
        </section>
    )
}

export default Contact
