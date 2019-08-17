import styled, {css} from 'styled-components';

export const SkillsSectionContainer = styled.div`
    padding: 15% 5%;
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    min-width: 80vw;
    justify-content: center;

    @media (min-width: 600px) {
        padding: 10% 5%;
    }

    @media (min-width: 992px) {
        padding: -5% 5%;
    }
`;

export const FilterContainer = styled.div`
    display: flex;
    flex-direction: column;
`;

export const hidden = css`
    display: none;
`;

export const filter = css`
    margin-left: 20vw;

    @media (min-width: 600px) {
        margin-left: 25vw;
    }

    @media (min-width: 992px) {
        justify-content: center;
        margin-left: 0;
    }

    @media (min-width: 1200px) {
        justify-content: center;
        margin-left: 0;
    }
`;

const getProyectContainerStyle = props => {
    if (props.proyectListHidden) {
      return hidden;
    }
  
    return filter;
};

export const ProyectContainer = styled.div`
    ${getProyectContainerStyle};
`;

