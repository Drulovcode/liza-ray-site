import Link from "next/link";

export default function PrivacyPage() {
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
            Политика конфиденциальности
          </h1>

          <div className="mt-6 space-y-6 text-[0.95rem] leading-relaxed text-[#1F1F2E]">
            <div>
              <h2 className="text-lg font-semibold text-[#1F1F2E] mb-2">
                Какие данные мы собираем
              </h2>
              <p>
                При заполнении форм на сайте мы собираем следующую информацию:
                имя, адрес электронной почты или номер телефона, а также текст
                сообщения (если вы его указали).
              </p>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-[#1F1F2E] mb-2">
                Цель сбора данных
              </h2>
              <p>
                Данные используются исключительно для связи с вами, ответа на
                ваши вопросы и организации консультаций или занятий по
                логопедической терапии.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-[#1F1F2E] mb-2">
                Хранение данных
              </h2>
              <p>
                Ваши данные хранятся в защищённом виде и не передаются третьим
                лицам без вашего согласия.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-[#1F1F2E] mb-2">
                Ваши права
              </h2>
              <p>
                Вы имеете право запросить удаление ваших данных в любое время.
                Для этого напишите на адрес{" "}
                <a
                  href="mailto:lizavetakruch@gmail.com"
                  className="text-[#6B5CFF] hover:underline"
                >
                  lizavetakruch@gmail.com
                </a>
                .
              </p>
            </div>

            <div className="pt-4 border-t border-[#E7E1FF]">
              <p className="text-sm text-[#6B6B85]">
                Последнее обновление: {new Date().getFullYear()} год
              </p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
