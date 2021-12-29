import Link from 'next/link'

function Home()
{
  return (
    <body class = "justify-center items-center m-12 bg-violet-200">

        <div class = "font-bold text-center">
                 <h1 class = "m-7 text-3xl text-white"> WELCOME TO OUR HOME PAGE </h1>
                 <p class = "text-sm"> Feel free to click on blogs to visit the blog site </p>
          </div>

          <div className = "underline mb-1 absolute bottom-7">
          <Link href = '/blog'> Goto Blogs </Link>
          </div>

        

  </body>

  )
}
export default Home