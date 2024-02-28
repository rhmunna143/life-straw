import BottleAnimation from "../../components/header/BottleAnimation";
import DraftBottleAnimation from "../../components/header/drafts/DraftBottleAnimation";

const HomePage = () => {
    return (
        <div>
            Home
            <DraftBottleAnimation />
            <BottleAnimation />
        </div>
    );
};

export default HomePage;