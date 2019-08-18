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

export const IconContainerHiddenStyle = css`
    align-content: space-between;


    @media (min-width: 992px) {
        ${displayFlexRow}
        align-items: baseline;
    }

    @media (min-width: 1200px) {
        ${displayFlexRow}
        align-items: baseline;
    }
`;

export const IconContainerStyle = css`
    ${displayFlexRow}
    align-items: baseline;
`;

const getIconContainerStyle = props => {
    if (props.filterHidden) {
      return IconContainerHiddenStyle;
    }
  
    return IconContainerStyle;
};

export const IconContainer = styled.div`
    ${getIconContainerStyle}
`;

const getLogoStyle = props => {
    if (props.skills.includes(props.skillName)) {
      return selectedIcon;
    }
  
    return icon;
};

export const Logo = styled.div`
    width: 34px;
    height: 34px;
    margin: 7px;
    
    @media (min-width: 600px) {
        width: 40px;
        height: 40px;
        margin: 8px;
    }

    @media (min-width: 768px) {
        width: 45px;
        height: 45px;
        margin: 10px;
    }

    @media (min-width: 992px) {
        width: 45px;
        height: 45px;
        margin: 5px;
    }

    @media (min-width: 1200px) {
        width: 55px;
        height: 55px;
        margin: 5px;
    }

    @media (min-width: 1400px) {
        width: 60px;
        height: 60px;
        margin: 10px;
    }

    ${getLogoStyle}
`;