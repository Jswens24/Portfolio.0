import React, { useEffect, useState } from 'react';
import './ProjectPage.css';
import projectData from '../Data/ProjectData';

const ProjectPage = () => {

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    const [projectTitle, setProjectTitle] = useState(projectData.projectData[0].projectTitle);
    const [demoLink, setDemoLink] = useState(projectData.projectData[0].demoLink);
    const [projectDesc, setProjectDesc] = useState(projectData.projectData[0].projectDescription);
    const [techUsed, setTechUsed] = useState(projectData.projectData[0].technologiesUsed);
    const [gitHubLink, setGitHubLink] = useState(projectData.projectData[0].gitHubLink);
    const [hostedLink, setHostedLink] = useState(projectData.projectData[0].hostedLink);
    const [isHosted, setIsHosted] = useState(projectData.projectData[0].isHosted);

    const spudBudHandler = () => {
        setProjectTitle(projectData.projectData[0].projectTitle);
        setDemoLink(projectData.projectData[0].demoLink);
        setProjectDesc(projectData.projectData[0].projectDescription);
        setTechUsed(projectData.projectData[0].technologiesUsed);
        setGitHubLink(projectData.projectData[0].gitHubLink);
        setIsHosted(projectData.projectData[0].hosted)
        // console.log(projectData);
    }

    const campanionHandler = () => {
        setProjectTitle(projectData.projectData[1].projectTitle);
        setDemoLink(projectData.projectData[1].demoLink);
        setProjectDesc(projectData.projectData[1].projectDescription);
        setTechUsed(projectData.projectData[1].technologiesUsed);
        setGitHubLink(projectData.projectData[1].gitHubLink);
        setIsHosted(projectData.projectData[1].hosted)
    }

    const jessicaNewsHandler = () => {
        setProjectTitle(projectData.projectData[2].projectTitle);
        setDemoLink(projectData.projectData[2].demoLink);
        setProjectDesc(projectData.projectData[2].projectDescription);
        setTechUsed(projectData.projectData[2].technologiesUsed);
        setGitHubLink(projectData.projectData[2].gitHubLink);
        setIsHosted(projectData.projectData[2].hosted)
    }

    const wildHareHandler = () => {
        setProjectTitle(projectData.projectData[3].projectTitle);
        setDemoLink(projectData.projectData[3].demoLink);
        setProjectDesc(projectData.projectData[3].projectDescription);
        setTechUsed(projectData.projectData[3].technologiesUsed);
        setGitHubLink(projectData.projectData[3].gitHubLink);
        setIsHosted(projectData.projectData[3].hosted);
        setHostedLink(projectData.projectData[3].hostedLink);
    }
    const flashCardHandler = () => {
        setProjectTitle(projectData.projectData[4].projectTitle);
        setDemoLink(projectData.projectData[4].demoLink);
        setProjectDesc(projectData.projectData[4].projectDescription);
        setTechUsed(projectData.projectData[4].technologiesUsed);
        setGitHubLink(projectData.projectData[4].gitHubLink);
        setIsHosted(projectData.projectData[4].hosted);
        setHostedLink(projectData.projectData[4].hostedLink);
    }

    return (
        <div id='project-page' className='start-project-page'>
            <div className='gold-box-div'>
                <div className="project-list-container">
                    <h2 className='projects-title'>PROJECTS</h2>
                    <div className="list">
                        <button className={projectTitle === 'SpudBud' ? 'selected-project-css' : 'project-name'} onClick={spudBudHandler}>SpudBud</button>
                        <button className={projectTitle === 'Campanion' ? 'selected-project-css' : 'project-name'} onClick={campanionHandler}>Campanion</button>
                        <button className={projectTitle === 'Jessica News' ? 'selected-project-css' : 'project-name'} onClick={jessicaNewsHandler}>Jessica News</button>
                        <button className={projectTitle === 'WildHare' ? 'selected-project-css' : 'project-name'} onClick={wildHareHandler}>WildHare</button>
                        <button className={projectTitle === 'Flash Cards' ? 'selected-project-css' : 'project-name'} onClick={flashCardHandler}>Flash Cards</button>
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
                <form className='form-flex'>
                    <button className='github-btn' formAction={gitHubLink}>
                        <i class="devicon-github-original colored"></i>
                    </button>
                    {isHosted ? <button className='hostedLink' formAction={hostedLink}>Hosted Here</button> : ''}
                </form>
            </div>
        </div >
    )
};

export default ProjectPage;