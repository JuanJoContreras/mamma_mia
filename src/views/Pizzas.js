import React, { useContext } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import Context from "../Context";

export default function Detalle() {
    const { id } = useParams();
    const navigate = useNavigate();
    const { listaProductos, setListaProductos } = useContext(Context);

    const producto = listaProductos.filter((e) => e.id === id);
    //console.log(producto.length);

    return (
        <>
        {producto.length > 0 ?
        <div className="p-3 galeria grid-columns-4" key={producto[0].id}>
            <img className="card-img-top"
                src={producto[0].img}
                alt={producto[0].name}                
                

            />
            <div className="card-body">
                <h5 className="card-title">{producto[0].name}</h5>
                <hr />
                <ul className="card-text">
                    
                    {producto[0].desc}
                    
                </ul>
                
                <ul className="card-text">
                    <p>Ingredientes:</p>
                    {producto[0].ingredients.map((i) => (
                        <li>🍕 {i}</li>
                    ))}
                </ul>
                <hr />
                <ul className="card-text">
                <p>$
                    {producto[0].price}
                    </p>
                </ul>
                <div className="d-flex">
                    
                    <button className="btn btn-danger" onClick={() => console.log('aqui va el añadir carrito')}>Añadir🛒</button>
                </div>

            </div>
        </div>:
        <div>

        </div>
        }
        </>
    )
}