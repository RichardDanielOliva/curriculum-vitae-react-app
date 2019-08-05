import React from 'react';
import { connect } from 'react-redux';

import {getFrontEndIcons, getIconComponent} from '../utils/icons.utils';

import {addOrRemoveSkill} from '../../redux/skill/skill.action';

import './skill-icons.style.scss';

const FrontEndIcons = ({filterHidden, skills, addOrRemoveSkill}) => {
    const frontEndIcons = getFrontEndIcons();
    return (
        <div className="frontend text-center ">
            <h4 className={filterHidden ? 'hidden' : 'frontend-title'}>Frontend</h4>
            <div className="icons">
                {
                    frontEndIcons.map(({name, id}) => (
                        <div Key={id} className={(skills.includes(name)) ? 'logo-selected logo' : 'logo'}>
                            {getIconComponent(name, addOrRemoveSkill)}
                        </div>
                    ))
                    }
                </div>
         </div>)
}

const mapStateToProps = state => ({
    filterHidden: state.skill.filterHidden,
    skills: state.skill.skills
})

const mapDispatchToProps = dispatch => ({
    addOrRemoveSkill: (skill) => dispatch(addOrRemoveSkill(skill))
  });

export default connect(mapStateToProps, mapDispatchToProps)(FrontEndIcons);