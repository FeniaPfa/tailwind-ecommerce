import { Bars3Icon } from '@heroicons/react/24/outline';
import { updateFromLocalStorage } from '../redux/userSlice';
import { useEffect, useState } from 'react';
import { localStorageAccount } from '../constants/localStorage';
import { CartToggle } from './CartToggle';
import { NavLinks } from './NavLinks';
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';

export const Navbar = () => {
    const dispatch = useDispatch();

    const [toggleNav, setToggleNav] = useState(false);

    const getUserData = () => {
        if (localStorageAccount) {
            dispatch(updateFromLocalStorage());
        }
    };

    const handleToggleNav = () => {
        setToggleNav((prevState) => !prevState);
    };

    useEffect(() => {
        getUserData();
    }, []);
    return (
        <>
            <nav className=" bg-white z-10 w-full py-5 px-8 top-0 fixed shadow-md flex justify-between">
                <NavLink to="/">Shopi</NavLink>
                <div className="flex gap-2 md:hidden">
                    <button>
                        <Bars3Icon className="w-8 h-8" onClick={handleToggleNav} />
                    </button>

                    <CartToggle />
                </div>
                <div className="hidden md:justify-between md:flex w-full">
                    <NavLinks setToggleNav={setToggleNav} handleToggleNav={handleToggleNav} />
                </div>
            </nav>
            {toggleNav && (
                <div className="-mt-2 py-5 fixed md:hidden z-10 bg-white w-full border-y">
                    <NavLinks setToggleNav={setToggleNav} handleToggleNav={handleToggleNav} />
                </div>
            )}
        </>
    );
};
