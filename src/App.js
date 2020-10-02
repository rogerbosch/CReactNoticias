import React, {Fragment, useEffect, useState} from 'react';
import Header from "./components/Header";
import Formulario from "./components/Formulario";
import ListadoNoticias from "./components/ListadoNoticias";


function App() {

    const [categoria, setCategoria] = useState('');
    const [noticias, setNoticias] = useState([]);
    useEffect(()=>{
        const consultarAPI = async () =>{
            const url =`http://newsapi.org/v2/top-headlines?country=us&category=${categoria}&apiKey=414a82a1576047469eb5cb31aa9888b3`;
            console.log(url);
            const respuestas = await fetch(url);
            const noticias = await respuestas.json();
            console.log(noticias.articles);
            setNoticias(noticias.articles);
        }
        consultarAPI();
    },[categoria]);


    return (
        <Fragment>
            <Header titulo="Buscador de noticias"/>

            <div className="container white">
                <Formulario setCategoria={setCategoria}/>
                <ListadoNoticias
                    noticias={noticias}/>
            </div>
        </Fragment>
    );
}

export default App;
