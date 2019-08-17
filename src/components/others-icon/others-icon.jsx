import React from 'react';
import { connect } from 'react-redux';

import {getIconComponent} from '../utils/icons.utils';
import {displayOrHiddenCourses} from '../../redux/others/others.action';

import {IconContainer, TitleContainer, Logo} from './others-icons.style';

const OthersIcon = ({name, nameLogo, displayOrHiddenCourses, filterHidden, optionSelected}) => {
    return (
        <IconContainer filterHidden={filterHidden}>
            <TitleContainer filterHidden={filterHidden}>
                <p>{name}</p>
            </TitleContainer>
            
            <Logo 
                width = "60px"
                height = "60px"
                nameLogo={nameLogo}
                optionSelected={optionSelected}
                onClick={()=> displayOrHiddenCourses(nameLogo)}>
                    {getIconComponent(nameLogo)}
            </Logo>
        </IconContainer>
    )
}

const mapStateToProps = state => ({
    filterHidden: state.others.filter.hidden,
    optionSelected: state.others.filter.optionSelected
})

const mapDispatchToProps = dispatch => ({
    displayOrHiddenCourses: (nameLogo) => dispatch(displayOrHiddenCourses(nameLogo))
  });


export default connect(mapStateToProps, mapDispatchToProps)(OthersIcon);