import { useContext } from "react"
import { ShoppingCartContext } from "../../Context"
import { PlusIcon } from "@heroicons/react/24/solid"


 const Card = (data) => {
  const context = useContext(ShoppingCartContext)

  const showProduct = (product) => {
    context.openView()
    context.setProductToShow(product)
  }

  const addProductsToCart = (e,product) => {
    e.stopPropagation();
    context.setCount(context.count + 1)
    context.setCartProducts([...context.cartProducts, product])
    context.openCheckoutSideMenu();
    console.log(context.isCheckoutSideMenuOpen);
  }

  return (
    <div 
    className="bg-white cursor-pointer w-56 h-605 rounded-lg"
    onClick={() => showProduct(data.data)}
    >
      <figure className="relative mb-2 w-full h-3/5">
        <span className="absolute bottom-0 left-0 bg-white/60 rounded-lg text-black text-xs m-2 px-3 py-0.5">
          {data.data.category.name}
        </span>
        <img className="w-full h-full object-cover rounded-lg" src={data.data.images[1]} alt={data.data.title} />
        <button 
        className="absolute top-0 right-0 flex justify-center items-center bg-white w-6 h-6 rounded-full m-2 p-1" 
        onClick={(e) => addProductsToCart(e,data.data)}
        >
          <PlusIcon className="h-6 w-6 text-black"></PlusIcon>
        </button>
      </figure>
      <p className="flex justify-between">
        <span className="text-sm font-light">{data.data.title}</span>
        <span className="text-lg font-medium">${data.data.price}</span>
      </p>
    </div>
  )
}

export default Card