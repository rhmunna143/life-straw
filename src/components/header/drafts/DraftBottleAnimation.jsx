// BottleAnimation.js

import { useState, useEffect } from 'react';
import bottle from "../../../assets/images/lifestraw1.png";
import cork from "../../../assets/images/life-straw2.png";
import straightCork from "../../../assets/images/life-straw21.png";
import corkOnly from "../../../assets/images/life-straw3.png";
import { motion } from 'framer-motion';

const DraftBottleAnimation = () => {
    const [isOpen, setIsOpen] = useState(false);

    const handleContainerClick = () => {
        setIsOpen(!isOpen);
    };

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            const triggerPoint = window.innerHeight * 0.1; // 80vh

            if (scrollPosition > triggerPoint && !isOpen) {
                setIsOpen(true);
            } else if (scrollPosition <= triggerPoint && isOpen) {
                setIsOpen(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [isOpen]);

    return (
        <div
            className={`bottle-container h-screen ${isOpen ? 'open-cork' : ''} mt-15 mb-[100px] pb-20`}
            onClick={handleContainerClick}
        >



            {/* bottle animated */}

            <motion.div className="bottle-2 absolute left-1/2 top-1/2 z-10"
                initial={{
                    rotate: 0
                }}

                whileInView={{
                    rotate: -19
                }}

                transition={{
                    duration: 2
                }}
            >
                {/* bottle image */}
                <img src={bottle} alt="Bottle" className="bottle-img-2 w-[60%]" />
            </motion.div>




            {/* cork animated */}

            <motion.div className="cork-2 absolute left-[53%] top-[41%]"
                initial={{
                    rotate: 0,
                    x: 0
                }}

                whileInView={{
                    rotate: -19,
                    x: -50,
                    y: -100
                }}

                transition={{
                    duration: 2
                }}
            >
                {/*cork image */}
                <img src={straightCork} alt="Cork" className="cork-img-2 w-[60%]" />
            </motion.div>



            {/* cork only */}

            <motion.div className="cork-2 absolute left-[53%] top-[41%]"
                initial={{
                    opacity: 1
                }}

                whileInView={{
                    opacity: 0
                }}

                transition={{
                    duration: 0.0001
                }}
            >
                {/*cork image */}
                <img src={corkOnly} alt="Cork" className="cork-img-2 w-[60%]" />
            </motion.div>

        </div >
    );
};

export default DraftBottleAnimation;