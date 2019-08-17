import React from 'react';
import { useTranslation } from 'react-i18next';

import PublicationCard from '../publication-card/publication-card.component';

import publicationListContainer from './publication-list.styles';

const PublicationList = () =>{
    const [ t ] = useTranslation();
    const publications = t('publications');

    return(
        <publicationListContainer>
            {
                publications.map(({id, ...otherProps}) => (
                    <PublicationCard key={id} id={id} {...otherProps}/>  
                ))
            }
        </publicationListContainer>
    );
} 

export default PublicationList;