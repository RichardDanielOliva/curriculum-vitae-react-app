import styled, { css } from 'styled-components';

const titleHiddenStyle = css`
  display: none;

  @media (min-width: 768px) {
    display: block;
    font-size: 0.650em;
  }

  @media (min-width: 992px) {
    display: block;
    font-size: 0.670em;
  }

  @media (min-width: 1200px) {
    display: block;
    font-size: 0.810em;
  }
`;

const titleNoHiddenStyle = css`
  display: none;

  @media (min-width: 768px) {
    display: block;
    font-size: 0.840em;
  }

  @media (min-width: 1200px) {
    display: block;
    font-size: 0.9em;
  }
`;

const getTitleContainerStyle = props => {
    if (props.filterHidden) {
      return titleHiddenStyle;
    } else {
      return titleNoHiddenStyle;
    }
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
    display: flex;
    flex-direction: column;
    justify-content:center;
    ${getIconContainerStyle}
`;

const icon = css`
    border-radius: 100%;
    fill: rgb(0, 0, 0);
    
    &:hover {
        fill: rgb(0, 156, 143);
      }
    `;

const selectedIcon = css`
    border-radius: 100%;
    fill: rgb(0, 156, 143);
    `;

const getLogoStyle = props => {
    if (props.optionSelected === props.nameLogo) {
      return selectedIcon;
    }
  
    return icon;
};

export const Logo = styled.div`
    width: 45px;
    height: 45px;
    margin: 0 auto;
    ${getLogoStyle}

    @media (min-width: 768px) {
      width: 50px;
      height: 50px;
    }

    @media (min-width: 500px) {
      width: 60px;
      height: 60px;
    }
`;