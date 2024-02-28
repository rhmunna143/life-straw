import DraftBottleAnimation from "./drafts/DraftBottleAnimation";

const Banner = () => {
    return (
        <div className="flex">
            <div className="left">
                left
            </div>

            <div className="animation">
                <DraftBottleAnimation />
            </div>

            <div className="right">
                right
            </div>
        </div>
    );
};

export default Banner;