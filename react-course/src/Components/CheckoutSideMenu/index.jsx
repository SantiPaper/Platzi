import { useContext } from "react";
import {Link} from "react-router-dom"
import { XMarkIcon } from "@heroicons/react/24/solid";
import { ShoppingCartContext } from "../../Context";
import OrderCard from "../OrderCard";
import { totalPrice } from "../../utils";
import "./index.css";

const CheckoutSideMenu = () => {
  const context = useContext(ShoppingCartContext);

  const handleDelete = (id) => {
    const filteredProducts = context.cartProducts.filter(
      (product) => product.id != id
    );
    context.setCount(context.count - 1);
    context.setCartProducts(filteredProducts);
  };

  const handleCheckout = () => {
    const orderToAdd = {
      products: context.cartProducts,
      totalProducts: context.cartProducts.length,
      totalPrice: totalPrice(context.cartProducts)
    }
    context.setOrder([...context.order, orderToAdd])
    context.setCartProducts([])
  }

  return (
    <aside
      className={`${
        context.isCheckoutSideMenuOpen ? "flex" : "hidden"
      } top-20 scrollable-cards flex-col fixed right-0 border bg-white border-black rounded-lg w-[360px] h-[calc(100vh-80px)]`}
    >
      <div className="flex justify-between items-center p-6">
        <h2 className="font-medium text-xl">My Order</h2>
        <button onClick={() => context.closeCheckoutSideMenu()}>
          <XMarkIcon className="h-6 w-6 text-black"></XMarkIcon>
        </button>
      </div>
      <div className="px-6 flex-1">
      {context.cartProducts.map((product) => (
          <OrderCard
            key={product.id}
            id={product.id}
            title={product.title}
            imageUrl={product.images}
            price={product.price}
            handleDelete={handleDelete}
          />
          ))}
          </div>
      <hr />
      <div className="px-6">
        <p className="flex justify-between items-center">
          <span className="font-light ">Total</span>
          <span className="font-medium text-2xl">
            ${totalPrice(context.cartProducts)}
          </span>
        </p>
        <Link to={"/my-orders-last"}>
        <button className="w-full bg-black py-3 text-white rounded-lg" onClick={() => handleCheckout()}>Checkout</button>
        </Link>
      </div>
    </aside>
  );
};

export default CheckoutSideMenu;
