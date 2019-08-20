import React  from 'react';
import styled, {css} from 'styled-components';

export const displayFlexColumn = css`
    display: flex;
    flex-direction: column;
    `;

export const displayFlexRowWrap = css`
    display: flex;
    flex-wrap: wrap;
    `;

export const ContentContainer =  styled.div`
    position: absolute;
    ${displayFlexColumn}
    width: 80%;
    max-width: 458px;
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
    overflow: hidden;
    ${displayFlexColumn};
    align-items: center;
    align-content: center;
    justify-content:center;
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

export const BackgroundImageContainer = styled.div`
    width: 100%;
    background-size: cover;
    background-position: center;
    height: ${({height}) => height};
    opacity: 0.1;
    z-index: 4;
    background-image: url(${({backgroundImageUrl}) => backgroundImageUrl});
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