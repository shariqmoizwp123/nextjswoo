"use client";

import { useState } from "react";

export default function AboutPage() {
  const [open, setOpen] = useState(null);

  const toggle = (i) => {
    setOpen(open === i ? null : i);
  };

  const faqs = [
    { q: "What services do you offer?", a: "We build modern websites using Next.js, WordPress & eCommerce solutions." },
    { q: "Do you create custom designs?", a: "Yes, every project is fully custom designed for your brand." },
    { q: "How fast is delivery?", a: "Usually between 3–10 days depending on project size." },
    { q: "Do you provide support?", a: "Yes, we offer long-term maintenance and support." },
  ];

  return (
    <div className="bg-white text-gray-900">

      {/* HERO */}
      <section className="relative overflow-hidden text-white">

        {/* background glow */}
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-pink-500 to-blue-500 animate-pulse opacity-90"></div>

        <div className="relative py-28 text-center px-6">
          <h1 className="text-5xl font-extrabold drop-shadow-lg">
            About Us
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-white/90">
            We create fast, modern and high-converting digital experiences for businesses.
          </p>

          <div className="mt-8">
            <button className="bg-white text-black px-6 py-3 rounded-full font-semibold hover:scale-105 transition">
              Explore More
            </button>
          </div>
        </div>
      </section>

      {/* WHO WE ARE */}
      <section className="max-w-5xl mx-auto px-6 py-16 text-center">
        <h2 className="text-3xl font-bold">Who We Are</h2>
        <p className="mt-4 text-gray-600 leading-relaxed">
          We are a creative digital agency focused on building high-performance websites
          with modern UI/UX, SEO optimization, and scalable architecture.
        </p>
      </section>

      {/* WHY CHOOSE US */}
      <section className="bg-gray-50 py-16 px-6">
        <h2 className="text-3xl font-bold text-center mb-10">
          Why Choose Us
        </h2>

        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6">

          {[
            {
              title: "⚡ Lightning Fast",
              desc: "Optimized Next.js apps with top speed performance.",
              color: "from-yellow-400 to-orange-500",
            },
            {
              title: "🎨 Modern UI",
              desc: "Beautiful interfaces with clean and modern design systems.",
              color: "from-pink-500 to-purple-600",
            },
            {
              title: "🚀 Scalable Code",
              desc: "Clean architecture ready for growth and scaling.",
              color: "from-blue-500 to-cyan-500",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="group relative p-6 rounded-2xl bg-white shadow-md hover:shadow-2xl transition transform hover:-translate-y-2 overflow-hidden"
            >

              {/* glow background */}
              <div className={`absolute inset-0 bg-gradient-to-r ${item.color} opacity-0 group-hover:opacity-20 transition`} />

              <h3 className="text-xl font-bold relative">{item.title}</h3>
              <p className="text-gray-600 mt-2 relative">{item.desc}</p>
            </div>
          ))}

        </div>
      </section>

      {/* OBJECTIVES */}
      <section className="max-w-5xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-center mb-8">
          Our Objectives
        </h2>

        <div className="grid md:grid-cols-2 gap-6">

          {[
            "Build high-quality digital products",
            "Improve business conversion rates",
            "Deliver fast and SEO optimized websites",
            "Provide long-term client success",
          ].map((item, i) => (
            <div
              key={i}
              className="p-5 rounded-xl border hover:bg-gradient-to-r hover:from-blue-50 hover:to-pink-50 transition"
            >
              ✔ {item}
            </div>
          ))}

        </div>
      </section>

      {/* FAQ */}
      <section className="bg-gradient-to-r from-gray-900 to-black text-white py-16 px-6">
        <h2 className="text-3xl font-bold text-center mb-10">
          Frequently Asked Questions
        </h2>

        <div className="max-w-3xl mx-auto space-y-4">

          {faqs.map((item, i) => (
            <div
              key={i}
              onClick={() => toggle(i)}
              className="p-5 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 cursor-pointer hover:bg-white/20 transition"
            >
              <div className="flex justify-between items-center">
                <h3 className="font-semibold">{item.q}</h3>
                <span className="text-xl">
                  {open === i ? "−" : "+"}
                </span>
              </div>

              {open === i && (
                <p className="mt-3 text-white/80">{item.a}</p>
              )}
            </div>
          ))}

        </div>
      </section>

    </div>
  );
}