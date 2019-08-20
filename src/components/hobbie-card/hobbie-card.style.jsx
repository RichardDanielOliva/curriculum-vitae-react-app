import styled, { css } from 'styled-components';

export const HobbieCardContainer = styled.div`
    display: flex;
    flex-direction: column;
`;

export const circleIcon = css`
    border-radius: 100%;
    fill: rgb(255, 255, 255);
    background-color: rgba(0, 156, 143,1);
    padding: 12px;
    `; 

export const Logo = styled.div`
    width: 100px;
    height: 100px;
    margin: -10% 0% 4% 7%;
    ${circleIcon}

    @media (min-width: 1768px) {
        width: 120px;
        height: 120px;
      }

    @media (min-width: 1200px) {
        width: 140px;
        height: 140px;
      }
`;