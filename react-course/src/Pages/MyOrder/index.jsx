import Layout from "../../Components/Layout"
import { useContext } from "react"
import { ShoppingCartContext } from "../../Context"
import OrderCard from "../../Components/OrderCard"


function MyOrder() {

  const context = useContext(ShoppingCartContext)
    return (
      <Layout>
        MyOrder
        <div className="px-6 flex-1">
      {context.order?.slice(-1)[0].products.map((product) => (
          <OrderCard
            key={product.id}
            id={product.id}
            title={product.title}
            imageUrl={product.images}
            price={product.price}
          />
          ))}
          </div>
      </Layout>
    )
  }
  
  export default MyOrder