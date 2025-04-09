import { useContext } from "react"
import { ActualClientContext } from '../context/ActualClient'

export const ClientItem = ({client}) => {

  const {setActualClient} = useContext(ActualClientContext)

  return (
    <li className="flex justify-between w-64 ">
      <h3>{client.name}</h3>

      <div className="flex gap-4 justify-center">
        <button onClick={() => setActualClient(client)} className="py-2 px-4 bg-neutral-700 text-white rounded-md">view information</button>
      </div>
    </li>
  )
}
