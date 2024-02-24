import { useContext } from "react";
import ItemCount from "./ItemCount";
import { CartContext } from "./context/CartContext";

const ItemDetail =({item}) =>{

    const {addItem}= useContext(CartContext);

    const onAdd = (quantity) => {
        addItem(item, quantity);
    }

    return(
        <div className="container">
            <div className="row">
                <div className="col-md-4">
                    <img src={item.image} alt={item.name} className="img-fluid" />
                </div>
                <div className="col-md-4">
                    <h1>{item.name}</h1>
                    <p>#{item.category}</p>
                    <p><b>${item.price}</b></p>
                    <p>{item.description}</p>
                    <div className="col-md-2 d-flex justify-content-end align-items-center">
                        <ItemCount stock={item.stock} onAdd={onAdd} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ItemDetail;