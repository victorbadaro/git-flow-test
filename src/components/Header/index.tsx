import { Link } from "react-router-dom";
import './styles.css';

export function Header() {
  return (
    <header>
      <div>
        <Link to="/home">Home</Link>
        <Link to="/users">Users</Link>
        <Link to="/products">Products</Link>
      </div>
    </header>
  );
}