import React, { useEffect, useState } from 'react';
import FoodCart from '../../FoodCart/FoodCart';
import SingleFood from '../SingleFood/SingleFood';
import './Shop.css';

const Shop = () => {
    const [foods,setFoods] = useState([]);
    const [quarry,setQuarry] = useState("")
    const [cart,setCart] = useState([]);
    useEffect(() => {
        fetch(`https://www.themealdb.com/api/json/v1/1/search.php?${quarry ? `s=${quarry}` : `f=a`}`)
            .then(res => res.json())
            .then(data => {
                setFoods(data.meals);
            })
    },[quarry])
    const handleSearchChange = event => {
        setQuarry(event.target.value);
    }

    const handleClick = foodName => {
        const newCart = [...cart,foodName];
        setCart(newCart)
    }
    return (
        <div>
            <div className="bg-dark text-center">
                <input type="text" name="" id="" placeholder="Search Your food" className=" w-50 p-2 my-4 rounded-2" onChange={handleSearchChange}/>
            </div>
            <div  className="container-fluid mb-5 row ">
                <div className="row row-cols-1 row-cols-md-3 g-4 col-lg-9">
                    {
                      foods ?  foods.map(food => <SingleFood meals={food} key={food.idMeal} handleClick={handleClick}/>)  : <p className="text-danger text-center fs-2">No result Found</p>
                    }
                </div>
                <div className="col-lg-3 cart-container">
                    <FoodCart cart={cart}/>
                </div>
            </div>
        </div>
    );
};

export default Shop;