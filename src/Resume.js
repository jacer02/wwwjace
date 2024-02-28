import React from 'react';
import "./Resume.css"

const Resume = () => {
    return (
        <div id={"resumePage"}>
            <p>Here is my resume. Reach out if you have any questions!</p>

            <iframe
                title="Resume PDF"
                width="850px"
                height="1000px"
                src="/jaceDerderian_resume.pdf"
                referrerPolicy={"strict-origin"}
            />
        </div>


    );
};

export default Resume;
