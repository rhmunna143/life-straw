/* eslint-disable no-unused-vars */
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import ellipse from "../../assets/icons/Ellipse 3.png";

// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// left side images
import leftImg1 from "../../assets/icons/slider1/bottle-design.png";
import leftImg2 from "../../assets/icons/slider1/max.png";
import leftImg3 from "../../assets/icons/slider1/pink-bottle 1.png";
import leftImg4 from "../../assets/icons/slider1/pipe.png";

// rs images
import rightImg1 from "../../assets/icons/slider1/DSC00449 1.png";
import rightImg2 from "../../assets/icons/slider1/max-girl 1.png";
import rightImg3 from "../../assets/icons/slider1/pink bottle model.png";
import rightImg4 from "../../assets/icons/slider1/boy 1.png";
import FreeOrderBtn from "../../components/shared/FreeOrderBtn";
import { motion } from "framer-motion";


const sliderData = [
    {
        id: 1,

        // left
        leftImg: leftImg1,

        // right
        title: "LifeStraw Water Filter Bottle",
        subTitle: "Water Purification System",
        description: "It delivers a continuous supply of clean water with capacity and durability. Its sleek design and advanced technology makes household water purification simple and effective.",
        rightImg: rightImg1,
    },

    {
        id: 2,

        // left
        leftImg: leftImg2,

        // right
        title: "LifeStraw Max",
        subTitle: "LifeStraw Max",
        description: "For camping or emergencies, it offers impressive capacity and durability. This robust filter effectively removes bacteria, parasites, and microplastics, ensuring safe hydration in challenging environments.",
        rightImg: rightImg2,
    },

    {
        id: 3,

        // left
        leftImg: leftImg3,

        // right
        title: "LifeStraw Go Series",
        subTitle: "Go Water Filter Bottle",
        description: "It is substantially stylish yet a durable on-the-go solution. Its built-in filter cleans water, making it the perfect companion for your daily adventures.",
        rightImg: rightImg3,
    },

    {
        id: 4,

        // left
        leftImg: leftImg4,

        // right
        title: "LifeStraw (Personal)",
        subTitle: "Personal Straw Filter",
        description: "LifeStraw's portable solution for the outdoor explorers. With exceptional durability, it instantly transforms contaminated water into pure refreshment, removing bacteria and parasites on the go.",
        rightImg: rightImg4,
    },
]


// left side slider

const LeftSlider = () => {
    const images = [leftImg1, leftImg2, leftImg3, leftImg4];
    const animationDuration = 4;

    return (
        <div>
            {images.map((image, index) => (
                <motion.div
                    key={index}
                    className="absolute top-[8rem]"
                    initial={{
                        x: -300,
                        opacity: 1,
                    }}
                    animate={{
                        x: [-300, 0, 0, -300],
                        opacity: [1, 1, 1, 0],
                    }}
                    transition={{
                        duration: animationDuration,
                        delay: index * animationDuration,
                        repeat: Infinity,
                        repeatDelay: animationDuration * (images.length - 1),
                    }}
                >
                    <img src={image} alt={`slider-${index}`} />
                </motion.div>
            ))}
        </div>
    );
};

const SliderProducts = () => {
    return (
        <div className="flex justify-between">
            <div className="left relative h-screen">


                {/* left side sliders */}

                <LeftSlider />

                <img className="absolute z-[-10] top-0 w-[250px] my-auto" src={ellipse} alt="ellipse shape" />
            </div>

            <div className="right">

                <div className="absolute">
                    <FreeOrderBtn />
                </div>
            </div>

            <div className="right-marquee">

            </div>
        </div>
    );
};

export default SliderProducts;








{/* <motion.div className="absolute top-[8rem]"
                    initial={{
                        x: -300,
                        opacity: 1
                    }}

                    whileInView={{
                        x: [-300, 0, 0, -300],
                        opacity: [1, 1, 1, 0]
                    }}

                    transition={{
                        duration: 4,
                    }}
                >
                    <img src={leftImg1} alt="slider" />
                </motion.div> */}


{/* left 2 */ }

{/* <motion.div className="absolute top-[8rem]"
                    initial={{
                        x: -300,
                        opacity: 1
                    }}

                    whileInView={{
                        x: [-300, 0, 0, -300],
                        opacity: [1, 1, 1, 0]
                    }}

                    transition={{
                        duration: 4,
                        delay: 4
                    }}
                >
                    <img src={leftImg2} alt="slider" />
                </motion.div> */}


{/* left 3 */ }

{/* <motion.div className="absolute top-[8rem]"
                    initial={{
                        x: -300,
                        opacity: 1
                    }}

                    whileInView={{
                        x: [-300, 0, 0, -300],
                        opacity: [1, 1, 1, 0]
                    }}

                    transition={{
                        duration: 4,
                        delay: 8
                    }}
                >
                    <img src={leftImg3} alt="slider" />
                </motion.div> */}