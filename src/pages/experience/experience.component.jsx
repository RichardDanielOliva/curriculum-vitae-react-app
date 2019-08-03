import React from 'react';
import { useTranslation } from 'react-i18next';

import WorkCard from '../../components/work-card/work-card.component';
import './experience.style.scss';

const Experience = () =>{
    const { t } = useTranslation();
    const worksExperience = t('worksExperience');

    return(
        <section className='experience-section'>
            <h1 >Experience</h1>
                
            {worksExperience.map(({id, ...otherProps}) => (
                <div className="work-card-section">
                    <WorkCard key={id} {...otherProps}/>
                </div>
                ))
            }
        </section>
    );
} 

export default Experience;