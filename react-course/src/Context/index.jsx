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

    //Checkout open/close
    const [isCheckoutSideMenuOpen, setIsCheckoutSideMenuOpen] = useState(false)
    const openCheckoutSideMenu = () => setIsCheckoutSideMenuOpen(true)
    const closeCheckoutSideMenu = () => setIsCheckoutSideMenuOpen(false)
  
    // Order

    const [order, setOrder] = useState([])

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
        setCartProducts,
        isCheckoutSideMenuOpen,
        setIsCheckoutSideMenuOpen,
        openCheckoutSideMenu,
        closeCheckoutSideMenu,
        order,
        setOrder
    }}>
    { children }
    </ShoppingCartContext.Provider>
  ) ;
};
