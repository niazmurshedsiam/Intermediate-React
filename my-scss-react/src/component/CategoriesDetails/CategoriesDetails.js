import React from 'react';

const CategoriesDetails = (props) => {
    const {count}= props;
    return (
        <div>
            <h1>This is CategoriesDetails: {count}</h1>
        </div>
    );
};

export default CategoriesDetails;