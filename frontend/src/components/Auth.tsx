import { SingupInput } from "@shofikul1/medium-common";
import { ChangeEvent, useState  } from "react";
import { Link,  useNavigate } from "react-router-dom"
import axios from "axios";
import { BACKEND_URL } from "../config";



export const Auth = ({type} : {type : "signup" | "signin"}) => {
  const [postInput , setPostInput]  = useState<SingupInput>({

  name : "" ,
  username:"",
  password : "",



  })
  const Navigate = useNavigate();


  const sendRequest =async() => {

try {
  const response = await axios.post(`${BACKEND_URL}/api/v1/user/${type}`,postInput);
  const jwt = response.data;
  localStorage.setItem("token",jwt);
  Navigate("/Blogs");
} catch (e) {
  alert( "Signup Invalid");
}




  }

  return <div className="h-screen flex justify-center  flex-col " >
   <div className="flex justify-center">
   <div>
      <div className="px-10">
    <div className="  text-3xl font-extrabold ">
         Create an Account   
         </div>
         
    <div className=" text-xl font-light text-slate-400">
      {type==="signin"? "Don't have an account " : "  Already have an account?"}<Link to= {type === "signup" ?"/signin":"/signup"} className="underline pl-2 ">{type === "signup"? "signin": "signup"}</Link>
    </div>
    </div>
    <div >
   {type === "signup"? <LabelledInput label="Name" type="text" placeholder="Name" onChange= { (e) =>  {
      setPostInput( (prev)=>({
        ...prev,
        Name : e.target.value,
      })
    )} 

     } /> : null}
   <LabelledInput label="username" type="username"  placeholder="username" onChange= { (e) =>  {
      setPostInput( (prev)=>({
        ...prev,
        username : e.target.value,
      })
    )} }/>

    <LabelledInput label="Password" type="password"  placeholder="password" onChange= { (e) =>  {
      setPostInput( (prev)=>({
        ...prev,
        password : e.target.value,
      })
    )} 

     } />
     <button onClick={sendRequest}  type="button" className="w-full mt-8 text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">{type === "signup" ? "Signup" : "Signin"}</button>
     </div>
     

     </div>
   
     

    </div>

  </div>

}

interface LabelledInputType {

 label : string;
 placeholder :string;
 onChange : (e : ChangeEvent<HTMLInputElement>) => void ;

 type? :string;



}

const LabelledInput = ({label,placeholder,onChange,type}:LabelledInputType) => {
  return <div>
<label htmlFor={label} className="block mb-2 text-sm font-medium text-gray-900 mt-2">{label}</label>
    <input  onChange={onChange} type={type || "text"} id={label} className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-base focus:ring-blue-500 focus:border-blue-500" placeholder={placeholder}  required/>

    </div>

}