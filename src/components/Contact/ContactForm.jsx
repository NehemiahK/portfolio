import React, { useState } from "react";

const ContactForm = () => {

    const [status, setStaus] = useState('')

    const submitForm = (ev) => {
        ev.preventDefault();
        const form = ev.target;
        const data = new FormData(form);
        const xhr = new XMLHttpRequest();
        xhr.open(form.method, form.action);
        xhr.setRequestHeader("Accept", "application/json");
        xhr.onreadystatechange = () => {
            if (xhr.readyState !== XMLHttpRequest.DONE) return;
            if (xhr.status === 200) {
                form.reset();
                setStaus("SUCCESS")
            } else {
                setStaus("ERROR")
            }
        };
        xhr.send(data);
    }

    return (
        <form
            onSubmit={submitForm}
            action="https://formspree.io/mlepwvbd"
            method="POST">

            <label>Email:</label>
            <input type="email" name="email" />
            <label>Message:</label>
            <textarea name="message"></textarea>
            {status === "SUCCESS" && <p>Thanks! I'll be in touch soon!</p>}
            {status === "ERROR" && <p>Yikes! Something went wrong.</p>}
            {!status && <button>Send</button>}
        </form>
    )
}

export default ContactForm

