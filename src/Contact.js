import React from 'react';
import "./Contact.css";


const Contact = () => {
    return (
        <div id={"contactPage"}>
            <h3>Here is my contact info. Reach out if you have any questions!</h3>
            <h4>JaceWritesCode@gmail.com</h4>
            <a href="mailto:jacewritescode@gmail.com">Send email</a>
            <h4>208-912-4068</h4>
            <a href="https://www.linkedin.com/in/jace-derderian/" target="_blank" rel="noreferrer">LinkedIn</a>
        </div>
    );
};

export default Contact;
