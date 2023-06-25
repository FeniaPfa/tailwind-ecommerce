import { useNavigate } from 'react-router-dom';
import { Layout } from '../components/Layout';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { register } from '../redux/userSlice';

export const SignUp = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    // const { account } = useSelector((state) => state.user);
    const [form, setForm] = useState({});
    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleRegister = (e) => {
        e.preventDefault();
        dispatch(register(form));
        navigate('/');
    };
    return (
        <Layout>
            <h1 className="font-medium text-xl text-center mb-6 w-80">Welcome</h1>
            <form className="flex flex-col w-80 gap-2" onSubmit={handleRegister}>
                <label htmlFor="name">Name:</label>
                <input required name="name" className="border border-black p-3 rounded-lg" onChange={handleChange} />
                <label htmlFor="email">Email:</label>
                <input
                    required
                    name="email"
                    type="email"
                    className="border border-black p-3 rounded-lg"
                    onChange={handleChange}
                />
                <label htmlFor="password">Password:</label>
                <input
                    required
                    name="password"
                    type="password"
                    className="border border-black p-3 rounded-lg"
                    onChange={handleChange}
                />

                <button type="submit" className="bg-black disabled:bg-black/40 text-white w-full rounded-lg py-3 mt-4 mb-2">
                    Sign Up
                </button>
            </form>
        </Layout>
    );
};
