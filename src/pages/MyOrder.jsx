import { useSelector } from 'react-redux';
import { Layout } from '../components/Layout';
import { OrderCard } from '../components/OrderCard';
import { ChevronLeftIcon } from '@heroicons/react/24/outline';
import { Link, useParams } from 'react-router-dom';

export const MyOrder = () => {
    const currentPath = window.location.pathname;
    const { orders } = useSelector((state) => state.orders);
    const { id } = useParams();
    const myOrder = orders.filter((item) => item.id === id);
    return (
        <Layout>
            <div className="flex w-80 items-center justify-center relative mb-6">
                <Link to={'/my-orders'} className="absolute left-0">
                    <ChevronLeftIcon className="h-6 w-6 text-black cursor-pointer" />
                </Link>
                <h1>My Order</h1>
            </div>
            <div className="flex flex-col gap-6 w-80">
                {currentPath === '/my-orders/last'
                    ? orders
                          .slice(-1)[0]
                          ?.products.map((item) => (
                              <OrderCard key={item.id} product={item} myOrder />
                          ))
                    : myOrder[0].products.map((item) => (
                          <OrderCard key={item.id} product={item} myOrder />
                      ))}
            </div>
        </Layout>
    );
};
