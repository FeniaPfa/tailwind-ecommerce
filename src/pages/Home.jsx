import { Card } from '../components/Card';
import { Layout } from '../components/Layout';
import { useEffect, useState } from 'react';
import { ProductDetail } from '../components/ProductDetail';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../redux/productsSlice';

export const Home = () => {
    const { isOpen } = useSelector((state) => state.productDetail);
    const dispatch = useDispatch();
    const { products, loading } = useSelector((state) => state.products);
    const [filteredItems, setFilteredItems] = useState([...products]);
    const [searchValue, setSearchValue] = useState('');
    const handleSearch = (e) => {
        setSearchValue(e.target.value);
    };

    useEffect(() => {
        dispatch(fetchProducts());
        console.log('render');
    }, []);

    useEffect(() => {
        setFilteredItems(products);
    }, [products]);

    useEffect(() => {
        let newData = [...products];
        newData = newData.filter((item) => item.title.toLowerCase().includes(searchValue.toLowerCase()));

        setFilteredItems(newData);
    }, [searchValue]);

    return (
        <Layout>
            {loading && <p>Cargando...</p>}
            <div className="flex w-80 items-center justify-center relative mb-4">
                <h1 className="font-medium text-xl">Exclusive Products</h1>
            </div>
            <input
                className="rounded-lg border border-black w-80 p-4 mb-4"
                type="text"
                placeholder="Find products"
                onChange={handleSearch}
            />
            {filteredItems.length === 0 && <p>No results</p>}
            <div className="grid gap-4 grid-cols-4 w-full max-w-screen-lg">
                {filteredItems?.map((item) => (
                    <Card key={item.id} data={item} />
                ))}
            </div>
            {isOpen && <ProductDetail />}
        </Layout>
    );
};
