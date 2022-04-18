import React, { useState } from "react"
import IForm from "./context"
import Inject from './inject'

function Provide() {
  const [name, setName] = useState('')

  return (
    <div className="View-row">
      <div> use provide </div>
      <input onInput={ (e) => setName(e.target.value) }></input>
      <div> provide: { name } </div>
      <IForm.Provider value={ { name } }>
        <Inject></Inject>
      </IForm.Provider>
    </div>
  )
}

export default Provide