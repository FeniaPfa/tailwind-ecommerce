import { Link } from 'react-router-dom';
import { Layout } from '../components/Layout';
import { OrdersCards } from '../components/OrdersCards';
import { useSelector } from 'react-redux';

export const MyOrders = () => {
    const { orders } = useSelector((state) => state.orders);
    console.log(orders);
    return (
        <Layout>
            <div className="flex w-80 items-center justify-center relative">
                <h1>My Orders</h1>
            </div>
            {orders.map((item, index) => (
                <Link key={index} to={`/my-orders/${item.id}`}>
                    <OrdersCards
                        totalQuantity={item.totalQuantity}
                        totalPrice={item.total}
                    />
                </Link>
            ))}
        </Layout>
    );
};
