import styled, { css } from 'styled-components';
import {displayFlexColumn, displayFlexRowWrap} from '../common-styles/containers.style';

export const LanguageCardContainer = styled.div`
   ${displayFlexColumn}
   margin-bottom: 10%;
`;

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

export const IconsContainer = styled.div`
    ${displayFlexRowWrap}
    justify-content: space-between;
    margin-top: 0%;

    @media (min-width: 992px) {
        margin-top: 3%;
      }
`;

export const IconContainer = styled.div`
    width: 17vw;
`;