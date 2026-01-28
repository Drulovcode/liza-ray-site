import { Suspense } from "react";
import { BookingPage } from "../BookingPage";

const BOOKING_LINK =
  "https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ1VFZl0PYPfX6wQwxI4KS8_2Z5SSdKYs3TrM4u1Vtq-JIXNEohYarlnGhvbf4apYO2QzlvvDLyP";

function PackagePageContent() {
  return (
    <BookingPage
      title="Пакет из 12 занятий"
      description="Структурированный курс из 12 индивидуальных встреч, рассчитанный на устойчивый результат и работу по продуманному плану."
      priceLabel="12 занятий — 108 € (скидка 10%)"
      highlights={[
        "Чёткий план занятий и этапы работы на весь курс.",
        "Регулярная практика и отслеживание прогресса по ключевым навыкам.",
        "Рекомендации по поддержанию результата между встречами.",
      ]}
      prepareList={[
        "Ноутбук или компьютер (желательно, можно телефон/планшет).",
        "Стабильный интернет и тихое помещение.",
        "Наушники и микрофон при онлайн-встрече.",
        "Установленное приложение Zoom или готовность подключиться через браузер.",
      ]}
      bookingLink={BOOKING_LINK}
      srcDefault="pricing_package"
    />
  );
}

export default function PackagePage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <PackagePageContent />
    </Suspense>
  );
}

