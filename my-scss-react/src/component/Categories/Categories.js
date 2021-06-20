import React, { useContext, useEffect, useState } from 'react';
import { categoriesContext } from '../../App';
import CategoriesDetails from '../CategoriesDetails/CategoriesDetails';
const allProduct = [
    {name:'lenevo',categorie:'laptop'},{name:'asus',categorie:'laptop'},{name:'dell',categorie:'laptop'},
    {name:'samsung',categorie:'mobile'},{name:'iphone',categorie:'mobile'},{name:'walton',categorie:'mobile'},
    {name:'sony',categorie:'camera'},{name:'asus',categorie:'camera'},{name:'dell',categorie:'camera'}
]
const Categories = () => {
    const [categorie] = useContext(categoriesContext);
    const [products,setProducts]=useState([]);
    useEffect(()=>{
        const matchProduct = allProduct.filter(product => product.categorie.toLowerCase() ===  categorie.toLowerCase());
        setProducts(matchProduct);

    },[categorie])
    return (
        <div>
            {/* <h1>select category: {categorie}</h1> */}
            {
                products.map(product => <CategoriesDetails product={product}></CategoriesDetails>)
            }
            
        </div>
    );
};

export default Categories;