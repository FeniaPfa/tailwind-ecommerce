import { ChevronRightIcon } from '@heroicons/react/24/outline';

export const OrdersCards = ({ totalQuantity, totalPrice, date }) => {
    return (
        <div className="flex mb-4 justify-between items-center border border-black w-80 p-4 rounded-lg">
            <div className="flex justify-between w-full">
                <p className="flex flex-col">
                    <span className="font-light">{date}</span>
                    <span className="font-light">{totalQuantity} articles</span>
                </p>
                <p className="flex gap-2 items-center">
                    <span className="font-medium text-2xl">$ {totalPrice}</span>
                    <ChevronRightIcon className="h-6 w-6 text-black cursor-pointer" />
                </p>
            </div>
        </div>
    );
};
