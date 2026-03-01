import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <nav
      style={{
        padding: "1rem",
        backgroundColor: "#27ae60",
        color: "white",
        display: "flex",
        justifyContent: "center",
        gap: "20px",
      }}
    >
      <Link to="/dashboard" style={{ color: "white" }}>
        Dashboard
      </Link>

      <Link to="/dashboard/water" style={{ color: "white" }}>
        Water Tracker
      </Link>

      <button
        onClick={handleLogout}
        style={{
          background: "white",
          color: "#27ae60",
          border: "none",
          padding: "5px 10px",
          cursor: "pointer",
        }}
      >
        Logout
      </button>
    </nav>
  );
};

export default Navbar;