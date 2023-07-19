import { useContext } from "react";
import Card from "../../Components/Card";
import Layout from "../../Components/Layout";
import ProductDetail from "../../Components/ProductDetail";
import { ShoppingCartContext } from "../../Context";

function Home() {
 const context = useContext(ShoppingCartContext)
  
  return (
    <Layout>
      <div className="flex items-center justify-center relative w-80 mb-4">
        <h1 className="font-medium text-xl">
          Home
        </h1>
      </div>
      <input 
      type="text"
       placeholder="Search a product"
       className="rounded-lg border border-black w-80 p-3 mb-4 focus:outline-none" 
       onChange={(e) => context.setSearchByTitle(e.target.value)}
       />
      <div className="grid gap-4 grid-cols-4 w-full max-w-screen-lg">
      {
        context.items?.map((e) => (
          <Card key={e.id} data={e}/>
        ))
      }
      </div>
      <ProductDetail/>
    </Layout>
  );
}

export default Home;
