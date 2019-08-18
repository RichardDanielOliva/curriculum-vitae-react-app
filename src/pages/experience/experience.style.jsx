import styled from 'styled-components';

export const ExperienceSectionContainer = styled.div`
    padding: 15% 3% 3% 3%;
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    min-width: 80vw;
    justify-content: center;

    @media (min-width: 500px) {
        padding: 10% 5%;
    }

    @media (min-width: 992px) {
        padding: 1% 5%;
    }
`;

export const WorkCardContainer = styled.div`
    margin-top: 2%;
`;