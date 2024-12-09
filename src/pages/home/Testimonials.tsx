// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles  use this slider working
import "swiper/css";
import "swiper/css/pagination";
import 'swiper/css/navigation';

// import required modules
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { reviews } from "../../utils/reviews";
import Rating from "../../components/Rating";

const Testimonials = () => {
  return (
    <div className="section-container px-8">
      {/* Subheading and Heading */}
      <div className="text-center mb-12">
        <p className="text-primary uppercase tracking-wide">Testimonials</p>
        <h2 className="text-4xl font-bold">What Our Clients Say</h2>
      </div>

      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
        }}
        navigation={true}
        modules={[Pagination, Autoplay, Navigation]}
        className="md:max-w-7xl mx-auto relative rounded"
      >
        {reviews.map((review) => (
          <SwiperSlide
            className=" bg-no-repeat bg-cover rounded-lg"
            style={{ backgroundImage: `url(${review.coverImg})` }}
          >
            <div className="md:h-[547px] flex  justify-center items-center mb-4">
              <div className="mt-16 mb-5 bg-white border rounded-xl md:w-4/5 w-full p-4 relative">
                <img
                  src={review.image}
                  alt={review.name}
                  className="size-20 absolute -top-5 left-1/2 -translate-x-1/2 rounded-full ring-2 ring-primary object-cover"
                />
                <div className="mt-16 text-center">
                  <h3 className="text-lg font-semibold dark:text-black">
                    {review.name}
                  </h3>
                  <p className=" mb-3 dark:text-black">Verified Customer</p>
                  <p className="text-gray-500 dark:text-black mb-4">
                    "{review.review}"
                  </p>

                  <div className="w-full mx-auto mb-2 flex items-center justify-center text-center">
                    <Rating rating={review.rating} />
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Testimonials;
