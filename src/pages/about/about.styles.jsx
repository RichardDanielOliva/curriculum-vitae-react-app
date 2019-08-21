import styled from 'styled-components';

export const AboutSectionContainer = styled.div`
    padding: 15% 3% 3% 3%;
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    min-width: 80vw;
    justify-content: center;
    box-sizing:border-box;

    @media (min-width: 500px) {
        padding: 10% 5%;
    }

    @media (min-width: 992px) {
        padding: 1% 5%;
    }
`;

export const ContactContainer = styled.div`
    margin-top: 2%;
`;

export const ProfileTextContainer = styled.div`
    margin-top: 0%;

    @media (min-width: 500px) {
        margin-top: 2%;
    }
`;

export const LogosContainer = styled.div`
    margin-top: 2%;
    display: flex;
    justify-content:center;

    @media (min-width: 500px) {
        margin-top: 1%;
    }
`;

export const LogoItemContainer = styled.div`
    height: 80px;
    width: 80px;
    margin: 10px;
    border-radius: 100%;

    &:hover {
    fill: rgb(0, 156, 143);
    }
`;