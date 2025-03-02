import { Link } from "react-router-dom";

function MainNavigation() {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="auth">Auth</Link>
          </li>
          <li>
            <Link to="add-user">AddUsers</Link>
          </li>
          <li>
            <Link to="users">Users</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
