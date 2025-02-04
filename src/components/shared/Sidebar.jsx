
import Link from 'next/link';

const Sidebar = () => {
    return (
        <div className="bg-slate-500">
            {/* Sidebar */}
            <div className=" h-screen left-0 w-64 bg-red-300 text-white p-5">
                <h2 className="text-xl font-bold mb-6">Sidebar</h2>
                <nav className="space-y-4">
                    <Link href="/profile" className="block px-3 py-2 rounded hover:bg-gray-700">Profile</Link>
                    <Link href="/setting" className="block px-3 py-2 rounded hover:bg-gray-700">Settings</Link>
                    <Link href="/logout" className="block px-3 py-2 rounded hover:bg-gray-700">Logout</Link>
                </nav>
            </div>
        </div>
    );
}
export default Sidebar;
