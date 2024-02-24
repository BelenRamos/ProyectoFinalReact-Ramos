import {useEffect,useState } from "react";
import Item from "./Item";

const ItemList = ({items}) => {
    const [itemsItem, setProductosItem] = useState([])

    useEffect(() =>{
        setProductosItem(items);
    }, [items])
    
    return(
        <>
            {itemsItem.map(produ => (
                <div key={produ.id} className="col-md-2">
                    <Item item={produ}/>
                </div>
            ))}
        </>
    )
}

export default ItemList;