import childImg from "../../../assets/images/child-with-water-glass 1.png";
import bottle from "../../../assets/images/lifestraw1.png";
import cork from "../../../assets/images/life-straw21.png";
import onlyCork from "../../../assets/images/life-straw3.png";
import icon from "../../../assets/icons/Layer_1.svg";
import { motion } from "framer-motion";

const AboutWhyLifeStraw = () => {
    return (
        <motion.div className="px-4 grid grid-cols-1 lg:grid-cols-2 gap-5 lg:gap-0"
            initial={{
                y: 300
            }}

            whileInView={{
                y: 0
            }}

            transition={{
                duration: 1.5
            }}
        >
            <div className="mx-auto md:ml-0 md:w-fit lg:mx-0 mt-[-25rem] lg:mt-0">
                <h2 className="pl-14 w-80 md:w-auto text-xl md:text-6xl font-normal tracking-[20px]">WHY <br /> LIFESTRAW</h2>
                <img src={childImg} alt="child img" className="mt-5 w-4/5 lg:w-auto ml-3 lg:ml-0" />
            </div>

            <div className="right bg-secondaryBg rounded-[33px] py-10 flex flex-col md:flex-row items-center justify-between">


                <div className="relative hidden md:flex">
                    {/* animated bottle */}

                    <motion.div className="bottle-img absolute top-[-11rem] z-10"
                        initial={{
                            y: -300
                        }}

                        whileInView={{
                            y: 0
                        }}

                        transition={{
                            duration: 2
                        }}
                    >
                        <img src={bottle} alt="bottle" className="w-44" />
                    </motion.div>


                    {/* animated cork */}

                    <motion.div className="cork-img absolute top-[-15rem] left-9 z-0"
                        initial={{
                            y: -400
                        }}

                        whileInView={{
                            y: 0
                        }}

                        transition={{
                            duration: 2
                        }}
                    >
                        <img src={cork} alt="cork" className="w-32  right-5" />
                    </motion.div>

                    {/* animated cork only */}

                    <motion.div className="cork-img-4 absolute top-[-15rem] left-9 z-20"
                        initial={{
                            opacity: 0,
                            y: 0,
                        }}

                        whileInView={{
                            opacity: 1,
                            y: 0
                        }}

                        transition={{
                            duration: 0,
                            delay: 2
                        }}
                    >
                        <img src={onlyCork} alt="cork" className="w-32  right-5" />
                    </motion.div>
                </div>

                <div className="text text-lg space-y-6 px-2 md:px-0 w-80 md:w-[470px] relative md:pt-28">
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
        </motion.div>
    );
};

export default AboutWhyLifeStraw;