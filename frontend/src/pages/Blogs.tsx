import { Appbar } from "../components/Appbar"
import { BlogCard } from "../components/BlogCard"
import { useBlogs } from "../hooks"

export const  Blogs = () => {
  

  const {blogs,loading} = useBlogs();
  
  
  if (loading)
    return  <div>
      loading...

    </div>;
    
   

    return <div>


   


    <Appbar />
    
    
    <div className=" flex justify-center ">
      <div>
   { 
    blogs.map( blog  => <BlogCard
       authorName={blog.author.name || "Anonymous"}
       title={blog.title}
       content={blog.content}
        publishedDate={"12/12/2021"} />)
}


   </div>
  
    </div>

    </div>
  }


