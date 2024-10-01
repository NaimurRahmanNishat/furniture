import banner from "../../assets/banner.jpg";
import Products from "./Products";

const Shoppage = () => {
  return (
    <section className="min-h-screen">
      {/* banner */}
      <div
        className="bg-cover w-full h-[400px] bg-center flex items-center justify-center text-white"
        style={{ backgroundImage: `url(${banner})` }}
      >
        <h1 className="text-4xl font-bold">Shop Our Products</h1>
      </div>
      <Products headline="What's Your Choice"/>
    </section>
  );
};

export default Shoppage;
