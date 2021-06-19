import React from 'react';
import CategoriesDetails from '../CategoriesDetails/CategoriesDetails';
const Categories = (props) => {
    const {count} = props;
    return (
        <div>
            <h1>This is Categories</h1>
            <CategoriesDetails count={count}></CategoriesDetails>
        </div>
    );
};

export default Categories;