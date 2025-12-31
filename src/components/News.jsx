import React from "react";

const news = [
  "📦 موجودی آیفون 15 رسید",
  "🔥 فروش ویژه پایان هفته",
  "💳 شروع فروش اقساطی بدون بهره",
];

const News = () => (
  <section className="p-6 mt-6">
    <h3 className="text-yellow-600 font-bold mb-3">آخرین اخبار</h3>
    {news.map((n, i) => (
      <div key={i} className="bg-white p-4 rounded shadow mb-2">
        {n}
      </div>
    ))}
  </section>
);

export default News;
