import { motion } from "framer-motion";
import video from "../../assets/video/no-sound.mp4";

const VideoSection = () => {
    return (
        <motion.div className="px-4 flex gap-8 mt-7 mb-20"
            initial={{
                y: -5
            }}

            whileInView={{
                y: 0
            }}

            transition={{
                duration: 0.5
            }}
        >
            <div className="box bg-primaryBg pl-10 pr-16 py-14 font-medium text-4xl rounded-[33px] w-96 flex items-center">
                <p className="uppercase">Drink <br /> Directly <br /> from any <br /> source of <br /> Water</p>
            </div>

            <div className="video">
                <video autoPlay loop muted className="rounded-[33px]" src={video} width={800}></video>
            </div>
        </motion.div>
    );
};

export default VideoSection;