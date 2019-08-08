import React, { Component }  from 'react';
import styled, { css } from 'styled-components';

import {BackgroundColorFlexContainer, BackgroundImageContainer} from './containers-styles'

export const CardHeader = ({
    children,
    height = "50px",
    width = "458px",
    backgroundImageUrl = "https://mdbootstrap.com/img/Photos/Horizontal/Work/4-col/img%20%2814%29.jpg"
  }) => {
    return (
        <BackgroundColorFlexContainer height={height} width={width}>
            <BackgroundImageContainer height={height} width={width} backgroundImageUrl={backgroundImageUrl} />
               {children}
        </BackgroundColorFlexContainer>
    )
}
