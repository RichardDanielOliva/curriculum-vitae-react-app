import React  from 'react';
import styled, { css } from 'styled-components';

export const ContentContainer =  styled.div`
    z-index: 10;
`;

export const backgroundDefaultColor =  css`
    background: -moz-linear-gradient(-45deg, rgba(239,255,189,1) 0%, rgb(201, 201, 201) 100%);
    background: -webkit-gradient(left top, right bottom, color-stop(0%, rgba(239,255,189,1)), color-stop(100%, rgba(0,156,143,1)));
    background: -webkit-linear-gradient(-45deg, rgba(239,255,189,1) 0%, rgb(201, 201, 201) 100%);
    background: -o-linear-gradient(-45deg, rgba(239,255,189,1) 0%, rgb(201, 201, 201) 100%);
    background: -ms-linear-gradient(-45deg, rgba(239,255,189,1) 0%, rgb(202, 202, 202) 100%);
    // background: linear-gradient(135deg, rgba(239,255,189,1) 0%, rgba(0,156,143,1) 100%);
    background: linear-gradient(135deg, rgb(215, 247, 244) 0%, rgb(204, 204, 204) 100%);
    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#efffbd', endColorstr='#009c8f', GradientType=1 );
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
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`;

export const CourseCardContainer = styled.div`
    margin: 1%;
    width: 98%;
    z-index: 10;

    @media (min-width: 768px) {
        width: 46%;
        min-height: 290px;
    }

    @media (min-width: 992px) {
        width: 46%;
    }

    @media (min-width: 1200px) {
        width: 31%;
    }
`;

export const TitleContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    text-align: center;
    margin-top: 2%;
`;