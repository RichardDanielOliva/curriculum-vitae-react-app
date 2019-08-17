import styled, { css } from 'styled-components';
import {displayFlexColumn, hidden} from '../common-styles/containers.style';

const getFilterContainerStyle = props => {
    if (props.filterHidden) {
      return '';
    }
  
    return displayFlexColumn;
  };

export const FilterContainer = styled.div`
    ${getFilterContainerStyle}
`;

const getTitleContainerStyle = props => {
    if (props.filterHidden) {
      return hidden;
    }
  
    return '';
};

export const TitleContainer = styled.div`
    margin: 2% 0;
    ${getTitleContainerStyle}
`;

export const fixedTopNav = css`
    ${displayFlexColumn}
    top: 8vh;
    width: 95%;
    position: fixed; 
    background-color: rgba(255, 255, 255,0.7);

    @media (min-width: 992px) {
      top: 0vh;
      width: 75%;
    }
`;

const getContentContainerStyle = props => {
    if (props.filterHidden) {
      return fixedTopNav;
    }
  
    return displayFlexColumn;
};

export const ContentContainer = styled.div`
    ${getContentContainerStyle}
`;

export const SubTitleContainer = styled.div`
    text-align: center;
    ${getTitleContainerStyle}
`;

export const IconsContainer = styled.div`
    display: flex;
    justify-content: center;
    text-align: center;
    align-items: center;
`;

export const IconContainer = styled.div`
  width: 19vw;
  padding: 2%;

  @media (min-width: 600px) {
    width: 19vw;
    padding: 0%;
  }
  
  @media (min-width: 992px) {
    width: 15vw;
  }
`;