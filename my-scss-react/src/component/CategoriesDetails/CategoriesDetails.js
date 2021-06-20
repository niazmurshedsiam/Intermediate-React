import React, { useContext } from 'react';
import { categoriesContext } from '../../App';
 
const CategoriesDetails = (props) => {
    // const categorie = useContext(categoriesContext)
    const {name,categorie}= props.product;
    
    return (
        <div>
            <h1>This is CategoryDetails : {categorie}</h1>
            <h1>This is Product Name : {name}</h1>
            <h3>This is Category Type : {categorie}</h3>
        </div>
    );
};

export default CategoriesDetails;