import {
  BrowserRouter, 
  Routes, 
  Route
} from "react-router-dom"
import { Characters } from "./components/Characters"
import { Header } from "./components/Header"
import { Home } from "./pages/Home"
import { Character } from "./pages/Character"



function App() {
 return  (
  <BrowserRouter>
    <Header/>
    <main>
      <Routes>
        <Route index path="/" element={<Home/>}/>
        <Route index path="/character/:code" element={<Character/>}/>
      </Routes>
    </main>
  </BrowserRouter>
 )
}

export default App
