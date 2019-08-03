import React from 'react';
import { useTranslation } from 'react-i18next';
import { Element } from 'react-scroll';
import { connect } from 'react-redux';

import ProjectCard from '../../components/project-card/project-card.component';
import './project-list.style.scss';

const hasToBeDisplay = (skillSelected, skillsImproved) => {
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
                <h1 className="project-list-title">Projectos</h1>
                {
                    projectsData.map(({id, skillsImproved, ...otherProps}) =>  (
                    <Element key={id} name={`hello-element${id}`} className={hasToBeDisplay(skills, skillsImproved) ? `my-4 box` :`my-4 hidden`} >
                        <ProjectCard  {...otherProps}/>
                    </Element>
            ))}
        </div>
    );
} 

const mapStateToProps = state => ({
    skills: state.skill.skills
})

export default connect(mapStateToProps)(ProyectList);