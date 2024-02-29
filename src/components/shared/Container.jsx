/* eslint-disable react/prop-types */

const Container = ({ children }) => {
    return (
        // container """" className
        // max-w-6xl """" className
        
        <div className="container  mx-auto px-4 lg:px-0">
            {children}
        </div>
    );
};

export default Container;