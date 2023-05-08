export const getTotal = (products) => {
    if (!products.length) return 0;
    const prices = products.map((item) => item.price * item.quantity);
    return prices.reduce((acc, item) => acc + item);
};

export const getTotalQuantity = (products) => {
    if (!products.length) return 0;
    return products.reduce((acc, item) => acc + item.quantity);
};

export const getDate = () => {
    const currentDate = new Date().toLocaleDateString('en-US');
    return currentDate;
};
