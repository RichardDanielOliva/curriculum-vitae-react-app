import React from 'react';

import {CourseCardContainer, Logo, TitleContainer, SubTitleContainer, DateContainer} from './course-card.style';
import {getIconComponent} from '../utils/icons.utils';

const CourseCard = (({title, issuingOrganization, issueDateFinished, issueDate, noExpirationDate, credentialId, credentialUrl, logoName, id}) => (
        <CourseCardContainer>
                <Logo 
                        width = "80px"
                        height = "80px"
                >
                    {getIconComponent(logoName)}
                </Logo>
                <TitleContainer>
                        <h4>{title}</h4>
                </TitleContainer>
                <SubTitleContainer>
                        <h5>{issuingOrganization}</h5>
                </SubTitleContainer>
                
                { issueDateFinished ?
                <DateContainer>{issueDate} <br/> Certificado: <a href={credentialUrl}> {credentialId}</a>  </DateContainer>
                : <DateContainer>En curso</DateContainer>}
        </CourseCardContainer>
));

export default CourseCard;