'use client';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Navbar from '@/components/navbar';

export default function Dashboard() {
    const [user, setUser] = useState(null);
    const router = useRouter();

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (!token) {
            router.push('/login');
        } else {
            const payload = JSON.parse(atob(token.split('.')[1]));
            setUser({ email: payload.email });
        }
    }, []);

    return (
        <div>
            <Navbar />
            <div className="flex items-center justify-center h-screen bg-gray-100">
                {user ? (
                    <div className="text-center">
                        <h1 className="text-3xl font-bold text-blue-600 mb-4">Welcome, {user.email}!</h1>
                        <p className="text-lg">You are logged in successfully.</p>
                    </div>
                ) : (
                    <p>Loading...</p>
                )}
            </div>
        </div>
    );
}
