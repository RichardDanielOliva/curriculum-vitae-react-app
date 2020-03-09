import React from 'react';
import { useTranslation } from 'react-i18next';
import { Element } from 'react-scroll';
import { connect } from 'react-redux';

import ProjectCard from '../../components/project-card/project-card.component';
import './project-list.style.scss';

const hasToBeDisplay = (skillSelected, tecnologies) => {
    let skillsImproved= tecnologies.map(tecnology => {return tecnology.skillAsociated});

    let result = false;
    skillSelected.forEach(skill => {
        if(skillsImproved.includes(skill)){
            result = true;
        }
    });
    return result;
}

const ProyectList = ({skills}) =>{
    const [ t ] = useTranslation();
    const projectsData = t('projects');

    return(
            <div className="project-list-component">
                <h3 className="project-list-title">PROJECTS</h3>
                <div className="project-list-cards">
                {
                    projectsData.map(({id, tecnologies, ...otherProps}) =>  (
                    <Element key={id} name={`hello-element${id}`} className={hasToBeDisplay(skills, tecnologies) ? `my-4 project-list-card box` :`my-4 project-list-card hidden`} >
                        <ProjectCard tecnologies={tecnologies} {...otherProps}/>
                    </Element>
            ))}
                </div>
        </div>
    );
} 

const mapStateToProps = state => ({
    skills: state.skill.skills
})

export default connect(mapStateToProps)(ProyectList);