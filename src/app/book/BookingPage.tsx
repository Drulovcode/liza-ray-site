"use client";

import { useEffect, useMemo } from "react";
import { useSearchParams, usePathname } from "next/navigation";
import Link from "next/link";
import { track } from "../analytics";

type BookingPageViewProps = {
  title: string;
  description: string;
  priceLabel?: string;
  highlights: string[];
  prepareList: string[];
  bookingHref: string;
  onBookingClick: () => void;
};

function BookingPageView({
  title,
  description,
  priceLabel,
  highlights,
  prepareList,
  bookingHref,
  onBookingClick,
}: BookingPageViewProps) {

  return (
    <main className="min-h-screen bg-[radial-gradient(1200px_600px_at_20%_10%,#F4F1FF_0%,transparent_60%),radial-gradient(900px_500px_at_80%_30%,#EFEAFF_0%,transparent_55%),linear-gradient(to_bottom,#FBFAFF_0%,#F5F2FF_45%,#FBFAFF_100%)] text-[#1F1F2E]">
      <div className="mx-auto max-w-6xl px-4 py-10 md:py-14">
        <Link
          href="/"
          className="text-[0.85rem] text-[#6B6B85] underline-offset-4 hover:underline"
        >
          ← Назад на главную
        </Link>

        <section className="mt-6 rounded-2xl border border-[#E7E1FF] bg-white/70 p-6 shadow-[0_18px_50px_rgba(108,92,255,0.12)] backdrop-blur-md md:p-8">
          <header className="md:flex md:items-start md:justify-between md:gap-8">
            <div className="md:flex-1">
              <h1 className="text-2xl font-semibold tracking-[-0.03em] text-[#1F1F2E] md:text-[1.9rem]">
                {title}
              </h1>
              {priceLabel && (
                <p className="mt-1 text-sm font-medium text-[#6B6B85]">
                  {priceLabel}
                </p>
              )}
              <p className="mt-3 text-[0.95rem] leading-relaxed text-[#1F1F2E]">
                {description}
              </p>
            </div>

            <div className="mt-5 flex md:mt-0 md:w-64 md:flex-col md:items-end">
                <button
                type="button"
                onClick={onBookingClick}
                className="inline-flex w-full items-center justify-center rounded-full bg-[#6B5CFF] px-5 py-2.5 text-sm font-medium text-white shadow-md shadow-[0_14px_36px_rgba(107,92,255,0.32)] transition hover:bg-[#5747FF] md:w-auto"
              >
                Перейти к записи
              </button>
            </div>
          </header>

          {/* Mobile CTA buttons - shown above content on mobile */}
          <div className="mt-8 flex flex-col gap-3 sm:hidden">
            <a
              href={bookingHref}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => {
                e.preventDefault();
                onBookingClick();
              }}
              className="flex w-full items-center justify-center rounded-full bg-[#6B5CFF] px-6 py-3.5 text-base font-semibold text-white shadow-md shadow-[0_14px_36px_rgba(107,92,255,0.32)] transition hover:bg-[#5747FF]"
            >
              Записаться
            </a>
            <a
              href={bookingHref}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => {
                e.preventDefault();
                onBookingClick();
              }}
              className="flex w-full items-center justify-center rounded-full border-2 border-[#6B5CFF] bg-white px-6 py-3.5 text-base font-semibold text-[#6B5CFF] transition hover:bg-[#EFECFF]"
            >
              Выбрать время
            </a>
          </div>

          <div className="mt-8 grid gap-8 md:grid-cols-2">
            <div>
              <h2 className="text-sm font-semibold uppercase tracking-[0.16em] text-[#6B6B85]">
                Как проходит
              </h2>
              <ul className="mt-3 space-y-2 text-[0.95rem] leading-relaxed text-[#1F1F2E]">
                {highlights.map((item) => (
                  <li key={item}>• {item}</li>
                ))}
              </ul>

              <h2 className="mt-6 text-sm font-semibold uppercase tracking-[0.16em] text-[#6B6B85]">
                Что подготовить
              </h2>
              <ul className="mt-3 space-y-2 text-[0.95rem] leading-relaxed text-[#1F1F2E]">
                {prepareList.map((item) => (
                  <li key={item}>• {item}</li>
                ))}
              </ul>
            </div>

            <div>
              <div className="rounded-2xl border border-[#E7E1FF] bg-white/70 p-4 shadow-[0_18px_50px_rgba(108,92,255,0.12)] backdrop-blur-md">
                <p className="text-xs text-[#6B6B85]">
                  Если календарь не отображается — нажмите кнопку записи выше.
                </p>
                <div className="mt-4 flex flex-col gap-3 sm:mt-6">
                  <a
                    href={bookingHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => {
                      e.preventDefault();
                      onBookingClick();
                    }}
                    className="flex w-full items-center justify-center rounded-full bg-[#6B5CFF] px-6 py-3.5 text-base font-semibold text-white shadow-md shadow-[0_14px_36px_rgba(107,92,255,0.32)] transition hover:bg-[#5747FF] sm:w-auto sm:px-5 sm:py-2.5 sm:text-sm"
                  >
                    Записаться
                  </a>
                  <a
                    href={bookingHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => {
                      e.preventDefault();
                      onBookingClick();
                    }}
                    className="flex w-full items-center justify-center rounded-full border-2 border-[#6B5CFF] bg-white px-6 py-3.5 text-base font-semibold text-[#6B5CFF] transition hover:bg-[#EFECFF] sm:w-auto sm:px-5 sm:py-2.5 sm:text-sm"
                  >
                    Выбрать время
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}

type BookingPageProps = {
  title: string;
  description: string;
  priceLabel?: string;
  highlights: string[];
  prepareList: string[];
  bookingLink: string;
  srcDefault: string;
  // Optional props to override hooks (for Suspense boundary compatibility)
  src?: string;
  bookingHref?: string;
  pathname?: string;
  onBookingClick?: () => void;
};

export function BookingPage({
  title,
  description,
  priceLabel,
  highlights,
  prepareList,
  bookingLink,
  srcDefault,
  src: srcProp,
  bookingHref: bookingHrefProp,
  pathname: pathnameProp,
  onBookingClick: onBookingClickProp,
}: BookingPageProps) {
  // If all required props are provided, use them directly without hooks
  if (srcProp !== undefined && bookingHrefProp !== undefined && pathnameProp !== undefined && onBookingClickProp !== undefined) {
    return (
      <BookingPageView
        title={title}
        description={description}
        priceLabel={priceLabel}
        highlights={highlights}
        prepareList={prepareList}
        bookingHref={bookingHrefProp}
        onBookingClick={onBookingClickProp}
      />
    );
  }

  // Otherwise, use hooks (for backward compatibility with other pages)
  const searchParams = useSearchParams();
  const pathnameHook = usePathname();

  const src = useMemo(() => {
    const fromQuery = searchParams?.get("src");
    return fromQuery && fromQuery.trim().length > 0 ? fromQuery : srcDefault;
  }, [searchParams, srcDefault]);

  const bookingHref = useMemo(() => {
    const hasQuery = bookingLink.includes("?");
    const separator = hasQuery ? "&" : "?";
    return `${bookingLink}${separator}src=${encodeURIComponent(src)}`;
  }, [bookingLink, src]);

  const pathname = pathnameProp ?? pathnameHook;

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
    <BookingPageView
      title={title}
      description={description}
      priceLabel={priceLabel}
      highlights={highlights}
      prepareList={prepareList}
      bookingHref={bookingHref}
      onBookingClick={handleClick}
    />
  );
}

