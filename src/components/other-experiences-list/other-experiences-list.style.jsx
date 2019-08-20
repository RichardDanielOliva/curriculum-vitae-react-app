import styled, { css } from 'styled-components';

export const displayFlexColumn = css`
    display: flex;
    flex-direction: column;
    `;

export const OtherExperienceListContainer = styled.div`
    ${displayFlexColumn}
    
`;

export const CardSectionLeft = styled.div`
    ${displayFlexColumn}
    width: 95%;

    @media (min-width: 500px) {
        width: 84%;
    }
        
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
    display: none;

    @media (min-width: 500px) {
    display: block;
    }
`;

export const CardSectionRigth = styled.div`
    ${displayFlexColumn}
    width: 95%;

    @media (min-width: 500px) {
        position: absolute;
        margin-top: -400;
        width: 76%;
    }

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