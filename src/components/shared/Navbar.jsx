import Link from "next/link";

const Navbar = () => {
    return (
        <div>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16 items-center">
                    <Link href="/" className="text-xl font-bold text-gray-900">
                        Logo
                    </Link>
                    <div className="hidden md:flex space-x-6">
                        <Link href="/about" className="text-gray-700 hover:text-gray-900">
                            About
                        </Link>
                        <Link href="/services" className="text-gray-700 hover:text-gray-900">
                            Services
                        </Link>
                        <Link href="/contact" className="text-gray-700 hover:text-gray-900">
                            Contact
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;