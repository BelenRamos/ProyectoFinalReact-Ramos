import { useContext } from 'react';
import cartWidget from '../assets/cart.svg'
import { CartContext } from './context/CartContext';
import { Link } from 'react-router-dom';

const CartWidget = () => {

  const {CantTotalProductos} = useContext(CartContext);

    return (
      CantTotalProductos() > 0 ? 
        <Link to={"/cart"} className="btn position-relative">
          <img src={cartWidget} alt="Icono de Cart" width={18}/>
          <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"> {CantTotalProductos()}</span>
        </Link> : ""
    );
  };
  
  export default CartWidget;