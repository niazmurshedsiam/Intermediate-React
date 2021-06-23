import React, { useEffect, useState } from 'react';

const MealFinder = () => {
    const [meals,setMeals] = useState([]);
    const [search,setSearch] = useState('');
    
    const handleChange=event=>{
        console.log(event.target.value);
        setSearch(event.target.value);
    }
    useEffect(()=>{
        fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`)
        .then(res=>res.json())
        .then(data=>setMeals(data?.meals))
    },[search])
    return (
        <div>
            <h1>This is Meal Finder</h1>
            <input type="text" onChange={handleChange} placeholder="Search Food"/>
            <p>Searching: {search}</p>
            <p>Meal Found: {meals?.length || 0}</p>
            {
                meals?.map(meals=><div><h4>{meals?.strMeal}</h4></div>)
            }
        </div>
    );
};

export default MealFinder;