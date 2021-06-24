import React from 'react';
import { useHistory,Link } from 'react-router-dom';

const Country = (props) => {
    const {flag,name,capital,alpha3Code} = props.country;
    const history = useHistory();
    const handleClick = (countryName)=>{
        const url = `/country/${countryName}`;
        history.push(url);

    }
    return (
        <div style={{border:'2px solid gray', marginLeft:'400px', marginRight:'400px',marginTop:'20px'}}>
            <img src={flag} height="100px" style={{marginTop:'20px'}} alt="" />
            <h3 style={{textAlign:'center'}}>{name}</h3>
            <Link to={`/country/${alpha3Code}`}>
                <button onClick={()=>handleClick(alpha3Code)} style={{margin:'2px',padding:'2px'}}>Click</button>
            </Link>
            

            
        </div>
    );
};

export default Country;