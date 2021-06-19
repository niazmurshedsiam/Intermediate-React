import React, { useContext, useState } from 'react';
import { categoriesContext } from '../../App';

const Header = () => {
    const [categorie,setCategorie] = useContext(categoriesContext);
    
    return (
        <div>
            <h1>This is Header Page: {categorie}</h1>
            <button onClick={()=>{setCategorie(categorie+1)}}>Categorie</button>
        </div>
    );
};

export default Header;