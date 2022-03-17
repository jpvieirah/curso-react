import React from "react";

import Card from "./components/layout/Card";
import Aleatorio from "./components/basicos/Aleatorio";
import Fragmento from './components/basicos/Fragmento';
import ComParametro from './components/basicos/ComParametro';
import Primeiro from './components/basicos/Primeiro';

export default (_) => (
     <div id="app">
            <h1>Fundamentos React </h1>

        <Card titulo="#04 Desafio Aleátorio">
        <Aleatorio min={1} max={60} />
            </Card>

            <Card titulo="#03 Fragmento">
            <Fragmento />
            </Card>

            <Card titulo="#02 Com Paramêtro">
            <ComParametro 
        titulo="Situação do aluno" 
        aluno="Pedro" 
        nota={7.6}/>
            </Card>

            <Card titulo="#01 Primeiro Componente">
            <Primeiro></Primeiro>
            </Card>

    
           
   
        
    </div>

);