import img from "../../assets/images/GiveBack 20230221_751.png";

const FooterCoverPhoto = () => {
    return (
        <div className="mb-[-4px] mt-[50rem] md:mt-[30rem] lg:mt-0">
            <img src={img} alt="footer cover img" className="h-[28rem] w-full object-cover" />
        </div>
    );
};

export default FooterCoverPhoto;