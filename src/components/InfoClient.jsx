import { useContext} from "react"
import { ActualClientContext } from "../context/ActualClient"
import { ViewClaims } from "./ViewClaims"
import { ViewQuerys } from "./ViewQuerys"

export const InfoClient = () => {
  
  const {actualClient} = useContext(ActualClientContext)

  return (
    <div className=" mx-8 bg-white text-neutral-900 p-4 rounded-lg shadow border">

      <span className="text-3xl font-bold">{actualClient.name}</span>
      <div className="flex gap-12">
        <ViewQuerys />
        <ViewClaims />
      </div>
      
    </div>    
  )
}

