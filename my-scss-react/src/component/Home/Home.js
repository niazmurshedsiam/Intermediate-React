import React from 'react';
import Categories from '../Categories/Categories';
const Home = (props) => {
    const {count} = props;
    return (
        <div>
            <h1>This is Home page: {count}</h1>
            <Categories count={count}></Categories>
        </div>
    );
};

export default Home;