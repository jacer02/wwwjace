import React from 'react';
import "./Projects.css"
import {Container} from '@mui/material'

const Projects = () => {
    return (
        <div id={"projects"}>
            <p>Here is what I'm working on right now.</p>
            <Container>
                <div id={"proj"}>
                    <h1> Underwater Acoustic Communication Research </h1>
                    <h2> Hume Center for National Security and Technology</h2>
                    <p>-Developing a prototype for underwater acoustic communication<br/>
                        -I am part of the software integration team. I have developed code that is able to interface with our hardware solution. <br/>
                        -Developed digital signal processing programs that have been able to successfully transfer a file through a wire. <br/>
                        -Wrote automated testing code to examine accuracy of transmission.<br/>
                        -Authored paper and presented at several conferences this spring.
                    </p>
                    <img id="projectPic" src="/conferencePres.jpg" alt="Conference Presentation"/>
                </div>
                <div id={"proj"}>
                    <h1> Data Migration Capstone Project </h1>
                    <p>-We are taking an existing application and migrating the data from MongoDB to a MySQL database.<br/>
                        -Implement an upgraded front-end, and add functionality to make changes to profiles from the front end. <br/>
                        -Adding privileges hierarchy that allows certain users to add new admin and approve requests.
                    </p>
                </div>
            </Container>
            <p>These are a few of my past projects.</p>
            <Container>
                <div id={"proj"}>
                    <h1> Data Visualization </h1>
                    <p>-Full-stack web development project creating a dynamic website to visualize data.<br/>
                        -Utilizes MongoDB, React, Node, and D3.<br/>
                        -Creates a bar-chart that can be fully edited and all changes can be saved and loaded from the database.
                    </p>
                    <img id="projectPic" src="/dataViz.png" alt="Data Visualization Screenshot"/>
                </div>
                <div id={"proj"}>
                    <h1> Jace's Ski Reports </h1>
                    <p>-Simple automatic emailing system for myself.<br/>
                        -Collects data on my local ski resort, as well as weather predictions and sends an email to me every morning.<br/>
                        -Can be run on an Amazon Web Services EC2 instance or a Raspberry Pi device.</p>
                </div>
                <div id={"proj"}>
                    <h1> Malloc Lab </h1>
                    <p>-Creation of a dynamic memory allocator for C programs.<br/>
                        -Our own version of Malloc, Realloc, and Free implemented in a way that is correct, efficient and fast.<br/>
                        -Thread safe and scalable.<br/>
                        -Performance scored on throughput and space utilization.<br/>
                        -Github Repo available upon request.</p>
                </div>
            </Container>
        </div>

    );
};

export default Projects;
