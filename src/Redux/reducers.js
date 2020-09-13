
/* eslint no-param-reassign: ["error", { "props": false }] */
import { createSlice } from '@reduxjs/toolkit';

// export const toggleMenu = createAction('toggleMenu/toggle')

const initialState = {
    collapsed: true,
};

const toggleMenu = createSlice({
    name: 'toggleMenu',
    initialState,
    reducers: {
        toggleMenuSet: (state, action) => {
            const isCollapsed = action.payload;
            state.collapsed = isCollapsed;
        }
    }
})

const { actions, reducer } = toggleMenu;
export const {
    toggleMenuSet
  } = actions;
export default reducer;