import Link from "next/link";

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-[radial-gradient(1200px_600px_at_20%_10%,#F4F1FF_0%,transparent_60%),radial-gradient(900px_500px_at_80%_30%,#EFEAFF_0%,transparent_55%),linear-gradient(to_bottom,#FBFAFF_0%,#F5F2FF_45%,#FBFAFF_100%)] text-[#1F1F2E]">
      <div className="mx-auto max-w-4xl px-4 py-10 md:py-14">
        <Link
          href="/"
          className="text-[0.85rem] text-[#6B6B85] underline-offset-4 hover:underline"
        >
          ← Назад на главную
        </Link>

        <section className="mt-6 rounded-2xl border border-[#E7E1FF] bg-white/70 p-6 shadow-[0_18px_50px_rgba(108,92,255,0.12)] backdrop-blur-md md:p-8">
          <h1 className="text-2xl font-semibold tracking-[-0.03em] text-[#1F1F2E] md:text-[1.9rem]">
            Условия использования
          </h1>

          <div className="mt-6 space-y-6 text-[0.95rem] leading-relaxed text-[#1F1F2E]">
            <div>
              <h2 className="text-lg font-semibold text-[#1F1F2E] mb-2">
                Характер услуг
              </h2>
              <p>
                Предоставляемые услуги носят образовательно-консультативный
                характер в области логопедической терапии и не являются
                экстренной медицинской помощью.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-[#1F1F2E] mb-2">
                Результаты
              </h2>
              <p>
                Результаты работы зависят от индивидуальных факторов: возраста,
                мотивации, регулярности занятий и выполнения домашних заданий.
                Гарантии конкретных сроков достижения результатов не
                предоставляются.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-[#1F1F2E] mb-2">
                Ответственность клиента
              </h2>
              <p>
                Клиент несёт ответственность за регулярное посещение занятий и
                выполнение рекомендованных домашних упражнений между встречами.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-[#1F1F2E] mb-2">
                Коммуникация
              </h2>
              <p>
                Основные каналы связи: электронная почта и телефон. Вопросы
                между занятиями приветствуются и получают ответ в разумные
                сроки.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-[#1F1F2E] mb-2">
                Отмена и перенос занятий
              </h2>
              <p>
                Просьба уведомлять об отмене или переносе занятий заранее.
                Детали переноса и отмены обсуждаются индивидуально.
              </p>
            </div>

            <div className="pt-4 border-t border-[#E7E1FF]">
              <p className="text-sm text-[#6B6B85]">
                По вопросам, связанным с условиями использования, обращайтесь
                на{" "}
                <a
                  href="mailto:lizavetakruch@gmail.com"
                  className="text-[#6B5CFF] hover:underline"
                >
                  lizavetakruch@gmail.com
                </a>
                .
              </p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
