import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart } from '../../slices/cartSlice.js';

const Cart = () => {
  // reference to items array from store
  const items = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Cart</h2>
      {items.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <ul>
          {items.map((item) => (
            <li key={item.id} className="flex justify-between items-center mb-4">
              <div>
                <h3 className="text-xl bg-amber-100">{item.title}</h3>
                <p className="text-gray-700">${item.price}</p>
              </div>
              <button
                  // calling removeFromCart action with item as payload
                onClick={() => dispatch(removeFromCart(item))}
                className="bg-red-500 text-white px-4 py-2 rounded"
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Cart;