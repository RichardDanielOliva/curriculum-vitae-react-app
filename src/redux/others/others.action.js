import OthersActionTypes from './others.types';

export const displayOrHiddenCourses = (nameLogo) => ({
    type: OthersActionTypes.DISPLAY_OR_HIDDEN_SECTION,
    payload: nameLogo
});

export const displayOrHiddenAllCourses = () => ({
    type: OthersActionTypes.DISPLAY_OR_HIDDEN_ALL_COURSES
});