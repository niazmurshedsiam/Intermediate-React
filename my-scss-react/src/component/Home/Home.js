import React from 'react';

const Home = (props) => {
    const {count} = props;
    return (
        <div>
            <h1>This is Home page: {count}</h1>
        </div>
    );
};

export default Home;