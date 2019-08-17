import styled, { css } from 'styled-components';
import {displayFlexColumn} from '../common-styles/containers.style';
import {circleIcon} from '../common-styles/icon.styles';

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