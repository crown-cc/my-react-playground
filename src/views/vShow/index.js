import React, { useState } from "react"

function VShow() {
  const [isShow, setIsShow] = useState(true)
  const toggleShow = () => {
    setIsShow(!isShow)
  }

  return (
    <div class="View-row">
      <div> useVShow </div>
      <button onClick={toggleShow}>切换</button>
      {
        <div style={{display: isShow ? '' : 'none'}}>something...</div>
      }
    </div>
  )
}

export default VShow