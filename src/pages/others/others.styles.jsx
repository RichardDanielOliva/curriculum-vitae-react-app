import styled, { css } from 'styled-components';
import {hidden} from '../../components/common-styles/containers.style';

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
    margin-top: 8%;
    height: 100%;
`;