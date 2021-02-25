import Link from 'next/link'

export default function Navbar() {
    return (
        <nav>
            <nav className="flex items-center bg-white flex-wrap mx-auto border-b p-2">
                <span className="flex items-center justify-between text-3xl text-purple-800 font-bold tracking-wide uppercase pl-5">
                <Link href="/"><a>Aynsoft</a></Link>
                </span>
                <button className="text-gray-400 inline-flex p-3 hover:bg-blue-900 rounded lg:hidden ml-auto nav-toggler" data-target="#navigation">
                    <span className="material-icons">menu</span></button>

                <div className="hidden top-navbar w-full lg:inline-flex lg:flex-grow lg:w-auto" id="navigation">

                    <div className="lg:inline-flex lg:flex-row lg:ml-auto flex flex-col">

                        <span>
                        <Link href="/">
                            <a className="lg:inline-flex lg:w-auto w-auto px-6 py-2 text-xs uppercase font-bold text-gray-800 hover:text-gray-600">Home</a>
                        </Link>
                        </span>
                        <span>
                        <Link href="/product">
                            <a className="lg:inline-flex lg:w-auto w-auto px-6 py-2 text-xs uppercase font-bold text-gray-800 hover:text-gray-600">Products</a>
                            </Link>
                        </span>
                        <span>
                        <Link href="/product">
                        <a className="lg:inline-flex lg:w-auto w-auto px-6 py-2 text-xs uppercase font-bold text-gray-800 hover:text-gray-600">Services</a>
                        </Link>
                        </span>
                        <span>
                        <Link href="/product">
                        <a className="lg:inline-flex lg:w-auto w-auto px-6 py-2 text-xs uppercase font-bold text-gray-800 hover:text-gray-600">Outsourcing</a>
                        </Link>
                        </span>
                        <span>
                        <Link href="/about">
                        <a className="lg:inline-flex lg:w-auto w-auto px-6 py-2 text-xs uppercase font-bold text-gray-800 hover:text-gray-600">About</a>
                        </Link>
                        </span>
                        <span>
                        <Link href="/contact">
                        <a className="lg:inline-flex lg:w-auto w-auto px-6 py-2 text-xs uppercase font-bold text-gray-800 hover:text-gray-600">Contact</a>
                        </Link>
                        </span>
                    </div>

                </div>
            </nav>
        </nav>
    )
}