import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

const reviews = [
  {
    alt: "a picture of Charly Schmidt",
    text: "Incidunt optio suscipit, exercitationem est debitis cum nobis placeat.",
    name: "Charly Schmidt",
    gender: "Male",
  },
  {
    alt: "a picture of Kimberley Nicholls",
    text: "Illum veritatis quasi, similique dolore odit officia, aliquam eum ut labore quisquam.",
    name: "Kimberley Nicholls",
    gender: "Female",
  },
  {
    alt: "a picture of Elwood Hook",
    text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
    name: "Elwood Hook",
    gender: "Male",
  },
  {
    alt: "a picture of Fleur Hurst",
    text: "dicta molestiae facilis obcaecati minus! Dolores expedita.",
    name: "Fleur Hurst",
    gender: "Female",
  },
  {
    alt: "a picture of Geoffrey Carter",
    text: "consequatur voluptates nobis maxime nihil eos neque ea corporis vero ullam.",
    name: "Geoffrey Carter",
    gender: "Male",
  },
  {
    alt: "a picture of Geoffrey Carter",
    text: "consequatur voluptates nobis maxime nihil eos neque ea corporis vero ullam.",
    name: "Geoffrey Carter",
    gender: "Male",
  },
];

export default function Reviews() {
  const [activeIndex, setActiveIndex] = React.useState<number | null>(null);
  const maleAvatar = [
    "https://www.w3schools.com/w3css/img_avatar3.png",
    "https://www.w3schools.com/w3css/img_avatar2.png",
  ];

  const femaleAvatars = [
    "https://www.w3schools.com/w3css/img_avatar4.png",
    "https://www.w3schools.com/w3css/img_avatar5.png",
  ];

  const processedReviews = React.useMemo(() => {
    return reviews.map((review) => ({
      ...review,
      avatar:
        review.gender.toLowerCase() === "male"
          ? maleAvatar[Math.floor(Math.random() * maleAvatar.length)]
          : femaleAvatars[Math.floor(Math.random() * femaleAvatars.length)],
    }));
  }, [reviews]);
  return (
    <div className="review-container">
      <div className="review-title-container">
        <h3>FEEDBACK AND REVIEWS</h3>
      </div>
      <Swiper
        modules={[Autoplay, Pagination]}
        spaceBetween={20}
        slidesPerView={2}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        centeredSlides={true}
        breakpoints={{
          0: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
        }}
      >
        {processedReviews.map((review, index) => (
          <SwiperSlide key={index}>
            <div
              className={`card ${activeIndex === index ? "active" : ""}`}
              onMouseEnter={() => setActiveIndex(index)}
              onMouseLeave={() => setActiveIndex(null)}
            >
              <div className="img-container">
                <img src={review.avatar} alt={review.alt} />
              </div>

              <p>{review.text}</p>

              <div className="name-container">{review.name}</div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
