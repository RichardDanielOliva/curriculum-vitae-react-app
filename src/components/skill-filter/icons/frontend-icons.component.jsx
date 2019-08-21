import React from 'react';
import { connect } from 'react-redux';

import {getFrontEndIcons, getIconComponent} from '../../utils/icons.utils';

import {addOrRemoveSkill} from '../../../redux/skill/skill.action';

import {FrontendContainer, TitleContainer, IconContainer, Logo} from './skill-icons.style';


const FrontEndIcons = ({filterHidden, skills, addOrRemoveSkill}) => {
    const frontEndIcons = getFrontEndIcons();
    return (
        <FrontendContainer>
            <TitleContainer filterHidden={filterHidden}>
                <h4>Frontend</h4>
            </TitleContainer>
           
            <IconContainer filterHidden={filterHidden}>
                {
                    frontEndIcons.map(({name, id}) => (
                        <Logo 
                            Key= {id} 
                            width = "60px"
                            height = "60px"
                            skills = {skills}
                            skillName = {name}
                            onClick={() => addOrRemoveSkill(name)}
                            >
                            {getIconComponent(name)}
                        </Logo>
                    ))
                }
            </IconContainer>
         </FrontendContainer>)
}

const mapStateToProps = state => ({
    filterHidden: state.skill.filterHidden,
    skills: state.skill.skills
})

const mapDispatchToProps = dispatch => ({
    addOrRemoveSkill: (skill) => dispatch(addOrRemoveSkill(skill))
  });

export default connect(mapStateToProps, mapDispatchToProps)(FrontEndIcons);