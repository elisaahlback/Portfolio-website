import { useEffect, useRef } from 'react';
import '.././styles/ProjectsPage.css';
import React from "react";
import NavBar from '../components/NavBar';
import FigmaLogo from '.././assets/figma.svg';
import Line from '../components/Line';
import Footer from '../components/Footer';
import { Link, Element } from 'react-scroll';
import Project from '../components/Project';

function ProjectsPage() {
  return (
    <div className="App">
        <NavBar />
        <div class="row">
            <div className="col d-flex justify-content-start projects-page-title">
                Projects
            </div>
        </div>

        {/* Project 1 */}
        <Project id="project-1"
            title="BEMify"
            type="Front end"
            description="BEMify is a full-stack web application designed for music streaming, allowing users to create accounts, follow favorite artists, and curate custom playlists. The platform also facilitates social interaction by letting users follow each other and share music. Key features include personalized recommendations, profile management, search functionality for music and users, a messaging system, and account settings. Built using a backend and frontend architecture, it provides a dynamic user experience with data sharing and interaction based on music preferences.
            "
            tech="Vue.js, JavaScript, HTML, Node.js, and Figma."
        />

        {/* Project 2 */}
        <Project id="project-2"
            title="Dentistimo"
            type="Back end"
            description="Dentistimo is a web application designed to simplify the process of booking dentist appointments in Gothenburg. Users can search for local clinics, view clinic information, and book or manage appointments through an interactive map. Dentists and clinic administrators can manage schedules and view bookings via dedicated accounts. The platform is built with a distributed backend architecture, utilizing MQTT for communication between components, and follows a service-based structure to ensure efficiency and reliability."
            tech="React, Node.js, MongoDB, and MQTT."
        />

        {/* Project 3 */}
        <Project id="project-3"
            title="TimeSync"
            type="UI/UX Design, Prototyping, Interaction Design"
            description="I designed the user interface for TimeSync, a concept startup aimed at simplifying group scheduling for students. The app integrates users' personal calendars into a shared group calendar, streamlining event planning through color-coded availability and voting on time slots. Features like cross-platform calendar synchronization, in-app group chat, and a &quot;Memories&quot; section (to revisit shared events) were designed to enhance collaboration and social connection."
            tech="Figma"
        />

        {/* Project 4 */}
        <Project id="project-4"
            title="MonkeyCar"
            type="Front end"
            description="MONKEyCAR is a web-based application aimed at teaching children to code in an engaging way by programming a real smart car. Users create sequences of actions, like moving forward or turning, through drag-and-drop code blocks, which the car then executes. The app introduces basic programming concepts such as loops in a fun and interactive environment."
            tech="HTML, CSS, JavaScript, C++, and MQTT."
        />

        {/* Project 5 */}
        <Project id="project-5"
            title="Portfolio website"
            type="Front end"
            description="This is a project focused on building a responsive, interactive portfolio website to showcase my design and development skills, highlighting my personal brand, projects, and experience."
            tech="React, Javascript, Bootstrap, HTML, CSS, and Figma."
        />

        More to come!

    <Footer></Footer>
    </div>
  );
}

export default ProjectsPage;