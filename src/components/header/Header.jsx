import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header className="bg-blue-500 text-white p-4 shadow-md">
            <div className="container mx-auto flex justify-between items-center">
                <h1 className="text-2xl font-bold">
                    <Link to="/">User Management</Link>
                </h1>
                <nav>
                    <ul className="flex space-x-6">
                        <li>
                            <Link to="/" className="text-xl hover:text-gray-300">Home</Link>
                        </li>
                        <li>
                            <Link to="/register" className="text-xl hover:text-gray-300">Register</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;
