import React from "react";
import FamiliaMembro from "./FamiliaMembro";

export default (props) => {
  return (

    <div>

    <FamiliaMembro nome="Pedro" sobrenome={props.sobrenome} />
    <FamiliaMembro nome="Ana" sobrenome={...props} />
    <FamiliaMembro nome="Gustavo" sobrenome="Silva" />


    </div>

  )
};
