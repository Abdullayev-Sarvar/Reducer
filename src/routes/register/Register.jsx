import React, { useContext } from 'react';
import ProjectStore from '../../context/store';
import Toastify from 'toastify-js';
import "toastify-js/src/toastify.css";

const Register = () => {
    const [state, dispatch] = useContext(ProjectStore);

    const handleSubmit = (e) => {
        e.preventDefault();
        const newUser = {
            email: state.email,
            password: state.password,
            age: state.age,
        };

        dispatch({ type: "add_user", user: newUser });

        Toastify({
            text: "User registered successfully!",
            duration: 3000,
            close: true,
            gravity: "top", 
            position: "right", 
            backgroundColor: "linear-gradient(to right, #00b09b, #96c93d)",
        }).showToast();
    };

    return (
        <div className="flex flex-col items-center my-28">
            <form onSubmit={handleSubmit} className="w-full max-w-sm bg-slate-200 p-6">
                <div className="">
                    <input 
                        type="email" onChange={e => dispatch({ type: "email_change", email: e.target.value })} 
                        placeholder='Enter your Email'
                        className="w-full px-3 py-2 border rounded"
                        required 
                    />
                </div>
                <div className="my-5">
                    <input 
                        type="password" onChange={e => dispatch({ type: "password_change", password: e.target.value })} 
                        placeholder='Enter your Password'
                        className="w-full px-3 py-2 border rounded"
                        required 
                    />
                </div>
                <div className="">
                    <input 
                        type="number" onChange={e => dispatch({ type: "age_change", age: e.target.value })} 
                        placeholder='Enter your Age' 
                        className="w-full px-3 py-2 border rounded"
                        required 
                    />
                </div>
                <button type='submit' className="w-full px-4 py-2 bg-blue-500 text-white rounded mt-8">Submit</button>
            </form>
        </div>
    );
};

export default Register;
