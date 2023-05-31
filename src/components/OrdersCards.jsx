export const OrdersCards = ({ totalQuantity, totalPrice }) => {
    console.log(totalQuantity);
    return (
        <div className="flex justify-between items-center mb-3 border border-black">
            <p>
                <span>01.02.03</span>
                <span>{totalQuantity}</span>
                <span>{totalPrice}</span>
            </p>
        </div>
    );
};
