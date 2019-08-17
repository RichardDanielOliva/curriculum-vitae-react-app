import OthersActionTypes from './others.types';
import {displayOrHiddenSection, optionEmpty} from './others.utils';

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
        case OthersActionTypes.DISPLAY_OR_HIDDEN_SECTION:
                const nextOptionSelected = displayOrHiddenSection(state.filter.optionSelected, action.payload);
            return {
                ...state,
                filter: {
                    hidden: !optionEmpty(nextOptionSelected),
                    optionSelected: nextOptionSelected,
                },
            }
        default:
            return state;
    }
};

export default OthersReducer;