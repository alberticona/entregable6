import axios from "axios";

const axiosMusic = axios.create({
    baseURL: "https://backend-final-project-dev-zdts.3.us-1.fl0.io"
});

export { axiosMusic };