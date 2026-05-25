"use client";

import { useState } from "react";

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  // Handle Input Change
  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  // Handle Form Submit
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (data.success) {
        alert("Email sent successfully 🚀");

        // Reset form
        setForm({
          name: "",
          email: "",
          message: "",
        });
      } else {
        alert("Failed to send email");
      }
    } catch (error) {
      console.error(error);
      alert("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white">

      {/* HERO */}
      <section className="relative overflow-hidden py-24 px-6 text-center text-white">

        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-500 animate-pulse"></div>

        <div className="relative z-10">
          <h1 className="text-5xl font-bold">
            Contact Us
          </h1>

          <p className="mt-4 text-white/90 max-w-2xl mx-auto">
            Let’s build something amazing together 🚀
          </p>
        </div>

      </section>

      {/* QUICK CONTACT CARDS */}
      <section className="max-w-6xl mx-auto px-6 py-12 grid md:grid-cols-3 gap-6">

        {/* EMAIL */}
        <a
          href="mailto:shariqmoiz34@gmail.com"
          className="p-6 rounded-2xl shadow-md hover:shadow-2xl transition hover:-translate-y-2 bg-gradient-to-br from-yellow-50 to-orange-100"
        >
          <h3 className="text-xl font-bold">
            📧 Email
          </h3>

          <p className="mt-2 text-gray-700 break-all">
            shariqmoiz34@gmail.com
          </p>
        </a>

        {/* WHATSAPP */}
        <a
          href="https://wa.me/923188111495"
          target="_blank"
          rel="noopener noreferrer"
          className="p-6 rounded-2xl shadow-md hover:shadow-2xl transition hover:-translate-y-2 bg-gradient-to-br from-green-50 to-green-200"
        >
          <h3 className="text-xl font-bold">
            💬 WhatsApp
          </h3>

          <p className="mt-2 text-gray-700">
            +92 318 8111495
          </p>
        </a>

        {/* WEBSITE */}
        <a href="https://wpustaad.com" target="_blank" rel="noopener noreferrer" className="p-6 rounded-2xl shadow-md hover:shadow-2xl transition hover:-translate-y-2 bg-gradient-to-br from-blue-50 to-blue-200"
        >
          <h3 className="text-xl font-bold">
            🌐 Website
          </h3>

          <p className="mt-2 text-gray-700">
            wpustaad.com
          </p>
        </a>

      </section>

      {/* MAIN SECTION */}
      <section className="max-w-6xl mx-auto px-6 py-12 grid md:grid-cols-2 gap-10">

        {/* LEFT INFO */}
        <div className="space-y-6">

          <h2 className="text-3xl font-bold">
            Get in Touch
          </h2>

          <p className="text-gray-600 leading-relaxed">
            We respond within 24 hours. Feel free to contact us
            for WordPress, Next.js, WooCommerce and eCommerce projects.
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

          <h3 className="text-2xl font-bold mb-4">
            Send Message
          </h3>

          <form
            onSubmit={handleSubmit}
            className="space-y-4"
          >

            {/* NAME */}
            <input
              type="text"
              name="name"
              value={form.name}
              placeholder="Your Name"
              onChange={handleChange}
              className="w-full border p-3 rounded-lg focus:ring-2 focus:ring-purple-500 outline-none"
              required
            />

            {/* EMAIL */}
            <input
              type="email"
              name="email"
              value={form.email}
              placeholder="Your Email"
              onChange={handleChange}
              className="w-full border p-3 rounded-lg focus:ring-2 focus:ring-purple-500 outline-none"
              required
            />

            {/* MESSAGE */}
            <textarea
              name="message"
              value={form.message}
              placeholder="Your Message"
              rows={5}
              onChange={handleChange}
              className="w-full border p-3 rounded-lg focus:ring-2 focus:ring-purple-500 outline-none"
              required
            />

            {/* BUTTON */}
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-gradient-to-r from-purple-600 to-pink-500 text-white py-3 rounded-lg hover:scale-105 transition disabled:opacity-50"
            >
              {loading ? "Sending..." : "Send Message 🚀"}
            </button>

          </form>

        </div>

      </section>

      {/* MAP */}
      <section className="w-full h-[420px] mt-10">

        <iframe
          className="w-full h-full border-0"
          loading="lazy"
          allowFullScreen
          src="https://www.google.com/maps?q=Karachi,+Pakistan&output=embed"
        />

      </section>

    </div>
  );
}