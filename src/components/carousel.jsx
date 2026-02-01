import { useState, useEffect } from "react";

const Carousel = () => {
  const slides = [
    "https://rukminim2.flixcart.com/fk-p-flap/3240/540/image/b5ab622a8763ca9b.jpeg?q=60",
    "https://rukminim2.flixcart.com/fk-p-flap/3240/540/image/076c4f2ee87225d7.jpg?q=60",
    "https://rukminim2.flixcart.com/fk-p-flap/3240/540/image/5b309e98775e22e4.jpg?q=60",
    "https://rukminim2.flixcart.com/fk-p-flap/3240/540/image/4d9f318f85c4056d.jpg?q=60",
    "https://rukminim2.flixcart.com/fk-p-flap/3240/540/image/2efa811951857f8a.jpeg?q=60",
    "https://rukminim2.flixcart.com/fk-p-flap/3240/540/image/3e4ebd51619227b6.jpeg?q=60",
    "https://rukminim2.flixcart.com/fk-p-flap/3240/540/image/aca69f5455b5df65.jpg?q=60",
    "https://rukminim2.flixcart.com/fk-p-flap/3240/540/image/c6b40023cdc9c36c.jpg?q=60",
    "https://rukminim2.flixcart.com/fk-p-flap/3240/540/image/78c3cfa787e8acbe.jpg?q=60",
  ];

  const [currentslide, setcurrentslide] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setcurrentslide((prev) => (prev + 1) % slides.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <div className="carosel-wrapper rounded-2xl border-2 shadow-blue-300 border-blue-300 h-auto bg-white relative xs: shadow-md m-1 flex justify-center items-center flex-col overflow-hidden pt-1 sm:m-2 lg:m-1 xl:m-3">
      <div className="carousel-imgage-container flex justify-evenly items-center xs:p-1 lg:p-2">
        <i
          class="ri-arrow-left-circle-line xs:mr-0.5"
          onClick={() =>
            setcurrentslide(
              currentslide == 0 ? currentslide + 0 : currentslide - 1
            )
          }
        ></i>
        <picture>
          <img
            src={slides[currentslide]}
            alt=""
            className="cursor-pointer xs:rounded-[6px] lg:rounded-xl"
          />
        </picture>
        <i
          class="ri-arrow-right-circle-line xs:ml-0.5"
          onClick={() =>
            setcurrentslide(
              currentslide == slides.length - 1
                ? currentslide + 0
                : currentslide + 1
            )
          }
        ></i>
      </div>

      <div className="current-dot-wrapper flex justify-center items-center xs:m-0.5 mb-1 md:mb-2">
        {slides.map((_, index) => (
          <div
            key={index}
            className={`dot cursor-pointer border-gray-400 ${
              currentslide === index ? "bg-black" : "bg-white"
            } xs:h-0.5 xs:w-1 m-0.5 p-[1px]  border rounded lg:h-1 lg:w-7 lg:p-[1.7px]`}
            onClick={(e)=> setcurrentslide(index)}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
