import styled from 'styled-components';

export const CommingSoonContainer = styled.div`
    display: flex;
    flex-direction: column;
    height: 70vh;
    width: 80vw;
    align-content: center;
    justify-content: center;
    align-items: center;
    align-content: center; 


    @media (min-width: 768pxpx) {
    }

    @media (min-width: 992px) {
        width: 70vw;
    }
`;

export const TitleContainer = styled.div`
    text-align: center;
`;

export const LogoContainer = styled.div`
    width: 120px;
    height: 120px;
    margin: 5%;
    border-radius: 100%;
    fill: rgba(0, 156, 143,1);

    @media (min-width: 1768px) {
        width: 150px;
        height: 150px;
      }

    @media (min-width: 1200px) {
        width: 200px;
        height: 200px;
      }
`;