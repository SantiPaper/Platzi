import { useContext } from "react";
import { XMarkIcon } from "@heroicons/react/24/solid";
import { ShoppingCartContext } from "../../Context";
import OrderCard from "../OrderCard";
import "./index.css"

const CheckoutSideMenu = () => {
  const context = useContext(ShoppingCartContext);
  console.log(context.isCheckoutSideMenuOpen);

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
      {context.cartProducts.map((product) => (
        <div className="px-6">
          <OrderCard
            key={product.id}
            title={product.title}
            imageUrl={product.images}
            price={product.price}
          />
        </div>
      ))}
    </aside>
  );
};

export default CheckoutSideMenu;
