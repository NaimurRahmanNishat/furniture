import { AiFillStar, AiOutlineStar } from "react-icons/ai";

interface Props {
  rating: number;
}

const Rating = ({ rating }: Props) => {
  const totalStars = 5;
  return (
    <div className="flex space-x-1">
      {Array.from({ length: totalStars }, (_, index) => {
        const starIndex = index + 1;
        return starIndex <= rating ? (
          <AiFillStar key={index} className="text-yellow-500" />
        ) : (
          <AiOutlineStar key={index} className="text-gray-400" />
        );
      })}
    </div>
  );
};

export default Rating;
