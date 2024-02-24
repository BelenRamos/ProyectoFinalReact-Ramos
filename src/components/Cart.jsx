import { useContext } from "react";
import { CartContext } from "./context/CartContext";
import { Link } from "react-router-dom";
import trash from '../assets/trash3.svg'

const Cart = () => {
    const {cart, addItem, removeItem, clear, CantTotalProductos, SumaTotalProductos} = useContext(CartContext)
    console.log(cart);

    if (CantTotalProductos() == 0) {
        return (
            <div className="container d-flex align-items-center justify-content-center" style={{ height: "80vh" }}>
                <div className="row">
                    <div className="col text-center">
                        <p className="display-1">💋</p>
                        <div className="alert alert-danger" role="alert"> 
                            No se encontraron productos en el carrito
                        </div>
                        <Link to={"/"} className="btn btn-outline-secondary my-5">Volver a Pagina Principal</Link>
                    </div>
                </div>
            </div>

        )
    }

    return (
        <div className="conteiner">
            <div className="row">
                <div className="col text-center">
                    <h1>Productos seleccionados</h1>
                </div>
            </div>
            <div className="row">
                <div className="col text-center">
                    <div className="container my-5 " style={{ textAlign: 'right' }}>
                        <a href="#" onClick={clear} className="btn btn-outline-dark">Vaciar Carrito  <img src={trash} alt="Vaciar carrito" title="Vaciar Carrito"/></a>
                    </div>
                    <div className="container">
                        <table className="table table-bordered text-center align-middle">
                            <thead>
                                <tr>
                                    <th>Producto</th>
                                    <th>Precio</th>
                                    <th>Cantidad</th>
                                    <th>Total</th>
                                    <th>Eliminar Producto</th>
                                </tr>
                            </thead>
                            <tbody>
                                
                                {cart.map(product =>
                                    <tr key={product.id}> 
                                        <td><img src={product.image} alt={product.name} width={80}/></td>
                                        <td>${product.price}</td>
                                        <td>{product.quantity}</td>
                                        <td>${product.quantity * product.price}</td>
                                        <td><a href="#" onClick={() => {removeItem(product.id)}}><img src={trash} alt="Eliminar Producto" title="Eliminar Producto"/></a></td>
                                    </tr>   
                                )}
                                <tr>
                                    <td colSpan={4}>Suma Total</td>
                                    <td>${SumaTotalProductos()}</td>
                                </tr>
                            </tbody>
                        </table>
                        <div className="container my-5 " style={{ textAlign: 'right' }}>
                            <Link to={"/checkout"} className="btn btn-outline-success">Terminar compra</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cart;