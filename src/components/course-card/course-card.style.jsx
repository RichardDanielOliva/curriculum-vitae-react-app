import styled, { css } from 'styled-components';
import {displayFlexColumn, displayFlexRowWrap} from '../common-styles/containers.style';

export const CourseCardContainer = styled.div`
   ${displayFlexColumn}
   border: 1px solid rgba(0, 0, 0,0.2);
   margin-top: 10%;
   background-color: rgba(255,255,255,0.6);
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
    ${displayFlexRowWrap}
    text-align: center;
    margin: 0 auto;
`;

export const SubTitleContainer = styled.div`
    text-align: center;
    margin: 0 auto;
    ${displayFlexRowWrap}
`;

export const DateContainer = styled.div`
    text-align: center;
    margin: 0 auto;
`;