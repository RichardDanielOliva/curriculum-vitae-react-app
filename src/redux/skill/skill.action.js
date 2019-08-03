import SkillActionTypes from './skill.types';

export const addOrRemoveSkill = (skill) => ({
    type: SkillActionTypes.ADD_OR_REMOVE_SKILL,
    payload: skill
})