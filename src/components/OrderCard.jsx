import { TrashIcon, MinusCircleIcon, PlusCircleIcon } from '@heroicons/react/24/outline';
import { useDispatch } from 'react-redux';
import { addOne, deleteProduct, removeOne } from '../redux/cartSlice';
import { formatPrice } from '../utils';

export const OrderCard = ({ product, myOrder }) => {
    const dispatch = useDispatch();
    const handleDelete = () => {
        dispatch(deleteProduct(product));
    };
    const handleAdd = () => {
        dispatch(addOne(product.id));
    };
    const handleRemove = () => {
        dispatch(removeOne(product.id));
    };

    return (
        <div className="flex justify-between items-center">
            <div className="flex items-center gap-2">
                <figure className="w-20 h-20">
                    <img className="aspect-square rounded-lg object-cover" src={product.images[0]} alt={product.title} />
                </figure>
                <div className="flex flex-col gap-1">
                    <p className="text-sm">{product.title}</p>

                    <p className="text-sm font-light">Quantity:</p>
                    {!myOrder && (
                        <div className="flex gap-2">
                            <button>
                                <MinusCircleIcon className="w-5 cursor-pointer text-blue-500" onClick={handleRemove} />
                            </button>
                            <span>{product.quantity}</span>
                            <button>
                                <PlusCircleIcon className="w-5 cursor-pointer text-blue-500" onClick={handleAdd} />
                            </button>
                        </div>
                    )}
                </div>
            </div>
            <div>
                <p className="text-sm font-light">
                    Price: <span className="font-normal">${formatPrice(product.price)}</span>
                </p>
                <p className="text-sm font-light">Unitary Total:</p>
                <div className="flex items-center gap-2">
                    <p className="text-lg font-medium">${formatPrice(product.price * product.quantity)}</p>
                    {!myOrder && <TrashIcon onClick={handleDelete} className="h-5 w-5 text-blue-500 cursor-pointer" />}
                </div>
            </div>
        </div>
    );
};
