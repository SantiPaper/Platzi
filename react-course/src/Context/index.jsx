import { createContext, useState, useEffect } from "react";

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

    //Home get products

    const [items, setItems] = useState(null)

    useEffect(() => {
      fetch("https://api.escuelajs.co/api/v1/products")
      .then(res => res.json())
      .then(data => setItems(data))
    },[])

    //Checkout open/close
    const [isCheckoutSideMenuOpen, setIsCheckoutSideMenuOpen] = useState(false)
    const openCheckoutSideMenu = () => setIsCheckoutSideMenuOpen(true)
    const closeCheckoutSideMenu = () => setIsCheckoutSideMenuOpen(false)
  
    // Order

    const [order, setOrder] = useState([])

    // Search

    const [searchByTitle, setSearchByTitle] = useState(null)

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
        setOrder,
        items,
        setItems,
        searchByTitle,
        setSearchByTitle
    }}>
    { children }
    </ShoppingCartContext.Provider>
  ) ;
};
