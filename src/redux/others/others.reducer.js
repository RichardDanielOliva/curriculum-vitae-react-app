import OthersActionTypes from './others.action';

const INITIAL_STATE = {
    filter: {
        hidden: false,
        optionSelected: '',
    },
    courses: {
        hiddenContent: true,
        viewAll: false,
    }
}

const OthersReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case OthersActionTypes.DISPLAY_OR_HIDDEN_COURSES:
            return {
                ...state,
                hiddenContent: !state.hiddenContent,
            }
        case OthersActionTypes.DISPLAY_OR_HIDDEN_ALL_COURSES:
            return {
                ...state,
                viewAll: !state.viewAll,
            }
        default:
            return state;
    }
};

export default OthersReducer;