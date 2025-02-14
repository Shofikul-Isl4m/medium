import { Appbar } from "../components/Appbar"
import { BlogCard } from "../components/BlogCard"
import { BlogSkeleton } from "../components/BlogSkeleton";
import { useBlogs } from "../hooks"

export const  Blogs = () => {
  

  const {blogs,loading} = useBlogs();
  
  
  if (loading)
    return <div  mt-16>
      <Appbar />

     <div className="grid grid-col-8">
    <div className="col-start-3 col-end-8"> <BlogSkeleton/></div>
    <div className="col-start-3 col-end-8"> <BlogSkeleton/></div>
    <div className="col-start-3 col-end-8"> <BlogSkeleton/></div>
    <div className="col-start-3 col-end-8"> <BlogSkeleton/></div>
    <div className="col-start-3 col-end-8"> <BlogSkeleton/></div>

    </div>
    
      

    </div>;
    
   

    return <div>


   


    <Appbar />
    
    
    <div className=" flex justify-center ">
      <div>
   { 
    blogs.map( blog  => <BlogCard
    id ={blog.id}
       authorName={blog.author.name || "Anonymous"}
       title={blog.title}
       content={blog.content}
        publishedDate={"12/12/2021"} />)
}


   </div>
  
    </div>

    </div>
  }


