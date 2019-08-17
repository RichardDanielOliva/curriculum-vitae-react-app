import React from 'react';
import { connect } from 'react-redux';

import {getBackEndIcons, getIconComponent} from '../utils/icons.utils';
import {addOrRemoveSkill} from '../../redux/skill/skill.action';

import {BackendContainer, TitleContainer, IconContainer, Logo} from './skill-icons.style';

const BackEndIcons = ({filterHidden, skills, addOrRemoveSkill}) => {
    const backEndIcons = getBackEndIcons();
    return (
        <BackendContainer>
            <TitleContainer filterHidden={filterHidden}>
                <h4>Backend</h4>
            </TitleContainer>
            
            <IconContainer filterHidden={filterHidden}>
                {
                    backEndIcons.map(({name, id}) => (
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
        </BackendContainer>
    )
}

const mapStateToProps = state => ({
    filterHidden: state.skill.filterHidden,
    skills: state.skill.skills
})

const mapDispatchToProps = dispatch => ({
    addOrRemoveSkill: (skill) => dispatch(addOrRemoveSkill(skill))
  });

export default connect(mapStateToProps, mapDispatchToProps)(BackEndIcons);