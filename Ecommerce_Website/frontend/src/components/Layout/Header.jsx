import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../../slices/authSlices';

function Header() {
  const user = useSelector((state) => state.auth.user);
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <header className="bg-blue-600 p-4 text-white">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold">Ecommerce Website</h1>
        <nav>
          <Link to="/" className="mx-2 hover:underline">Home</Link>
          <Link to="/products" className="mx-2 hover:underline">Products</Link>
          <Link to="/cart" className="mx-2 hover:underline">Cart</Link>
          {user ? (
            <button onClick={handleLogout} className="mx-2 hover:underline">Logout</button>
          ) : (
            <>
              <Link to="/login" className="mx-2 hover:underline">Login</Link>
              <Link to="/signup" className="mx-2 hover:underline">Signup</Link>
            </>
          )}
        </nav>
      </div>
    </header>
  );
}

export default Header;