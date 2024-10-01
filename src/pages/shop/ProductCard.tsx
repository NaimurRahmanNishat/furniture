import { FiPlus } from "react-icons/fi";
import Rating from "../../components/Rating";
import { getImgUrl } from "../../utils/GetImagaeURL";
interface Product {
  id: number;
  name: string;
  imageUrl: string;
  category: string;
  price: number;
  rating: number;
}

interface Props {
  product: Product;
}

const ProductCard = ({ product }: Props) => {
  return (
    <div>
      <div className="bg-[#FAFAFA]">
        <img src={getImgUrl(`${product.imageUrl}`)} alt={product.name} />
      </div>
      <div className="p-6 bg-white dark:bg-black shadow-sm">
        <h4 className="text-base mb-1">{product.category}</h4>
        <h3 className="font-semibold text-xl mb-2">{product.name}</h3>
        <Rating rating={product.rating} />
        <div className="mt-5 flex justify-between items-center">
          <p className="text-secondary dark:text-white font-bold text-lg">
            <sup>$</sup>
            <span>{product.price}</span>
          </p>
          <button className="bg-secondary text-white p-2 rounded-full hover:bg-black/60"><FiPlus/></button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
