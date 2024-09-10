import {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {fetchProducts} from '../../slices/productSlice.js';
import {addToCart} from '../../slices/cartSlice.js';

const ProductList = () => {
    const dispatch = useDispatch();
    const {items, status, error} = useSelector((state) => state.products);

    useEffect(() => {
        dispatch(fetchProducts());
    }, [dispatch]);

    if (status === 'loading') return <p>Loading ...</p>;
    if (status === 'failed') return <p>{error}</p>;

    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {items.map((product) => (
                <div key={product.id} className="border p-4 rounded">
                    <img src={product.image} alt={product.title} className="w-full h-48 object-cover mb-4"/>
                    <h2 className="text-xl font-bold mb-2">{product.title}</h2>
                    <p className="text-gray-700 mb-4">${product.price}</p>
                    <button
                        // addToCart action with product as payload
                        onClick={() => dispatch(addToCart(product))}
                        className="bg-blue-500 text-white px-4 py-2 rounded"
                    >
                        Add to Cart
                    </button>
                </div>
            ))}
        </div>
    );
};

export default ProductList;