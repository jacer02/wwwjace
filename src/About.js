import React from 'react';
import "./About.css"
import {Container} from '@mui/material'


const About = () => {
    return (
        <div id={"about"}>
            <p>Here is a little about me.</p>
            <Container>
                <div id={"intro"}>
                    <h1> Jace Derderian </h1>
                    <p>-Studying for a Bachelor of Science in Computer Science at Virginia Tech.<br/>
                        -Avid surfer, former ski instructor, and amateur climber.<br/>
                        -Always working on my old 1979 Schwinn Le Tour road bike.<br/>
                        -Grew up in Boise, Idaho.</p>
                    <div className="image-container">
                        <img id="aboutIMG1" src="/surfJace.jpg" alt="Surfing Image"/>
                        <img id="aboutIMG2" src="/bike.jpg" alt="Bike Image"/>
                    </div>
                </div>


            </Container>
        </div>
    );
};

export default About;
