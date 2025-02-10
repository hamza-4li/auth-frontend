'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Navbar from '@/components/Navbar';

export default function Signup() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const router = useRouter();

    const handleSignup = async (e) => {
        e.preventDefault();
        try {
            const res = await fetch('https://auth-backend-production-20bb.up.railway.app/register', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email, password }),
            });

            if (res.ok) {
                router.push('/login');
            } else {
                const data = await res.json();
                alert(data.message || 'Signup failed');
            }
        } catch (error) {
            console.error('Signup Error:', error);
        }
    };

    return (
        <div>
            <Navbar />
            <div className="flex items-center justify-center h-screen bg-gray-100">
                <form onSubmit={handleSignup} className="bg-white p-8 rounded shadow-md w-80">
                    <h2 className="text-2xl mb-4 text-center font-bold">Sign Up</h2>
                    <input
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full p-2 mb-4 border rounded"
                        required
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="w-full p-2 mb-4 border rounded"
                        required
                    />
                    <button type="submit" className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700">
                        Sign Up
                    </button>
                </form>
            </div>
        </div>
    );
}
