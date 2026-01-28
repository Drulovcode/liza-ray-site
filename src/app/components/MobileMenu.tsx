"use client";

import { useState, useEffect } from "react";

const BOOKING_URL = "https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ1VFZl0PYPfX6wQwxI4KS8_2Z5SSdKYs3TrM4u1Vtq-JIXNEohYarlnGhvbf4apYO2QzlvvDLyP";

export function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => {
    setIsOpen(false);
  };

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const href = e.currentTarget.getAttribute("href");
    if (href && href.startsWith("#")) {
      e.preventDefault();
      const targetId = href.substring(1);
      const element = document.getElementById(targetId);
      if (element) {
        // Add offset for fixed header
        const headerHeight = 73;
        const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
        const offsetPosition = elementPosition - headerHeight;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });
      }
    }
    closeMenu();
  };

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  // Handle Esc key
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        closeMenu();
      }
    };
    document.addEventListener("keydown", handleEsc);
    return () => document.removeEventListener("keydown", handleEsc);
  }, [isOpen]);

  return (
    <>
      {/* Hamburger button */}
      <button
        type="button"
        onClick={toggleMenu}
        className="relative z-[60] flex flex-col items-center justify-center gap-1.5 p-2 md:hidden"
        aria-label="Toggle menu"
        aria-expanded={isOpen}
        style={{ pointerEvents: "auto" }}
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

      {/* Dropdown panel */}
      {isOpen && (
        <>
          {/* Backdrop overlay - closes menu on click */}
          <div
            className="fixed inset-0 z-[55] bg-black/20 md:hidden"
            onClick={closeMenu}
            aria-hidden="true"
            style={{ pointerEvents: "auto", top: "73px" }}
          />
          {/* Dropdown panel */}
          <nav
            className="fixed left-0 right-0 z-[56] bg-white shadow-lg md:hidden"
            style={{ top: "73px", pointerEvents: "auto" }}
          >
            <div className="rounded-b-2xl border-b border-[#E7E1FF]">
              <div className="flex flex-col">
                <a
                  href="#services"
                  onClick={handleNavClick}
                  className="px-6 py-4 text-base font-medium text-[#1F1F2E] transition hover:bg-[#F7F5FF]"
                  style={{ pointerEvents: "auto" }}
                >
                  Услуги
                </a>
                <a
                  href="#results"
                  onClick={handleNavClick}
                  className="px-6 py-4 text-base font-medium text-[#1F1F2E] transition hover:bg-[#F7F5FF]"
                  style={{ pointerEvents: "auto" }}
                >
                  Результаты
                </a>
                <a
                  href="#reviews"
                  onClick={handleNavClick}
                  className="px-6 py-4 text-base font-medium text-[#1F1F2E] transition hover:bg-[#F7F5FF]"
                  style={{ pointerEvents: "auto" }}
                >
                  Отзывы
                </a>
                <a
                  href="#faq"
                  onClick={handleNavClick}
                  className="px-6 py-4 text-base font-medium text-[#1F1F2E] transition hover:bg-[#F7F5FF]"
                  style={{ pointerEvents: "auto" }}
                >
                  Вопросы
                </a>
                <a
                  href="#contact"
                  onClick={handleNavClick}
                  className="px-6 py-4 text-base font-medium text-[#1F1F2E] transition hover:bg-[#F7F5FF]"
                  style={{ pointerEvents: "auto" }}
                >
                  Контакты
                </a>
                <div className="border-t border-[#E7E1FF] p-4">
                  <a
                    href={BOOKING_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={closeMenu}
                    className="flex w-full items-center justify-center rounded-full bg-[#6B5CFF] px-6 py-3.5 text-base font-semibold text-white shadow-md shadow-[0_14px_36px_rgba(107,92,255,0.32)] transition hover:bg-[#5747FF]"
                    style={{ pointerEvents: "auto" }}
                  >
                    Записаться
                  </a>
                </div>
              </div>
            </div>
          </nav>
        </>
      )}
    </>
  );
}
