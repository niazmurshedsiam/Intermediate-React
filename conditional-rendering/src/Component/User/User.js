import React from 'react';

const User = (props) => {
    const familiar = props.familiar;
    let Greetings;
    if(familiar){
       Greetings = <p>Welcome my friend</p>

    }
    else{
        Greetings = <p>Who the hell are you?</p>

    }
    const Food = familiar ? <p>I will buy Food for you</p> : <p>Lets eat his whose?</p>
    const Connection = familiar ? <p>Lets join my facebook</p> : <p>I don't add stranger?</p>
    return (
        <div>
            <h1>Greetings</h1>
            {Greetings}
            
            <h1>Food</h1>
            {Food}
            <h1>Connection</h1>
            {Connection}
            
        </div>
    );
};

export default User;