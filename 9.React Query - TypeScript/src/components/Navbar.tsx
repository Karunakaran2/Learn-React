import type { NavProps } from "../types";

const Navbar = ({ setPage }: NavProps) => {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <div className="navbar-logo-icon">⚡</div>
        <span className="navbar-title">
          GitHub <span>Explorer</span>
        </span>
      </div>

      <div>
        {" "}
        <h4 className="mb-0">React Query - TypeScript</h4>
      </div>
      <div className="nav-links">
        <button className="nav-btn active" onClick={() => setPage("search")}>
          🔍 Search Users
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
