// src/components/Header.jsx
import React, { useState, useEffect } from "react";

const Header = () => {
  const [scrollPercent, setScrollPercent] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const maxScroll = document.body.scrollHeight - window.innerHeight;
      const percent = Math.min(scrollY / maxScroll, 1); // 0 → 1
      setScrollPercent(percent);
    };

    // محاسبه اولیه برای اطمینان
    handleScroll();

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-0 w-full z-50 flex items-center gap-3 p-3 overflow-hidden">
      {/* لایه پس‌زمینه شفاف — جایگزین backdrop-filter */}
      <div className="absolute inset-0 bg-black/20 backdrop-blur-sm border-b border-white/10"></div>

      {/* افکت "آب پر شدن" */}
      <div
        className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-yellow-500 to-yellow-400 origin-bottom"
        style={{
          height: `${scrollPercent * 100}%`,
          transition: "height 0.3s ease-out",
        }}
      />

      {/* محتوای هدر */}
      <div className="w-10 h-10 bg-white/30 text-white flex items-center justify-center rounded-full font-bold relative z-10 backdrop-blur-sm">
        E
      </div>
      <h1 className="font-bold text-white flex-1 drop-shadow relative z-10">
        Emperor Mobile Store
      </h1>
      <a
        href="#contact"
        className="text-white font-bold drop-shadow relative z-10 hover:text-yellow-100 transition"
      >
        تماس
      </a>
    </header>
  );
};

export default Header;
