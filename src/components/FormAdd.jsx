import { useState } from 'react'
import clientList, { Client }  from '../utils'

export const FormAdd = () => {

  const [input, setInput] = useState('')
  const [client, setClient] = useState(new Client())


  const handleInput = (e) => {
    setInput(e.target.value)
  }

  const handleAdd = () => {
    if (input === '') return
    client.name = input
    setClient(client)
    clientList.append(client)
    setInput('')
    alert(`client ${client.name} created successfully`)
  }

  return (
    <div className='flex flex-col text-neutral-900 p-4 rounded-lg shadow border'>
      <h2 className='text-2xl font-bold mb-6'> add client</h2>
      <span className='block text-sm font-medium mb-2'>name</span>
      <input value={input} className="w-64 border border-gray-300 rounded px-2 py-1 mb-6" type="text" onChange={handleInput}/>
      <button onClick={handleAdd}className="w-64 py-2 px-4 bg-blue-500 text-white rounded-md">add client</button>
    </div>
  )
}
