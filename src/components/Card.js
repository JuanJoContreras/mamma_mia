import React from 'react';
import { useNavigate } from 'react-router-dom';
import "../assets/css/card.css";

export default function Card({ producto }) {
    const navigate = useNavigate();


    return (


        <div className="galeria grid-columns-5 p-3" key={producto.id}>
            <img className="card-img-top"
                src={producto.img}
                alt={producto.name}
            />
            <div className="card-body">
                <h5 className="card-title">{producto.name}</h5>
                <hr />
                <ul className="text-left">
                    <p>Ingredientes:</p>
                    {producto.ingredients.map((i) => (
                        <li>🍕 {i}</li>
                    ))}
                </ul>
                <hr />
                <ul className="text-left">
                    <p>$
                    {producto.price}
                    </p>
                </ul>
                
                <div className="d-flex">
                    <button className="btn btn-info text-white" onClick={() => navigate(`/pizza/${producto.id}`)}>Ver más👀</button>
                    <button className="btn btn-danger" onClick={() => ('/carrito')}>Añadir🛒</button>
                </div>
            </div>
        </div>
    )
}