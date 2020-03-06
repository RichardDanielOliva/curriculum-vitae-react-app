import React from 'react';
import { connect } from 'react-redux';
import { useTranslation } from 'react-i18next';

import OthersIcon from '../others-icon/others-icon';
import { FilterContainer, TitleContainer, ContentContainer, SubTitleContainer, IconsContainer, IconContainer}  from './others.style'

const OthersFilter = ({filterHidden}) => {
    const [ t ] = useTranslation();
    const othersLogo = t('othersLogo');
    const headers = t('page_headers');

    return (
        <FilterContainer filterHidden={filterHidden}>
            <TitleContainer filterHidden={filterHidden}>
                <h1>
                    {headers.others.title}
                </h1>
            </TitleContainer>
           
            <ContentContainer filterHidden={filterHidden}>
                <SubTitleContainer filterHidden={filterHidden}>
                    <h3>
                        {headers.others.subtitle}
                    </h3>
                </SubTitleContainer>
                <IconsContainer>
                    {
                        othersLogo.map(({id, ...othersProps}) => (
                            <IconContainer key={id}>
                                <OthersIcon {...othersProps} />
                            </IconContainer>
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