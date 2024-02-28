import { motion } from "framer-motion";
import video from "../../assets/video/no-sound.mp4";

const VideoSection = () => {
    return (
        <motion.div className="px-4 flex flex-col md:flex-row gap-8 mt-7 mb-20"
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
            <div className="box bg-primaryBg pl-10 pr-12 md:pr-16 py-14 font-medium text-4xl rounded-[33px] lg:w-96 md:w-1/2 w-3/4 flex items-center">
                <p className="uppercase">Drink <br /> Directly <br /> from any <br /> source of <br /> Water</p>
            </div>

            <div className="video w-fit mx-auto md:mx-0">
                <video autoPlay loop muted className="w-80 lg:w-[800px] md:h-full md:w-full rounded-[33px] md:rounded-[33px] " src={video} width={800}></video>
            </div>
        </motion.div>
    );
};

export default VideoSection;