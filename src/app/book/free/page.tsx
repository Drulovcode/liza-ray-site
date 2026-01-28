import { BookingPage } from "../BookingPage";

const BOOKING_LINK =
  "https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ1VFZl0PYPfX6wQwxI4KS8_2Z5SSdKYs3TrM4u1Vtq-JIXNEohYarlnGhvbf4apYO2QzlvvDLyP";

export default function FreeConsultPage() {
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
      srcDefault="pricing_free"
    />
  );
}

