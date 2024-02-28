import img from "../../assets/images/GiveBack 20230221_751.png";

const FooterCoverPhoto = () => {
    return (
        <div>
            <img src={img} alt="footer cover img" className="h-[28rem] w-full object-cover" />
        </div>
    );
};

export default FooterCoverPhoto;