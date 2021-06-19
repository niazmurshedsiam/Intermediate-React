import React, { useState } from 'react';

const Header = (props) => {
    const {count,setCount} = props;
    
    return (
        <div>
            <h1>This is Header Page: {count}</h1>
            <button onClick={()=>{setCount(count+1)}}>Count</button>
        </div>
    );
};

export default Header;