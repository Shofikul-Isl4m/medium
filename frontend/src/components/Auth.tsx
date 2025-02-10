import { ChangeEvent, ChangeEventHandler } from "react";
import { Link } from "react-router-dom"



export const Auth = () => {
  const postInput 

  return <div className="h-screen flex justify-center items-center flex-col " >
   <div className="flex justify-center">
    <div>
    <div className="  text-3xl font-extrabold ">
         Create an Account   
         </div>
         
    <div className=" text-xl font-light text-slate-400">
        Already have an account?<Link to= {"/signin"} className="underline pl-2 ">Login</Link>
    </div >
    </div>
    <LabelledInput label="name " placeholder="username" onChange= { e => } />

    </div>

  </div>

}

interface LabelledInputType {

 label : string;
 placeholder :string;
 onChange : (e : ChangeEvent<HTMLInputElement>) => void ;
 value :string;



}

const LabelledInput = ({label,placeholder,onChange}:LabelledInputType) => {
  return <div>
<label for={label} className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">{label}</label>
    <input  onChange={onChange} type="text" id={label} className="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-base focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder={placeholder}  required/>

    </div>

}