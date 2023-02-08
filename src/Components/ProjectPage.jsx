import React, { useState } from 'react';
import './ProjectPage.css';
import projectData from '../Data/ProjectData';

const ProjectPage = () => {
    const [projectTitle, setProjectTitle] = useState('');
    const [demoLink, setDemoLink] = useState('');
    const [projectDesc, setProjectDesc] = useState('');
    const [techUsed, setTechUsed] = useState('');
    const [gitHubLink, setGitHubLink] = useState('');
    const [isSelected, setIsSelected] = useState(false);

    const spudBudHandler = () => {
        setProjectTitle(projectData.projectData[0].projectTitle);
        setDemoLink(projectData.projectData[0].demoLink);
        setProjectDesc(projectData.projectData[0].projectDescription);
        setTechUsed(projectData.projectData[0].technologiesUsed);
        setGitHubLink(projectData.projectData[0].gitHubLink);
        setIsSelected(true);
        // console.log(projectData);
    }

    const campanionHandler = () => {
        setProjectTitle(projectData.projectData[1].projectTitle);
        setDemoLink(projectData.projectData[1].demoLink);
        setProjectDesc(projectData.projectData[1].projectDescription);
        setTechUsed(projectData.projectData[1].technologiesUsed);
        setGitHubLink(projectData.projectData[1].gitHubLink);
        setIsSelected(true);
    }

    return (
        <div id='project-page' className='start-project-page'>
            <div className='gold-box-div'>
                <h2 className='projects-title'>PROJECTS</h2>
                <div className="project-list">
                    <button className={projectTitle === 'SpudBud' ? 'selected-project-css' : 'project-name'} onClick={spudBudHandler}>SpudBud</button>
                    <button className={projectTitle === 'Campanion' ? 'selected-project-css' : 'project-name'} onClick={campanionHandler}>Campanion</button>
                </div>
                <div>
                    {!isSelected &&
                        <h2 className='projects-title'>Please select a project from above</h2>
                    }
                </div>
                <div className="video-contain">
                    <iframe width="100%"
                        height="100%"
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
                    <button className={!isSelected ? 'not-selected-btn' : 'github-btn'} formAction={gitHubLink}>GITHUB</button>
                </form>
            </div>
            <div className="about-arrow-div">
                <a href="#contact-page"><div className='arrow down'></div></a>
                <a href="#contact-page"><div className='arrow down'></div></a>
                <a href="#contact-page"><div className='arrow down'></div></a>
            </div>
        </div >
    )
};

export default ProjectPage;