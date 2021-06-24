import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const CountryDetails = () => {
    let {countryName} = useParams();
    const [country,setCountry] = useState([]);
    useEffect(()=>{
        fetch(`https://restcountries.eu/rest/v2/alpha/${countryName}`)
        .then(res=>res.json())
        .then(data=>setCountry(data))

    },[])
    return (
        
        <div style={{border:'2px solid gray', marginLeft:'400px', marginRight:'400px',marginTop:'20px'}}>
            
            <img src={country.flag} height="100px" style={{marginTop:'20px'}} alt="" />
            <h2 style={{textAlign:'center'}}>Name: {country.name}</h2>
            <h3>Capital: {country.capital}</h3>
            <h3>Region: {country.region}</h3>
            <h3>Population: {country.population}</h3>
            <h3>Border: {country?.borders}</h3>
            <h3>Native Name: {country?.nativeName}</h3>
            <h3>Numeric Code: {country?.numericCode}</h3>
            <h3>Sub Region: {country?.subregion}</h3>
        </div>
    );
};

export default CountryDetails;