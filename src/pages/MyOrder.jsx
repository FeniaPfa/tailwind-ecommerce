import { useSelector } from 'react-redux';
import { Layout } from '../components/Layout';
import { OrderCard } from '../components/OrderCard';
import { ChevronLeftIcon } from '@heroicons/react/24/outline';
import { Link } from 'react-router-dom';

export const MyOrder = () => {
    const { orders } = useSelector((state) => state.orders);

    return (
        <Layout>
            <div className="flex w-80 items-center justify-center relative mb-6">
                <Link to={'/my-orders'} className="absolute left-0">
                    <ChevronLeftIcon className="h-6 w-6 text-black cursor-pointer" />
                </Link>
                <h1>My Order</h1>
            </div>
            <div className="flex flex-col gap-6 w-80">
                {orders.slice(-1)[0]?.products.map((item) => (
                    <OrderCard key={item.id} product={item} myOrder />
                ))}
            </div>
        </Layout>
    );
};
