"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
    const pathName = usePathname()
    console.log(pathName)
    return (
        <div>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16 items-center">
                    <Link href="/" className="text-xl font-bold text-gray-900">
                        Logo
                    </Link>
                    <div className="hidden md:flex space-x-6">
                        <Link href="/about" className={pathName === "/about" ? "text-red-500 underline" : "text-gray-700 hover:text-gray-900"}>
                            About
                        </Link>
                        <Link href="/services" className="text-gray-700 hover:text-gray-900">
                            Services
                        </Link>
                        <Link href="/contact" className="text-gray-700 hover:text-gray-900">
                            Contact
                        </Link>
                        <Link href="/dashboard" className="text-gray-700 hover:text-gray-900">
                            Dashboard
                        </Link>
                        <Link href="/login" className="text-gray-700 hover:text-gray-900">
                            Login
                        </Link>
                        <Link href="/register" className="text-gray-700 hover:text-gray-900">
                            Register
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;