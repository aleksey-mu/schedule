
/* eslint no-param-reassign: ["error", { "props": false }] */
import { createSlice } from '@reduxjs/toolkit';

const sliceUserRole = createSlice({
    name: 'userRole',
    initialState: {
        role: 'Student',
    },
    reducers: {
        switchUserRole: (state, action) => {
            state.role = action.payload;
        }
    }
})

const { actions, reducer } = sliceUserRole;
export const {
    switchUserRole
  } = actions;
export default reducer;