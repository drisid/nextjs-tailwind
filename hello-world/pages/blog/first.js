import Link from "next/link"

function firstBlogPost()
{
    return (
    <div>
        <div>
                <h1 class = "font-bold text-center m-7 text-3xl text-white"> First Blog Page </h1>
        </div>
    
        <div class = "underline">
                <Link href = "/blog/second"> Link to second  Blog Post  </Link>
        </div>

        <div class = "underline">
                <Link href = "/blog/second"> Link back to Blog Post  </Link>
        </div>

        <div class = "underline">
                <Link href = "/"> Link to home page </Link>
        </div>
       
     </div>
        )
}

export default firstBlogPost