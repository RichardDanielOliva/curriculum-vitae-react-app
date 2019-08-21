import styled, { css } from 'styled-components';

const displayFlexColumn = css`
    display: flex;
    flex-direction: column;
`;

const circleIcon = css`
    border-radius: 100%;
    fill: rgb(255, 255, 255);
    background-color: rgba(0, 156, 143,1);
    padding: 12px;
    `; 

export const TimeLineContainer = styled.div`
    ${displayFlexColumn}
`;

export const Logo = styled.div`
    width: ${({width}) => width};
    height: ${({height}) => height};
    margin: 0 auto;
    ${circleIcon}
`;

export const Line = styled.div`
    margin: 0 auto;
    width: 4px;
    z-index: -1;
    height: ${({height}) => height}
    background-color: rgba(0, 156, 143,1);
`;

// export const Line = styled.div`
//     position: absolute;
//     margin-top: 30px;
//     width: 4px;
//     z-index: -1;
//     height: calc(100% + 4rem);
//     margin-left: calc(50% - 2px);
//     background-color: rgba(0, 156, 143,1);
// `;