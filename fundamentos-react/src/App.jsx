import "./App.css"
import React from "react";

import Familia from "./components/basicos/Familia";
import Card from "./components/layout/Card";
import Aleatorio from "./components/basicos/Aleatorio";
import Fragmento from "./components/basicos/Fragmento";
import ComParametro from "./components/basicos/ComParametro";
import Primeiro from "./components/basicos/Primeiro";

export default (_) => (
  <div className="App">
    <h1>Fundamentos React </h1>

    <div className="Cards">
    <Card titulo="#05 Componentes com Filhos" color="#00C8F8" >
    <Familia sobrenome="Ferreira" />
      </Card>


      <Card titulo="#04 Desafio Aleátorio" color="#7fffd4" >
        <Aleatorio min={1} max={60} />
      </Card>

      <Card titulo="#03 Fragmento" color="#E94C6F">
        <Fragmento />
      </Card>

      <Card titulo="#02 Com Paramêtro" color="#E8B71A">
        <ComParametro titulo="Situação do aluno" aluno="Pedro" nota={7.6} />
      </Card>

      <Card titulo="#01 Primeiro Componente" color="#588C73">
        <Primeiro></Primeiro>
      </Card>
    </div>
  </div>
);
