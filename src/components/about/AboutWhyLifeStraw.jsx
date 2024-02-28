import childImg from "../../assets/images/child-with-water-glass 1.png";
import bottleImg from "../../assets/images/bottle.png";
import icon from "../../assets/icons/Layer_1.svg";

const AboutWhyLifeStraw = () => {
    return (
        <div className="px-4 grid grid-cols-1 lg:grid-cols-2 gap-5 lg:gap-0">
            <div className="mx-auto w-fit lg:mx-0">
                <h2 className="pl-14 text-3xl md:text-6xl font-normal tracking-[20px]">WHY <br /> LIFESTRAW</h2>
                <img src={childImg} alt="child img" className="mt-5 w-11/12 lg:w-auto ml-3 lg:ml-0" />
            </div>

            <div className="right bg-secondaryBg rounded-[33px] py-10 flex flex-col md:flex-row items-center">
                <div className="bottle-img">
                    <img src={bottleImg} alt="bottle" className="w-52" />
                </div>

                <div className="text text-xl space-y-6">
                    <div className="items-start flex gap-4">
                        <img src={icon} alt="icon" />
                        <p className="font-light tracking-[3.12px]">Traditional water purifier waste 3 times more water than Lifestraw.</p>
                    </div>

                    <div className="items-start flex gap-4">
                        <img src={icon} alt="icon" />
                        <p className="font-light tracking-[3.12px]">Traditional water purifier consume 1 Kw of electricity to filter 33.3 liter of fresh water. Lifestraw doesn’t require any electricity.</p>
                    </div>

                    <div className="items-start flex gap-4">
                        <img src={icon} alt="icon" />
                        <p className="font-light tracking-[3.12px]">Filter needs to be replaced after 3000 liter of water in Traditional water purifier. Lifestraw filter replacement after 500 liter</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutWhyLifeStraw;