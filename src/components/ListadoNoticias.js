import React from 'react';
import Noticias from "./Noticias";

function ListadoNoticias({noticias}) {
    return (
        <div className="row">
            {noticias.map( noticia =>(
                <Noticias
                    key={noticia.url}
                    noticia={noticia}/>
            ))}
        </div>
    );
}

export default ListadoNoticias;