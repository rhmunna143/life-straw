// Search.js

import searchIcon from "../../assets/icons/material-symbols_search.svg";
import { useState } from 'react';

const Search = () => {
    const [expanded, setExpanded] = useState(false);

    const handleIconClick = () => {
        setExpanded(!expanded);
    };

    return (
        <div className="relative">
            <div
                className="absolute right-0 top-1/2 bottom-1/2 flex justify-start items-center cursor-pointer"
                onClick={handleIconClick}
            >
                {/* <svg
                    className="h-5 w-5 text-[#4D6067]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M21 21l-4-4m-2 0a8 8 0 110-16 8 8 0 010 16z"
                    ></path>
                </svg> */}

                <img src={searchIcon} alt="search icon" />
            </div>
            <input
                type="text"
                className={`pl-4 pr-4 py-3 bg-primaryBg border-none mr-8 px-4 rounded-[33px]  ${expanded ? 'block' : 'hidden'
                    }`}
                placeholder="Search..."
            />
        </div>
    );
};

export default Search;
