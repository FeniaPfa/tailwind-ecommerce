import { useState } from 'react';
import { Card } from '../components/Card';
import { Layout } from '../components/Layout';
import { useEffect } from 'react';

export const Home = () => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        fetch('https://api.escuelajs.co/api/v1/products')
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
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
        </Layout>
    );
};
