import React, { useEffect, useState } from 'react';

const MealDetail = () => {
    const [meal,setMeal] = useState({});
    useEffect(()=>{
        fetch(`https://www.themealdb.com/api/json/v1/1/random.php`)
        .then(res=>res.json())
        .then(data=>setMeal(data?.meals?.[0]))
    },[])
    return (
        <div>
            <h1>This is Meal Details</h1>
            <h1>Meal: {meal?.strMeal}</h1>
        </div>
    );
};

export default MealDetail;