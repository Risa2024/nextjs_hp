import Head from "next/head";
import Link from "next/link";
import Image from "next/image";


export default function Layout({children, title = "HP by Nextjs"}) {
    return (
        <>
        <div className="flex jjustify-center items-center flex-col min-h-screen text-gray-600 text-sm font-mono">
            <Head>
                <title>{title}</title>
            </Head>
            <header>
                <nav className="bg-gray-800 w-screen">
                    <div className="flx items-center pl-8h-14">
                        <div className="flex space-x-4">
                            <Link href="/">
                                <a className="text-gray-300 hover:bg-gray-700 px-3 py-2 rounded">
                                    ホーム
                                </a>
                             </Link>      
                             <Link href="/blog-page">
                                <a className="text-gray-300 hover:bg-gray-700 px-3 py-2 rounded">
                                    ブログ
                                </a>
                            </Link>  
                            <Link href="/contact-page">
                                <a className="text-gray-300 hover:bg-gray-700 px-3 py-2 rounded">
                                    コンタクト
                                </a>
                            </Link>  
                        </div>
                    </div>
                </nav>
            </header>
            <main className="flex flex-1 justify-center items-center flex-col w-screen">
                {children}
            </main>
            <footer className="w-full h-12 flex justify-center items-center border-t">
        <a
          className="flex items-center "
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} と height={16} />
          </a>
      </footer>
        </div>
        </>
    );
}