import { Link } from "react-router-dom";
interface   BlogCardProps {
    authorName:string;
    title: string;
    content: string;
    publishedDate : string;
    id :number

 }



export const BlogCard= ({
    authorName,
    title,
    content,
    publishedDate,
      id}:BlogCardProps) => {

return <Link to = {`/Blog/${id}`}>
    <div className="  border-b-2 border-slate-200 rounded-md p-4 pb-4  w-screen mt-8 max-w-screen-lg">
   <div className="flex ">
    
   <Avatar size={8}  name ={authorName}/>   
   
   <div className="font-extralight pl-2 text-sm fles flex-col justify-center"> 
    {authorName}.
    </div > <div className="pl-2 font-thin text-slate-500 text-sm flex flex-col justify-center">
        {publishedDate} 
        </div>
    </div>
    <div className="text-xl font-bold pt-2 ">
        {title}
    </div>
    <div className="text-md font-thin   ">
        {content.slice(0,100) + "....."} 
    </div>
   
    <div className="text-slate-500 text-sm font-thin pt-4">
        {Math.ceil(content.length/100)} min read
        </div>

</div></Link>


}
export function Circle() {
    return <div className="h-1 w-1 rounded-full bg-slate-500">

    </div>
}

 export const  Avatar = ({name , size  }:{ name:string,size ?: number}) => {
    return <div>
    <div className={`relative inline-flex items-center justify-center overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600 w-6 h-6`}>
    <span className="text-sm text-gray-600 dark:text-gray-300">{name[0]}</span>
</div>
</div>
  }