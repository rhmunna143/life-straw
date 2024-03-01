/* eslint-disable no-unused-vars */
import "./BottleSlider.css";

// left image
import handImage from "../../../assets/images/bottle-slider-2/hand-with-orange-bottle 1.png";

// right images
import rightImage1 from "../../../assets/images/bottle-slider-2/image 17.png";
import rightImage2 from "../../../assets/images/bottle-slider-2/used-plastic-bottle-background-recycle-blue-empty-trash-generative-ai-aig15.png";
import rightImage3 from "../../../assets/images/bottle-slider-2/close-up-water-purifier-wall-home.png";
import rightImage4 from "../../../assets/images/bottle-slider-2/woman-carrying-drinking-waters-with-gloved-hands-coronavirus-pandemic.png";
import rightImage5 from "../../../assets/images/bottle-slider-2/electricity-bill-light-bulb-household-cost-increase-concept.png";
import { motion } from "framer-motion";

// slider data
const sliderData = [
    {
        id: 1,
        // left side

        leftImg: handImage,
        title: "",
        subTitle: "",
        description: "",

        // right side

        rightImg: rightImage1,
    },

    {
        id: 2,
        // left side

        leftImg: "",
        title: "THANK YOU FOR SAVING",
        subTitle: "Water wastage",
        description: "For every 1 liter of filtered water, an average RO purifier wastes around 3 liters of water",

        // right side

        rightImg: rightImage2,
    },

    {
        id: 3,
        // left side

        leftImg: "",
        title: "THANK YOU FOR SAVING",
        subTitle: "Water wastage",
        description: "For every 1 liter of filtered water, an average RO purifier wastes around 3 liters of water",

        // right side

        rightImg: rightImage3,
    },

    {
        id: 4,
        // left side

        leftImg: "",
        title: "THANK YOU FOR SAVING",
        subTitle: "Man Hour & Transportation Wastage",
        description: "The water purifier needs to filter 33.3 liters of fresh water to consume 1 kW of electricity",

        // right side

        rightImg: rightImage4,
    },

    {
        id: 5,
        // left side

        leftImg: "",
        title: "THANK YOU FOR SAVING",
        subTitle: "Electric Bill wastage",
        description: "The water purifier needs to filter 33.3 liters of fresh water to consume 1 kW of electricity",

        // right side

        rightImg: rightImage5,
    },
]


const BottleSliderSection = () => {
    const animationDuration = 4;

    return (
        <div className="mt-[45rem] md:mt-[30rem] lg:mt-8 lg:mb-28 h-screen">

            {/* left side slider */}
            <div className="left left-bg h-screen relative z-50 flex flex-col justify-center">
                {sliderData.map((item, index) => (
                    <motion.div
                        key={index}
                        className="absolute md:left-0"

                        initial={{
                            x: index == 0 ? -300 : 0,
                            y: index == 0 ? 0 : 200,
                            opacity: index == 0 ? 1 : 0,
                        }}

                        animate={{
                            x: index == 0 ? [-300, 0, 0, -300] : 0,
                            y: index == 0 ? 0 : [200, 0, 0, 200],
                            opacity: index == 0 ? [1, 1, 1, 0] : [0, 1, 1, 0],
                        }}

                        transition={{
                            duration: animationDuration,
                            delay: index * animationDuration,
                            repeat: Infinity,
                            repeatDelay: animationDuration * (sliderData.length - 1),
                        }}
                    >
                        {
                            item.leftImg && <img src={item?.leftImg} alt={`slider-${index + 1}`} className="lg:w-4/5 w-4/5 md:w-1/2" />
                        }

                        {
                            item.title &&

                            <div className="text-white relative left-[4rem] px-4 md:px-0">
                                <h2 className="text-4xl font-bold w-72">{item.title}</h2>
                                <h3 className="mt-12 mb-8 w-80 text-3xl font-normal">{item.subTitle}</h3>
                                <p className="w-96">{item.description}</p>
                            </div>
                        }
                    </motion.div>
                ))}
            </div>



            {/* right side slider */}
            <div className="right h-screen relative z-30 right-0 ">
                {
                    sliderData.map((item, index) => (
                        <motion.div
                            key={index}
                            className="absolute lg:top-[-679px] right-0"

                            initial={{
                                opacity: 0,
                            }}

                            animate={{
                                opacity: [0, 1, 1, 1, 0],
                            }}

                            transition={{
                                duration: animationDuration,
                                delay: index * animationDuration,
                                repeat: Infinity,
                                repeatDelay: animationDuration * (sliderData.length - 1),
                            }}
                        >
                            <img src={item.rightImg} alt="right slider image" className="lg:w-[55vw] lg:h-screen" />
                        </motion.div>
                    ))}
            </div>
        </div>
    );
};

export default BottleSliderSection;