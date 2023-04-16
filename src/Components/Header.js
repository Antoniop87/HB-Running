import { Link } from "react-router-dom";

function Header() {
    return (
        <header class=" bg-blue-600 text-white">
            <nav class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
                <div class="flex items-center">
                    <a href="/" class="font-bold text-xl">HB Running</a>
                </div>
                <div class="flex">
                    <Link to="/Sobre" class="px-3 py-2 text-sm font-medium hover:text-gray-500">Sobre</Link>
                    <Link to="/Contato" class="px-3 py-2 text-sm font-medium hover:text-gray-500">Contato</Link>
                </div>
            </nav>
        </header>
    )
}

export default Header;