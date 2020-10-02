import React, {useEffect} from 'react';
import styles from './Formulario.module.css';
import useSelect from "../hooks/useSelect";

function Formulario({setCategoria}) {
    const OPCIONES = [
        {value: 'general', label: 'General'},
        {value: 'business', label: 'Negocios'},
        {value: 'entertainment', label: 'Entretenimiento'},
        {value: 'health', label: 'Salud'},
        {value: 'science', label: 'Ciencia'},
        {value: 'sports', label: 'Deportes'},
        {value: 'technology', label: 'Tecnología'},
    ]

    const [categoria, SelectNoticias] = useSelect('', OPCIONES);

    const buscarNoticias = e => {
        e.preventDefault();
        setCategoria(categoria);
    }
    useEffect(() => {
        const consultarAPI = async () => {

        };
        consultarAPI();
    }, [categoria]);
    return (
        <div className={`${styles.buscador} row`}>
            <div className="col s12 m8 offset-m2">
                <form onSubmit={buscarNoticias}>
                    <h2 className={styles.heading}>Importa noticias por categoría</h2>
                    <SelectNoticias/>
                    <div className="input-flield col s12">
                        <input
                            type="submit"
                            className={` ${styles.btnBlock} btn-large amber darken-2`}
                            value="Buscar"/>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Formulario;