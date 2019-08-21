import React  from 'react';
import styled, {css} from 'styled-components';

const displayFlexColumn = css`
    display: flex;
    flex-direction: column;
    `;

const displayFlexRowWrap = css`
    display: flex;
    flex-wrap: wrap;
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

export const CardContainer =  styled.div`
    ${displayFlexColumn}
    border: 1px solid rgba(0, 0, 0,0.2);
`;

const displayFlexColumnItemCenterXY = css`
    display: flex;
    flex-direction: column;
    justify-content:center;
    flex-direction: column;
    align-items: center;
    align-content: center;
    `;

const BackgroundImageContainer = styled.div`
    width: 100%;
    background-size: cover;
    background-position: center;
    height: ${({height}) => height};
    opacity: 0.1;
    z-index: 4;
    background-image: url(${({backgroundImageUrl}) => backgroundImageUrl});
    `;

const BackgroundColorFlexContainer = styled.div`
    overflow: hidden;
    ${displayFlexColumnItemCenterXY};
    z-index: -10;
    ${backgroundDefaultColor}
    overflow: hidden;
`;

const ContentHeaderContainer =  styled.div`
    position: absolute;
    ${displayFlexColumn}
    align-items: center;
    h3 {
        font-size: 1.25em
    }

    @media (min-width: 768px) {
        h3 {
            font-size: 1.45em
        }
    }

    @media (min-width: 992px) {
        h3 {
            font-size: 1.25em
        }
        
    }

    @media (min-width: 1200px) {
        h3 {
            font-size: 1.45em
        }  
    }
`;

export const CardHeaderContainer = ({
    children,
    height = "110px",
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

export const CardHeaderIconsContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: baseline;
    justify-content: center;
`;

const getIconContainerStyle = props => {
    if (props.selected) {
      return 'fill: rgb(0, 156, 143)';
    }
  
    return 'fill: rgb(0, 0, 0)';
};

export const IconContainer = styled.div`
    height: 30px;
    width: 30px;
    margin: 5px;
    border-radius: 100%;

    @media (min-width: 500px) {
        height: 35px;
        width: 35px;
    }

    @media (min-width: 600px) {
        margin: 10px;
        height: 40px;
        width: 40px;
    }

    @media (min-width: 992px) {
        margin: 5px;
    }

    @media (min-width: 1200px) {
        margin: 10px;
    }

    ${getIconContainerStyle}
`;

export const TitleContainer = styled.h3`
    text-align: center;
    margin: 0 auto;
    ${displayFlexRowWrap}
`;

export const CardBodyContainer = styled.div`
    text-align: center;
    margin: 3% 1%;
    ${displayFlexColumn}
    align-items: center;
    justify-content: center;

    @media (min-width: 992px) {
        height: 260px;
    }

    @media (min-width: 1200px) {
        height: 240px;
    }
`;

export const CardBodyDescriptionContainer = styled.p`
    text-align: center;
    margin: 0 auto;
    ${displayFlexRowWrap}
`;

export const CardBodyTitleContainer = styled.h5`
    text-align: center;
    margin: 0 auto;
    ${displayFlexRowWrap}
    padding: 2% 0%;
`;

export const CardBodyTecnologiesSectionContainer = styled.p`
    display: flex;
    text-align: left;
    justify-content: center;
    width: 100%;
`;

export const CardBodyTecnologiesListContainer = styled.ul`
    margin: 0% 2%;

    @media (min-width: 992px) {
        margin: 0%;
    }

    @media (min-width: 1200px) {
        margin: 0% 2%;
    }
`;

export const CardFooterContainer = styled.div`
    display: flex;
    align-items: baseline;
    justify-content: center;

    ${backgroundDefaultColor}
`;

export const CardFooterTextContainer = styled.p`
`;

export const CardFooterIconContainer = styled.div`
    height: 30px;
    width: 30px;
    margin: 5px;
    border-radius: 100%;
    fill: rgb(0, 0, 0);

    @media (min-width: 500px) {
        height: 35px;
        width: 35px;
    }

    @media (min-width: 600px) {
        margin: 10px;
        height: 40px;
        width: 40px;
    }

    @media (min-width: 992px) {
        margin: 5px;
    }

    @media (min-width: 1200px) {
        margin: 10px;
    }
`;

export const CardFooterIconLinkContainer = styled.a`
    :hover { 
        fill: rgb(0, 156, 143);
    }
`;