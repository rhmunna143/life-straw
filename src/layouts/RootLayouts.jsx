import { Outlet } from "react-router-dom";
import NavBar from "../components/shared/NavBar";

const RootLayouts = () => {
    return (
        <div>
            <NavBar />
            <Outlet />
        </div>
    );
};

export default RootLayouts;