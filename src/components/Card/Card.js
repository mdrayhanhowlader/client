import React, { useState } from "react";
import { AiFillStar } from "react-icons/ai";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { RxDotFilled } from "react-icons/rx";

const Card = () => {
  const slides = [
    {
      url: "https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      url: "https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      url: "https://images.pexels.com/photos/189296/pexels-photo-189296.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      url: "https://images.pexels.com/photos/261102/pexels-photo-261102.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      url: "https://images.pexels.com/photos/1134176/pexels-photo-1134176.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      url: "https://images.pexels.com/photos/2096983/pexels-photo-2096983.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  // const [changeColor, setChangeColor] = useState(false)

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };
  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
    // setChangeColor(true)
  };

  return (
    <div className="bg-slate-50 shadow-2xl rounded-lg relative group">
      {/* card slider */}
      <div>
        <div
          className="w-full h-56 mx-auto bg-center bg-cover duration-500 rounded-lg "
          style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
        ></div>
        {/* left arrow */}
        <div className="hidden group-hover:block absolute top-[35%]  translate-y-[-50%] left-0 text-2xl rounded-full p-2 bg-black/200 text-white cursor-pointer">
          <BsChevronCompactLeft onClick={prevSlide} size={30} />
        </div>
        {/* right arrow */}
        <div className="hidden group-hover:block absolute top-[35%]  translate-y-[-50%] right-0 text-2xl rounded-full p-2 bg-black/200 text-white cursor-pointer">
          <BsChevronCompactRight onClick={nextSlide} size={30} />
        </div>
        {/* dot filled */}
        <div className="flex top-48 left-0 right-0 justify-center absolute">
          {/* {slides.length && slides.length < 3 ? (
            slides.map((slide, slideIndex) => (
              <div>
                <RxDotFilled />
              </div>
            ))
          ) : (
            <RxDotFilled />
          )} */}
          {slides.map((slide, slideIndex) => (
            <div
              key={slideIndex}
              onClick={() => goToSlide(slideIndex)}
              className={"text-2xl cursor-pointer text-white py-2"}
            >
              <RxDotFilled />
            </div>
          ))}
        </div>
      </div>
      {/* card body */}
      <div className="p-2 font-semibold">
        {/* title and rating */}
        <div className="flex justify-between items-center">
          {/* title */}
          <h4>Pattaya city thiland</h4>
          {/* rating */}
          <div className="flex justify-around items-center">
            <span>
              <AiFillStar />
            </span>
            <span className="ml-1">4.86</span>
          </div>
        </div>
        {/* body price */}
        <div className="text-start flex justify-start flex-col">
          <h6>Marina View</h6>
          <h6>Feb 1-6</h6>
          <div>
            <h6>
              $<span>61</span> night
            </h6>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
