import { Link, useNavigate } from 'react-router-dom';
import { Layout } from '../components/Layout';
import { useDispatch } from 'react-redux';
import { login } from '../redux/userSlice';
import { localStorageAccount } from '../constants/localStorage';

export const SignIn = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const userData = localStorageAccount || null;
    const handleLogin = () => {
        navigate('/my-account');
        dispatch(login());
    };
    return (
        <Layout>
            <h1 className="font-medium text-xl text-center mb-6 w-80">Welcome</h1>
            <div className="flex flex-col w-80">
                <p>
                    <span className="font-light text-sm">Email:</span>
                    <span>{userData?.email}</span>
                </p>
                <p>
                    <span className="font-light text-sm">Password:</span>
                    <span>{userData?.password}</span>
                </p>
                <button
                    onClick={handleLogin}
                    disabled={!userData ? true : false}
                    className="bg-black disabled:bg-black/40 text-white w-full rounded-lg py-3 mt-4 mb-2">
                    Log in
                </button>

                <div className="text-center">
                    <a className="font-light text-xs underline underline-offset-4" href="">
                        Forgot my password
                    </a>
                </div>
                <Link to="/signup">
                    <button className="border w-full border-black disabled:text-black/40 disabled:border-black/40 rounded-lg mt-6 py-3">
                        Sign up
                    </button>
                </Link>
            </div>
        </Layout>
    );
};
