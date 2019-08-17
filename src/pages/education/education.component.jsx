import React from 'react';
import { useTranslation } from 'react-i18next';

import SchoolCard from '../../components/school-card/school-card.component';

import {EducationSectionContainer, SchoolCardContainer} from './education.style';

const Education = () =>{
    const { t } = useTranslation();
    const schoolsInfo = t('schoolsInfo');

    return(
        <EducationSectionContainer>
            <h1>EDUCACION</h1>
                
            {schoolsInfo.map(({id, ...otherProps}) => (
                <SchoolCardContainer>
                    <SchoolCard key={id} {...otherProps}/>
                </SchoolCardContainer>
                ))
            }
        </EducationSectionContainer>
    );
} 

export default Education;