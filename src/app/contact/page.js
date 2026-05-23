"use client";

import { useState } from "react";

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message sent successfully!");
  };

  return (
    <div className="bg-white">

      {/* HERO */}
      <section className="relative text-white text-center py-24 px-6 overflow-hidden">

        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-500 animate-pulse"></div>

        <div className="relative">
          <h1 className="text-5xl font-bold">Contact Us</h1>
          <p className="mt-4 text-white/90">
            Let’s build something amazing together 🚀
          </p>
        </div>

      </section>

      {/* QUICK CONTACT CARDS */}
      <section className="max-w-6xl mx-auto px-6 py-12 grid md:grid-cols-3 gap-6">

        {/* Email */}
        <a
          href="mailto:shariqmoiz34@gmail.com"
          className="p-6 rounded-2xl shadow-md hover:shadow-2xl transition hover:-translate-y-2 bg-gradient-to-br from-yellow-50 to-orange-100"
        >
          <h3 className="text-xl font-bold">📧 Email</h3>
          <p className="mt-2 text-gray-700">shariqmoiz34@gmail.com</p>
        </a>

        {/* WhatsApp */}
        <a
          href="https://wa.me/923188111495"
          target="_blank"
          className="p-6 rounded-2xl shadow-md hover:shadow-2xl transition hover:-translate-y-2 bg-gradient-to-br from-green-50 to-green-200"
        >
          <h3 className="text-xl font-bold">💬 WhatsApp</h3>
          <p className="mt-2 text-gray-700">+92 318 8111495</p>
        </a>

        {/* Website */}
        <a
          href="https://wpustaad.com"
          target="_blank"
          className="p-6 rounded-2xl shadow-md hover:shadow-2xl transition hover:-translate-y-2 bg-gradient-to-br from-blue-50 to-blue-200"
        >
          <h3 className="text-xl font-bold">🌐 Website</h3>
          <p className="mt-2 text-gray-700">wpustaad.com</p>
        </a>

      </section>

      {/* MAIN SECTION */}
      <section className="max-w-6xl mx-auto px-6 py-12 grid md:grid-cols-2 gap-10">

        {/* LEFT INFO */}
        <div className="space-y-6">

          <h2 className="text-3xl font-bold">Get in Touch</h2>

          <p className="text-gray-600">
            We respond within 24 hours. Feel free to contact us for WordPress,
            Next.js or eCommerce projects.
          </p>

          <div className="space-y-3 text-gray-700">

            <div className="p-4 rounded-xl bg-gray-50 hover:bg-gray-100 transition">
              📧 Email: <b>shariqmoiz34@gmail.com</b>
            </div>

            <div className="p-4 rounded-xl bg-gray-50 hover:bg-gray-100 transition">
              📱 WhatsApp: <b>+92 318 8111495</b>
            </div>

            <div className="p-4 rounded-xl bg-gray-50 hover:bg-gray-100 transition">
              🌐 Website: <b>wpustaad.com</b>
            </div>

            <div className="p-4 rounded-xl bg-gray-50 hover:bg-gray-100 transition">
              📺 YouTube: <b>WP Ustaad</b>
            </div>

          </div>

        </div>

        {/* FORM */}
        <div className="bg-white shadow-2xl rounded-2xl p-6 border">

          <h3 className="text-2xl font-bold mb-4">Send Message</h3>

          <form onSubmit={handleSubmit} className="space-y-4">

            <input
              name="name"
              placeholder="Your Name"
              onChange={handleChange}
              className="w-full border p-3 rounded-lg focus:ring-2 focus:ring-purple-500 outline-none"
              required
            />

            <input
              name="email"
              placeholder="Your Email"
              onChange={handleChange}
              className="w-full border p-3 rounded-lg focus:ring-2 focus:ring-purple-500 outline-none"
              required
            />

            <textarea
              name="message"
              placeholder="Your Message"
              rows={5}
              onChange={handleChange}
              className="w-full border p-3 rounded-lg focus:ring-2 focus:ring-purple-500 outline-none"
              required
            />

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-purple-600 to-pink-500 text-white py-3 rounded-lg hover:scale-105 transition"
            >
              Send Message 🚀
            </button>

          </form>

        </div>

      </section>

      {/* MAP */}
      <section className="w-full h-[420px] mt-10">

        <iframe
          className="w-full h-full"
          loading="lazy"
          src="https://www.google.com/maps?q=Karachi,+Pakistan&output=embed"
        />

      </section>

    </div>
  );
}