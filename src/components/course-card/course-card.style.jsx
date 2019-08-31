import styled, { css } from 'styled-components';

export const CourseCardContainer = styled.div`
   display: flex;
   flex-direction: column;
   border: 1px solid rgba(0, 0, 0,0.2);
   margin-top: 10%;
   background-color: rgba(255,255,255,0.6);

   @media (min-width: 768px) {
    min-height: 230px;
    }
`;

export const circleIcon = css`
    border-radius: 100%;
    fill: rgb(255, 255, 255);
    background-color: rgba(0, 156, 143,1);
    padding: 15px;
    `; 

export const Logo = styled.div`
    width: ${({width}) => width};
    height: ${({height}) => height};
    margin: -10% 0% 4% 7%;
    ${circleIcon}
`;

export const TitleContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    text-align: center;
    margin: 0 auto;
`;

export const SubTitleContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    text-align: center;
    margin: 0 auto;
`;

export const DateContainer = styled.div`
    text-align: center;
    margin: 0 auto;
`;