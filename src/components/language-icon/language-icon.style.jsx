import styled, { css } from 'styled-components';

export const displayFlexColumn = css`
    display: flex;
    flex-direction: column;
    `;

export const displayFlexRow = css`
    display: flex;
    `;

export const IconContainer = styled.div`
   ${displayFlexColumn}
`;

export const HeaderContainer = styled.div`
    ${displayFlexRow}
`;

export const ContentContainer = styled.div`
    margin: 3%;
    ${displayFlexRow}
    align-items: baseline;
    justify-content: center;

    p{
        font-weight: bold;
    }

    @media (min-width: 768px) {
        margin: 5%;
      }
`;

export const LevelText = styled.div`
    position: absolute;
    margin: 50px 4%;
    font-size: 0.750em;
   

    @media (min-width: 600px) {
        margin: 50px 5%;
        font-size: 0.875em;
      }

    @media (min-width: 768px) {
        margin: 75px 6%;
      }

    @media (min-width: 992px) {
        margin: 75px 6%;
    }

    @media (min-width: 1100px) {
        margin: 75px;
        font-size: 1em;
      }
`;
     
export const icon = css`
    border-radius: 100%;
    fill: rgb(0, 0, 0);
    &:hover {
        fill: rgb(0, 156, 143);
      }
    `;

export const Logo = styled.div`
    width: ${({width}) => width};
    height: ${({height}) => height};
    ${icon}
`;

export const LogoNameContainer= styled.div`
    margin-left: 2%;
`;

export const SvgContainer = styled.svg`
    width: 200px;
    height: 150px;

    @media (min-width: 768px) {
        height: 200px;
      }
    transform: rotate(-90deg);
`;

export const CircleMeterContainer = styled.circle`
    stroke: #e6e6e6;
    stroke-width: 12;
    fill: transparent;
`;

export const CircleValueContainer = styled.circle`
    stroke: rgba(0, 156, 143, 0.5);
    stroke-linecap: round;
    stroke-width: 12;
    fill: transparent;
    stroke-dasharray: 339.292;
    stroke-dashoffset: ${({strokeDashOffSet}) => strokeDashOffSet}; 
`;