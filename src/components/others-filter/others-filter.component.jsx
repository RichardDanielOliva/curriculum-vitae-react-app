import React from 'react';
import { connect } from 'react-redux';
import { useTranslation } from 'react-i18next';

import OthersIcon from '../others-icon/others-icon';
import { FilterContainer, TitleContainer, ContentContainer, SubTitleContainer, IconsContainer}  from './others.style'

const OthersFilter = ({filterHidden}) => {
    const [ t ] = useTranslation();
    const othersLogo = t('othersLogo');

    return (
        <FilterContainer filterHidden={filterHidden}>
            <TitleContainer filterHidden={filterHidden}>
                <h1>Otros </h1>
            </TitleContainer>
           
            <ContentContainer filterHidden={filterHidden}>
                <SubTitleContainer>
                    <h5>Selecciona para desplegar mas informacion!</h5>
                </SubTitleContainer>
                <IconsContainer>
                    {
                        othersLogo.map(({id, ...othersProps}) => (
                            <OthersIcon key={id} {...othersProps} />
                        ))}
                </IconsContainer>
            </ContentContainer>  
        </FilterContainer>
    )
}

const mapStateToProps = state => ({
    filterHidden: state.others.filter.hidden,
})

export default connect(mapStateToProps)(OthersFilter);