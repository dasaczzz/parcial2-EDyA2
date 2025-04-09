import { useContext, useEffect, useState } from "react"
import { ActualClientContext } from "../context/ActualClient"

export const ViewQuerys = () => {

  const {actualClient} = useContext(ActualClientContext)
  
  const [input, setInput] = useState('')
  const [querys, setQuerys] = useState(actualClient.querys)

  useEffect(() => {setQuerys(actualClient.querys)}, [actualClient])

  const handleInput = (e) => {
    setInput(e.target.value)
  }

  const handleEnqueue = () => {
    if(input === '') return
    setQuerys(querys.enqueue(input))
    alert(`query ${input} created successfully`)
    setInput('')
  }

  const handleDequeue = () => {
    setQuerys(querys.dequeue())
  }

  return (
    <div className="flex flex-col max-w-sm mx-auto shadow rounded bg-white gap-8">
      <span className="text-xl font-bold">querys</span>
      <div className="flex gap-4">
        <input value={input} className="w-64 border border-gray-300 rounded px-2 py-1 mb-6" type="text" onChange={handleInput}/>
        <button onClick={handleEnqueue} className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">add query</button>
      </div>
      <ul className="flex flex-col gap-8 ">
        {querys.items.map(item => (
          <li className="border border-stone-600 rounded-md px-4 py-2">
            <span>{item}</span>
          </li>
        ))}
      </ul>
      <button onClick={handleDequeue} className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">query resolved</button>
    </div>
  )
}
