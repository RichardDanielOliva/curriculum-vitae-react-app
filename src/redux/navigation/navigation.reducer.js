import NavigationActionTypes from './navigation.types';

const INITIAL_STATE = {
    navigationClassName: "collapse navbar-collapse"
}

const NavigationReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case NavigationActionTypes.COLLAPSE_NAV_BAR:
           return {
                ...state,
                navigationClassName: action.payload
            }
        default:
            return state;
    }
};

export default NavigationReducer;