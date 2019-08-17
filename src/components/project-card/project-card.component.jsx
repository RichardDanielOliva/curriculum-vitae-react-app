import React from 'react';
import { connect } from 'react-redux';

import {getIconComponent} from '../utils/icons.utils';

import './project-card.style.scss';

const ProjectCard = (({title, urlRepository, description, tecnologies, comments, skills}) => (
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
                            tecnologies.map(({tecnologyName, skillAsociated, id}) => (
                                <div Key={id} className={(skills.includes(skillAsociated)) ? 'card-icon card-icon-selected' : 'card-icon'}>
                                    {getIconComponent(skillAsociated)}
                                </div>
                            ))
                            }
                    </div>
                </div>
                {/* </CardHeader>   */}
        </div>

        <div class="project-card-body">

            <p class="project-card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus, ex, recusandae. Facere modi sunt, quod quibusdam dignissimos neque rem nihil ratione est placeat vel, natus non quos laudantium veritatis sequi.Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi.</p>

        </div>
        <div class="project-card-footer">
            <p class="project-card-text">Repositorio: </p>

            <div className="card-icon">
                <a className="card-footer-icon" href="https://github.com/RichardDanielOliva" >
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