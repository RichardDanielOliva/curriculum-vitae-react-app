import React from 'react';

import {PublicationCardContainer, HeaderCardContainer, ContentCardContainer, TitleContainer, InfoContainer, AuthorsContainer, DescriptionContainer, URLContainer} from './publication-card.styles';

const PublicationCard = (({title, publisher, publicationDate, authors, publicationURL, description}) => (
        <PublicationCardContainer>
            <HeaderCardContainer>
                <TitleContainer>
                    <h4>{title}</h4>
                </TitleContainer>
                <AuthorsContainer>
                    <h5>
                    {
                        authors.reduce((accumulatorAuthorsName, author) =>
                        (authors[authors.length-1].lastname !== author.lastname ?
                        `${accumulatorAuthorsName} ${author.name}, ${author.lastname} - `
                        : `${accumulatorAuthorsName} ${author.name}, ${author.lastname}`)
                        , "")
                    } 
                    </h5>                   
                </AuthorsContainer>
            </HeaderCardContainer>
            <ContentCardContainer>
                <InfoContainer>
                    <h5>{publicationDate} &#8226; {publisher} </h5>
                </InfoContainer>
                <DescriptionContainer>
                    {description}
                </DescriptionContainer>
                <URLContainer>
                    <a href={`mailto:${publicationURL}`}> ver publicacion </a>
                </URLContainer>
            </ContentCardContainer>
        </PublicationCardContainer>
));

export default PublicationCard;