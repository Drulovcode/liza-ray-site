"use client";

import { useEffect, useMemo } from "react";
import { useSearchParams, usePathname } from "next/navigation";
import { BookingPage } from "../BookingPage";
import { track } from "../../analytics";

const BOOKING_LINK =
  "https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ1VFZl0PYPfX6wQwxI4KS8_2Z5SSdKYs3TrM4u1Vtq-JIXNEohYarlnGhvbf4apYO2QzlvvDLyP";

export function FreeInner() {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const srcDefault = "pricing_free";

  const src = useMemo(() => {
    const fromQuery = searchParams?.get("src");
    return fromQuery && fromQuery.trim().length > 0 ? fromQuery : srcDefault;
  }, [searchParams]);

  const bookingHref = useMemo(() => {
    const hasQuery = BOOKING_LINK.includes("?");
    const separator = hasQuery ? "&" : "?";
    return `${BOOKING_LINK}${separator}src=${encodeURIComponent(src)}`;
  }, [src]);

  useEffect(() => {
    try {
      window.localStorage.setItem("booking_src", src);
    } catch {
      // ignore storage errors
    }
    // eslint-disable-next-line no-console
    console.log(`booking_src=${src}`);
    track("booking_page_view", { src, path: pathname });
  }, [pathname, src]);

  const handleClick = () => {
    track("booking_click", { src, path: pathname, link: bookingHref });
    window.open(bookingHref, "_blank", "noopener,noreferrer");
  };

  return (
    <BookingPage
      title="Бесплатная диагностическая консультация"
      description="Первая встреча, на которой мы разберём вашу ситуацию, оценим текущий уровень речи и обсудим возможные форматы работы."
      priceLabel="0 € — без обязательств, 30–40 минут онлайн."
      highlights={[
        "Вы рассказываете о задаче и ожиданиях от занятий.",
        "Провожу первичную диагностику речи и даю обратную связь.",
        "Предлагаю план работы и рекомендации по дальнейшим шагам.",
      ]}
      prepareList={[
        "Ноутбук или компьютер (желательно, можно телефон/планшет).",
        "Стабильный интернет и тихое помещение.",
        "Наушники и микрофон при онлайн-встрече.",
        "Установленное приложение Zoom или готовность подключиться через браузер.",
      ]}
      bookingLink={BOOKING_LINK}
      srcDefault={srcDefault}
      src={src}
      bookingHref={bookingHref}
      pathname={pathname}
      onBookingClick={handleClick}
    />
  );
}
