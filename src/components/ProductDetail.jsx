import { XMarkIcon } from '@heroicons/react/24/outline';
import { useDispatch, useSelector } from 'react-redux';
import { toggle } from '../redux/productDetailSlice';

export const ProductDetail = () => {
    const { detailsData } = useSelector((state) => state.productDetail);
    const dispatch = useDispatch();
    const closeModal = () => {
        dispatch(toggle());
    };

    return (
        <>
            <aside className="product-detail flex flex-col fixed right-0 border border-black rounded-lg bg-white ">
                <div className="flex justify-between items-center p-6">
                    <h2 className="font-medium text-xl">Detail</h2>
                    <div className="h-6 w-6 text-blue-500" onClick={closeModal}>
                        <XMarkIcon className="cursor-pointer" />
                    </div>
                </div>
                <figure className="px-6">
                    <img
                        className="w-full h-full rounded-lg"
                        src={detailsData.images[0]}
                        alt={detailsData.title}
                    />
                </figure>
                <p className="flex flex-col p-6 gap-1">
                    <span className="font-medium text-2xl">${detailsData.price}</span>
                    <span className="font-medium text-xl">{detailsData.title}</span>
                    <span className="font-light text-sm">{detailsData.description}</span>
                </p>
            </aside>
        </>
    );
};
