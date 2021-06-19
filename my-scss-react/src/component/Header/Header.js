import React, { useState } from 'react';

const Header = () => {
    const [count,setCount] = useState(0);
    return (
        <div>
            <h1>This is Header Page: {count}</h1>
            <button onClick={()=>{setCount(count+1)}}>Count</button>
        </div>
    );
};

export default Header;