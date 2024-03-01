// BottleAnimation.js

import bottle from "../../../assets/images/lifestraw1.png";
import straightCork from "../../../assets/images/life-straw21.png";
import corkOnly from "../../../assets/images/life-straw3.png";
import gifBottle from "../../../assets/images/bottle.png";
import { motion, useAnimation } from 'framer-motion';
import { useEffect, useState } from "react";
import Container from "../../shared/Container";
import FreeOrderBtn from "../../shared/FreeOrderBtn";

const DraftBottleAnimation = () => {
    const [scrollDown, setScrollDown] = useState(false);
    const controls = useAnimation();
    const bottleControls = useAnimation();
    const onlyCorkControls = useAnimation();

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            const triggerPoint = window.innerHeight * 0.2; // 50vh

            if (scrollPosition > triggerPoint && !scrollDown) {
                setScrollDown(true);
            } else if (scrollPosition <= triggerPoint && scrollDown) {
                setScrollDown(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [scrollDown]);

    useEffect(() => {
        if (scrollDown) {
            // If scrolled down, reverse the animation
            controls.start({
                rotate: 0,
                x: 0,
                y: 80,
            });

            bottleControls.start({
                rotate: 0,
                y: 80
            })

            onlyCorkControls.start({
                opacity: 1,
                y: 80,
                transition: { delay: 1.7, duration: 0 }
            })

        } else {
            // If not scrolled down, play the forward animation
            controls.start({
                rotate: -19,
                x: -50,
                y: -100,
                opacity: 1
            });

            bottleControls.start({
                rotate: -19
            })

            onlyCorkControls.start({
                opacity: 0,
                // transition: {delay: 2}
            })
        }
    }, [controls, scrollDown, bottleControls, onlyCorkControls]);

    return (
        <Container>
            <div className={`bottle-container-2 relative lg:h-screen h-fit mb-20 pb-20 flex flex-col gap-10 lg:gap-0 lg:flex-row justify-between items-center lg:mt-[-10rem] mt-[-20rem] z-[-10] w-96 md:w-auto`}>

                {/* bottle hidden in large device */}

                <div className="flex lg:hidden mt-96 w-fit mx-auto relative">
                    <img src={gifBottle} alt="bottle gif" className="w-52" />

                    {/* bottle bg hidden in large device */}

                    <div className="right flex lg:hidden bg-primary text-white rounded-[33px] h-20 pt-40 md:pr-10 md:pl-28 z-[-5] mx-auto lg:mx-0 px-5 md:px-0 absolute top-[65%] left-[-4rem]">
                        <div className="parent flex gap-4">
                            <div className="left">
                                Pure <br />
                                Water
                            </div>

                            <div className="middle">
                                <svg width="156" height="2" viewBox="0 0 156 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M0 1L156 0.999986" stroke="white" strokeWidth="1.5" />
                                </svg>

                            </div>

                            <div className="right">
                                Pure <br />
                                Impact
                            </div>
                        </div>
                    </div>
                </div>




                {/* banner animated text */}

                <motion.div className="left lg:mt-96 mt-20 px-4 md:px-0 w-72 md:w-auto md:mx-0"
                    initial={{
                        opacity: 0,
                        x: 250
                    }}

                    whileInView={{
                        opacity: 1,
                        x: 0
                    }}

                    transition={{
                        duration: 2
                    }}
                >
                    <h2 className="lg:text-5xl md:text-2xl text-xl font-medium">UNSAFE TO SAFE WATER <br /> WITHIN 60 SECONDS</h2>

                    <p className="text-subTitle text-lg md:text-xl font-medium mt-5">Purify Any Water + Germ-Free Portable Water Filter</p>

                    <p className="mt-4 text-sm w-80 md:w-auto lg:text-base">Transform any source into pure refreshment, and keep your <br /> carriers germ-free.</p>

                    <div className="mt-5">
                        <FreeOrderBtn />
                    </div>
                </motion.div>



                {/* bottle animated */}

                <motion.div className="bottle-2 lg:absolute lg:left-[52%] lg:top-1/2 z-10 hidden lg:flex"
                    initial={{
                        rotate: 0
                    }}

                    whileInView={{
                        rotate: -19
                    }}

                    animate={bottleControls}

                    transition={{
                        duration: 2
                    }}
                >
                    {/* bottle image */}
                    <img src={bottle} alt="Bottle" className="bottle-img-2 w-[60%]" />
                </motion.div>




                {/* cork animated */}

                <motion.div className="cork-2 lg:absolute left-[55%] lg:top-[41%] top-0 z-5 hidden lg:flex"
                    initial={{
                        rotate: 0,
                        x: 0,
                        y: 0
                    }}

                    whileInView={{
                        rotate: -19,
                        x: -50,
                        y: -100
                    }}

                    animate={controls}

                    transition={{
                        duration: 2
                    }}
                >
                    {/*cork image */}
                    <img src={straightCork} alt="Cork" className="cork-img-2 w-[60%]" />
                </motion.div>




                {/* cork only animated */}

                <motion.div className="cork-2 absolute left-[55%] top-[41%] z-20 hidden lg:flex"
                    initial={{
                        opacity: 1,
                        y: 0
                    }}

                    whileInView={{
                        opacity: 0
                    }}

                    animate={onlyCorkControls}

                    transition={{
                        duration: 0
                    }}
                >
                    {/*cork image */}
                    <img src={corkOnly} alt="Cork" className="cork-img-2 w-[60%]" />
                </motion.div>


                {/* bottle bg flex in large device */}

                <div className="right hidden lg:flex bg-primary text-white lg:relative lg:top-56 lg:right-0 rounded-[33px] h-20 pt-40 md:pr-24 md:pl-40 z-[-10] mx-auto lg:mx-0 px-5 md:px-0 pb-5">
                    <div className="parent flex gap-4">
                        <div className="left">
                            Pure <br />
                            Water
                        </div>

                        <div className="middle">
                            <svg width="156" height="2" viewBox="0 0 156 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M0 1L156 0.999986" stroke="white" strokeWidth="1.5" />
                            </svg>
                        </div>

                        <div className="right">
                            Pure <br />
                            Impact
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    );
};

export default DraftBottleAnimation;