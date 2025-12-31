import React from "react";

const products = [
  { name: "iPhone 15 Pro", desc: "پرچمدار اپل" },
  { name: "Samsung S24", desc: "غول اندروید" },
  { name: "Xiaomi 14", desc: "شارژ 120W" },
  { name: "Redmi Note 13", desc: "اقتصادی قدرتمند" },
  { name: "iPhone 13", desc: "هنوز سلطان" },
  { name: "Galaxy A55", desc: "پرفروش بازار" },
  { name: "Samsung A73", desc: "میان‌رده محبوب" },
  { name: "OnePlus 12", desc: "سریع و جذاب" },
];

const Products = () => (
  <section className="px-6 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-6">
    {products.map((p, i) => (
      <div
        key={i}
        className="bg-white p-4 rounded-xl shadow-lg hover:scale-105 transition-transform duration-300"
      >
        <h4>{p.name}</h4>
        <p className="text-yellow-600">{p.desc}</p>
      </div>
    ))}
  </section>
);

export default Products;
