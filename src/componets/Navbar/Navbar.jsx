import CartWidget from "../CartWidget/CartWidget";
import styles from "./Navbar.module.css" 
import imgLogo from "../../asset/images/CULTIVO ANDINO.png"



export const Navbar =()=>{
    return (
    <div className={styles.containerNavbar}>
        <img src={imgLogo} alt="Logo" />
        <h3>CULTIVO ANDINO GROWSHOP</h3>
        <ul style={{display:"flex" , gap:"2 0px"}}>
            <li style={{listStyle:"none"}}>Sustratos</li>
            <li style={{listStyle:"none"}}>Macetas</li>
            <li style={{listStyle:"none"}}>Insecticidas</li>
            <li style={{listStyle:"none"}}>Fertilizantes</li>
        </ul>
        <CartWidget/>
    </div>
    );
}; 
