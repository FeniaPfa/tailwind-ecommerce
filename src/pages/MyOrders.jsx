import { Link } from 'react-router-dom';
import { Layout } from '../components/Layout';
import { OrdersCards } from '../components/OrdersCards';
import { useSelector } from 'react-redux';

export const MyOrders = () => {
    const { orders } = useSelector((state) => state.orders);
    return (
        <Layout>
            <div className="flex w-80 items-center justify-center relative mb-4">
                <h1 className="font-medium text-xl">My Orders</h1>
            </div>
            {orders.map((item) => (
                <Link key={item.id} to={`/my-orders/${item.id}`}>
                    <OrdersCards
                        totalQuantity={item.totalQuantity}
                        totalPrice={item.total}
                        date={item.date}
                    />
                </Link>
            ))}
        </Layout>
    );
};
