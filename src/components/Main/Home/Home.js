import React from "react";
import {  Carousel } from "react-bootstrap";
import { Link } from "react-router-dom";

import "../main.css";

export const Home = () => {
  return (
    <div>
      
      <Carousel>
        <Carousel.Item>
          <img className="d-block w-100" src="banner.jpg" alt="First slide" />
          <Carousel.Caption>
          <button 
          className="button-primary">
            <Link to="/productos/all">Comprar</Link>
          
        </button>
            <h3 >HitakuStore</h3>
            <p>Bienvenido a la tienda online de HitakuStore</p>
           
            
          </Carousel.Caption>
        </Carousel.Item>
        
      </Carousel>
      
    </div>
  );
};
