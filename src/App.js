import './App.css';
import React from "react";
import {Typography, Button, Box, AppBar, Toolbar, IconButton} from '@mui/material';
import Resume from "./Resume";
import Projects from "./Projects";
import About from "./About";
import Contact from "./Contact"
import {BrowserRouter as Router, Route, Link, Routes} from 'react-router-dom';

function App() {
  return (
    <div className="App">
        <Box sx={{ flexGrow: 1}}>
            <AppBar id="bar" position="static" >
                <Toolbar sx={{backgroundColor: "black"}}>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                    >
                        {/*<MenuIcon />*/}
                    </IconButton>
                    <Typography id="intro" variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        Welcome to JaceCodes.com!
                    </Typography>
                    {/*<Button color="inherit">Login</Button>*/}
                </Toolbar>
            </AppBar>
            <AppBar id="bar2" position="static" >
                <Router>
                        <Toolbar id= "frog" sx={{backgroundColor: "black", justifyContent: "center"}}>
                                <Link to="/resume">
                                    <Button id="butt" sx={{marginRight: 5, marginLeft: 5}}>Resume</Button>
                                </Link>
                                <Link to="/projects">
                                    <Button id="butt" color="inherit" sx={{marginRight: 5, marginLeft: 5}}>Projects</Button>
                                </Link>
                                <Link to="/about">
                                    <Button id="butt" color="inherit" sx={{marginRight: 5, marginLeft: 5}}>About Me</Button>
                                </Link>
                                <Link to="/contact">
                                    <Button id="butt" color="inherit" sx={{marginRight: 5, marginLeft: 5}}>Contact Info</Button>
                                </Link>
                        </Toolbar>
                    <Routes>
                        <Route exact path="/resume" element={<Resume/>} />
                        <Route exact path="/projects" element={<Projects/>} />
                        <Route exact path="/about" element={<About/>} />
                        <Route exact path="/contact" element={<Contact/>} />
                        <Route path="/" element={<Resume />} />

                    </Routes>
                </Router>
            </AppBar>
        </Box>
    </div>
  );
}

export default App;
