"use client";

import React, { useEffect, useState } from "react";
import {
  Home,
  CreditCard,
  FileText,
  Wrench,
  LogOut,
  Archive,
  MailCheck,
  UserCheck,
  Clock,
  Phone,
  AtSign,
  Menu,
  X,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

interface Slide {
  title: string;
  subtitle: string;
  cta1: string;
  cta2: string;
  image: string;
}

interface LifestyleCard {
  icon: React.ReactElement;
  title: string;
  description: string;
}

const IResidenceLanding: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState<number>(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);

  const slides: Slide[] = [
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
    {
      title: "Manage Everything Effortlessly",
      subtitle:
        "From payments to maintenance tracking — i-Residence keeps your home life organized, secure and stress-free.",
      cta1: "Download App",
      cta2: "Login",
      image: "/images/handphone.png",
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const mainColor = "#1a3d4d";
  const accentColor = "#1ba89a";

  const lifestyleCards: LifestyleCard[] = [
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

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () =>
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <div
      className="relative min-h-screen overflow-hidden"
      style={{
        background:
          "linear-gradient(to bottom, #ffffff 0%, #ecfff2 40%, #f6fff9 100%)",
      }}
    >
      {/* ---------- NAVBAR ---------- */}
      <header className="fixed top-0 left-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
          <div className="flex items-center gap-2">
            <Home className="w-7 h-7" style={{ color: mainColor }} />
            <span className="text-xl font-bold" style={{ color: mainColor }}>
              i-Residence
            </span>
          </div>

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

          <Link
            href="https://iresidence.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:inline-block px-5 py-2 bg-[#1ba89a] text-white rounded-full font-semibold hover:opacity-90 transition-opacity"
          >
            Launch App
          </Link>

          <button
            className="md:hidden text-gray-700"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden bg-white/95 backdrop-blur-md border-t border-gray-100">
            <nav className="flex flex-col gap-4 px-6 py-4 text-gray-700 font-medium">
              {[
                ["Home", "#home"],
                ["Lifestyle", "#lifestyle"],
                ["Start", "#journey"],
                ["About Us", "/about-us"],
                ["Contact", "#contact-info"],
              ].map(([label, href]) =>
                href.startsWith("#") ? (
                  <a
                    key={href}
                    href={href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="hover:text-[#1ba89a]"
                  >
                    {label}
                  </a>
                ) : (
                  <Link
                    key={href}
                    href={href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="hover:text-[#1ba89a]"
                  >
                    {label}
                  </Link>
                )
              )}
              <Link
                href="https://iresidence.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2 bg-[#1ba89a] text-white rounded-full font-semibold text-center hover:opacity-90 transition-opacity"
              >
                Launch App
              </Link>
            </nav>
          </div>
        )}
      </header>

      {/* ---------- HERO SECTION ---------- */}
      <section
        id="home"
        className="relative flex flex-col md:flex-row items-center justify-between min-h-screen pt-24 md:pt-32 px-4 sm:px-6 md:px-16 overflow-hidden"
      >
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 backdrop-blur-md p-2 rounded-full shadow-md hover:bg-white z-30"
          aria-label="Previous Slide"
        >
          <ChevronLeft className="w-6 h-6 text-[#1a3d4d]" />
        </button>

        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 backdrop-blur-md p-2 rounded-full shadow-md hover:bg-white z-30"
          aria-label="Next Slide"
        >
          <ChevronRight className="w-6 h-6 text-[#1a3d4d]" />
        </button>

        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, x: 120 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -120 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="w-full flex flex-col-reverse md:flex-row items-center justify-between gap-10 text-center md:text-left"
          >
            {/* Text Section */}
            <div className="relative z-20 w-full md:w-1/2 flex flex-col justify-center md:pr-10 px-2 sm:px-6 text-center md:text-left mt-6 md:mt-0">
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4 leading-tight">
                {slides[currentSlide].title}
              </h1>
              <p className="text-lg md:text-2xl text-gray-700 mb-8 leading-relaxed">
                {slides[currentSlide].subtitle}
              </p>

              <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                <button className="px-6 py-3 bg-[#1ba89a] text-white rounded-full font-semibold text-lg hover:opacity-90 transition">
                  {slides[currentSlide].cta1}
                </button>
                <a
                  href="https://iresidence.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 border-2 border-[#1ba89a] text-[#1a3d4d] rounded-full font-semibold text-lg hover:bg-[#1ba89a]/10 transition"
                >
                  {slides[currentSlide].cta2}
                </a>
              </div>
            </div>

            {/* Image Section */}
            <div className="relative w-full md:w-1/2 flex justify-center mt-6 md:mt-0">
              <motion.div
                key={slides[currentSlide].image}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.8 }}
              >
                <Image
                  src={slides[currentSlide].image}
                  alt={slides[currentSlide].title}
                  width={500}
                  height={500}
                  className="object-contain w-64 sm:w-72 md:w-[500px] h-auto drop-shadow-xl"
                  priority
                />
              </motion.div>
            </div>
          </motion.div>
        </AnimatePresence>

        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex gap-3 z-20">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentSlide(i)}
              className={`w-3 h-3 rounded-full transition-all ${
                currentSlide === i
                  ? "bg-[#1ba89a] w-6"
                  : "bg-gray-300 hover:bg-gray-400"
              }`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      </section>

      {/* ---------- LIFESTYLE SECTION ---------- */}
      <section id="lifestyle" className="py-20 px-6 bg-gray-50">
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
                  {React.cloneElement(item.icon, { style: { color: mainColor } } as any)}
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

      {/* ---------- JOURNEY SECTION ---------- */}
      <section
        id="journey"
        className="py-20 px-6 bg-[#eaf8f7] flex flex-col md:flex-row items-center justify-center gap-10 max-w-7xl mx-auto rounded-3xl shadow-lg"
      >
        <div className="md:w-1/2 flex flex-col gap-6">
          <h2
            className="text-4xl md:text-5xl font-bold"
            style={{ color: mainColor }}
          >
            Start Your Premium Living Journey Today
          </h2>
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
            Pay rent. Track your records. Book visitors. Move in or move out, all
            from one app.
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

      {/* ---------- FOOTER ---------- */}
      <footer id="contact-info" className="bg-[#1a3d4d] text-white py-16 px-6 mt-20">
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

      <section className="bg-[#15303c] text-white py-4 text-center">
        &copy; {new Date().getFullYear()} i-Residence. All rights reserved.
      </section>
    </div>
  );
};

export default IResidenceLanding;
