import {
  TOGGLE_BOXED_LAYOUT,
  TOGGLE_COLLAPSED_NAV,
  TOGGLE_NAV_BEHIND,
  TOGGLE_FIXED_HEADER,
  CHANGE_SIDEBAR_WIDTH,
  CHANGE_COLOR_OPTION,
  CHANGE_THEME
} from '../constants/actionTypes';

const initialSettings = {
  layoutBoxed: false,               // true, false
  navCollapsed: false,              // true, false
  navBehind: false,                 // true, false
  fixedHeader: true,                // true, false
  sidebarWidth: 'middle',           // small, middle, large
  colorOption: '14',                // String: 11,12,13,14,15,16; 21,22,23,24,25,26; 31,32,33,34,35,36
  theme: 'light',                   // light, gray, dark
};

const settings = (state = initialSettings, action) => {
    // console.log(action)
  switch (action.type) {
    case TOGGLE_BOXED_LAYOUT:
      return {
        ...state,
        layoutBoxed: action.isLayoutBoxed
      };
    case TOGGLE_COLLAPSED_NAV:
      return {
        ...state,
        navCollapsed: action.isNavCollapsed
      };
    case TOGGLE_NAV_BEHIND:
      return {
        ...state,
        navBehind: action.isNavBehind
      };
    case TOGGLE_FIXED_HEADER:
      return {
        ...state,
        fixedHeader: action.isFixedHeader
      };
    case CHANGE_SIDEBAR_WIDTH:
      return {
        ...state,
        sidebarWidth: action.sidebarWidth
      };
    case CHANGE_COLOR_OPTION:
      return {
        ...state,
        colorOption: action.colorOption
      };
    case CHANGE_THEME:
      return {
        ...state,
        theme: action.theme
      };
    default:
      return state;
  }
};

export default settings;
