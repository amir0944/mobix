// src/components/MapSection.jsx
import React from "react";

const MapSection = () => {
  // مختصات فروشگاه: کاشان، فاز 2، خیابان بهارستان، روبروی داروخانه دکتر شادزاد
  const latitude = 33.988167;
  const longitude = 51.401611;

  const mapUrl = `https://www.google.com/maps?q=${latitude},${longitude}&z=17`;

  return (
    <section id="location" className="py-16 px-4 relative overflow-hidden">
      {/* کادر شیشه‌ای شفاف */}
      <div className="max-w-5xl mx-auto bg-white/10 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-white/20 shadow-xl">
        <h2 className="text-2xl md:text-3xl font-bold text-white text-center mb-6 drop-shadow">
          📍 فروشگاه ما در کاشان
        </h2>

        {/* دکمه مسیریابی */}
        <div className="flex justify-center">
          <a
            href={mapUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-yellow-600 hover:bg-yellow-700 text-white font-bold py-3 px-8 rounded-full shadow-lg transition-all transform hover:scale-105 flex items-center gap-2"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M5.05 4.05a7 7 0 119.9 9.9L10 18l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                clipRule="evenodd"
              />
            </svg>
            نمایش در گوگل مپ
          </a>
        </div>

        {/* آدرس متنی */}
        <div className="mt-10 text-center">
          <p className="text-white/70 text-sm">
            آدرس کامل: کاشان، فاز ۲، خیابان بهارستان، روبروی داروخانه دکتر
            شادزاد بین کوچه نیلوفر 2 و 3
          </p>
        </div>
      </div>
    </section>
  );
};

export default MapSection;
