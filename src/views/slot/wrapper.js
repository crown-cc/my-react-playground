import React, { useState } from "react";

function Wrapper(props) {
  const { children, content, footer } = props
  const [model] = useState({
    name: 'user',
    code: '0001'
  })

  return (
    <div className="View-row">
      <div> Wrapper </div>
      <div> { children } </div>
      <div> { content(model) } </div>
      <div style={ { width: 100, backgroundColor: '#ffffff' } }> { footer } </div>
    </div>
  )
}

export default Wrapper