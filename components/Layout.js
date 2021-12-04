import Head from 'next/head';
import Link from 'next/Link';

const Layout = ({children, title = 'default title' }) => {
    return (
      <div className="flex justify-center items-center flex-col min-h-screen text-gray-600 text-sm font-mono">
        <Head>
          <title>{title}</title>
        </Head>
        <header>
          <nav className="bg-gray-800 w-screen">
            <div className="flex items-center pl-8 h-14">
              <div className="flex space-x-4">
                <Link href="/">
                  <a className="text-gray-300 hover:bg-gray-700 px-3 py-2 rounded">
                    Home
                  </a>
                </Link>
              </div>
            </div>
          </nav>
        </header>
        <main className="flex flex-1 justify-center items-center w-screen flex-col">
          {children}
        </main>
        <footer className="w-full h-6 flex justify-center items-center text-gray-500 text-sm border-t py-5">
          ©2021 たくみです
        </footer>
      </div>
    );
}

export default Layout;