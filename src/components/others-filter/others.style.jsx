import styled, { css } from 'styled-components';
import {displayFlexColumn, hidden, fixedTopNav} from '../common-styles/containers.style';

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
`;

export const IconsContainer = styled.div`
    display: flex;
    justify-content: space-between;
`;