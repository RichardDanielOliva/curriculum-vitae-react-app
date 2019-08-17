import styled, { css } from 'styled-components';
import {displayFlexColumn} from '../common-styles/containers.style';
import {icon, circleIcon} from '../common-styles/icon.styles';

export const HobbieCardContainer = styled.div`
   ${displayFlexColumn}
`;

export const Logo = styled.div`
    width: 100px;
    height: 100px;
    margin: -10% 0% 4% 7%;
    ${circleIcon}

    @media (min-width: 1768px) {
        width: 120px;
        height: 120px;
      }

    @media (min-width: 1200px) {
        width: 140px;
        height: 140px;
      }
`;