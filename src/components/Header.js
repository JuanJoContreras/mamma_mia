import React from 'react';
import '../assets/css/header.css';

export default function Header() {
    return (

        <div className="p-5 text-center bg-image rounded-3 banner">
            <div className="mask">
                <div className="d-flex justify-content-center align-items-center h-100">
                    <div className="text-white">
                        <h1 className="mb-3">¡Pizzeria Mamma Mia</h1>
                        <h4 className="mb-3">Tenemos las mejores pizzas que podrás encontrar!<hr className="solid" /></h4>
                    </div>
                </div>
            </div>
        </div>


    )
}