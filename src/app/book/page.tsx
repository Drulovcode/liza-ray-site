import { BookingPage } from "./BookingPage";

const BOOKING_LINK =
  "https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ1VFZl0PYPfX6wQwxI4KS8_2Z5SSdKYs3TrM4u1Vtq-JIXNEohYarlnGhvbf4apYO2QzlvvDLyP";

export default function BookPage() {
  return (
    <BookingPage
      title="Запись на занятие"
      description="Выберите удобное время для онлайн или офлайн занятия по логопедической терапии. После записи вы получите подтверждение и ссылку на встречу."
      priceLabel="Оплата по выбранному формату (консультация, разовое занятие или пакет)."
      highlights={[
        "Короткое уточнение вашей задачи в начале встречи.",
        "Основная часть занятия с практическими упражнениями.",
        "Рекомендации по частоте и формату дальнейшей работы.",
      ]}
      prepareList={[
        "Ноутбук или компьютер (желательно, можно телефон/планшет).",
        "Стабильный интернет и тихое помещение.",
        "Наушники и микрофон при онлайн-встрече.",
        "Установленное приложение Zoom или готовность подключиться через браузер.",
      ]}
      bookingLink={BOOKING_LINK}
      srcDefault="direct"
    />
  );
}

