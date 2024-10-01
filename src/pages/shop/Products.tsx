import { useState } from "react";
import { products } from "../../utils/Products";
import ProductCard from "./ProductCard";
import { FaArrowRightLong } from "react-icons/fa6";

interface Props {
  headline: string;
}

interface Product {
  id: number;
  name: string;
  category: string;
  price: number;
  imageUrl: string;
  rating: number;
}

const Products = ({ headline }: Props) => {
  const categories = ["Chair", "Beds", "Sofa", "Lamp"];
  const [selectedCategory, setSelectedCategory] = useState("Chair");
  const [visiableProducts, setVisiableProducts] = useState(4);
  const filterProducts = products.filter(
    (product) => product.category === selectedCategory
  );
  const loadMoreProducts = () => {
    setVisiableProducts((prev) => prev + 4);
  };
  return (
    <div>
      <div className="section-container">
        <h2 className="font-bold text-4xl text-center my-8">{headline}</h2>
        {/* category tabs */}
        <div className="bg-[#EEEEEE] max-w-md mx-auto sm:rounded-full md:p-2.5 py-5 mb-16">
          <div className="flex flex-col sm:flex-row items-center md:justify-between justify-center gap-4">
            {categories.map((category) => (
              <button
                onClick={() => {
                  setSelectedCategory(category);
                  setVisiableProducts(4);
                }}
                key={category}
                className={`py-1.5 sm:px-5 px-8 rounded-full hover:bg-primary hover:text-white transition-colors ${
                  selectedCategory === category
                    ? "bg-white text-primary"
                    : "text-secondary"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
        {/* products grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4">
          {filterProducts
            .slice(0, visiableProducts)
            .map((product: Product, index) => (
              <ProductCard key={index} product={product} />
            ))}
        </div>
        {/* load more button */}
        {visiableProducts < filterProducts.length && (
          <div className="flex items-center justify-center mt-8">
            <button
              onClick={loadMoreProducts}
              className="flex items-center text-lg font-semibold gap-1 text-primary"
            >
              View All
              <FaArrowRightLong size={24} />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Products;
