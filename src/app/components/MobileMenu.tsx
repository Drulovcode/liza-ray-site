"use client";

import { useState } from "react";

const BOOKING_URL = "https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ1VFZl0PYPfX6wQwxI4KS8_2Z5SSdKYs3TrM4u1Vtq-JIXNEohYarlnGhvbf4apYO2QzlvvDLyP";

export function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const href = e.currentTarget.getAttribute("href");
    if (href && href.startsWith("#")) {
      e.preventDefault();
      const targetId = href.substring(1);
      const element = document.getElementById(targetId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
    setIsOpen(false);
    // Ensure body scroll is not locked
    document.body.style.overflow = "";
  };

  const toggleMenu = () => {
    const newState = !isOpen;
    setIsOpen(newState);
    // Prevent body scroll when menu is open
    document.body.style.overflow = newState ? "hidden" : "";
  };

  return (
    <>
      {/* Hamburger button */}
      <button
        type="button"
        onClick={toggleMenu}
        className="relative z-30 flex flex-col items-center justify-center gap-1.5 p-2 md:hidden"
        aria-label="Toggle menu"
        aria-expanded={isOpen}
      >
        <span
          className={`h-0.5 w-6 bg-[#1F1F2E] transition-all ${
            isOpen ? "translate-y-2 rotate-45" : ""
          }`}
        />
        <span
          className={`h-0.5 w-6 bg-[#1F1F2E] transition-all ${isOpen ? "opacity-0" : ""}`}
        />
        <span
          className={`h-0.5 w-6 bg-[#1F1F2E] transition-all ${
            isOpen ? "-translate-y-2 -rotate-45" : ""
          }`}
        />
      </button>

      {/* Mobile menu overlay */}
      {isOpen && (
        <>
          <div
            className="fixed inset-0 z-20 bg-black/50 md:hidden"
            onClick={toggleMenu}
            aria-hidden="true"
          />
          <nav
            className="fixed inset-y-0 right-0 z-20 w-64 bg-white shadow-xl md:hidden"
            style={{ top: "73px" }}
          >
            <div className="flex flex-col p-4">
              <a
                href="#services"
                onClick={handleNavClick}
                className="px-4 py-3 text-base font-medium text-[#1F1F2E] transition hover:bg-[#F7F5FF]"
              >
                Услуги
              </a>
              <a
                href="#results"
                onClick={handleNavClick}
                className="px-4 py-3 text-base font-medium text-[#1F1F2E] transition hover:bg-[#F7F5FF]"
              >
                Результаты
              </a>
              <a
                href="#reviews"
                onClick={handleNavClick}
                className="px-4 py-3 text-base font-medium text-[#1F1F2E] transition hover:bg-[#F7F5FF]"
              >
                Отзывы
              </a>
              <a
                href="#faq"
                onClick={handleNavClick}
                className="px-4 py-3 text-base font-medium text-[#1F1F2E] transition hover:bg-[#F7F5FF]"
              >
                Вопросы
              </a>
              <a
                href="#contact"
                onClick={handleNavClick}
                className="px-4 py-3 text-base font-medium text-[#1F1F2E] transition hover:bg-[#F7F5FF]"
              >
                Контакты
              </a>
              <a
                href={BOOKING_URL}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsOpen(false)}
                className="mx-4 mt-4 rounded-full border border-[#6B5CFF] bg-white px-4 py-2.5 text-center text-sm font-medium text-[#6B5CFF] transition hover:bg-[#EFECFF]"
              >
                Записаться
              </a>
            </div>
          </nav>
        </>
      )}
    </>
  );
}
