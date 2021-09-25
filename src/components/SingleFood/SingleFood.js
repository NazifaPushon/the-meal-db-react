import React from 'react';

const SingleFood = (props) => {
    const {strMeal,strCategory,strInstructions,strMealThumb} = props.meals || {}
    return (
        <div>
            <div className="col">
            <div className="card h-100">
                <img src={strMealThumb} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">{strMeal}</h5>
                    <p className="card-text">{strInstructions.slice(0,100)}</p>
                    <p>Category : {strCategory}</p>
                    <button className="btn btn-dark" onClick={() => props.handleClick(strMeal)}>Add To Cart</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleFood;