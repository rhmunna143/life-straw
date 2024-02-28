// import BottleAnimation from "../../components/header/BottleAnimation";
import AboutWhyLifeStraw from "../../components/about/AboutWhyLifeStraw";
import DraftBottleAnimation from "../../components/header/drafts/DraftBottleAnimation";
import InvestSection from "../../components/invest/InvestSection";
import VideoSection from "../../components/video/VideoSection";

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



            

            {/* <BottleAnimation /> */}
        </div>
    );
};

export default HomePage;