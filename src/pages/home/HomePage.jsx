// import BottleAnimation from "../../components/header/BottleAnimation";
import AboutWhyLifeStraw from "../../components/about/AboutWhyLifeStraw";
import FooterCoverPhoto from "../../components/cover/FooterCoverPhoto";
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


            {/* slider 1 */}




            {/* slider 2 */}




            {/* footer cover photo */}

            <FooterCoverPhoto />



            {/* <BottleAnimation /> */}
        </div>
    );
};

export default HomePage;