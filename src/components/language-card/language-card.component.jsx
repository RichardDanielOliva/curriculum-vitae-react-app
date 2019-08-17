import React from 'react';

import LanguageIcon from '../language-icon/language-icon.component';

import {LanguageCardContainer, TitleContainer, SubTitleContainer, IconsContainer, IconContainer} from './language-card.style';

const LanguageCard = (({name, globalLevel, speaking, listening, writing, reading}) => (
        <LanguageCardContainer>
                <TitleContainer>
                        <h3>{name.toUpperCase()}</h3>
                </TitleContainer>
                <SubTitleContainer>
                        <h4>{globalLevel}</h4>
                </SubTitleContainer>
                
                <IconsContainer>
                    <IconContainer>
                        <LanguageIcon language={speaking}/>
                    </IconContainer>
                    <IconContainer>
                         <LanguageIcon language={listening}/>
                    </IconContainer>
                    <IconContainer>
                        <LanguageIcon language={writing}/>
                    </IconContainer>
                    <IconContainer>
                        <LanguageIcon language={reading}/>
                    </IconContainer>
                </IconsContainer>
        </LanguageCardContainer>
));

export default LanguageCard;