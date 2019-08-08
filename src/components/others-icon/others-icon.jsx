import React from 'react';

import {getIconComponent} from '../utils/icons.utils';

import {IconContainer, TitleContainer, Logo} from './others-icons.style';

const OthersIcon = ({name, nameLogo}) => {
    return (
        <IconContainer>
            <TitleContainer>
                <p>{name}</p>
            </TitleContainer>
            
            <Logo 
                width = "60px"
                height = "60px"
                nameLogo={nameLogo}
                onClick={()=> console.log("CLICKED")}>
                    {getIconComponent(nameLogo)}
            </Logo>
        </IconContainer>
    )
}

export default OthersIcon;