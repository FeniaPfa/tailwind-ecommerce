import { ChevronRightIcon, CalendarIcon, ShoppingBagIcon } from '@heroicons/react/24/outline';
import { formatPrice } from '../utils';

export const OrdersCards = ({ totalQuantity, totalPrice, date }) => {
    return (
        <div className="flex mb-4 justify-between items-center border border-black w-80 p-4 rounded-lg">
            <div className="flex justify-between w-full">
                <div className="flex flex-col gap-2">
                    <p className="flex gap-2">
                        <CalendarIcon className="text-black h-6 w-6" />
                        <span className="font-light">{date}</span>
                    </p>
                    <p className="flex gap-2">
                        <ShoppingBagIcon className="text-black h-6 w-6" />
                        <span className="font-light">{totalQuantity} articles</span>
                    </p>
                </div>
                <p className="flex gap-2 items-center">
                    <span className="font-medium text-2xl">$ {formatPrice(totalPrice)}</span>
                    <ChevronRightIcon className="h-6 w-6 text-black cursor-pointer" />
                </p>
            </div>
        </div>
    );
};
