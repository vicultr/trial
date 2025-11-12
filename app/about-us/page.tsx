"use client";

import React, { useEffect } from "react";
import { Home, AtSign, MailCheck, Phone, Users } from "lucide-react";
import Link from "next/link";

export default function AboutUsPage() {
  const mainColor = "#1a3d4d";

  // Scroll animation logic
  useEffect(() => {
    const elements = Array.from(document.querySelectorAll("[data-animate]"));
    if (!("IntersectionObserver" in window)) {
      elements.forEach((el) => el.classList.add("in-view"));
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("in-view");
        });
      },
      { threshold: 0.15 }
    );
    elements.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <div
      className="min-h-screen flex flex-col justify-between"
      style={{
        background: "linear-gradient(to bottom, #ffffff 0%, #ecfff2 40%, #f6fff9 100%)",
      }}
    >
      {/* NAVBAR */}
      <header className="fixed top-0 left-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
          <Link href="/" className="flex items-center gap-2">
            <Home className="w-7 h-7" style={{ color: mainColor }} />
            <span className="text-xl font-bold" style={{ color: mainColor }}>
              i-Residence
            </span>
          </Link>
          <nav className="hidden md:flex items-center gap-8 text-gray-700 font-medium">
            <Link href="/" className="hover:text-[#1ba89a] transition-colors">
              Home
            </Link>
            <Link href="/#lifestyle" className="hover:text-[#1ba89a] transition-colors">
              Lifestyle
            </Link>
            <Link href="/#journey" className="hover:text-[#1ba89a] transition-colors">
              Start
            </Link>
            <Link href="/#contact-info" className="hover:text-[#1ba89a] transition-colors">
              Contact
            </Link>
            <Link
              href="/about-us"
              className="text-[#1ba89a] font-semibold hover:text-[#1ba89a] transition-colors"
            >
              About Us
            </Link>
          </nav>
          <Link
            href="https://iresidence.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:inline-block px-5 py-2 bg-[#1ba89a] text-white rounded-full font-semibold hover:opacity-90 transition-opacity"
          >
            Launch App
          </Link>
        </div>
      </header>

      {/* MAIN CONTENT */}
      <main className="pt-28 pb-24 px-6 max-w-5xl mx-auto space-y-16 flex-1">
        {/* Page Title */}
        <h1
          className="text-5xl md:text-6xl font-bold text-center"
          style={{ color: mainColor }}
          data-animate
        >
          About Us
        </h1>

        {/* Intro Section */}
        <section
          className="bg-white p-8 md:p-12 rounded-3xl shadow-xl border border-[#e6f6f4]"
          data-animate
        >
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-6">
            i-Residence was created to end the everyday chaos that frustrates both tenants and
            managers/landlords; the kind of problems that should have been solved long ago.
          </p>
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
            We experienced it all, and decided to fix it. i-Residence brings order where there was
            confusion, trust where there was doubt, and calm where there was noise.
          </p>
        </section>

        {/* Vision Section */}
        <section
          className="bg-white p-8 md:p-12 rounded-3xl shadow-xl border border-[#e6f6f4]"
          data-animate
        >
          <h2
            className="text-4xl md:text-5xl font-bold mb-4"
            style={{ color: mainColor }}
          >
            Our Vision
          </h2>
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
            To set the standard for premium living by redefining how people experience home — with
            ease, comfort, and transparency.
          </p>
        </section>

        {/* Why i-Residence Section */}
        <section
          className="bg-white p-8 md:p-12 rounded-3xl shadow-xl border border-[#e6f6f4]"
          data-animate
        >
          <h2
            className="text-4xl md:text-5xl font-bold mb-4"
            style={{ color: mainColor }}
          >
            Why i-Residence
          </h2>
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
            Because modern living shouldn’t be complicated. i-Residence gives homes, estates, and
            apartments a sense of order and ease, making living smoother for tenants and management
            lighter for landlords.
          </p>
        </section>
      </main>

      {/* CONTACT FOOTER */}
      <footer className="bg-[#1a3d4d] text-white">
        <div className="max-w-5xl mx-auto px-6 py-12 space-y-6 text-center">
          <h3 className="text-2xl font-bold mb-4">Contact</h3>

          <div className="flex flex-col md:flex-row justify-center gap-12">
            {/* Support */}
            <div className="flex items-center gap-3">
            </div>

            {/* Residents */}
            <div className="flex items-center gap-3">
              <MailCheck className="w-6 h-6" />
              <span>For Residents: support@iresidence.co</span>
            </div>

            {/* Vendors */}
            <div className="flex items-center gap-3">
              <Users className="w-6 h-6" />
              <span>For Vendors: hello@iresidence.co</span>
            </div>

            {/* Phone */}
            <div className="flex items-center gap-3">
              <Phone className="w-6 h-6" />
              <span>071787888828</span>
            </div>
          </div>
        </div>
      </footer>

      {/* COPYRIGHT FOOTER */}
      <footer className="bg-[#102833] text-gray-300 text-center py-4 text-sm">
        &copy; {new Date().getFullYear()} i-Residence. All rights reserved.
      </footer>

      {/* ANIMATION STYLES */}
      <style jsx>{`
        [data-animate] {
          opacity: 0;
          transform: translateY(18px);
          transition: opacity 700ms ease, transform 700ms ease;
        }
        [data-animate].in-view {
          opacity: 1;
          transform: translateY(0);
        }
      `}</style>
    </div>
  );
}
