
import Link from 'next/link'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center  p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <h1 className='text-3xl font-semibold text-center text-gray-800 mb-6'>Hello, Welcome to Next.js </h1>
      </div>

      <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
        <Link href="/getCSR" >Client Side Rendering</Link>
        <Link href = "/getSSG">Static Side Genrenting</Link>
        <Link href ="/getSSR">Server Side Rendering</Link>

        </div>
        
        </main>
  )
}