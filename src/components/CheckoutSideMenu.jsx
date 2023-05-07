import { XMarkIcon } from '@heroicons/react/24/outline';
import { useDispatch, useSelector } from 'react-redux';
import { toggleMenu } from '../redux/cartSlice';
import { OrderCard } from './OrderCard';

export const CheckoutSideMenu = () => {
    const { cartProducts } = useSelector((state) => state.cart);
    const dispatch = useDispatch();

    const closeModal = () => {
        dispatch(toggleMenu());
    };

    return (
        <>
            <aside className="checkout-sidemenu flex flex-col fixed right-0 border border-black rounded-lg bg-white z-10">
                <div className="flex justify-between items-center p-6">
                    <h2 className="font-medium text-xl">My Order</h2>
                    <div
                        className="h-6 w-6 text-blue-500 cursor-pointer"
                        onClick={closeModal}>
                        <XMarkIcon />
                    </div>
                </div>
                <div className="px-6 flex flex-col gap-6 overflow-y-scroll">
                    {cartProducts.map((item) => (
                        <OrderCard key={item.id} product={item} />
                    ))}
                </div>
            </aside>
        </>
    );
};
