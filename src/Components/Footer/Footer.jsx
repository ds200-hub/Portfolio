import { MdOutlineEmail } from "react-icons/md";
import { CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";

function Footer() {
    return (
        <section
            id="Contacts"
            className="bg-[#465697] text-white py-16 px-6 sm:px-10 lg:px-20"
        >
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-10">

                {/* Left Side */}
                <div className="text-center md:text-left">
                    <h1 className="text-4xl md:text-5xl font-bold mb-3">
                        Contact
                    </h1>
                    <p className="text-lg md:text-xl text-gray-200">
                        Feel free to reach out!
                    </p>
                </div>

                {/* Right Side */}
                <ul className="space-y-4 text-lg">

                    <li className="flex items-center gap-3 hover:translate-x-2 transition duration-300">
                        <MdOutlineEmail size={24} />
                        <a
                            href="mailto:deepak.saini.developer@gmail.com"
                            className="hover:underline"
                        >
                            deepak.saini.developer@gmail.com
                        </a>
                    </li>

                    <li className="flex items-center gap-3 hover:translate-x-2 transition duration-300">
                        <CiLinkedin size={24} />
                        <a
                            href="https://www.linkedin.com/in/-deepak-saini/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:underline"
                        >
                            linkedin.com/in/-deepak-saini
                        </a>
                    </li>

                    <li className="flex items-center gap-3 hover:translate-x-2 transition duration-300">
                        <FaGithub size={24} />
                        <a
                            href="https://github.com/ds200-hub"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:underline"
                        >
                            github.com/ds200-hub
                        </a>
                    </li>

                </ul>

            </div>

            {/* Bottom Line */}
            <div className="text-center text-sm text-gray-300 mt-12 border-t border-white/20 pt-6">
                © {new Date().getFullYear()} Deepak. All rights reserved.
            </div>
        </section>
    );
}

export default Footer;
