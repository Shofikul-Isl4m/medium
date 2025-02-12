import { Link } from "react-router-dom"
import { Avatar } from "./BlogCard"

export const Appbar = () => {

return <div className="border-b flex justify-between px-10 py-2">

<Link to = {'/Blogs'} className="flex items-center cursor pointer">
  Medium

  </Link>


<div className=" mx-2 flex items-center">
  <Link to ={"/publish"}>
<button type="button" className="text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm p-2 text-center m-4">New Blog</button>
</Link>

    <Avatar size = {6} name="Jhon Doe" />

</div>
</div>







}