import React, { useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import "./Resume.css"
import "react-pdf/dist/esm/Page/TextLayer.css";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

const Resume = () => {
    return (
        <div id={"resumePage"}>
            <p>Here is my resume. Reach out if you have any questions!</p>
            <div id={"pdf"}>
                <Document
                    file="/jaceDerderian_resume.pdf"
                >
                    <Page pageNumber={1} />
                </Document>
            </div>
        </div>
    );
};

export default Resume;
