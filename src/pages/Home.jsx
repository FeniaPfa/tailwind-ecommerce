import { useState } from 'react';
import { Card } from '../components/Card';
import { Layout } from '../components/Layout';
import { useEffect } from 'react';
import { ProductDetail } from '../components/ProductDetail';
import { useSelector } from 'react-redux';

export const Home = () => {
    const { isOpen } = useSelector((state) => state.productDetail);

    const [items, setItems] = useState([]);

    useEffect(() => {
        fetch('https://api.escuelajs.co/api/v1/products')
            .then((res) => res.json())
            .then((data) => {
                setItems(data);
            });
    }, []);

    return (
        <Layout>
            <div className="grid gap-4 grid-cols-4 w-full max-w-screen-lg">
                {items?.map((item) => (
                    <Card key={item.id} data={item} />
                ))}
            </div>
            {isOpen && <ProductDetail />}
        </Layout>
    );
};
