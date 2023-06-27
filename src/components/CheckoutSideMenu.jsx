import { XMarkIcon } from '@heroicons/react/24/outline';
import { useDispatch, useSelector } from 'react-redux';
import { resetCart, toggleMenu } from '../redux/cartSlice';
import { OrderCard } from './OrderCard';
import { formatPrice, getDate, getTotal, getTotalQuantity, newId } from '../utils';
import { addOrder } from '../redux/ordersSlice';
import { useNavigate } from 'react-router-dom';
import { close } from '../redux/productDetailSlice';

export const CheckoutSideMenu = () => {
    const navigate = useNavigate();
    const { cartProducts } = useSelector((state) => state.cart);
    const { signOut } = useSelector((state) => state.user);
    const dispatch = useDispatch();

    const totalPrice = getTotal(cartProducts);

    const closeModal = () => {
        dispatch(toggleMenu());
        dispatch(close());
    };

    const handleCheckout = () => {
        if (signOut) {
            navigate('signin');
            closeModal();
            return;
        }
        const orderToAdd = {
            date: getDate(),
            products: cartProducts,
            totalQuantity: getTotalQuantity(cartProducts),
            total: totalPrice,
            id: newId(),
        };
        dispatch(addOrder(orderToAdd));
        dispatch(resetCart());
        navigate('/my-orders/last');
        closeModal();
    };

    return (
        <>
            <aside className="checkout-sidemenu flex flex-col fixed right-0 border border-black rounded-lg bg-white z-10">
                <div className="flex justify-between items-center p-6">
                    <h2 className="font-medium text-xl">My Order</h2>
                    <div className="h-6 w-6 text-blue-500 cursor-pointer" onClick={closeModal}>
                        <XMarkIcon />
                    </div>
                </div>
                <div className="px-5 flex flex-col gap-6 overflow-y-scroll flex-1">
                    {cartProducts.map((item) => (
                        <OrderCard key={item.id} product={item} />
                    ))}
                </div>
                <div className="px-6 mb-6">
                    <hr />
                    <p className="flex justify-between items-center my-5">
                        <span className="font-light">Total:</span>
                        <span className="font-medium text-2xl">${formatPrice(totalPrice)}</span>
                    </p>
                    <button
                        className="w-full bg-black py-3 text-white rounded-lg"
                        onClick={handleCheckout}
                        disabled={cartProducts.length === 0}>
                        Checkout
                    </button>
                </div>
            </aside>
        </>
    );
};
