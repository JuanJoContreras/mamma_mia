import React, { useContext } from 'react';
import Header from '../components/Header';
import Grilla from '../components/Grilla';
import Context from "../Context";

export default function Home() {


    const { listaProductos, setListaProductos } = useContext(Context);

    console.log(listaProductos);
    return (
        <div>
            <Header />
            <Grilla data={listaProductos}/>
        </div>
    )
}