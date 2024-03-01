import AboutWhyLifeStraw from "../../components/home/about/AboutWhyLifeStraw";
import FooterCoverPhoto from "../../components/home/cover/FooterCoverPhoto";
import DraftBottleAnimation from "../../components/header/drafts/DraftBottleAnimation";
import InvestSection from "../../components/home/invest/InvestSection";
import VideoSection from "../../components/home/video/VideoSection";
import Slider from "./SliderProducts";
import BottleSliderSection from "../../components/home/slider/BottleSliderSection";

const HomePage = () => {
    return (
        <div>

            {/* Animated banner section */}

            <DraftBottleAnimation />


            {/* second about banner section */}

            <AboutWhyLifeStraw />


            {/* video section */}

            <VideoSection />


            {/* invest section */}

            <InvestSection />


            {/* slider 1 */}

            <Slider />


            {/* slider 2 */}

            <BottleSliderSection />


            {/* footer cover photo */}

            <FooterCoverPhoto />

        </div>
    );
};

export default HomePage;