import BlogListCard from "./blogListCard"

const BlogList = (props) => {
    return (
        <div>
            {props.blogs.map((blog, index)=>{
                return <BlogListCard blog={blog} key={index}/>
            })}
        </div>
    )
}

export default BlogList