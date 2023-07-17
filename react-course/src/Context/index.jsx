import { createContext, useState } from "react";

export const ShoppingCartContext = createContext();

export const ShoppingCartProvider = ({ children }) => {
    const [count, setCount] = useState(0)
    const [view, setView] = useState(false)
    const openView = () => setView(true)
    const closeView = () => setView(false)
  return(
    <ShoppingCartContext.Provider value={{
        count,
        setCount,
        openView,
        closeView,
        view
    }}>
    { children }
    </ShoppingCartContext.Provider>
  ) ;
};
