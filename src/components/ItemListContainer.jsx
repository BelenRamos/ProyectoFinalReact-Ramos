import { useEffect, useState } from "react";
//import arrayProductos  from "../components/json/productos.json"
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import {getFirestore, collection, getDocs, query, where} from "firebase/firestore"; //addDoc
import Loading from "./Loading";

const ItemListContainer = () => {
    const [items, setItems] = useState([]);
    const {id} = useParams();
    const [loading, setLoading] = useState(true);

/*     useEffect(()=>{
        setProductos(arrayProductos);
        const promesa = new Promise (resolve => {
            setTimeout( () => {
                resolve (id? arrayProductos.filter(item => item.category === id) : arrayProductos);
            }, 500);
        })
        promesa.then(data=>{
            setProductos(data);
            console.log(data);
        })
    }, [id]); */

    //Llamada desde el firestore
/*      useEffect(() => {
        const db= getFirestore();
        const itemsCollection = collection (db, "items");

        arrayProductos.forEach(producto => {
            addDoc(itemsCollection, producto); 
        });

        console.log("Proceso finalizado. Productos subidos correctamente."); // Solo una vez, una vez que funciona se comenta porque duplica los docs 

    }, [])  */

     useEffect(() =>{
        const db=getFirestore();
        const itemsCollection = collection(db, "items");
        const consulta = id ? query(itemsCollection, where("category", "==", id)) : itemsCollection;
        getDocs(consulta).then(resultado => {
            setLoading(false);
            setItems(resultado.docs.map(producto => ({id:producto.id, ...producto.data()})));
        });
    
    }, [id]); 

    /* fetch("productos.json")
        .then(respuesta => respuesta.json())
        .then(datos => { setProductos(datos) }) */


    return (
        <div className="container">
            <div className="row">
                <div className="col-text-center">
                    <h1>Productos</h1>
                </div>
            </div>
            <div className="row">
                {loading ? <Loading/> : <ItemList items={items}/>}
            </div>
        </div>
    )
  }

export default ItemListContainer;
