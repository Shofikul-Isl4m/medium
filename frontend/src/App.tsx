import { BrowserRouter, Route, Routes } from "react-router-dom"

import { Signin } from "./pages/signin"
import { Blog } from "./pages/Blog"
import { Signup } from "./pages/Signup"
import { Blogs } from "./pages/Blogs"
import { Publish } from "./pages/Publish"


function App() {
  

  return (
    <>
    <BrowserRouter>
    <Routes>
   <Route path="/signup"  element = {<Signup />} />
   <Route path="/signin"  element = {<Signin />} />
   
   <Route path="/Blogs"  element = {<Blogs />} />
   <Route path="/Blog/:id"  element = {<Blog />} />
   <Route path="/publish"  element = {<Publish />} />

   


    </Routes>
    
    
    
    
    
    </BrowserRouter>
      
    </>
  )
}

export default App
