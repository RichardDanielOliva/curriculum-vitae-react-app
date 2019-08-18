import React from 'react';

import {getIconComponent} from '../utils/icons.utils';

import { CommingSoonContainer, TitleContainer, LogoContainer} from './coming-soon.styles';

const CommingSoon = () =>{

    return(
        <CommingSoonContainer>
            <TitleContainer>
                <h1>En construccion</h1>
            </TitleContainer>

            <LogoContainer>
                {getIconComponent("coming-soon")}
            </LogoContainer>
        </CommingSoonContainer>
    );
} 

export default CommingSoon;