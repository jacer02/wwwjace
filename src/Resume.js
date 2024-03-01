import React from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import "./Resume.css"
import "react-pdf/dist/esm/Page/TextLayer.css";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

const Resume = () => {
    return (
        <div id={"resumePage"}>
            <p>Here is my resume. Reach out if you have any questions!</p>
            <div id={"pdf"}>
                <img id="resumeImage" src="/jace_resume2-1.png" alt="Resume"/>
            </div>
        </div>
    );
};

export default Resume;
