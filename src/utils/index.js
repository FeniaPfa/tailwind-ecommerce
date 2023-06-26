export const getTotal = (products) => {
    if (!products.length) return 0;
    const prices = products.map((item) => item.price * item.quantity);
    return prices.reduce((acc, item) => acc + item);
};

export const getTotalQuantity = (products) => {
    if (!products.length) return 0;
    const count = products.map((item) => item.quantity);
    return count.reduce((acc, item) => acc + item);
};

export const getDate = () => {
    const currentDate = new Date().toLocaleDateString('en-US');
    return currentDate;
};

export const newId = () => {
    return Date.now().toString(16);
};

export const formatPrice = (number) => {
    return number.toLocaleString('de-De');
};
