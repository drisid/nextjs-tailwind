import Link from 'next/link'


function Blog()
{
    return (
    
        <div>
            <div>
                    <h1 class = "font-bold text-center m-7 text-3xl text-white"> Welcome to Blog Page </h1>
            </div>
         
         <div class = "underline">
                <Link href = "/blog/first">  Link to First Blog Post </Link>
         </div>
                
         <div class = "underline">
                <Link href = "/blog/second">  Link to Second Blog Post </Link>
         </div>
               
         <div class = "underline">
                <Link href = "/"> Link back to Home Page</Link>
         </div>

         </div> 
    )
}

export default Blog