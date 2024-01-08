import { createSlice } from "@reduxjs/toolkit";
import { axiosMusic } from "../../utils/configAxios";

const initialState = {
    email: "",
    name: "",
    token: "",
}

const userSlice = createSlice({
    name: "user",
    initialState: localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user")) : initialState,
    reducers: {
        setLoginData: (state, action) => {
            const loginData = action.payload;
            const newState = { ...state, ...loginData };
            localStorage.setItem("user", JSON.stringify(newState));
            return newState;
        },
        logout: () => {
            localStorage.removeItem("user");
            return initialState;
        },
    },
});

export const { setLoginData, logout } = userSlice.actions;

export default userSlice.reducer;

export const login = (data, navigate) => (dispatch) => {
    axiosMusic
        .post("/api/auth/login", data)
        .then(({ data }) => {
            dispatch(setLoginData(data));
            navigate("/");
        })
        .catch((err) => console.log(err));
};