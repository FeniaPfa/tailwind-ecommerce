import { useDispatch, useSelector } from 'react-redux';
import { Layout } from '../components/Layout';
import { useRef, useState } from 'react';
import { updateAccount } from '../redux/userSlice';

export const MyAccount = () => {
    const { account } = useSelector((state) => state.user);
    const dispatch = useDispatch();
    const [view, setView] = useState('user-info');
    const form = useRef(null);

    const editAccount = () => {
        const formData = new FormData(form.current);
        const data = {
            name: formData.get('name'),
            email: formData.get('email'),
            password: formData.get('password'),
        };
        const stringifiedAccount = JSON.stringify(data);
        localStorage.setItem('account', stringifiedAccount);
        dispatch(updateAccount(data));
    };
    const renderUserInfo = () => {
        return (
            <div className="flex flex-col gap-5">
                <p>
                    <span className="font-light text-sm">Name:</span>
                    <span>{account.name}</span>
                </p>
                <p>
                    <span className="font-light text-sm">Email:</span>
                    <span>{account.email}</span>
                </p>
                <button className="border border-black rounded-lg py-3" onClick={() => setView('edit-info')}>
                    Edit
                </button>
            </div>
        );
    };
    const renderEditUserInfo = () => {
        return (
            <form ref={form} className="flex flex-col gap-4">
                <div className="flex flex-col gap-1">
                    <label htmlFor="name" className="font-light text-sm">
                        Name:
                    </label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        defaultValue={account.name}
                        placeholder="Peter"
                        className="rounded-lg border border-black placeholder:font-light placeholder:text-sm placeholder:text-black/60 focus:outline-none py-2 px-4"
                    />
                </div>
                <div className="flex flex-col gap-1">
                    <label htmlFor="email" className="font-light text-sm">
                        Email:
                    </label>
                    <input
                        type="text"
                        id="email"
                        name="email"
                        defaultValue={account.email}
                        placeholder="hi@helloworld.com"
                        className="rounded-lg border border-black placeholder:font-light placeholder:text-sm placeholder:text-black/60 focus:outline-none py-2 px-4"
                    />
                </div>
                <div className="flex flex-col gap-1">
                    <label htmlFor="password" className="font-light text-sm">
                        Password:
                    </label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        defaultValue={account.password}
                        placeholder="******"
                        className="rounded-lg border border-black placeholder:font-light placeholder:text-sm placeholder:text-black/60 focus:outline-none py-2 px-4"
                    />
                </div>
                <button
                    className="bg-black text-white w-full rounded-lg py-3"
                    onClick={() => {
                        setView('user-info'), editAccount();
                    }}>
                    Edit
                </button>
            </form>
        );
    };
    const renderView = () => (view === 'user-info' ? renderUserInfo() : renderEditUserInfo());
    return (
        <Layout>
            <h1 className="font-medium text-xl text-center mb-6">My Account</h1>
            {renderView()}
        </Layout>
    );
};
