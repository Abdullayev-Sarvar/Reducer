import React, { useContext } from 'react';
import ProjectStore from '../../context/store';
import Toastify from 'toastify-js';
import "toastify-js/src/toastify.css";

const Home = () => {
    const [state, dispatch] = useContext(ProjectStore);

    const handleDelete = (index) => {
        const user = state.users[index];
        const confirmed = window.confirm(`Are you sure you want to delete this user: ${index + 1}?`);

        if (confirmed) {
            dispatch({ type: "delete_user", index });

            Toastify({
                text: "User deleted successfully!",
                duration: 3000,
                close: true,
                gravity: "top", 
                position: "right",
                backgroundColor: "linear-gradient(to right, #FF5F6D, #FFC371)",
            }).showToast();
        }
    };

    return (
        <div className="w-full max-w-[1366px] h-full mx-auto p-4">
            <h1 className="text-2xl font-bold ml-4 mb-4 mt-6">Added Users</h1>
            <table className="w-full bg-white border border-gray-300 shadow">
                <thead>
                    <tr>
                        <th className="py-4 border-b">User</th>
                        <th className="py-4 px-4 border-b">Email</th>
                        <th className="py-4 px-4 border-b">Password</th>
                        <th className="py-4 px-4 border-b">Age</th>
                        <th className="py-4 px-4 border-b">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {state.users.map((user, index) => (
                        <tr key={index} className="text-center">
                            <td className="py-4 bg-gray-100 border-b-2">{index + 1}</td>
                            <td className="py-4 bg-gray-100 px-4 border-b-2">{user.email}</td>
                            <td className="py-4 bg-gray-100 px-4 border-b-2">{user.password}</td>
                            <td className="py-4 bg-gray-100 px-4 border-b-2">{user.age}</td>
                            <td className="py-2 bg-gray-100 px-4 border-b-2">
                                <button 
                                    onClick={() => handleDelete(index)} 
                                    className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-700  deleteBtn">
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Home;
