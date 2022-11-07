const BlogListCard = (props) => {
    return (
        <div>
            <h2>{props.blog.title}</h2>
            <p>{props.blog.author}</p>
            <p>Text Here</p>
            <p>{props.blog.id}</p>
            <p>{props.blog.createdAt}</p>
        </div>
    )
}

export default BlogListCard