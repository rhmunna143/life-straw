// BottleAnimation.js

import bottle from "../../../assets/images/lifestraw1.png";
import straightCork from "../../../assets/images/life-straw21.png";
import corkOnly from "../../../assets/images/life-straw3.png";
import { motion, useAnimation } from 'framer-motion';
import { useEffect, useState } from "react";
import Container from "../../shared/Container";

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
            <div className={`bottle-container h-screen mb-[100px] pb-20 flex flex-col lg:flex-row justify-between items-center mt-[-10rem]`}>

                <div className="left">
                    left
                </div>



                {/* bottle animated */}

                <motion.div className="bottle-2 absolute left-1/2 top-1/2 z-10"
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

                <motion.div className="cork-2 absolute left-[53%] top-[41%] z-5"
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

                <motion.div className="cork-2 absolute left-[53%] top-[41%] z-20"
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

                <div className="right bg-primary text-white lg:relative lg:top-56 top-80 right-32 rounded-[33px] h-20 pt-40 pr-10 pl-28 z-[-5]">
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