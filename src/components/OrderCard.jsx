import { XMarkIcon } from '@heroicons/react/24/outline';
import { useDispatch } from 'react-redux';
import { deleteProduct } from '../redux/cartSlice';
import { formatPrice } from '../utils';

export const OrderCard = ({ product, myOrder }) => {
    const dispatch = useDispatch();
    const handleDelete = () => {
        dispatch(deleteProduct(product));
    };

    return (
        <div className="flex justify-between items-center">
            <div className="flex items-center gap-2">
                <figure className="w-20 h-20">
                    <img className="w-full h-full rounded-lg object-cover" src={product.images[0]} alt={product.title} />
                </figure>
                <div className="flex flex-col gap-2">
                    <p className="text-sm">{product.title}</p>
                    <p className="text-sm font-light">Quantity: {product.quantity}</p>
                    <p className="text-sm font-light">${product.price}</p>
                </div>
            </div>
            <div className="flex items-center gap-2">
                <p className="text-lg font-medium">${formatPrice(product.price * product.quantity)}</p>
                {!myOrder && <XMarkIcon onClick={handleDelete} className="h-5 w-5 text-blue-500 cursor-pointer" />}
            </div>
        </div>
    );
};
