import React from "react"

export default function ComParametro(props) {
    const status = props.nota >= 7 ? 'Aprovado' : 'Reprovado'
    const notaInt = Math.ceil(props.nota)
    /*caso precise alterar o valor de uma propriedaede 
    declare uma nova variavel com as condições conforme realizado acima*/ 

    return (

        <div>
            
            <h2>{ props.titulo }</h2>
            <p>
                <strong>{ props.aluno } </strong>
                 tem nota
               <strong> { notaInt } </strong>
               e está 
               <strong> { status } </strong>!
                </p>

        </div>

    )

}