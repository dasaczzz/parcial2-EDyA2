import { useContext, useEffect, useState } from "react"
import { ActualClientContext } from "../context/ActualClient"

export const ViewClaims = () => {

  const {actualClient} = useContext(ActualClientContext)

  const [claims, setClaims] = useState(actualClient.claims)
  const [input, setInput] = useState('')
  
  useEffect(() => {setClaims(actualClient.claims)}, [actualClient])

  const handleInput = (e) => {
    setInput(e.target.value)
  }

  const handlePush = () => {
    if(input === '') return
    setClaims(claims.push(input))
    alert(`claim ${input} created successfully`)
    setInput('')
  }

  const handlePop = () => {
    setClaims(claims.pop())
  }
  
  return (
    <div className="flex flex-col max-w-sm mx-auto shadow rounded bg-white gap-8">
      <span className="text-xl font-bold">Claims</span>
      <div className="flex gap-4">
        <input value={input} className="w-64 border border-gray-300 rounded px-2 py-1 mb-6" type="text" onChange={handleInput}/>
        <button onClick={handlePush} className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-blue-700">add claim</button>
      </div>
      <ul className="flex flex-col gap-8 ">
        {claims.items.map(item => (
          <li className="border border-stone-600 rounded-md px-4 py-2">
            <span>{item}</span>
          </li>
        ))}
      </ul>
      <button onClick={handlePop} className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-blue-700">last claim resolved</button>
    </div>
  )
}
