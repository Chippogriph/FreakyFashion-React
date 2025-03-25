import ProductGrid from "../components/ProductGrid/ProductGrid"
import Hero from "../components/Hero/Hero"
import Spots from "../components/Spots/Spots"
// import DynamicTitle from "../utilities/DynamicTitle"


function Home() {

document.title = "Freaky Fashion"
  return (
    <>
        {/* <DynamicTitle /> */}
      <Hero />
      <Spots />
      <ProductGrid />
    </>
  )
}

export default Home