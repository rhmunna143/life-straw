import { motion } from "framer-motion";

const RightSlider = ({ item }) => {
    return (
        <motion.div className="h-72  my-auto w-96"
            initial={{
                opacity: 1
            }}

            whileInView={{
                opacity: 0
            }}

            transition={{
                duration: 1,
                delay: 1
            }}
        >

            <img src={item.rightImg} alt="slide" className="w-40" />
        </motion.div>
    );
};

export default RightSlider;