import {BrowserRouter, Routes, Route} from "react-router-dom";
import Footer from "./components/Footer"
import PreFooter from "./components/PreFooter"
import NavBar from "./components/NavBar"
import ItemListContainer from "./components/ItemListContainer"
import Error404 from "./components/Error404";
import ItemDetailContainer from "./components/ItemDetailContainer";
import Cart from "./components/Cart";
import CartContextProvider from "./components/context/CartContext";
import Checkout from "./components/Checkout";


const App = () => {

  return(
    <CartContextProvider>
      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route path="/" element={<ItemListContainer/>}/>
          <Route path="/category/:id" element={<ItemListContainer/>}/>
          <Route path="/item/:id" element={<ItemDetailContainer/>}/>
          <Route path="/cart" element={<Cart/>}/>
          <Route path="/checkout" element={<Checkout/>}/>
          <Route path="*" element={<Error404/>}/>
        </Routes>
        <PreFooter/>
        <Footer/>
      </BrowserRouter>
    </CartContextProvider>
  )
}

export default App;
