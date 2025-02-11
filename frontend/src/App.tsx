import { BrowserRouter, Route, Routes } from "react-router-dom"

import { Signin } from "./pages/signin"
import { Blog } from "./pages/Blog"
import { Signup } from "./pages/Signup"
import { Blogs } from "./pages/Blogs"


function App() {
  

  return (
    <>
    <BrowserRouter>
    <Routes>
   <Route path="/signup"  element = {<Signup />} />
   <Route path="/signin"  element = {<Signin />} />
   <Route path="/Blog"  element = {<Blog />} />
   <Route path="/Blogs"  element = {<Blogs />} />

   


    </Routes>
    
    
    
    
    
    </BrowserRouter>
      
    </>
  )
}

export default App
