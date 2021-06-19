import React, { useContext } from 'react';
import { categoriesContext } from '../../App';
const Categories = () => {
    const categorie = useContext(categoriesContext);
    return (
        <div>
            <h1>This is Categories: {categorie}</h1>
            
        </div>
    );
};

export default Categories;