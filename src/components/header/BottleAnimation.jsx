// BottleAnimation.js

import { useState, useEffect } from 'react';
import './BottleAnimation.css';
import bottle from "../../assets/images/lifestraw1.png";
import cork from "../../assets/images/life-straw2.png";
import corkOnly from "../../assets/images/life-straw3.png";

const BottleAnimation = () => {
    const [isOpen, setIsOpen] = useState(false);

    const handleContainerClick = () => {
        setIsOpen(!isOpen);
    };

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            const triggerPoint = window.innerHeight * 0.8; // 80vh

            if (scrollPosition > triggerPoint && !isOpen) {
                setIsOpen(true);
            } else if (scrollPosition <= triggerPoint && isOpen) {
                setIsOpen(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [isOpen]);

    return (
        <div
            className={`bottle-container ${isOpen ? 'open-cork' : ''} mt-15 mb-[100px]`}
            onClick={handleContainerClick}
        >
            <div className="bottle">
                {/* bottle image */}
                <img src={bottle} alt="Bottle" className="bottle-img" />
            </div>
            <div className="bottle" id='bottle-2'>
                {/* bottle image */}
                <img src={bottle} alt="Bottle" className="bottle-img" />
            </div>

            <div className="cork">
                {/*cork image */}
                <img src={cork} alt="Cork" className="cork-img" />
            </div>
            <div className="cork" id='cork-only'>
                {/*cork image */}
                <img src={corkOnly} alt="Cork" className="cork-img" />
            </div>
        </div>
    );
};

export default BottleAnimation;