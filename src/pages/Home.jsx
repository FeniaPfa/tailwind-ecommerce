import { Card } from '../components/Card';
import { Layout } from '../components/Layout';
import { useEffect } from 'react';
import { ProductDetail } from '../components/ProductDetail';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../redux/productsSlice';

export const Home = () => {
    const { isOpen } = useSelector((state) => state.productDetail);
    const dispatch = useDispatch();
    const { products, loading } = useSelector((state) => state.products);

    useEffect(() => {
        dispatch(fetchProducts());
    }, [dispatch]);

    return (
        <Layout>
            {loading && <p>Cargando...</p>}
            <div className="grid gap-4 grid-cols-4 w-full max-w-screen-lg">
                {products?.map((item) => (
                    <Card key={item.id} data={item} />
                ))}
            </div>
            {isOpen && <ProductDetail />}
        </Layout>
    );
};
