import { Button } from "@mui/material";
import CartWidget from "../CartWidget/CartWidget";
//import styles from "./Navbar.css";
import styles from "./Navbar.module.css";
import { Outlet, Link, useNavigate, NavLink } from "react-router-dom";

export const Navbar = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div className={styles.containerNavbar}>
        <Link to="/">
          <img
            src="https://res.cloudinary.com/dsgi282gc/image/upload/v1683037218/CULTIVO_ANDINO_vh5jaq.png"
            alt="Este es el logo de la empresa"
          />
        </Link>
        <ul style={{ display: "flex", gap: "30px" }}>
          <Button
            variant="contained"
            color="secondary"
            size="small"
            sx={{ textTransform: "none" }}
            onClick={() => navigate("/")}
          >
            Home
          </Button>
          <Button
            variant="contained"
            color="secondary"
            size="small"
            sx={{ textTransform: "none" }}
            onClick={() => navigate("/category/Fertilizantes")}
          >
            Fertilizantes
          </Button>
          <Button
            variant="contained"
            color="secondary"
            size="small"
            sx={{ textTransform: "none" }}
            onClick={() => navigate("/category/Sustratos")}
          >
            Sustratos
          </Button>
          <Button
            variant="contained"
            color="secondary"
            size="small"
            sx={{ textTransform: "none" }}
            onClick={() => navigate("/category/Cultivo")}
          >
            Tips de Cultivo
          </Button>
        </ul>
        <CartWidget />
      </div>
      <Outlet />
    </div>
  );
};

export default Navbar;
