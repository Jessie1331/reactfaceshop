import {createSlice} from '@reduxjs/toolkit'

const initialState = {
 isLogIn: false,
 email: null,
 useName:null,
 userID:null,
}
const authSlice = createSlice({
    name:"auth",
    initialState,
    reducers:{
        SET_ACTIVE_USER: (state,action) => {
        console.log(action.payload)
        const{email,userName, userID} = action.payload
        state.isLoggedIn = true;
        state.email = email;
        state.userName = userName;
        state.userId = userID;
        },},
    
});
export const {SET_ACTIVE_USER} = authSlice.actions

export const selectIsLoggedIn = (state) => state.auth.isLoggedIn;
export const selectEmail = (state) => state.auth.email;
export const selectUserName = (state) => state.auth.UserName;
export const selectUserID = (state) => state.auth.userID;



export default authSlice.reducer