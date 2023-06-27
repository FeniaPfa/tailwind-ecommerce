import { useDispatch, useSelector } from 'react-redux';
import { toggleMenu } from '../redux/cartSlice';
import { ShoppingBagIcon } from '@heroicons/react/24/outline';

export const CartToggle = () => {
    const cart = useSelector((state) => state.cart);
    const dispatch = useDispatch();
    const toggleCartMenu = () => {
        dispatch(toggleMenu());
    };
    return (
        <div className="relative flex gap-0.5 items-center">
            <button onClick={toggleCartMenu}>
                <ShoppingBagIcon className="h-6 w-6 cursor-pointer" />
            </button>
            <span className="absolute bottom-3.5 left-3.5 bg-black text-white w-5 h-5 rounded-full flex justify-center items-center text-xs font-bold">
                {cart.count}
            </span>
        </div>
    );
};
