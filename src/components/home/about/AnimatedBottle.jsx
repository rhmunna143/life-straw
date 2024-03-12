/* eslint-disable no-undef */
import { motion } from "framer-motion"
import bottle from "../../../assets/images/lifestraw1.png";
import cork from "../../../assets/images/life-straw21.png";
import onlyCork from "../../../assets/images/life-straw3.png";

const AnimatedBottle = () => {
    return (
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
            m
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
    );
};

export default AnimatedBottle;


<motion.div className="cork-2 absolute left-[55%] top-[41%] z-20 hidden lg:flex"
    initial={{
        opacity: 0,
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