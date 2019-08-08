import styled, { css } from 'styled-components';
import {displayFlexColumn, hidden, displayFlexRow} from '../common-styles/containers.style';
import {icon, selectedIcon} from '../common-styles/icon.styles';

export const BackendContainer = styled.div`
    ${displayFlexColumn}
`;

export const FrontendContainer = styled.div`
    ${displayFlexColumn}
`;

const getTitleContainerStyle = props => {
    if (props.filterHidden) {
      return hidden;
    }
  
    return '';
};

export const TitleContainer = styled.div`
    ${getTitleContainerStyle}
`;

export const IconContainer = styled.div`
    ${displayFlexRow}
    align-items: baseline;
`;

const getLogoStyle = props => {
    if (props.skills.includes(props.skillName)) {
      return selectedIcon;
    }
  
    return icon;
};

export const Logo = styled.div`
    width: ${({width}) => width};
    height: ${({height}) => height};
    margin: 10px;

    ${getLogoStyle}
`;