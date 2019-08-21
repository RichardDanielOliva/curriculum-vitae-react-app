import React from 'react';

import {getIconComponent} from '../utils/icons.utils';

import {IconContainer,HeaderContainer, ContentContainer, LevelText, Logo, LogoNameContainer, SvgContainer, CircleMeterContainer, CircleValueContainer} from './language-icon.style';

const getDashoffset = (value) => {
    let RADIUS = 54;
    let CIRCUMFERENCE = 2 * Math.PI * RADIUS;
    let progress = value / 100;
    return CIRCUMFERENCE * (1 - progress);
} 

const LanguageIcon = ({language:{name, level, logoLevel, logo}}) => {

    return (
        <IconContainer>
            <HeaderContainer>
                <SvgContainer viewBox="0 0 120 120">
                    <CircleMeterContainer  cx="60" cy="60" r="54"/>
                    <CircleValueContainer cx="60" cy="60" r="54" strokeDashOffSet={getDashoffset(logoLevel)} />
                </SvgContainer>
                <LevelText><h1>{level}</h1></LevelText>
            </HeaderContainer>
            <ContentContainer>
                <Logo 
                    width = "60px"
                    height = "60px"
                    >
                        {getIconComponent(logo)}
                </Logo>
                <LogoNameContainer>
                    <p>{name}</p>
                </LogoNameContainer>
            </ContentContainer>
            
        </IconContainer>
    )
}


export default LanguageIcon;