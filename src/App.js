import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.css";

import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from "./views/Home";
import Pizzas from "./views/Pizzas";
import Carrito from "./views/Carrito";
import NotFound from "./views/NotFound";

import Navbar from "./components/Navbar";

import Context from "./Context";


function App() {
  const [listaProductos, setListaProductos] = useState([]);
  const [totalPedido, setTotalPedido] = useState(0);

  async function getPizza() {
    const res = await fetch(window.location.origin+'/pizzas.json');
    const data = await res.json();
    console.log(data);
    setListaProductos(data);
  }

  useEffect(() => {
    console.log('ab');
    getPizza();
  }, []);

  return (
    <div className="App">
      <Context.Provider value={{ listaProductos, setListaProductos, totalPedido, setTotalPedido }}>
        <BrowserRouter>
          <Navbar></Navbar>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/pizza/:id" element={<Pizzas />}></Route>
            <Route path="/carrito" element={<Carrito />}></Route>
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </Context.Provider>
    </div>
  );
}

export default App;