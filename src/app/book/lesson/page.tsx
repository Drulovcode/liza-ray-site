import { Suspense } from "react";
import { BookingPage } from "../BookingPage";

const BOOKING_LINK =
  "https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ1VFZl0PYPfX6wQwxI4KS8_2Z5SSdKYs3TrM4u1Vtq-JIXNEohYarlnGhvbf4apYO2QzlvvDLyP";

function LessonPageContent() {
  return (
    <BookingPage
      title="Одно занятие"
      description="Индивидуальное занятие продолжительностью 40–45 минут для работы над конкретным запросом: звук, дикция, темп речи или подготовка к выступлению."
      priceLabel="1 занятие — 10 €"
      highlights={[
        "Краткое уточнение цели перед началом занятия.",
        "Практические упражнения, адаптированные под возраст и уровень.",
        "Домашние рекомендации до следующей встречи.",
      ]}
      prepareList={[
        "Ноутбук или компьютер (желательно, можно телефон/планшет).",
        "Стабильный интернет и тихое помещение.",
        "Наушники и микрофон при онлайн-встрече.",
        "Установленное приложение Zoom или готовность подключиться через браузер.",
      ]}
      bookingLink={BOOKING_LINK}
      srcDefault="pricing_lesson"
    />
  );
}

export default function LessonPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <LessonPageContent />
    </Suspense>
  );
}

