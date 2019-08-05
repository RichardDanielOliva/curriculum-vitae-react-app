import React from 'react';
import { connect } from 'react-redux';

import {getBackEndIcons, getIconComponent} from '../utils/icons.utils';
import {addOrRemoveSkill} from '../../redux/skill/skill.action';

import './skill-icons.style.scss';

const BackEndIcons = ({filterHidden, skills, addOrRemoveSkill}) => {
    const backEndIcons = getBackEndIcons();
    return (
        <div className="backend text-center">
        <h4 className={filterHidden ? 'hidden' : 'backend-title'}>Backend</h4>
            <div className="icons">
                {
                    backEndIcons.map(({name, id}) => (
                        <div Key={id} className={(skills.includes(name)) ? 'logo-selected logo' : 'logo'}>
                            {getIconComponent(name, addOrRemoveSkill)}
                        </div>
                    ))
                }
            </div>
        </div>
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