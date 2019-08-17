import React, { Component }  from 'react';
import styled, { css } from 'styled-components';

import {displayFlexColumn, displayFlexRowWrap, backgroundDefaultColor, displayFlexColumnItemCenterXY} from '../common-styles/containers.style';

export const BackgroundImageContainer = styled.div`
    width: 100%;
    background-size: cover;
    background-position: center;
    height: ${({height}) => height};
    // background-size: cover;
    opacity: 0.1;
    z-index: 4;
    // position: absolute;
    background-image: url(${({backgroundImageUrl}) => backgroundImageUrl});
    `;

export const BackgroundColorFlexContainer = styled.div`
    overflow: hidden;
    ${displayFlexColumnItemCenterXY};
    z-index: -10;
    background: linear-gradient(135deg, rgba(215, 247, 244, ${({opacity}) => (opacity ? opacity : "1")}) 0%, rgba(204, 204, 204, ${({opacity}) => (opacity ? opacity : "1")}) 100%);
    overflow: hidden;
`;

export const PublicationCardContainer = styled.div`
   ${displayFlexColumn}
   margin-top: 5%;
   margin-bottom: 2%;
`;

export const ContentHeaderContainer =  styled.div`
    position: absolute;
    ${displayFlexColumn}
    min-height: 80px;   
    max-width: 70%;
`;

export const HeaderCardContainer = ({
    children,
    height = "100px",
    width = "",
    backgroundImageUrl = "https://mdbootstrap.com/img/Photos/Horizontal/Work/4-col/img%20%2814%29.jpg"
  }) => {
    return (
        <BackgroundColorFlexContainer>
            <BackgroundImageContainer height={height} width={width} backgroundImageUrl={backgroundImageUrl} />
            <ContentHeaderContainer>
               {children}
            </ContentHeaderContainer>
        </BackgroundColorFlexContainer>
    )
}

export const ContentContainer =  styled.div`
    position: absolute;
    ${displayFlexColumn}
    min-height: 80px;   
`;

export const ContentCardContainer = ({
    children,
    height = "120px",
    width = "",
    opacity = "0.5",
    backgroundImageUrl = "https://mdbootstrap.com/img/Photos/Horizontal/Work/4-col/img%20%2814%29.jpg"
  }) => {
    return (
        <BackgroundColorFlexContainer opacity={opacity}>
            <BackgroundImageContainer height={height} width={width}  backgroundImageUrl={backgroundImageUrl} />
            <ContentHeaderContainer>
               {children}
            </ContentHeaderContainer>
        </BackgroundColorFlexContainer>
    )
}

export const TitleContainer = styled.div`
    text-align: center;
    margin: 0 auto;
    ${displayFlexRowWrap}
`;

export const InfoContainer = styled.div`
    text-align: center;
    margin: 0 auto;
    ${displayFlexRowWrap}
`;

export const AuthorsContainer = styled.div`
    text-align: center;
    margin: 0 auto;
    ${displayFlexRowWrap}
`;

export const DescriptionContainer = styled.div`
    text-align: center;
    margin: 0 auto;
    ${displayFlexRowWrap}
`;

export const URLContainer = styled.div`
    text-align: center;
    margin: 0 auto;
    ${displayFlexRowWrap}
`;