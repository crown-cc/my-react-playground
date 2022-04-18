import React from "react";
import Wrapper from "./wrapper";

function Slot() {

  return (
    <div className="View-row">
      <div> use slot </div>
      <Wrapper
        content={ (model) => <div> { model.name } | { model.code } </div> }
        footer={ <button onClick={ (e) => alert('确认') }> 确认 </button> }
      >
        <div> use Wrapper </div>
      </Wrapper>
    </div>
  )
}

export default Slot