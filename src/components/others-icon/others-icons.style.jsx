import styled, { css } from 'styled-components';
import {displayFlexColumnItemCenterX} from '../common-styles/containers.style';
import {icon, selectedIcon} from '../common-styles/icon.styles';

const titleHiddenStyle = css`
    display: none;

    @media (min-width: 768px) {
        display: block;
        font-size: 0.65em;
      }

      @media (min-width: 992px) {
        display: block;
        font-size: 0.875em;
      }
`;

const getTitleContainerStyle = props => {
    if (props.filterHidden) {
      return titleHiddenStyle;
    }
  
    return 'margin: 0 auto;';
};

export const TitleContainer = styled.div`
    ${getTitleContainerStyle}
`;

const getIconContainerStyle = props => {
    if (props.filterHidden) {
      return 'margin: 8% 2%';
    }
  
    return 'margin: 2%';
};

export const IconContainer = styled.div`
    ${displayFlexColumnItemCenterX}
    ${getIconContainerStyle}
`;

const getLogoStyle = props => {
    if (props.optionSelected === props.nameLogo) {
      return selectedIcon;
    }
  
    return icon;
};

export const Logo = styled.div`
    width: ${({width}) => width};
    height: ${({height}) => height};
    margin: 0 auto;
    ${getLogoStyle}
`;