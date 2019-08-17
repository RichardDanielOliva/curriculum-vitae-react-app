import React from 'react';
import { useTranslation } from 'react-i18next';

import HobbieCard from '../hobbie-card/hobbie-card.component';

import { HobbiesListContainer, HobbieCardContainer} from './hobbies-list.styles';

const LanguagesList = () =>{
    const [ t ] = useTranslation();
    const hobbies = t('hobbies');

    return(
        <HobbiesListContainer>
            {
                hobbies.map(({id, ...otherProps}) => (
                    <HobbieCardContainer>
                        <HobbieCard key={id} id={id} {...otherProps}/>  
                    </HobbieCardContainer>   
                ))
            }
        </HobbiesListContainer>
    );
} 

export default LanguagesList;