import React from 'react';

import {getIconComponent} from '../utils/icons.utils';

import './language-icon.style.scss';
import {IconContainer,SVGCicleContainer, ContentContainer, LevelText, Logo, LogoNameContainer } from './language-icon.style';

const getDashoffset = (value) => {
    let RADIUS = 54;
    let CIRCUMFERENCE = 2 * Math.PI * RADIUS;
    let progress = value / 100;
    return CIRCUMFERENCE * (1 - progress);
} 

const LanguageIcon = ({language:{name, level, logoLevel, logo}}) => {

    return (
        <IconContainer>
            <SVGCicleContainer>
                <svg class="progress-bar-language" viewBox="0 0 120 120">
                    <circle class="progress__meter" cx="60" cy="60" r="54" stroke-width="12" fill="transparent"/>
                    <circle class="progress__value" cx="60" cy="60" r="54" stroke-width="12" fill="transparent" stroke-dasharray="339.292" stroke-dashoffset={getDashoffset(logoLevel)} />
                </svg>
                <LevelText><h1>{level}</h1></LevelText>
            </SVGCicleContainer>
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