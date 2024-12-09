type TooltipButtonProps = {
  position?: 'bottom' | 'top' | 'left' | 'right'; // Define allowed positions
  colors?: string[]; // Array of color class names
};

const TooltipButton: React.FC<TooltipButtonProps> = ({
  position = 'bottom',
  colors = ['bg-red-700', 'bg-green-700', 'bg-blue-700'],
}) => {
  // Map position prop to different classes for positioning the tooltip and arrow
  const positionClasses = {
    bottom: {
      tooltip: 'bottom-full left-1/2 transform -translate-x-1/2 mb-3',
      arrow: 'left-1/2 transform -translate-x-1/2 -bottom-2 border-t',
    },
    top: {
      tooltip: 'top-full left-1/2 transform -translate-x-1/2 mt-3',
      arrow: 'left-1/2 transform -translate-x-1/2 -top-2 border-b',
    },
    left: {
      tooltip: 'left-full top-1/2 transform -translate-y-1/2 ml-3',
      arrow: 'top-1/2 transform -translate-y-1/2 -left-2 border-r',
    },
    right: {
      tooltip: 'right-full top-1/2 transform -translate-y-1/2 mr-3',
      arrow: 'top-1/2 transform -translate-y-1/2 -right-2 border-l',
    },
  };

  return (
    <div className="relative group">
      <button className="relative p-4 bg-white/25 border border-1 border-white text-white text-xl rounded-full">
        {/* Tooltip */}
        <div
          className={`hidden absolute p-2 space-x-1 rounded-lg bg-white/25 border border-white shadow-md group-hover:flex ${positionClasses[position].tooltip}`}
        >
          {/* Colored dots */}
          {colors.map((color, index) => (
            <div
              key={index}
              className={`size-6 ${color} border border-white rounded-full`}
            ></div>
          ))}
          {/* Tooltip arrow */}
          <div
            className={`absolute w-0 h-0 border-l-8 border-l-transparent border-r-8 border-r-transparent border-t-8 ${positionClasses[position].arrow} border-1 border-t-white/35`}
          ></div>
        </div>
      </button>
    </div>
  );
};

export default TooltipButton;
