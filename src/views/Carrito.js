import React from 'react';
import { useContext } from 'react';

import Context from '../Context';
import { formatNumber } from '../Helper';

const Carrito = () => {

  const {carrito, increment, decrement} = useContext(Context);
  const total = carrito.reduce((a,{count,price})=> a+price*count,0);

  return (
    <>
    <div className="carrito p-5">
     <div className="detalles bg-light w-75 m-auto p-5">
      <h5>Detalle del pedido:</h5>
      <div className="p-3 bg-white">
        {carrito.map((producto, i) =>(
          <div key={i} className="d-flex justifi-content-between py-2">
            <div className="d-flex justifi-content-between align-items-center">
              <img src={producto.img} width="50" alt="0"/>
              <h6 className="mb-0 text-capitalize p-2">{producto.name}</h6>
            </div>
            <div className="d-flex justifi-content-end align-items-center">
            <h6 className="mb-0 p-2 text-success">${formatNumber(producto.price * producto.count)}</h6>
            <button 
            className="btn btn-danger"
            onClick={()=> decrement(i)}
            >-</button>

             
            </div>


            </div>




        ))
        
        
        
        }

      </div>




     </div>
      
    </div>
    </>
  )
}