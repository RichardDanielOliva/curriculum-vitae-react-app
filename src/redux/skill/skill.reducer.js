import SkillActionTypes from './skill.types';
import {getSkillsAfterCheckSkill, listHaveItem} from './skill.utils';

const INITIAL_STATE = {
    proyectListHidden: true,
    filterHidden: false,
    skills: []
}

const skillReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case SkillActionTypes.ADD_OR_REMOVE_SKILL:
            const nextStateSkills = getSkillsAfterCheckSkill(state.skills, action.payload);
            return {
                ...state,
                skills: nextStateSkills,
                proyectListHidden: !listHaveItem(nextStateSkills),
                filterHidden: listHaveItem(nextStateSkills)
              };
        default:
            return state;
    }
};

export default skillReducer;