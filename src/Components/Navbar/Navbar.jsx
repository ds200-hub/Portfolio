import { RiCloseLine, RiMenu2Line } from "@remixicon/react";
import { useState } from "react";

function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav className="fixed top-0 left-0 w-full z-50 text-white bg-[#171d32] shadow-md">

            <div className="flex justify-between items-center px-6 sm:px-10 lg:px-20 py-6">

                {/* Logo */}
                <h1 className="text-2xl font-bold tracking-wide">
                    Portfolio
                </h1>

                {/* Desktop Menu */}
                <ul className="hidden md:flex gap-8 font-semibold">
                    <li className="hover:text-blue-400 transition duration-300">
                        <a href="#Home">Home</a>
                    </li>
                    <li className="hover:text-blue-400 transition duration-300">
                        <a href="#About">About</a>
                    </li>
                    <li className="hover:text-blue-400 transition duration-300">
                        <a href="#Skills">Skills</a>
                    </li>
                    <li className="hover:text-blue-400 transition duration-300">
                        <a href="#Projects">Projects</a>
                    </li>
                    <li className="hover:text-blue-400 transition duration-300">
                        <a href="#Contacts">Contacts</a>
                    </li>
                </ul>

                {/* Mobile Icon */}
                <div className="md:hidden">
                    {menuOpen ? (
                        <RiCloseLine
                            size={30}
                            onClick={() => setMenuOpen(false)}
                            className="cursor-pointer"
                        />
                    ) : (
                        <RiMenu2Line
                            size={30}
                            onClick={() => setMenuOpen(true)}
                            className="cursor-pointer"
                        />
                    )}
                </div>
            </div>

            {/* Mobile Menu */}
            {menuOpen && (
                <ul className="md:hidden flex flex-col items-center gap-6 pb-6 font-semibold bg-[#171d32]">
                     <li onClick={() => setMenuOpen(false)}>
                        <a href="#Home">Home</a>
                    </li>
                    <li onClick={() => setMenuOpen(false)}>
                        <a href="#About">About</a>
                    </li>
                    <li onClick={() => setMenuOpen(false)}>
                        <a href="#Skills">Skills</a>
                    </li>
                    <li onClick={() => setMenuOpen(false)}>
                        <a href="#Projects">Projects</a>
                    </li>
                    <li onClick={() => setMenuOpen(false)}>
                        <a href="#Contacts">Contacts</a>
                    </li>
                </ul>
            )}

        </nav>
    );
}

export default Navbar;
