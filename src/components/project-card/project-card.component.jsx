import React from 'react';
import { connect } from 'react-redux';

import {getIconComponent} from '../utils/icons.utils';

import {CardContainer, CardHeaderContainer, TitleContainer, CardHeaderIconsContainer, IconContainer, CardBodyContainer, CardBodyDescriptionContainer, CardBodyTitleContainer, CardBodyTecnologiesSectionContainer, CardBodyTecnologiesListContainer, CardFooterContainer, CardFooterTextContainer, CardFooterIconContainer, CardFooterIconLinkContainer} from './project-card.style';

const ProjectCard = (({title, urlRepository, description, tecnologies, skillsImproved, skills}) => (
    <CardContainer>

        <CardHeaderContainer>
            <TitleContainer>
                {title}
            </TitleContainer>
            <CardHeaderIconsContainer>
                {
                    tecnologies.map(({skillAsociated, id}) => (
                        <IconContainer
                            selected= {skills.includes(skillAsociated)}
                            >
                            {getIconComponent(skillAsociated)}
                        </IconContainer>
                    ))}
            </CardHeaderIconsContainer>
        </CardHeaderContainer>

        <CardBodyContainer>

            <CardBodyDescriptionContainer>{description}</CardBodyDescriptionContainer>

            <CardBodyTitleContainer>Tecnologias:</CardBodyTitleContainer>

            <CardBodyTecnologiesSectionContainer>
                <CardBodyTecnologiesListContainer>
                    {
                        skillsImproved
                            .filter((item, idx) => idx < 4)
                            .map((skill)=>
                            <li>{skill}</li>
                            )
                    }
                </CardBodyTecnologiesListContainer>
                <CardBodyTecnologiesListContainer>
                    {
                        skillsImproved
                            .filter((item, idx) => idx > 4)
                            .map((skill)=>
                            <li>{skill}</li>
                            )
                    }
                </CardBodyTecnologiesListContainer>
            </CardBodyTecnologiesSectionContainer>

        </CardBodyContainer>

        <CardFooterContainer>
            <CardFooterTextContainer>Repositorio: </CardFooterTextContainer>

            <CardFooterIconContainer>
                <CardFooterIconLinkContainer href={urlRepository} >
                    {getIconComponent('github')}
                </CardFooterIconLinkContainer>
            </CardFooterIconContainer>
            
        </CardFooterContainer>
        
    </CardContainer>
));

const mapStateToProps = state => ({
    skills: state.skill.skills
})

export default connect(mapStateToProps)(ProjectCard);