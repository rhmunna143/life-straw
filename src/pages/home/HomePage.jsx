// import BottleAnimation from "../../components/header/BottleAnimation";
import AboutWhyLifeStraw from "../../components/about/AboutWhyLifeStraw";
import DraftBottleAnimation from "../../components/header/drafts/DraftBottleAnimation";

const HomePage = () => {
    return (
        <div>

            {/* Animated banner section */}

            <DraftBottleAnimation />

            {/* second about banner section */}

            <AboutWhyLifeStraw />

            {/* <BottleAnimation /> */}
        </div>
    );
};

export default HomePage;