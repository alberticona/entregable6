import { createSlice } from "@reduxjs/toolkit";
import { axiosMusic } from "../../utils/configAxios";


const userSlice = createSlice({
    name: "user",
    initialState: {
        email: "",
        name: "",
        token: "",
    },
    reducers: {
        setLoginData: (state, action) => {
            const loginData = action.payload;
            // {
            //     name: "adsgf",
            //     email: "test@test.com",
            //     token: "s5dvsdv6565"
            // }
            //? Forma 1
            // state.email = loginData.email;
            // state.name = loginData.name;
            // state.token = loginData.token;
            return { ...state, ...loginData};
        },
    },
});

const { setLoginData } = userSlice.actions;

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