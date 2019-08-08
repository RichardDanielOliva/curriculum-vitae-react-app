import React from 'react';

import './course-card.style.scss';

import {FlexColumnItemCenterXYContainer} from '../common-styles/containers.style'

const CourseCard = (({title, issuingOrganization, issueDateFinished, issueDate, noExpirationDate, credentialId, credentialUrl, id}) => (
        <FlexColumnItemCenterXYContainer>
                <h4>{title}</h4>
                <h5>{issuingOrganization}</h5>
                { issueDateFinished ?
                    <div>{issueDate} - Certificado: <a href={credentialUrl}> {credentialId}</a>  </div>
                : <div>En curso</div>}
        </FlexColumnItemCenterXYContainer>
));

export default CourseCard;