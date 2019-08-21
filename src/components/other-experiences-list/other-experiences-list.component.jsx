import React from 'react';
import { useTranslation } from 'react-i18next';

import OtherExperiencesCard from '../other-experiences-card/other-experiences-card.component';
import TimeLine from './time-line/time-line.component';

import {OtherExperienceListContainer, RowContainer, CardSectionLeft, TimelineSection, CardSectionRigth} from './other-experiences-list.style';

const OtherExperienceList = () =>{
    const [ t ] = useTranslation();
    const otherExperience = t('others-experience');

    return(
            <OtherExperienceListContainer>
                {   
                    otherExperience
                            .map(({id, ...otherProps}) => 
                            <RowContainer>
                                <CardSectionLeft>
                                    {
                                        (id / 2 === 0 || id % 2 === 0) ?
                                            <OtherExperiencesCard key={id} id={id} {...otherProps}/>
                                        : ''
                                    }
                                </CardSectionLeft>
                
                                <TimelineSection>
                                    <TimeLine rowNumer={id} length={otherExperience.length}/>
                                </TimelineSection>
                                
                                <CardSectionRigth>
                                    {
                                        (id / 2 !== 0) && (id % 2 !== 0) ?
                                                <OtherExperiencesCard key={id} id={id} {...otherProps}/>
                                            : ''
                                        }
                                </CardSectionRigth>
                            </RowContainer>
                            )}
        </OtherExperienceListContainer>
    );
} 

export default OtherExperienceList;