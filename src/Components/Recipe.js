import React, { useState, useEffect } from 'react';
import Cards from 'react-credit-cards';
import "react-credit-cards/es/styles-compiled.css"
import '../Styles/Recipe.css';

const Recipe = (props) => {

    const [data, setData] = useState({
		cvc: "",
		expiry: "",
		name: "",
		number: ""
	});
	const handleInputChange = (e) => {
		setData({
			...data,
			[e.target.name]: e.target.value
		});
	};

    console.log(props.location.priceProp);

    return(
        <div>
            <div className="flex-container">
                <div className="flex-child recipeImage">
                    <img className="image" src={props.location.imageProp}></img>
                </div>
                <div className="flex-child recipeDetails">
                    <h2>{props.location.nameProp}</h2>
                    <p>{props.location.labelProp}</p>
                    <p>{props.location.descriptionProp}.</p>
                    <p className="price">Order Only for ${props.location.priceProp} /-</p>
                </div>
            </div>
            
            <div className="paymentHeader">
                <h2>Plesase Input Cards Details below for Payment</h2>
            </div>

            <div id="PaymentForm">
                <Cards
                    cvc={data.cvc}
                    expiry={data.expiry}
                    focus={data.focus}
                    name={data.name}
                    number={data.number}
                />
                <form className="creditCardInput" action="/otp">
                    <input
                        name="cvc"
                        placeholder="CVC"
                        onChange={handleInputChange}
                        required
                    />
                    <input
                        type="date"
                        name="expiry"
                        placeholder="Expire Date"
                        onChange={handleInputChange}
                        required
                    />
                    <input
                        type="text"
                        name="name"
                        placeholder="Your Name"
                        onChange={handleInputChange}
                        required
                    />
                    <input
                        name="number"
                        placeholder="Card Number"
                        onChange={handleInputChange}
                        required
                    />

                    <div className="proceedButton">
                        <button>Proceed to Pay ${props.location.priceProp}</button>
                    </div>
                
                </form>

            </div>
            
        </div>
    )
}

export default Recipe;
