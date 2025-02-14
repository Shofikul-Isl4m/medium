 import { useParams } from "react-router-dom"
import { useBlog } from "../hooks";
import { Avatar } from "./BlogCard";
import { Appbar } from "./Appbar";
import { Spinner } from "./Spinner";





export const Fullblog =() =>{

    const {id} = useParams();
    const ID = Number(id);
    const { blog , loading } = useBlog({
      id :ID
    });


    if (loading){
      <Appbar />
  
      return <div className="  h-screen  flex  justify-center  items-center">
        
          <Spinner/>
       
      
      </div>
    }

 return <div className="  grid grid-cols-12 break-words ">
      
      <div className="  col-start-2 col-span-6 p-12 ">
        {blog? <div className="text-5xl font-extrabold ">
            {blog.title}
            </div> : "not find"}
            <div className="text-slate-400 pt-2">
                Post on 2nd December 2023
            </div>
            <div className="pt-4">
                {blog?.content}
            </div>
           
            
      </div>
      <div className=" col-span-4 p-12 ">
         Author
             <div className="flex ">
                <div>
                <Avatar  name ={blog?.author.name || "Anonymous"} /> 
                </div>
                <div>
         <div className=" text-lg ">
            {blog?.author.name || "Anonymous"}

            </div>
            <div className=" text-slate-500 pt-2">
                Random catch phrase about the authors ability to grab the user's attention 

            </div>
            </div>
            </div>

      </div>

    


 </div>






}