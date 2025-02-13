import { CreateBlogInput } from "@shofikul1/medium-common"
import { Appbar } from "../components/Appbar"
import axios from "axios"
import { ChangeEvent,  useState } from "react"
import { BACKEND_URL } from "../config"
import {  useNavigate } from "react-router-dom"


export const Publish = () => {

    const navigate = useNavigate();


    const [blogInput , setBlogInput]  = useState<CreateBlogInput>({

        title : "" ,
        content:"",
        
      
      
      
        })



    return <div>

        <Appbar/>
    
 
    <div className="grid grid-cols-6" >
<div className="col-start-2 col-end-6">
        
<label htmlFor="helper-text" className="block my-2 text-sm font-medium text-gray-900 ">Input</label>
<input type="text"  id="helper-text" aria-describedby="helper-text-explanation" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  " 
onChange={(e)=>{
    setBlogInput( (prev) =>({
        ...prev,
        title : e.target.value,

    
}))
}} placeholder="Title"/>

</div>
<div className="col-start-2 col-end-6 mt-6">
    <Texteditor onChange={(e)=>{

        setBlogInput((prev)=>({
            ...prev,
            content : e.target.value,
        }))  

    }}
    
   />


<button  onClick={ async()=>{
    

      try {
   const response =  await axios.post(`${BACKEND_URL}/api/v1/blog`,blogInput,{
        headers : {
            Authorization :  localStorage.getItem("token")
        }   
   });

        navigate(`/Blog/${response.data.id}`)

      } catch (error) {
            console.log(error);
        
      }
}   

    } type="submit" className="inline-flex items-center px-5 py-2.5 text-sm font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200 hover:bg-blue-800">
       Publish Post
   </button>
</div>


    </div>

    </div>
}





function Texteditor({onChange}:{onChange :(e : ChangeEvent<HTMLTextAreaElement>) => void
    }) {
    return (
       

   <div className="w-full mb-4 border border-gray-200 rounded-lg bg-gray-50">
       
       <div className="px-4 py-2 bg-white rounded-b-lg">
           <label htmlFor="editor" className="sr-only">Publish post</label>
           <textarea onChange={onChange} id="editor"  rows={8} className="block w-full px-0 text-sm text-gray-800 bg-white border-0 " placeholder="Write an article..." required ></textarea>
       </div>
   </div>
  


    )
}