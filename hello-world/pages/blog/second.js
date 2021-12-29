import Link from "next/link"

function SecondBlogPost()
{
    return (
        <div>
            <h1 class = "font-bold text-center m-7 text-3xl text-white"> Second Blog Page </h1>

            <div class = "underline">
                <Link href = "/blog"> Back to Blog Post  </Link>
            </div>

            <div class = "underline">
                <Link href = "/"> Back to Home Page </Link>
            </div>
            
        </div>
         )
}

export default SecondBlogPost