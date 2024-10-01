import Products from "../shop/Products";
import Expriences from "./Expriences";
import Hero from "./Hero";
import Materials from "./Materials";
import Testimonials from "./Testimonials";
import WhyChoose from "./WhyChoose";

const Homepage = () => {
  return (
    <div>
      <Hero/>
      <WhyChoose/>
      <Products headline="Best Selling Product"/>
      <Expriences/>
      <Materials/>
      <Testimonials/>
    </div>
  )
}

export default Homepage;