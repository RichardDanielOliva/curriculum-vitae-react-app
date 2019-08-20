import styled from 'styled-components';

export const HobbiesListContainer = styled.div`
    margin-top: 30vh;
    display: flex;
    height: 80vh;
    width: 80vw;
    justify-content: center;

    @media (min-width: 768pxpx) {
        margin-top: 20vh;
    }

    @media (min-width: 992px) {
        margin-top: 10vh;
        width: 70vw;
    }
`;

export const HobbieCardContainer = styled.div`
    margin: 2%;
`;