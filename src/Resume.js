import React from 'react';
import "./Resume.css"

const Resume = () => {
    return (
        <div id={"resumePage"}>
            <p>Here is my resume. Reach out if you have any questions!</p>
            <div id={"pdf"}>
                <img id="resumeImage" src="/jaceDerderianResume_spring2024-1.png" alt="Resume"/>
            </div>
        </div>
    );
};

export default Resume;
