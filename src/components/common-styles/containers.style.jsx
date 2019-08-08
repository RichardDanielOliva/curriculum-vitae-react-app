import React, { Component }  from 'react';
import styled, { css } from 'styled-components';

const aleatoryNumber = () => {
    return Math.floor((Math.random() * 300))
}

export const hidden = css`
    display: none;
    `;

export const fixedTopNav = css`
    position: fixed; 
    top: 0; 
    background-color: rgba(255, 255, 255,0.7);
    `;

    export const displayFlexRow = css`
    display: flex;
    `;

    export const displayFlexRowWrap = css`
    display: flex;
    flex-wrap: wrap;
    `;

export const displayFlexColumn = css`
    display: flex;
    flex-direction: column;
    `;

    export const displayFlexColumnItemCenterX = css`
        ${displayFlexColumn}
        justify-content:center;
    `;

    export const displayFlexColumnItemCenterY = css`
    ${displayFlexColumn}
    align-items: center;
    align-content: center; //multiple lines
    // align-items: baseline
    `;

export const displayFlexColumnItemCenterXY = css`
    ${displayFlexColumnItemCenterX}
    ${displayFlexColumnItemCenterY}
    `;
    
const BackgroundAleatoryColorFlexContainer = styled.div`
    ${displayFlexColumnItemCenterXY}
    overflow: hidden;
    height: 100px;
    background: linear-gradient(135deg, rgba(215, 247, 244, 0.8) 0%, rgba(${aleatoryNumber}, ${aleatoryNumber}, ${aleatoryNumber}, 0.8) 100%);
    `;

const backgroundDefaultColor =  css`
    background: -moz-linear-gradient(-45deg, rgba(239,255,189,1) 0%, rgb(201, 201, 201) 100%);
    background: -webkit-gradient(left top, right bottom, color-stop(0%, rgba(239,255,189,1)), color-stop(100%, rgba(0,156,143,1)));
    background: -webkit-linear-gradient(-45deg, rgba(239,255,189,1) 0%, rgb(201, 201, 201) 100%);
    background: -o-linear-gradient(-45deg, rgba(239,255,189,1) 0%, rgb(201, 201, 201) 100%);
    background: -ms-linear-gradient(-45deg, rgba(239,255,189,1) 0%, rgb(202, 202, 202) 100%);
    // background: linear-gradient(135deg, rgba(239,255,189,1) 0%, rgba(0,156,143,1) 100%);
    background: linear-gradient(135deg, rgb(215, 247, 244) 0%, rgb(204, 204, 204) 100%);
    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#efffbd', endColorstr='#009c8f', GradientType=1 );
`;

export const BackgroundImageContainer = styled.div`
    width: ${({width}) => width};
    height: ${({height}) => height};
    background-size: cover;
    opacity: 0.1;
    position: absolute;
    background-image: url(${({backgroundImageUrl}) => backgroundImageUrl});
    `;

export const BackgroundColorFlexContainer = styled.div`
    ${displayFlexColumnItemCenterXY};
    overflow: hidden;
    width: ${({width}) => width};
    height: ${({height}) => height};
    ${backgroundDefaultColor};
`;

export const FlexColumnItemCenterXYContainer = styled.div`
    ${displayFlexColumnItemCenterXY};
    overflow: hidden;
`;
