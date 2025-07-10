import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/feature-page-sales">Features</Link>
        </li>
        <li>
          <Link to="/blog">Blog</Link>
        </li>
        <li>
          <Link to="/software-update">Software Update</Link>
        </li>
        <li>
          <Link to="/singlepage">Single Page</Link>
        </li>
        <li>
          <Link to="/industry">Industry</Link>
        </li>
        <li>
          <Link to="/contact-us">Contact Us</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
