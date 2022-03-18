import React from "react";
import DiretaFilho from "./DiretaFilho";

export default (props) => {
  return (
  <div>
      <DiretaFilho nome="Isabella" idade={20} nerd={true} />
      <DiretaFilho nome="Lorena" idade={17} nerd={false} />
  </div>
  );
};
