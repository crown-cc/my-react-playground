import React, { useState } from "react"

function VFor(){
  const [list] = useState([
    { id: 1, name: 'html' },
    { id: 2, name: 'css' },
    { id: 3, name: 'javascript' },
  ])

  return (
    <div className="View-row">
      <div> useVFor </div>
      {
        list.map(item => {
          return <div key={item.id}> { item.name } </div>
        })
      }
    </div>
  )
}

export default VFor