import { FaBeer } from 'react-icons/fa';
import { Link } from 'react-router-dom';

export default function App() {
  return (
    <div className="App">
      App <FaBeer />
      <div>
        <Link to="/cart">Go to Cart</Link>
      </div>
    </div>
  );
}
