import React, {useState} from 'react';


function useSelect(stateInicial, opciones) {
    const [state, setState] = useState(stateInicial);

    const SelectElement = () =>(
        <select
            value={state}
            onChange={ e => setState(e.target.value)}
            className="browser-default">
            <option value="">Seleccione</option>
            {opciones.map(opcion => (
                <option key={opcion.value} value={opcion.value}>{opcion.label}</option>))}
        </select>
    )
    return [state, SelectElement];
}

export default useSelect;