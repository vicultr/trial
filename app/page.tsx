"use client";

import React, { useEffect, useState } from "react";
import {
  Home,
  CreditCard,
  FileText,
  CheckCircle,
  Wrench,
  Bell,
  LogOut,
  Users,
  CalendarCheck,
  ClipboardX,
  Archive,
  MailCheck,
  UserCheck,
  Clock,
  Phone,
  AtSign,
  Menu,
  X,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function IResidenceLanding() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const slides = [
    {
      title: "Pay | Live | Connect",
      subtitle:
        "Experience a higher standard of modern living with i-Residence; where paying rent, booking visitors, and managing your home happens seamlessly in one app.",
      cta1: "Download App",
      cta2: "Login",
      image: "/images/iresidence.png",
    },
    {
      title: "Comfort & Convenience",
      subtitle:
        "Pay instantly. Get verified receipts. Book visitors confidently. Issue vacate notices. i-Residence redefines modern living with class and ease.",
      cta1: "Download App",
      cta2: "Login",
      image: "/images/tablet.png",
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const els = Array.from(document.querySelectorAll("[data-animate]"));
    if (!("IntersectionObserver" in window)) {
      els.forEach((el) => el.classList.add("in-view"));
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
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  const mainColor = "#1a3d4d";
  const accentColor = "#1ba89a";

  const lifestyleCards = [
    {
      icon: <CreditCard className="w-10 h-10" />,
      title: "Pay Rent Instantly, Live Stress-Free",
      description:
        "No queues. No screenshots. No delays. Pay directly from i-Residence via M-Pesa or bank, and see your landlord receive it instantly.",
    },
    {
      icon: <FileText className="w-10 h-10" />,
      title: "Verified Digital Receipts — Automatically",
      description:
        "Every rent payment generates a secure digital receipt issued instantly; clean, traceable, and always available.",
    },
    {
      icon: <Archive className="w-10 h-10" />,
      title: "Your Full Payment History; At Your Fingertips",
      description:
        "Access and download your rent history anytime. Whether you’re budgeting, moving, or confirming past payments, everything is organized and secure.",
    },
    {
      icon: <LogOut className="w-10 h-10" />,
      title: "Issue a Vacate Notice; Professionally",
      description:
        "When it’s time to leave, submit your notice to vacate directly through the app. It’s official, time-stamped, and instantly shared with your landlord or estate team.",
    },
    {
      icon: <UserCheck className="w-10 h-10" />,
      title: "Book Visitors in Advance",
      description:
        "Expecting guests? Pre-book them easily. Your visitors get smooth entry and parking access; keeping your space private and organized.",
    },
    {
      icon: <Wrench className="w-10 h-10" />,
      title: "Report Maintenance and Track Progress",
      description:
        "Log repair issues in real-time, follow updates, and get notified once completed. No unreturned calls, no confusion; just timely service.",
    },
    {
      icon: <Clock className="w-10 h-10" />,
      title: "Stay Ahead With Smart Reminders",
      description:
        "Get polite reminders before rent is due and updates on your bills; always on time, never overwhelming.",
    },
  ];

  return (
    <div
      className="relative min-h-screen overflow-hidden"
      style={{
        background:
          "linear-gradient(to bottom, #ffffff 0%, #ecfff2 40%, #f6fff9 100%)",
      }}
    >
      {/* NAVBAR */}
      <header className="fixed top-0 left-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
          <div className="flex items-center gap-2">
            <Home className="w-7 h-7" style={{ color: mainColor }} />
            <span className="text-xl font-bold" style={{ color: mainColor }}>
              i-Residence
            </span>
          </div>

          {/* Desktop Navbar */}
          <nav className="hidden md:flex items-center gap-8 text-gray-700 font-medium">
            <a href="#home" className="hover:text-[#1ba89a] transition-colors">
              Home
            </a>
            <a
              href="#lifestyle"
              className="hover:text-[#1ba89a] transition-colors"
            >
              Lifestyle
            </a>
            <a
              href="#journey"
              className="hover:text-[#1ba89a] transition-colors"
            >
              Start
            </a>
            <Link
              href="/about-us"
              className="hover:text-[#1ba89a] transition-colors"
            >
              About Us
            </Link>
            <a
              href="#contact-info"
              className="hover:text-[#1ba89a] transition-colors"
            >
              Contact
            </a>
          </nav>

          {/* Desktop Launch App */}
          <Link
            href="https://iresidence.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:inline-block px-5 py-2 bg-[#1ba89a] text-white rounded-full font-semibold hover:opacity-90 transition-opacity"
          >
            Launch App
          </Link>

          {/* Mobile Hamburger */}
          <button
            className="md:hidden text-gray-700"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white/95 backdrop-blur-md border-t border-gray-100">
            <nav className="flex flex-col gap-4 px-6 py-4 text-gray-700 font-medium">
              <a
                href="#home"
                className="hover:text-[#1ba89a] transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Home
              </a>
              <a
                href="#lifestyle"
                className="hover:text-[#1ba89a] transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Lifestyle
              </a>
              <a
                href="#journey"
                className="hover:text-[#1ba89a] transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Start
              </a>
              <Link
                href="/about-us"
                className="hover:text-[#1ba89a] transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                About Us
              </Link>
              <a
                href="#contact-info"
                className="hover:text-[#1ba89a] transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact
              </a>
              <Link
                href="https://iresidence.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2 bg-[#1ba89a] text-white rounded-full font-semibold hover:opacity-90 transition-opacity text-center"
              >
                Launch App
              </Link>
            </nav>
          </div>
        )}
      </header>

      {/* HERO SLIDER */}
      <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
        <div
          className="flex transition-transform duration-1000 ease-in-out h-full w-full"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {slides.map((slide, index) => (
            <div
              key={index}
              className="min-w-full h-screen relative flex items-center"
            >
              <div
                className="absolute inset-0 bg-no-repeat bg-right bg-cover transition-all duration-1000"
                style={{
                  backgroundImage: `url(${slide.image})`,
                  backgroundPosition: "right center",
                  backgroundSize: "contain",
                  opacity: 0.98,
                  filter: "brightness(1) contrast(1.05)",
                }}
              ></div>

              <div className="absolute inset-0 bg-gradient-to-l from-white/30 via-white/10 to-transparent"></div>

              <div className="relative z-20 max-w-2xl px-6 md:px-16 py-32 md:py-48 text-left">
                <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4 drop-shadow-sm">
                  {slide.title}
                </h1>
                <p className="text-lg md:text-2xl text-gray-700 mb-8 leading-relaxed">
                  {slide.subtitle}
                </p>
                <div className="flex flex-wrap gap-4">
                  <button className="px-6 py-3 bg-[#1ba89a] text-white rounded-full font-semibold text-lg hover:opacity-90 transition">
                    {slide.cta1}
                  </button>
                  <a
                    href="https://iresidence.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3 border-2 border-[#1ba89a] text-[#1a3d4d] rounded-full font-semibold text-lg hover:bg-[#1ba89a]/10 transition"
                  >
                    {slide.cta2}
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#f6fff9] to-transparent z-10"></div>
      </section>

      {/* LIFESTYLE SECTION */}
      <section id="lifestyle" className="py-20 px-6 bg-gray-50" data-animate>
        <div className="max-w-7xl mx-auto text-center">
          <h2
            className="text-4xl md:text-5xl font-bold mb-12"
            style={{ color: mainColor }}
          >
            The i-Residence Lifestyle — Premium by Design
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {lifestyleCards.map((item, i) => (
              <div
                key={i}
                className="bg-white rounded-3xl p-6 shadow-lg border border-[#e6f6f4] hover:shadow-2xl transition-shadow duration-300 flex flex-col items-start gap-4"
              >
                <div
                  className="inline-flex items-center justify-center w-12 h-12 rounded-lg mb-3"
                  style={{ background: `${accentColor}11` }}
                >
                  {React.cloneElement(item.icon, { style: { color: mainColor } })}
                </div>
                <h3
                  className="text-xl md:text-2xl font-semibold"
                  style={{ color: mainColor }}
                >
                  {item.title}
                </h3>
                <p className="text-gray-700">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* START YOUR PREMIUM LIVING SECTION */}
      <section
        id="journey"
        className="py-20 px-6 bg-[#eaf8f7] flex flex-col md:flex-row items-center justify-center gap-10 max-w-7xl mx-auto rounded-3xl shadow-lg"
        data-animate
      >
        <div className="md:w-1/2 flex flex-col gap-6">
          <h2 className="text-4xl md:text-5xl font-bold" style={{ color: mainColor }}>
            Start Your Premium Living Journey Today
          </h2>
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
            Pay rent. Track your records. Book visitors. Move in or move out, all from one app.
            <br />
            Experience the high standard of i-Residence today.
          </p>
        </div>

        <div className="hidden md:block w-px h-48 bg-[#1ba89a]"></div>

        <div className="md:w-1/2 flex flex-col items-start gap-4">
          <button className="px-6 py-3 bg-[#1ba89a] text-white rounded-full font-semibold text-lg hover:opacity-90 transition">
            Download App
          </button>
          <a
            href="https://iresidence.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 border-2 border-[#1ba89a] text-[#1a3d4d] rounded-full font-semibold text-lg hover:bg-[#1ba89a]/10 transition"
          >
            Login
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer
        id="contact-info"
        className="bg-[#1a3d4d] text-white py-16 px-6 mt-20"
        data-animate
      >
        <div className="max-w-4xl mx-auto flex flex-col items-center gap-6 text-center">
          <h3 className="text-2xl font-semibold mb-4">Contact Page</h3>

          <div className="flex flex-col gap-2 text-lg">
            <div className="flex items-center gap-2 justify-center">
              <AtSign className="w-5 h-5" />
              <span>
                <strong>support@iresidence.co</strong> — For Residents
              </span>
            </div>
            <div className="flex items-center gap-2 justify-center">
              <MailCheck className="w-5 h-5" />
              <span>
                <strong>hello@iresidence.co</strong> — Vendors
              </span>
            </div>
            <div className="flex items-center gap-2 justify-center">
              <Phone className="w-5 h-5" />
              <span>
                <strong>Contact:</strong> 071787888828
              </span>
            </div>
          </div>
        </div>
      </footer>

      {/* RIGHTS RESERVED */}
      <section className="bg-[#15303c] text-white py-4 text-center">
        &copy; {new Date().getFullYear()} i-Residence. All rights reserved.
      </section>

      <style jsx>{`
        html {
          scroll-behavior: smooth;
        }
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
