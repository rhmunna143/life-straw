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
import Marquee from "react-fast-marquee";

// bottles gallery 1

import bottle1 from "../../assets/icons/slider1/bottles/pink-bottle 1.png";
import bottle2 from "../../assets/icons/slider1/bottles/sky-blue-bottle.png";
import bottle3 from "../../assets/icons/slider1/bottles/white-bottle.png";

// bottles gallery 2

import bottle4 from "../../assets/icons/slider1/bottles/sayan-blue.png";
import bottle5 from "../../assets/icons/slider1/bottles/orange-bottle.png";
import bottle6 from "../../assets/icons/slider1/bottles/navy-blue-bottle.png";

// bottles gallery 3

import bottle7 from "../../assets/icons/slider1/bottles/pink-bottle 1.png";
import bottle8 from "../../assets/icons/slider1/bottles/sky-blue-bottle.png";
import bottle9 from "../../assets/icons/slider1/bottles/white-bottle.png";

// marquee variables

const mark1 = [bottle1, bottle2, bottle3];
const mark2 = [bottle4, bottle5, bottle6];
const mark3 = [bottle7, bottle8, bottle9];

let animationDuration = 3;

import React from 'react';

const BottleMarquee = ({ bottles }) => {
    return (
        <div className="flex flex-col gap-4 w-fit mx-auto">
            {
                bottles.map((item, index) => <img key={index} src={item} className="w-40" />)
            }
        </div>
    );
};


// slider data here

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
                    className="absolute top-[7rem] left-[-14rem] md:left-0"
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

// middle side slider

const MiddleSlider = () => {
    const animationDuration = 4;

    return (
        <div>
            {sliderData.map((item, index) => (
                <motion.div
                    key={index}

                    className="absolute md:ml-[3rem] left-[-7rem] md:left-16 top-[22rem] md:top-0 px-4 md:px-0"

                    initial={{
                        y: 100,
                        opacity: 1,
                    }}

                    animate={{
                        y: [100, 0, 0, 100],
                        opacity: [0, 1, 1, 0],
                    }}

                    transition={{
                        duration: animationDuration,
                        delay: index * animationDuration,
                        repeat: Infinity,
                        repeatDelay: animationDuration * (sliderData.length - 1),
                    }}
                >
                    <div className="lg:ml-[-16rem] mt-[-10rem]">
                        <h4 className="font-semibold">{item.title}</h4>
                        <h2 className="text-2xl text-subTitle mt-2">{item.subTitle}</h2>
                        <p className="mt-5 text-primary">{item.description}</p>
                    </div>
                    <img src={item.rightImg} alt={`slider-${index}`} className="w-auto mt-5 rounded-[33px]" />
                </motion.div>
            ))}
        </div>
    );
};

const SliderProducts = () => {
    return (
        <div className="flex flex-col md:flex-row flex-wrap justify-between items-center">
            <div className="left relative h-screen">


                {/* left side sliders */}

                <LeftSlider />

                <img className="absolute left-[-14rem] md:left-0 z-[-10] top-0 w-[250px] my-auto" src={ellipse} alt="ellipse shape" />
            </div>

            <div className="right middle">

                <div className="absolute">
                    <MiddleSlider />
                </div>

                <div className="relative lg:left-[-110%] md:left-[-70%] md:top-[-10rem] top-20 px-4 md:px-0 lg:top-[20%]">
                    <FreeOrderBtn />
                </div>
            </div>

            <div className="right-marquee bg-white relative top-[40rem] md:top-[30rem] lg:top-0 lg:left-0 left-[1rem] md:left-[-15rem]">
                <h6 className="text-right text-xl tracking-[4px] relative right-12 mb-4">OUR FEATURED GO <br /> SERIES</h6>
                <div className="h-60 bg-white left-[-8rem]">

                    <marquee direction="up" height="100%">
                        <BottleMarquee bottles={mark1} />
                        <BottleMarquee bottles={mark2} />
                        <BottleMarquee bottles={mark3} />
                    </marquee>

                </div>
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