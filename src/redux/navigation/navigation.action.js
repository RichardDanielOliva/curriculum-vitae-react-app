import NavigationActionTypes from './navigation.types';

export const collapseNavBar = (navbarClassName) => ({
    type: NavigationActionTypes.COLLAPSE_NAV_BAR,
    payload: navbarClassName
});
