import styled, { css } from 'styled-components';
import React, { Component }  from 'react';
import {displayFlexRowWrap, displayFlexColumn, displayFlexColumnItemCenterXY, backgroundDefaultColor} from '../common-styles/containers.style';
import {icon, selectedIcon} from '../common-styles/icon.styles';

// export const CourseListContainer = styled.div`
//     ${displayFlexRowWrap}
// `;

export const ContentContainer =  styled.div`
    z-index: 10;
`;

export const BackgroundColorFlexContainer = styled.div`
    display: flex;
    flex-direction: column;
    overflow: hidden;
    z-index: -10;
    width: ${({width}) => width};
    height: auto;
    ${backgroundDefaultColor};
`;

export const BackgroundImageContainer = styled.div`
    position: absolute;
    width: 100%;
    background-size: cover;
    background-position: center;
    height: fixed;
    opacity: 0.1;
    z-index: 4;
    flex-basis: 100%;
    background-image: url(${({backgroundImageUrl}) => backgroundImageUrl});
    `;

    // export const AuxiliarClearContainer = styled.div`
    // clear: both;
    // `;

export const CourseListContainer = ({
    children,
    height = "",
    width = "",
    backgroundImageUrl = "https://mdbootstrap.com/img/Photos/Horizontal/Work/4-col/img%20%2814%29.jpg"
  }) => {
    return (
        <BackgroundColorFlexContainer>
            <BackgroundImageContainer  height={"100%"} width={"1122px"} backgroundImageUrl={backgroundImageUrl}  />
                <ContentContainer>
                    {children}
                </ContentContainer>
            {/* <AuxiliarClearContainer/> */}
        </BackgroundColorFlexContainer>
    )
}

export const ListContainer = styled.div`
    ${displayFlexRowWrap}
    justify-content: space-between;
`;

export const CourseCardContainer = styled.div`
    margin: 1%;
    width: 98%;
    z-index: 10;

    @media (min-width: 768px) {
        width: 46%;
    }

    @media (min-width: 992px) {
        width: 46%;
    }

    @media (min-width: 1200px) {
        width: 31%;
    }
`;

export const TitleContainer = styled.div`
    text-align: center;
    margin-top: 2%;
    ${displayFlexRowWrap}
`;