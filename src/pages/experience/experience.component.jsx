import React from 'react';
import { useTranslation } from 'react-i18next';

import WorkCard from '../../components/work-card/work-card.component';

import {ExperienceSectionContainer, WorkCardContainer} from './experience.style';

const Experience = () => {
    const { t } = useTranslation();
    const worksExperience = t('worksExperience');

    return(
        <ExperienceSectionContainer>
            <h1> EXPERIENCIA </h1>
                
            {worksExperience.map(({id, ...otherProps}) => (
                <WorkCardContainer>
                    <WorkCard key={id} {...otherProps}/>
                </WorkCardContainer>
                ))
            }
        </ExperienceSectionContainer>
    );
} 

export default Experience;