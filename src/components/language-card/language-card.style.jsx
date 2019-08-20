import styled, { css } from 'styled-components';

export const displayFlexColumn = css`
    display: flex;
    flex-direction: column;
    `;

export const displayFlexRowWrap = css`
    display: flex;
    flex-wrap: wrap;
    `;

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