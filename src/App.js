import React from 'react';
import './App.css';
import Header from './Components/Header';
import RecipeCards from './Components/RecipeCards';
import Recipe from './Components/Recipe'
import OTPscreen from './Components/OTPscreen'
import PaymentScreen from './Components/PaymentScreen'
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Route path="/" exact component={RecipeCards} />
        <Route path="/recipe" exact component={Recipe} />
        <Route path="/otp" exact component={OTPscreen} />
        <Route path="/payment" exact component={PaymentScreen} />
      </div>
    </Router>
  );
}

export default App;
