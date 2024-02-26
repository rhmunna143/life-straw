import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import Container from "./Container";
import Search from "../search/Search";
import cartIcon from "../../assets/icons/ic_outline-shopping-bag.svg";

const NavBar = () => {
    return (
        <Container>
            <div className="bg-bg flex flex-col md:flex-row flex-wrap justify-between items-center">
                <div className="logo">
                    <Link to={"/"}>
                        <img className="h-24 w-40" src={logo} alt="logo" />
                    </Link>
                </div>

                <div className="menu flex flex-col md:flex-row gap-4 items-center">
                    <div className="menu-1 bg-primary flex gap-4 py-3 px-8 rounded-[33px]">
                        <Link to={"/shop"} className="text-white font-medium no-underline">
                            Shop
                        </Link>
                        <Link to={"/technology"} className="text-white font-medium no-underline">
                            Technology
                        </Link>
                        <Link to={"/support"} className="text-white font-medium no-underline">
                            Support
                        </Link>
                        <Link to={"/corporate-sales"} className="text-white font-medium no-underline">
                            Corporate Sales
                        </Link>
                    </div>

                    <div className="menu-2 bg-primaryBg py-3 h-5 pl-10 pr-5 rounded-[33px] flex items-center gap-4">
                        <Search/>
                        <Link>
                            <img src={cartIcon} alt="cart icon" />
                        </Link>
                    </div>
                </div>
            </div>
        </Container>
    );
};

export default NavBar;