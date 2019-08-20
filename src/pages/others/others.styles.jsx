import styled, {css} from 'styled-components';

const hidden = css`
    display: none;
    `;

export const OtherContainer = styled.div`
    padding: 10% 5%;
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    min-width: 80vw;
    justify-content: center;

    @media (min-width: 992px) {
        padding: -15% 5%;
    }
`;

const getSectionContainer = props => {
    if (props.optionSelected !== props.sectionName) {
      return hidden;
    }
  
    return '';
};

export const SectionContainer = styled.div`
    ${getSectionContainer}
    margin-top: 22%;
    height: 100%;

    @media (min-width: 500px) {
        margin-top: 18%;
    }

    @media (min-width: 600px) {
        margin-top: 9%;
    }

    @media (min-width: 768px) {
        margin-top: 10%;
    }

    @media (min-width: 992px) {
        margin-top: 5%;
    }

    @media (min-width: 1200px) {
        margin-top: 3%;
    }
`;