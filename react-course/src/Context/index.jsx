import { createContext, useState } from "react";

export const ShoppingCartContext = createContext();

export const ShoppingCartProvider = ({ children }) => {
    const [count, setCount] = useState(0)
    const [view, setView] = useState(false)
    const openView = () => setView(true)
    const closeView = () => setView(false)
     
    //Product detail
    const [productToShow, setProductToShow] = useState({
      title: "",
      price: "",
      description: "",
      images: [],
    });

    //Cart
    const [cartProducts, setCartProducts] = useState([])
  

  return(
    <ShoppingCartContext.Provider value={{
        count,
        setCount,
        openView,
        closeView,
        view,
        productToShow,
        setProductToShow,
        cartProducts,
        setCartProducts
    }}>
    { children }
    </ShoppingCartContext.Provider>
  ) ;
};
