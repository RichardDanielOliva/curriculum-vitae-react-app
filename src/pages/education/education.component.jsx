import React from 'react';
import { useTranslation } from 'react-i18next';

import SchoolCard from '../../components/school-card/school-card.component';
import './education.style.scss';

const Education = () =>{
    const { t } = useTranslation();
    const schoolsInfo = t('schoolsInfo');

    return(
        <section className='resume-section'>
            <h1 >Education</h1>
                
            {schoolsInfo.map(({id, ...otherProps}) => (
                <div className="school-card-section">
                    <SchoolCard key={id} {...otherProps}/>
                </div>
                ))
            }
        </section>
    );
} 

export default Education;