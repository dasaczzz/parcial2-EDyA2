import { Route, Routes } from "react-router"
import { Navbar } from "./components/Navbar"
import { FormClient } from "./pages/FormClient"
import { Clients } from "./pages/Clients"

export const App = () => {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path='/' element={<Clients />}/>
        <Route path='/form' element={<FormClient />}/>
      </Routes>
    </>
  )
}