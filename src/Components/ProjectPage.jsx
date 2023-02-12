import React, { useState } from 'react';
import './ProjectPage.css';
import projectData from '../Data/ProjectData';

const ProjectPage = () => {
    const [projectTitle, setProjectTitle] = useState(projectData.projectData[0].projectTitle);
    const [demoLink, setDemoLink] = useState(projectData.projectData[0].demoLink);
    const [projectDesc, setProjectDesc] = useState(projectData.projectData[0].projectDescription);
    const [techUsed, setTechUsed] = useState(projectData.projectData[0].technologiesUsed);
    const [gitHubLink, setGitHubLink] = useState(projectData.projectData[0].gitHubLink);

    const spudBudHandler = () => {
        setProjectTitle(projectData.projectData[0].projectTitle);
        setDemoLink(projectData.projectData[0].demoLink);
        setProjectDesc(projectData.projectData[0].projectDescription);
        setTechUsed(projectData.projectData[0].technologiesUsed);
        setGitHubLink(projectData.projectData[0].gitHubLink);
        // console.log(projectData);
    }

    const campanionHandler = () => {
        setProjectTitle(projectData.projectData[1].projectTitle);
        setDemoLink(projectData.projectData[1].demoLink);
        setProjectDesc(projectData.projectData[1].projectDescription);
        setTechUsed(projectData.projectData[1].technologiesUsed);
        setGitHubLink(projectData.projectData[1].gitHubLink);
    }

    return (
        <div id='project-page' className='start-project-page'>
            <div className='gold-box-div'>
                <div className="project-list-container">
                    <h2 className='projects-title'>PROJECTS</h2>
                    <div className="list">
                        <button className={projectTitle === 'SpudBud' ? 'selected-project-css' : 'project-name'} onClick={spudBudHandler}>SpudBud</button>
                        <button className={projectTitle === 'Campanion' ? 'selected-project-css' : 'project-name'} onClick={campanionHandler}>Campanion</button>
                    </div>
                </div>
                <div className="project-name-div">
                    <h3>{projectTitle}</h3>
                </div>
                <div className="video-contain">
                    <iframe
                        className='responsive-iframe'
                        src={demoLink}
                        title="YouTube video player"
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowfullscreen></iframe>
                </div>
                <div className="desc-and-tech">
                    <p>{projectDesc}</p>
                    <p className='tech'>{techUsed}</p>
                </div>
                <form>
                    <button className='github-btn' formAction={gitHubLink}>
                        <i class="devicon-github-original colored"></i>
                    </button>
                </form>
            </div>
        </div >
    )
};

export default ProjectPage;