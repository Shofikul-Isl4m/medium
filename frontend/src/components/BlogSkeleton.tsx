import { Circle } from "./BlogCard"

export const BlogSkeleton = () => {
  return <div>

    
<div role="status" className=" animate-pulse">

<div className="  border-b-2 border-slate-200 rounded-md p-4 pb-4  w-screen mt-8 max-w-screen-lg">
   <div className="flex ">
    
   <div className="h-4  bg-gray-200 rounded-ful w-48 mb-4"></div>  
   <div className="h-2.5 bg-gray-200 rounded-ful w-48 mb-4"></div>
   <div className="h-2.5 bg-gray-200 rounded-ful w-48 mb-4"></div>
   <div className="flex justify-center flex-col pl-2  ">
                    <Circle />
                </div>
    <div className="pl-2 font-thin text-slate-500 text-sm flex flex-col justify-center">
    
        </div>
    </div>
    <div className="text-xl font-bold pt-2 ">
    <div className="h-2.5 bg-gray-200 rounded-ful w-48 mb-4"></div>
    </div>
    <div className="text-md font-thin   ">
    <div className="h-2.5 bg-gray-200 rounded-ful w-48 mb-4"></div>
    </div>
   
    <div className="text-slate-500 text-sm font-thin pt-4">
    <div className="h-2.5 bg-gray-200 rounded-ful w-48 mb-4"></div>
        </div>

</div>
   
    <span className="sr-only">Loading...</span>
</div>








  </div>





}