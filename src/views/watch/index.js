import React, { useState, useEffect } from "react"

function Watch() {
  const [options] = useState(['boy', 'girl'])
  const [selected, setSelected] = useState('boy')
  const [list, setList] = useState([])

  useEffect(() => {
    const result = Array.from({ length: ~~(Math.random() * 10) }).map(i => ({ label: 'item' }) )
    setList(result)
  }, [selected])

  return (
    <div className="View-row">
      <div> use watch </div>
      <div> selected: { selected } </div>
      <div>
        {
          options.map((option, i) => {
            return <button key={ i } onClick={ () => setSelected(option) }>{ option }</button>
          })
        }
      </div>
      {
        list.map((item, i) => {
          return <div key={ i }> { item.label } </div>
        })
      }
    </div>
  )
}

export default Watch