import { useContext } from "react"
import IForm from "./context"

function Inject() {
  const { name } = useContext(IForm)

  return (
    <div> inject: { name } </div>
  )
}

export default Inject