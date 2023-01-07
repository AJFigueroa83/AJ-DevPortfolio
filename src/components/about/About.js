import React, { Component } from 'react'
import classes from './About.module.css';
import ScrollAnimation from 'react-animate-on-scroll';
import "animate.css/animate.min.css";

class About extends Component {
    render() {
        return (
            <div className={classes.box} id="about">
                <ScrollAnimation offset={0} animateIn="fadeInLeft" duration={2.4} animateOnce={true} initiallyVisible={true}>
                    <span className={classes.head}>ABOUT ME</span>
                    <h2 className={classes.heading}>Who Am I?</h2>
                    <div className={classes.About}>
                        <p> My name is <b>ALFREDO J. FIGUEROA</b> and I have been in the hospitality industry for over 20 years. In today's everchanging world, a new path has emerged for me. I am now embarking on a career change into the world of web development and I have recently finished the Georgia Tech Full Stack Coding Bootcamp.</p>
                        <p className={classes.br}>I am now looking to put my newly acquired skill to the test. As a full-stack web developer leveraging a hospitality management background I am aiming to help build a more intuitive user experience on the web. I always looking forward to the next new challenge and with each project, the aim is to become better at developing more skills. During my time in the bootcamp I have worked on a team of three to develop a search/locator app that helps locals and travelers find destination breweries. I am very excited to leverage my skills as part of a fast-paced, quality-driven team to build better experiences on the web.
                        </p>
                    </div>
                </ScrollAnimation>
            </div>
        )
    }
}

export default About;