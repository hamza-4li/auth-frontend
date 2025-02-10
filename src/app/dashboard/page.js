'use client';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Navbar from '@/components/Navbar';

export default function Dashboard() {
    const [user, setUser] = useState(null);
    const router = useRouter();

    useEffect(() => {
        const verifyAuth = async () => {
            const res = await fetch('https://auth-backend-production-20bb.up.railway.app/check', {
                method: 'GET',
                credentials: 'include', // Include cookies for authentication
            });

            if (res.ok) {
                const data = await res.json();
                setUser(data.user); // Store user data
            } else {
                router.push('/login'); // Redirect to login if not authenticated
            }
        };

        verifyAuth();
    }, []);

    const handleLogout = async () => {
        await fetch('https://auth-backend-production-20bb.up.railway.app/logout', {
            method: 'POST',
            credentials: 'include', // Include cookies to clear the session
        });
        window.location.href = '/login'; // Redirect to login page after logout
    };

    if (!user) return <p>Loading...</p>;

    return (
        <div className="p-5">
            <Navbar />
            <h1 className="text-2xl font-bold">Welcome, {user.name}!</h1>
            <p>Email: {user.email}</p>

            {/* Logout Button */}
            <button
                onClick={handleLogout}
                className="mt-4 bg-red-500 text-white px-4 py-2 rounded"
            >
                Logout
            </button>
        </div>
    );


}
