import {XMarkIcon} from "@heroicons/react/24/solid"
import "./index.css"
import { useContext } from "react"
import { ShoppingCartContext } from "../../Context"

const ProductDetail = () => {
    const context = useContext(ShoppingCartContext)
 return (
    <aside 
    className={`${context.view ? "flex" : "hidden"}  flex-col fixed right-0 border bg-white border-black rounded-lg w-[360px] h-[calc(100vh-80px)]`}
    
    >
        <div className="flex justify-between items-center p-6">
            <h2 className="font-medium text-xl">Detail</h2>
            <button
            onClick={() => context.closeView()}
            ><XMarkIcon className="h-6 w-6 text-black"></XMarkIcon></button>
        </div>
    </aside>
 )
}

export default ProductDetail