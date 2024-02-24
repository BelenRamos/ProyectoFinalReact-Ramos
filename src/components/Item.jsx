import { Link } from "react-router-dom";

const Item = ({item}) => {
    return(
        <div className="card border-0">
            <Link className="nav-link text-dark fs-6" activeclassname="active" to={"/item/"+item.id}>
            <img src={item.image} alt={item.name} style={{ maxWidth: '100%', height: 'auto' }} />
                <div className="card-body">
                    <p className="card-title">{item.name}</p>
                </div>
            </Link>
        </div>
    )
}

export default Item;