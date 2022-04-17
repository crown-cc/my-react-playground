import React, { useMemo, useState } from "react";

function Computed() {
  const [num1, setNum1] = useState(1)
  const [num2] = useState(2)

  const num3 = useMemo(() => num1 + num2, [num1, num2])

  const addNum1 = () => {
    setNum1(num1 + 10)
  }

  return (
    <div className="View-row">
      <div> use computed </div>
      <button onClick={ addNum1 }> addNum1 </button>
      <div>{num1} + {num2} = {num3}</div>
    </div>
  )
}

export default Computed