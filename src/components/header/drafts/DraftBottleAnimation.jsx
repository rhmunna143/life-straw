// BottleAnimation.js

import bottle from "../../../assets/images/lifestraw1.png";
import straightCork from "../../../assets/images/life-straw21.png";
import corkOnly from "../../../assets/images/life-straw3.png";
import gifBottle from "../../../assets/images/bottle.gif";
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
            const triggerPoint = window.innerHeight * 0.4; // 50vh

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
                y: 0,
            });

            bottleControls.start({
                rotate: 0
            })

            onlyCorkControls.start({
                opacity: 1,
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
            <div className={`bottle-container-2 relative lg:h-screen h-fit mb-20 pb-20 flex flex-col gap-10 lg:gap-0 lg:flex-row justify-between items-center lg:mt-[-10rem] mt-[-20rem] z-[-10]`}>

                <div className="flex lg:hidden mt-80 w-fit mx-auto">
                    <img src={gifBottle} alt="bottle git" />
                </div>

                <motion.div className="left lg:mt-96"
                    initial={{
                        opacity: 0,
                        x: 350
                    }}

                    whileInView={{
                        opacity: 1,
                        x: 0
                    }}

                    transition={{
                        duration: 2
                    }}
                >
                    <h2 className="lg:text-5xl text-3xl font-medium">UNSAFE TO SAFE WATER <br /> WITHIN 60 SECONDS</h2>

                    <p className="text-subTitle text-xl font-medium mt-5">Purify Any Water + Germ-Free Portable Water Filter</p>

                    <p className="mt-4 text-sm lg:text-base">Transform any source into pure refreshment, and keep your <br /> carriers germ-free.</p>

                    <div className="mt-5">
                        <FreeOrderBtn />
                    </div>
                </motion.div>



                {/* bottle animated */}

                <motion.div className="bottle-2 lg:absolute lg:left-[60%] lg:top-1/2 z-10 hidden lg:flex"
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

                <motion.div className="cork-2 lg:absolute left-[63%] lg:top-[41%] top-0 z-5 hidden lg:flex"
                    initial={{
                        rotate: 0,
                        x: 0
                    }}

                    whileInView={{
                        rotate: -19,
                        x: -50,
                        y: -100
                    }}

                    animate={controls}

                    onViewportLeave={{
                        rotate: 0,
                        x: 0,
                        y: 0
                    }}

                    transition={{
                        duration: 2
                    }}
                >
                    {/*cork image */}
                    <img src={straightCork} alt="Cork" className="cork-img-2 w-[60%]" />
                </motion.div>




                {/* cork only */}

                <motion.div className="cork-2 absolute left-[63%] top-[41%] z-20 hidden lg:flex"
                    initial={{
                        opacity: 1
                    }}

                    whileInView={{
                        opacity: 0
                    }}

                    animate={onlyCorkControls}

                    transition={{
                        duration: 0.0001
                    }}
                >
                    {/*cork image */}
                    <img src={corkOnly} alt="Cork" className="cork-img-2 w-[60%]" />
                </motion.div>

                <div className="right bg-primary text-white lg:relative lg:top-56  lg:right-0 rounded-[33px] h-20 pt-40 md:pr-10 md:pl-28 z-[-5] mx-auto lg:mx-0 px-5 md:px-0">
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