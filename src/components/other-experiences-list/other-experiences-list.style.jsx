import styled, { css } from 'styled-components';
import {displayFlexRow, displayFlexColumn, fixedTopNav} from '../common-styles/containers.style';

export const OtherExperienceListContainer = styled.div`
    ${displayFlexColumn}
    
`;

export const CardSectionLeft = styled.div`
    ${displayFlexColumn}
        width: 84%;

    @media (min-width: 1200px) {
        width: 42%;
    }

`;

export const RowContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`;

export const OtherCard = styled.div`
    heigth: 400px;
`;

export const TimelineSection = styled.div`
    ${displayFlexColumn}
`;

export const CardSectionRigth = styled.div`
    ${displayFlexColumn}
    position: absolute;
    margin-top: -400;
    width: 76%;

    @media (min-width: 992px) {
        position: absolute;
        margin-top: -400;
        width: 62%;

    @media (min-width: 1200px) {
        position: static;
        margin-top: 0;
        ${displayFlexColumn}
        width: 42%;
    }
`;