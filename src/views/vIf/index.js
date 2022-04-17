import React, { useState } from "react"

function VIf() {
  const [isShow, setIsShow] = useState(true)
  const toggleShow = () => {
    setIsShow(!isShow)
  }

  return (
    <div className='View-row'>
      <div> useVIf </div>
      <button onClick={toggleShow}>切换</button>
      {
        isShow && 'something...'
      }
    </div>
  )
}

export default VIf