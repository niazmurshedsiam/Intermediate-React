import React, { useContext } from 'react';
import { categoriesContext } from '../../App';
 
const CategoriesDetails = () => {
    const categorie = useContext(categoriesContext)
    
    return (
        <div>
            <h1>This is CategoriesDetails: {categorie}</h1>
        </div>
    );
};

export default CategoriesDetails;