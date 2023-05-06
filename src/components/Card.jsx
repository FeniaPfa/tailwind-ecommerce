import { useDispatch } from 'react-redux';
import { addProduct } from '../redux/cartSlice';
import { PlusIcon } from '@heroicons/react/24/outline';
import { open } from '../redux/productDetailSlice';

export const Card = ({ data }) => {
    const dispatch = useDispatch();

    const addToCart = () => {
        dispatch(addProduct(1));
    };

    const toggleProductDetail = () => {
        dispatch(open(data));
    };

    return (
        <div
            className="bg-white cursor-pointer w-56 h-60 rounded-lg"
            onClick={toggleProductDetail}>
            <figure className="relative mb-2 w-full h-4/5">
                <span className="absolute bottom-0 left-0 bg-white/60 rounded-lg text-black text-xs m-2 px-3 py-0.5">
                    {data.category.name}
                </span>
                <img
                    className="w-full h-full object-cover rounded-lg"
                    src={data.images[0]}
                    alt={data.title}
                />
                <span
                    onClick={addToCart}
                    className="absolute top-0 right-0 flex justify-center items-center bg-white w-6 h-6 rounded-full m-2 p-1">
                    <PlusIcon className="w-6 h-6" />
                </span>
            </figure>
            <p className="flex justify-between">
                <span className="text-sm font-light">{data.title}</span>
                <span className="text-lg font-medium">$ {data.price}</span>
            </p>
        </div>
    );
};
