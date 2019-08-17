import React from 'react';

import {getIconComponent} from '../utils/icons.utils';

import {HobbieCardContainer, Logo} from './hobbie-card.style';

const HobbieCard = ({name, nameLogo}) => {

    return (
            <HobbieCardContainer>
                <Logo>
                        {getIconComponent(nameLogo)}
                </Logo>
                <h4>{name}</h4>
            </HobbieCardContainer>
    )
}


export default HobbieCard;