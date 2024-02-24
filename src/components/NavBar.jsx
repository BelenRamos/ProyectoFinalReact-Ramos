import { NavLink} from "react-router-dom";
import CartWidget from './CartWidget';
import Logo from "./Logo";



const NavBar = () => {
    return(
        <div className="container-fluid my-4">
            <div className="row align-items-center">
                <div className="col-md-3 d-flex justify-content-center">
                    <Logo />
                </div>
                <div className="col-md-6">
                    {/* Categorias clickeables de la pagina */}
                    <ul className="nav nav-tabs d-flex justify-content-around">
                        <li className="nav-item">
                            <NavLink className="nav-link text-dark fs-6" activeclassname="active" to={"/category/summerlooks"}>Summer Looks</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link text-dark fs-6" activeclassname="active" to={"/category/coleccion"}>Coleccion</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link text-dark fs-6" activeclassname="active" to={"/category/beauty&spa"}>Beauty & Spa</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link text-dark fs-6" activeclassname="active" to={"/category/giftcard"}>Gift Card</NavLink>
                        </li>
                    </ul>
                </div>
                <div className="col-md-1 d-flex justify-content-start align-items-center">
                    <CartWidget />
                </div>
            </div>
        </div>

    )

}

export default NavBar;