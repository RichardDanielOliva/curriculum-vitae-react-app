import styled, { css } from 'styled-components';
import {displayFlexColumnItemCenterX} from '../common-styles/containers.style';
import {icon, selectedIcon} from '../common-styles/icon.styles';

export const TitleContainer = styled.div`
    text-align: center;
`;

export const IconContainer = styled.div`
    ${displayFlexColumnItemCenterX}
`;

const getLogoStyle = props => {
    if (props.logoSelected === props.nameLogo) {
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