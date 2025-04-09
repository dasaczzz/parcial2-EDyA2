import { ActualClientContext } from '../context/ActualClient'
import { ClientList } from "../components/ClientList"
import clientsList from "../utils"
import { useState } from 'react'
import { InfoClient } from '../components/InfoClient'

export const Clients = () => {

  const [actualClient, setActualClient] = useState(clientsList.head.value)

  return (
    <ActualClientContext.Provider value={{actualClient, setActualClient}}>
      <section className="flex flex-col mt-12 items-center">
        <div className='flex'>
          <ClientList />
          <InfoClient />
        </div>
      </section>
    </ActualClientContext.Provider>
  )
}
