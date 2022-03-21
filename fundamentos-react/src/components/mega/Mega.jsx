import "./Mega.css";
import React, { useState } from "react";
export default props => {

    function gerarNumeroNaoContido(min, max, array) {

        const alerandmom = parseInt(Math.random() * (max + 1 - min)) + min;

        return array.includes(alerandmom) ? gerarNumeroNaoContido(min, max, array) : alerandmom

    }

    function gerarNumero(params) {

        const numeros = Array(params)
            .fill(0)
            .reduce((acc) => {
                const newNumber = gerarNumeroNaoContido(1, 60, acc)
                return [...acc, newNumber]
            }, [])
            .sort((n1, n2) => n1 - n2)

        return numeros

    }
    const [qtde, setQtde] = useState(props.params || 6)
    const numerosIniciais = gerarNumero(qtde)
    const [numeros, setNumbers] = useState(numerosIniciais)

    return (
        <div className="Mega">

            <h2>MEGA</h2><h3>{numeros.join(' ')}</h3>
            <div>
                <label htmlFor="Numbers">Quantidade de Numeros: </label>
                <input 
                min='6'
                max='17'
                type="number"
                 id="Numbers"
                  value={qtde}
                   onChange={e => {
                    setQtde(+e.target.value)
                    setNumbers(gerarNumero(+e.target.value))
                }} />
            </div>
            <button onClick={_ => setNumbers(gerarNumero(qtde))}>Gerar Numeros</button>
        </div>
    );
}