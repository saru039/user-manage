import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    users: []
};

const userSlice = createSlice({
     name: "user",
     initialState,
     reducers: {
        setUsers: (state, action)=>{
            state.users = [...state.users, ...action.payload];
        },
        deleteUsers: (state, action)=>{
            state.users = state.users.filter((user, index)=>index !== action.payload)
        }
     }
});

export const {setUsers, deleteUsers} = userSlice.actions;

export default userSlice.reducer;