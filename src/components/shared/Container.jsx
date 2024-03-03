/* eslint-disable react/prop-types */

const Container = ({ children }) => {
    return (
        // container """" className
        // max-w-6xl """" className
        
        <div className="container max-w-6xl px-4 mx-auto lg:px-0">
            {children}
        </div>
    );
};

export default Container;