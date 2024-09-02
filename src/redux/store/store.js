import { configureStore } from "@reduxjs/toolkit";
import profileSlice from "../slice/profile/profileSlice";


export default configureStore({
    reducer : {
        profile: profileSlice,
    }
})