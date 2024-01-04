import { useSelector } from "react-redux"
import { Navigate, Outlet } from "react-router-dom";

const PrivateRoutes = () => {
    const user = useSelector((store) => store.user);
    if (user.token == "") {
        return <Navigate to="/Login" />;
    } else {
        return <Outlet />;
    }
};
export default PrivateRoutes;