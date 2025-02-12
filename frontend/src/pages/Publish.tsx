import { Appbar } from "../components/Appbar"


export const Publish = () => {


    return <div>

        <Appbar/>
    
 
    <div className="grid grid-cols-6" >
<div className="col-start-2 col-end-6">
        
<label htmlFor="helper-text" className="block my-2 text-sm font-medium text-gray-900 ">Input</label>
<input type="email" id="helper-text" aria-describedby="helper-text-explanation" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  " placeholder="Title"/>

</div>

    </div>

    </div>
}