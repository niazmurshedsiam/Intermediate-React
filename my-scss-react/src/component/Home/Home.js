import React, { useContext } from 'react';
import { categoriesContext } from '../../App';
import Categories from '../Categories/Categories';
const Home = () => {
    const categorie = useContext(categoriesContext);
    return (
        <div>
            <h1>This is Home page: {categorie}</h1>
            <Categories></Categories>
        </div>
    );
};

export default Home;