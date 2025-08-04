import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    datas: [],
    filter: "all",
    lastRemovedItem: ''
}



export const dataSlice = createSlice({
    name: 'data',
    initialState,
    reducers: {
        addData: (state, action) => {

            state.datas = [...action.payload]
        },
        activeData: (state, action) => {
            state.datas = state.datas.map((data) =>
                data.name === action.payload
                    ? { ...data, isActive: !data.isActive }
                    : data
            );
        },
        toggleRemove: (state, action) => {
            state.datas = state.datas.map((data) =>
                data.name === action.payload
                    ? { ...data, isRemove: !data.isRemove }
                    : data
            );

            state.lastRemovedItem = action.payload;
        },
        unRemoveData: (state, action) => {
            state.datas = state.datas.map((data) =>
                data.name === action.payload
                    ? { ...data, isRemove: !data.isRemove }
                    : data
            );
            state.lastRemovedItem = '';
        },
        clearLastRemovedItem: (state) => {
            state.lastRemovedItem = '';
        },
        setFilter: (state, action) => {
            state.filter = action.payload;
        },
    }
})

export const { addData, activeData, toggleRemove, setFilter, unRemoveData, clearLastRemovedItem } = dataSlice.actions

export default dataSlice.reducer