import { FaArrowRightLong } from "react-icons/fa6";
interface Props {
  text: string;
}

const Button = ({ text }: Props) => {
  return (
    <button className="flex items-center text-sm gap-1 text-primary">
      {text} <FaArrowRightLong size={24} />
    </button>
  );
};

export default Button;
