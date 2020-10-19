import React, { useState, useEffect } from 'react';
import axios from '../axios';
import '../Styles/RecipeCards.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

function RecipeCards(){

    const [recipe, setRecipe] = useState([]);

    useEffect(() => {
        
        async function fetchData(){
            const req = await axios.get();

            setRecipe(req.data);
        }

        fetchData();
        
    }, []);

    console.log(recipe);

    return(
        <div className="cards-list">
            {recipe.map( (rec, id) => (<div className="card">
                <div className="card_image">
                    <Link to={{
                        pathname: "/recipe",
                        priceProp: `${rec.price}`,
                        nameProp: `${rec.name}`,
                        imageProp: `${rec.image}`,
                        descriptionProp: `${rec.description}`,
                        labelProp: `${rec.label}`
                        }} >
                    <   div className="img" style={{backgroundImage: `url(${rec.image})` }}></div>
                    
                    <div className="card_title title-white">
                        <p>{rec.name}</p>
                        <p>${rec.price}</p>
                    </div>
                    </Link>
                </div>
            </div>))}
        </div>
    );
}

export default RecipeCards;