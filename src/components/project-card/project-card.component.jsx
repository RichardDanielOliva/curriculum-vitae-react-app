import React from 'react';
import { connect } from 'react-redux';

import {getIconComponent} from '../utils/icons.utils';

import './project-card.style.scss';

const ProjectCard = (({title, urlRepository, description, tecnologies, comments,skillsImproved, skills}) => (
    <div className="project-card">

        <div className="project-card-header">
            <div className="card-image"
            style={{
                backgroundImage: `url(https://mdbootstrap.com/img/Photos/Horizontal/Work/4-col/img%20%2814%29.jpg)`
              }}/>
              {/* <CardHeader height="110px"> */}
                <div className="project-card-header-content">
                    <h3 className="card-header-title">{title}</h3>
            
                    <div className="icons-card">
                        {
                            tecnologies.map(({skillAsociated, id}) => (
                                <div Key={id} className={(skills.includes(skillAsociated)) ? 'card-icon card-icon-selected' : 'card-icon'}>
                                    {getIconComponent(skillAsociated)}
                                </div>
                            ))
                            }
                    </div>
                </div>
                {/* </CardHeader>   */}
        </div>

        <div className="project-card-body">

            <p className="project-card-text">{description}</p>

            <h5 className="project-card-text">Tecnologias:</h5>
            <div className="project-card-tecnologies">
                <ul className="project-card-tecnologies-ul">
                    {
                        skillsImproved
                            .filter((item, idx) => idx < 4)
                            .map((skill)=>
                            <li>{skill}</li>
                            )
                    }
                </ul>
                <ul className="project-card-tecnologies-ul">
                    {
                        skillsImproved
                            .filter((item, idx) => idx > 4)
                            .map((skill)=>
                            <li>{skill}</li>
                            )
                    }
                </ul>
            </div>
        </div>
        <div class="project-card-footer">
            <p class="project-card-text">Repositorio: </p>

            <div className="card-icon">
                <a className="card-footer-icon" href={urlRepository} >
                    {getIconComponent('github')}
                </a>
            </div>
            
        </div>
        
    </div>
));

const mapStateToProps = state => ({
    skills: state.skill.skills
})

export default connect(mapStateToProps)(ProjectCard);