import React from 'react';
import { useTranslation } from 'react-i18next';

import LanguageCard from '../language-card/language-card.component';

import languageListContainer from './language-list.styles';

const LanguagesList = () =>{
    const [ t ] = useTranslation();
    const languages = t('languages');

    return(
        <languageListContainer>
            {
                languages.map(({id, ...otherProps}) => (
                    <LanguageCard key={id} id={id} {...otherProps}/>  
                ))
            }
        </languageListContainer>
    );
} 

export default LanguagesList;