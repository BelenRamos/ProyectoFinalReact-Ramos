import { useContext } from "react";
import { CartContext } from "./context/CartContext";
import { useState } from "react";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import { Link } from "react-router-dom";

const Checkout = () => {
    const {cart, CantTotalProductos, SumaTotalProductos, clear} = useContext(CartContext);
    const [email, setEmail] = useState();
    const [phone, setTelefono] = useState();
    const [name, setNombre] = useState();
    const [orderId, setOrderId]= useState();
    

    const generarOrden = () => {
        if (!name || !email || !phone) {
            return false;
        }
    
        const buyer = {name:name, email:email, phone:phone};
        const items = cart.map(item => ({id:item.idx, title:item.name, price:item.price}));
        const fecha = new Date();
        const date = `${fecha.getDate()}-${fecha.getMonth()+1}-${fecha.getFullYear()} ${fecha.getHours()}:${fecha.getMinutes()}`;
        const total = SumaTotalProductos();
        const order= {buyer:buyer, items:items, date:date, total:total};
    
        const db = getFirestore();
        const ordersCollection = collection(db, "orders");
        addDoc(ordersCollection, order).then(resultado =>{
            //console.log(resultado);
            clear();
            setOrderId(resultado.id);
        });
    }
    
    

    return (
        <div className="container">
            <div className="row">
                <div className="col text-center">
                    <h1>Checkout 🛍️</h1>
                </div>
            </div>
            <div className="row justify-content-center">
                <div className="col-md-5 ">
                    <form>
                        <div className="mb-3">
                            <label htmlFor="name" className="form-label">Nombre Completo</label>
                            <input type="text" className="form-control" onInput={(e) => {setNombre(e.target.value)}}/>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">Email</label>
                            <input type="email" className="form-control" onInput={(e) => {setEmail(e.target.value)}} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="phone" className="form-label">Teléfono</label>
                            <input type="text" className="form-control" onInput={(e) => {setTelefono(e.target.value)}}/>
                        </div>
                        
                        <button type="button" className="btn btn-outline-secondary my-5" onClick={generarOrden}>Generar Orden</button>
                    </form>
                </div>
            </div>
            <div className="row">
                <div className="col text-center">
                    <table className="table text-center align-middle">
                        <thead>
                            <tr>
                                <th>Producto</th>
                                <th>Precio</th>
                                <th>Cantidad</th>
                                <th>Total</th>
                            </tr>
                        </thead>
                        <tbody>
                            {cart.map(product =>
                                <tr key={product.id}> 
                                    <td><img src={product.image} alt={product.name} width={80}/></td>
                                    <td>${product.price}</td>
                                    <td>{product.quantity}</td>
                                    <td>${product.quantity * product.price}</td>
                                </tr>   
                            )}
                            <tr>
                                <td colSpan={3}>Suma Total</td>
                                <td>${SumaTotalProductos()}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <div className="row ">
                <div className="col">
                { orderId ? <div className="alert alert-success d-flex text-center align-items-center" role="alert">
                                <svg className="bi flex-shrink-0 me-5" role="img" aria-label="Success:"><use xlinkHref="#check-circle-fill"/></svg>
                                <div>
                                    <p><b>Gracias por su compra! </b></p>
                                    <p>Tu ID de compra es: <b>{orderId}</b></p>
                                </div>
                            </div>
                        : ""}                    
                </div>
            <Link to={"/"} className="btn btn-outline-secondary">Volver a Pagina Principal</Link>    
            </div>     
        </div>

    )
}

export default Checkout;