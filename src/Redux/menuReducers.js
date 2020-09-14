
/* eslint no-param-reassign: ["error", { "props": false }] */
import { createSlice } from '@reduxjs/toolkit';

const sliceMenu = createSlice({
    name: 'toggleMenu',
    initialState: {
        collapsed: true,
    },
    reducers: {
        toggleMenuSet: (state, action) => {
            const isCollapsed = action.payload;
            state.collapsed = isCollapsed;
        }
    }
})

const { actions, reducer } = sliceMenu;
export const {
    toggleMenuSet
  } = actions;
export default reducer;