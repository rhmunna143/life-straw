import { Outlet } from "react-router-dom";
import NavBar from "../components/shared/NavBar";
import Footer from "../components/shared/Footer";

const RootLayouts = () => {
    return (
        <div style={{ overflowX: "hidden" }}>
            <NavBar />
            <div className="min-h-screen">
                <Outlet />
            </div>
            <Footer />
        </div>
    );
};

export default RootLayouts;