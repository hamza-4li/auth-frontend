import Link from 'next/link';

const Navbar = () => {
    return (
        <nav className="bg-blue-600 p-4 flex justify-between items-center shadow-lg">
            <h1 className="text-white text-2xl font-bold">AuthApp</h1>
            <div>
                <Link href="/login" className="text-white px-4 py-2 rounded hover:bg-blue-700">Login</Link>
                <Link href="/signup" className="text-white px-4 py-2 rounded hover:bg-blue-700">Sign Up</Link>
            </div>
        </nav>
    );
};

export default Navbar;
