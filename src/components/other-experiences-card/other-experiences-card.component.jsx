import React from 'react';

import {OtherExperiencesContainer, TitleContainer, SubTitleContainer,LocationContainer, DateContainer, DescriptionContainer} from './other-experiences-card.style';

const OtherExperiencesCard = (({title, issuingOrganization, location, issueDateFinished, issueDate, description}) => (
        <OtherExperiencesContainer>
                <TitleContainer>
                        <h5>{title}</h5>
                </TitleContainer>
                <SubTitleContainer>
                        <p>{issuingOrganization}</p>
                </SubTitleContainer>

                <LocationContainer>
                        <p>{location}</p>
                </LocationContainer>
                
                { issueDateFinished ?
                <DateContainer>{issueDate}</DateContainer>
                : <DateContainer>{issueDate} - En curso</DateContainer>}

                <DescriptionContainer>
                        <p>{description}</p>
                </DescriptionContainer>
        </OtherExperiencesContainer>
));

export default OtherExperiencesCard;