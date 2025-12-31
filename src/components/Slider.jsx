import React, { useState, useEffect } from "react";
import img1 from "../assets/slider/1.png";
import img2 from "../assets/slider/2.png";
import img3 from "../assets/slider/3.png";
import img4 from "../assets/slider/4.png";
import img5 from "../assets/Slider/5.png";
import img6 from "../assets/slider/6.png";

// داده‌های اسلاید: هر کدوم تصویر + محتوای متنی
const slides = [
  {
    image: `${img1}`,
    title: "آیفون 15 پرو",
    model: "iPhone 15 Pro",
    description: "طراحی تیتانیومی، چیپ A17 Pro، دوربین پیشرفته",
  },
  {
    image: `${img2}`,
    title: "سامسونگ گلکسی S24",
    model: "Galaxy S24 Ultra",
    description: "صفحه‌نمایش 6.8 اینچی، دوربین 200 مگاپیکسلی، هوش مصنوعی",
  },
  {
    image: `${img3}`,
    title: "گوگل پیکسل 8",
    model: "Pixel 8 Pro",
    description: "تجربه خالص اندروید، بهترین پردازش تصویر، به‌روزرسانی 7 ساله",
  },
  {
    image: `${img4}`,
    title: "شاومی 14 اولترا",
    model: "Xiaomi 14 Ultra",
    description: "همکاری با لایکا، باتری 5000 میلی‌آمپری، شارژ سریع 90 وات",
  },
  {
    image: `${img5}`,
    title: "شاومی 14 اولترا",
    model: "Xiaomi 14 Ultra",
    description: "همکاری با لایکا، باتری 5000 میلی‌آمپری، شارژ سریع 90 وات",
  },
  {
    image: `${img6}`,
    title: "شاومی 14 اولترا",
    model: "Xiaomi 14 Ultra",
    description: "همکاری با لایکا، باتری 5000 میلی‌آمپری، شارژ سریع 90 وات",
  },
].map((s) => ({ ...s, image: s.image.trim() }));

const Slider = () => {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(0); // 1 = forward, -1 = backward

  const next = () => {
    setDirection(1);
    setIndex((prev) => (prev + 1) % slides.length);
  };

  const prev = () => {
    setDirection(-1);
    setIndex((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goTo = (i) => {
    setDirection(i > index ? 1 : -1);
    setIndex(i);
  };

  useEffect(() => {
    const timer = setTimeout(() => setDirection(0), 300);
    return () => clearTimeout(timer);
  }, [index]);

  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* اسلایدها */}
      {slides.map((slide, i) => (
        <div
          key={i}
          className={`absolute inset-0 transition-all duration-500 ease-in-out ${
            i === index
              ? "opacity-100 z-10"
              : direction === 1
              ? i === index - 1 || (index === 0 && i === slides.length - 1)
                ? "opacity-0 translate-x-full z-0"
                : "opacity-0 -translate-x-full z-0"
              : direction === -1
              ? i === (index + 1) % slides.length
                ? "opacity-0 -translate-x-full z-0"
                : "opacity-0 translate-x-full z-0"
              : "opacity-0 z-0"
          }`}
          style={{
            backgroundImage: `url(${slide.image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          {/* پوشش تیره برای خوانایی متن */}
          <div className="absolute inset-0 bg-black/40 flex flex-col justify-center items-start p-8 md:p-16 text-white">
            <h1 className="text-3xl md:text-5xl font-bold mb-3 drop-shadow">
              {slide.title}
            </h1>
            <p className="text-lg md:text-xl mb-2 drop-shadow opacity-90">
              {slide.model}
            </p>
            <p className="text-base md:text-lg max-w-2xl drop-shadow opacity-85">
              {slide.description}
            </p>
          </div>
        </div>
      ))}

      {/* دکمه‌های ناوبری — جابجا شده برای راست‌چین */}
      <button
        onClick={next} // بعدی = چپ
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-black/30 backdrop-blur-sm text-white hover:bg-white/20 transition-all hover:scale-110"
        aria-label="بعدی"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </button>

      <button
        onClick={prev} // قبلی = راست
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-black/30 backdrop-blur-sm text-white hover:bg-white/20 transition-all hover:scale-110"
        aria-label="قبلی"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5l7 7-7 7"
          />
        </svg>
      </button>

      {/* Indicatorها در پایین */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-20 flex gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            className={`w-3 h-3 rounded-full transition-all ${
              i === index
                ? "bg-white scale-125 ring-2 ring-yellow-300"
                : "bg-white/50 hover:bg-white"
            }`}
            aria-label={`رفتن به اسلاید ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Slider;
