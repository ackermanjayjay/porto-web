import { Route, Routes } from "react-router-dom"
import { HomePages } from "./Components/HomePages"
import { About } from "./Components/About"
import { ProjectsList } from "./Components/Projects"
const  App = () => {

  return (
    <>
      <Routes>
        <Route path="/" element={<HomePages/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/project" element={<ProjectsList/>}/>
      </Routes>
    </>
  )
}

export default App
