import logo1 from "../../assets/icons/Layer_2.svg";
import logo2 from "../../assets/icons/Layer_3.svg";

const InvestSection = () => {
    return (
        <div className="pb-32 px-4 flex gap-8 items-center">
            <div className="round bg-primary px-8 py-8 md:py-4 rounded-[73px] w-1/2 h-fit flex items-center gap-5 lg:gap-20 flex-col lg:flex-row">
                <div className="logo flex gap-5">
                    <img src={logo1} alt="logo" />
                    <img src={logo2} alt="logo" />
                </div>

                <div className="text-white font-medium">
                    <p>
                        We believe everyone deserves equitable access to safe water. For every product purchased, a school child receives safe water for a year
                    </p>
                </div>
            </div>

            <div className="right">
                <h3 className="text-3xl md:text-5xl font-thin uppercase leading-[120%]">Invest once, <span className="bg-primaryBg px-3 py-1 rounded-[33px]">enjoy</span> <br /> clean water for <span style={{ border: "1px solid black" }} className="px-3 py-0.5 rounded-[33px]">years</span></h3>
            </div>
        </div>
    );
};

export default InvestSection;