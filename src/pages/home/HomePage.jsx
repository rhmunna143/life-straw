import Banner from "../../components/header/Banner";
import BottleAnimation from "../../components/header/BottleAnimation";
import DraftBottleAnimation from "../../components/header/drafts/DraftBottleAnimation";

const HomePage = () => {
    return (
        <div>
            {/* <Banner /> */}
            <DraftBottleAnimation />
            {/* <BottleAnimation /> */}
        </div>
    );
};

export default HomePage;