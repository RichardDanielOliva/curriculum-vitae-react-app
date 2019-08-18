import React, { Component }  from 'react';
import styled, { css } from 'styled-components';

import {displayFlexColumn, displayFlexRowWrap, displayFlexColumnItemCenterXY, BackgroundImageContainer, backgroundDefaultColor} from '../common-styles/containers.style';

// export const OtherExperiencesContainer = styled.div`
//    ${displayFlexColumn}
//    border: 1px solid rgba(0, 0, 0,0.2);
//    ${backgroundDefaultColor}
// `;

export const ContentContainer =  styled.div`
    position: absolute;
    ${displayFlexColumn}
    width: 80%;
    max-width: 458px;
`;

export const BackgroundColorFlexContainer = styled.div`
    overflow: hidden;
    ${displayFlexColumnItemCenterXY};
    margin: 1%;
    z-index: -10;
    width: ${({width}) => width};
    height: auto;

    ${backgroundDefaultColor};
    overflow: hidden;

    @media (min-width: 500px) {
        height: ${({height}) => height};
    }
`;

export const OtherExperiencesContainer = ({
    children,
    height = "200px",
    width = "458px",
    backgroundImageUrl = "https://mdbootstrap.com/img/Photos/Horizontal/Work/4-col/img%20%2814%29.jpg"
  }) => {
    return (
        <BackgroundColorFlexContainer>
            <BackgroundImageContainer height={height} width={width} backgroundImageUrl={backgroundImageUrl} />
            <ContentContainer>
               {children}
            </ContentContainer>
        </BackgroundColorFlexContainer>
    )
}


export const TitleContainer = styled.div`
    text-align: center;
    margin: 0 auto;
    ${displayFlexRowWrap}
`;

export const SubTitleContainer = styled.div`
    text-align: center;
    margin: 0 auto;
    ${displayFlexRowWrap}
`;

export const LocationContainer = styled.div`
    text-align: center;
    margin: 0 auto;
    ${displayFlexRowWrap}
`;

export const DateContainer = styled.div`
    text-align: center;
    margin: 0 auto;
`;

export const DescriptionContainer = styled.div`
    text-align: center;
    margin: 0 auto;
    ${displayFlexRowWrap}
`;