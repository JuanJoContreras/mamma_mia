import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/css/styles.css";

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from "./views/Home";
import Pizzas from "./views/Pizzas";
import Carrito from "./views/Carrito";
import NotFound from "./views/NotFound";

import Navbar from "./components/Navbar";
import {PizzasProvider} from "./Context";

function App() {
  return (
    <BrowserRouter>
      <PizzasProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pizzas/:id" element={<Pizzas />} />
          <Route path="/carrito" element={<Carrito />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </PizzasProvider>
    </BrowserRouter>
  );
}

export default App;