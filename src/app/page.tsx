import Image from "next/image";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white text-black">
      {/* Header */}
      <header className="sticky top-0 z-20 border-b border-slate-200 bg-white/80 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 md:py-5">
          <a href="/" className="flex items-center gap-3 transition-opacity hover:opacity-80">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/30 bg-[radial-gradient(circle_at_center,#C9B6FF_0%,#6D4BFF_100%)] shadow-[0_2px_8px_rgba(109,75,255,0.3),0_4px_16px_rgba(109,75,255,0.2)] overflow-hidden">
              <span
                style={{
                  display: 'block',
                  height: '100%',
                  width: '100%',
                  backgroundImage: "url('/logoL.jpg')",
                  backgroundSize: 'cover',
                  backgroundPosition: 'center center',
                  backgroundRepeat: 'no-repeat',
                }}
              ></span>
            </div>
            <div className="hidden flex-col sm:flex">
              <span className="text-base font-semibold leading-tight tracking-[-0.02em] text-[#1F1F2E]">
                Liza Ray
              </span>
              <span className="text-xs font-medium leading-tight text-[#6B6B85]">
                Логопед-дефектолог
              </span>
            </div>
          </a>
          <nav className="hidden items-center gap-7 md:flex">
            <a className="text-sm text-[#64748B] transition hover:text-[#0F172A]" href="#services">
              Услуги
            </a>
            <a className="text-sm text-[#64748B] transition hover:text-[#0F172A]" href="#results">
              Результаты
            </a>
            <a className="text-sm text-[#64748B] transition hover:text-[#0F172A]" href="#reviews">
              Отзывы
            </a>
            <a className="text-sm text-[#64748B] transition hover:text-[#0F172A]" href="#faq">
              Вопросы
            </a>
            <a className="text-sm text-[#64748B] transition hover:text-[#0F172A]" href="#contact">
              Контакты
            </a>
          </nav>
          <a
            href="/book?src=header"
            className="hidden rounded-full border border-[#4AA3C8] px-4 py-2 text-sm font-medium text-[#4AA3C8] md:inline-flex"
          >
            Записаться
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="mx-auto max-w-6xl bg-gradient-to-b from-[#F4F2FF] via-[#EEF0FF] to-[#FFFFFF] px-4 pb-12 pt-10 md:pb-18 md:pt-16">
        <div className="grid items-start gap-10 md:grid-cols-2">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-[#E7E3FF] px-3 py-1 text-[0.7rem] font-medium uppercase tracking-[0.12em] text-[#4B3FFF]">
              Онлайн • взрослые и дети
            </div>
            <h1 className="mt-4 text-4xl font-semibold leading-tight tracking-[-0.03em] text-[#1F1F2E] md:text-[2.8rem]">
              Логопед-дефектолог для уверенной речи
            </h1>
            <p className="mt-4 text-[0.98rem] leading-relaxed text-[#1F1F2E] md:max-w-xl">
              Помогаю поставить звуки, улучшить дикцию и темп речи, подготовиться
              к школе и выступлениям. План занятий понятный, домашние задания —
              посильные, прогресс — измеримый.
            </p>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <a
                href="/book?src=hero"
                className="w-full rounded-full bg-[#6B5CFF] px-6 py-3 text-center text-sm font-medium text-white shadow-md shadow-[0_14px_36px_rgba(107,92,255,0.35)] transition hover:bg-[#5747FF] sm:w-auto"
              >
                Записаться на консультацию
              </a>
              <a
                href="#services"
                className="w-full rounded-full border border-[#6B5CFF] px-6 py-3 text-center text-sm font-medium text-[#6B5CFF] transition hover:bg-[#EFECFF] sm:w-auto"
              >
                Посмотреть услуги
              </a>
            </div>

            <div className="mt-8 grid grid-cols-3 gap-4 text-left">
              <div className="rounded-2xl border border-[#E7E1FF] bg-white/70 px-4 py-4 shadow-[0_18px_50px_rgba(108,92,255,0.12)] backdrop-blur-md">
                <div className="text-2xl font-semibold text-[#1F1F2E]">300+</div>
                <div className="mt-1 text-[0.7rem] font-medium uppercase tracking-[0.12em] text-[#64748B]">
                  учеников
                </div>
              </div>
              <div className="rounded-2xl border border-[#E7E1FF] bg-white/70 px-4 py-4 shadow-[0_18px_50px_rgba(108,92,255,0.12)] backdrop-blur-md">
                <div className="text-2xl font-semibold text-[#1F1F2E]">98%</div>
                <div className="mt-1 text-[0.7rem] font-medium uppercase tracking-[0.12em] text-[#64748B]">
                  довольных
                </div>
              </div>
              <div className="rounded-2xl border border-[#E7E1FF] bg-white/70 px-4 py-4 shadow-[0_18px_50px_rgba(108,92,255,0.12)] backdrop-blur-md">
                <div className="text-2xl font-semibold text-[#1F1F2E]">5+</div>
                <div className="mt-1 text-[0.7rem] font-medium uppercase tracking-[0.12em] text-[#64748B]">
                  лет опыта
                </div>
              </div>
            </div>
          </div>

            <div className="rounded-2xl border border-[#E7E1FF] bg-white/70 p-5 shadow-[0_18px_50px_rgba(108,92,255,0.12)] backdrop-blur-md md:p-7">
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl border border-[#E7E1FF] bg-white/70 shadow-[0_18px_50px_rgba(108,92,255,0.12)] backdrop-blur-md">
              <Image
                src="/логопедсребнком.jpg"
                alt="Логопед занимается с клиентом"
                fill
                className="object-cover object-top"
                sizes="(min-width: 768px) 480px, 100vw"
              />
            </div>
            <div className="mt-4">
              <div className="text-sm font-semibold text-[#0F172A]">
                Что будет на старте
              </div>
              <ul className="mt-2 space-y-2 text-[0.9rem] text-[#64748B]">
                <li>• Быстрая диагностика и цели на 4 недели</li>
                <li>• План занятий и домашние упражнения</li>
                <li>• Отслеживание прогресса (до/после)</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section
        id="services"
        className="border-t border-[#E7E1FF]/60 bg-transparent"
      >
        <div className="clinic-section-inner">
          <h2 className="clinic-section-heading font-semibold text-[#1F1F2E]">
            Услуги
          </h2>
          <p className="clinic-section-intro mt-3 text-[#6B6B85]">
            Выберите направление — подберём формат и интенсивность под ваш запрос.
          </p>

          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {[
              {
                title: "Постановка звуков",
                desc: "Коррекция произношения, автоматизация в речи.",
              },
              {
                title: "Дикция и артикуляция",
                desc: "Чёткая речь, темп, дыхание, уверенная подача.",
              },
              {
                title: "Подготовка к школе",
                desc: "Фонематический слух, чтение, память, мышление, внимание.",
              },
              {
                title: "Заикание / темп речи",
                desc: "Мягкая коррекция, техники дыхания и ритма.",
              },
              {
                title: "ОНР / ЗРР",
                desc: "Запуск речи, расширение словаря, грамматика, связная речь.",
              },
              {
                title: "Консультация",
                desc: "Диагностика, план, рекомендации.",
              },
            ].map((s) => (
              <div
                key={s.title}
                className="rounded-2xl border border-[#E7E1FF] bg-white/70 p-5 shadow-[0_18px_50px_rgba(108,92,255,0.12)] backdrop-blur-md md:p-6"
              >
                <div className="h-9 w-9 rounded-xl bg-[#6B5CFF]/10 ring-1 ring-[#6B5CFF]/15" />
                <h3 className="mt-4 text-[0.98rem] font-semibold text-[#1F1F2E]">
                  {s.title}
                </h3>
                <p className="mt-2 text-[0.9rem] leading-relaxed text-[#1F1F2E]">
                  {s.desc}
                </p>
                <a
                  href="#pricing"
                  className="mt-4 inline-flex text-[0.85rem] font-medium text-[#6B5CFF] underline underline-offset-4"
                >
                  Узнать стоимость
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Results */}
      <section id="results" className="border-t border-[#E7E1FF]/60 bg-transparent">
        <div className="clinic-section-inner">
          <div className="md:flex md:items-start md:gap-10">
            <div className="md:flex-1">
              <h2 className="clinic-section-heading font-semibold text-[#1F1F2E]">
                Как выглядит прогресс
              </h2>
              <div className="mt-8 grid gap-5 md:grid-cols-3">
                {[
                  {
                    title: "Понятный план",
                    desc: "Цели по неделям + упражнения на дом.",
                  },
                  {
                    title: "Измеримые шаги",
                    desc: "Фиксируем «до/после» и отмечаем улучшения.",
                  },
                  {
                    title: "Поддержка",
                    desc: "Отвечаю на вопросы между занятиями.",
                  },
                ].map((c) => (
                  <div
                    key={c.title}
                    className="rounded-2xl border border-[#E7E1FF] bg-white/70 p-6 shadow-[0_18px_50px_rgba(108,92,255,0.12)] backdrop-blur-md"
                  >
                    <div className="text-[1rem] font-semibold text-[#1F1F2E]">
                      {c.title}
                    </div>
                    <div className="mt-2 text-[0.9rem] leading-relaxed text-[#1F1F2E]">
                      {c.desc}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 w-full md:mt-0 md:w-[320px]">
              <div className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-[#E7E1FF] bg-white/70 shadow-[0_18px_50px_rgba(108,92,255,0.12)] backdrop-blur-md">
                <Image
                  src="/Лизачка.jpg"
                  alt="Люди, прошедшие курс логопедической терапии"
                  fill
                  className="object-cover"
                  sizes="320px"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="border-t border-[#E7E1FF]/60 bg-transparent">
        <div className="clinic-section-inner">
          <h2 className="clinic-section-heading font-semibold text-[#1F1F2E]">
            Стоимость
          </h2>
          <p className="clinic-section-intro mt-3 text-[#6B6B85]">
            Прозрачные цены без скрытых условий. Выберите удобный формат.
          </p>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {/* Free consultation */}
            <div className="rounded-2xl border border-[#E7E1FF] bg-white/70 p-6 shadow-[0_18px_50px_rgba(108,92,255,0.12)] backdrop-blur-md">
              <h3 className="text-[1rem] font-semibold text-[#1F1F2E]">
                Бесплатная консультация
              </h3>
              <p className="mt-2 text-[0.9rem] leading-relaxed text-[#1F1F2E]">
                Первая встреча для диагностики и плана работы.
              </p>
              <div className="mt-6 text-3xl font-semibold text-[#1F1F2E]">€0</div>
              <ul className="mt-4 space-y-2 text-[0.9rem] text-[#6B6B85]">
                <li>• Оценка речи</li>
                <li>• Составление плана работы</li>
                <li>• Определение примерных сроков работы</li>
              </ul>
              <a
                href="/book/free?src=pricing_free"
                className="mt-6 inline-flex w-full justify-center rounded-full border border-[#6B5CFF] px-5 py-2.5 text-sm font-medium text-[#6B5CFF] transition hover:bg-[#EFECFF]"
              >
                Записаться
              </a>
            </div>

            {/* Single lesson */}
            <div className="rounded-2xl border border-[#E7E1FF] bg-white/70 p-6 shadow-[0_18px_50px_rgba(108,92,255,0.12)] backdrop-blur-md">
              <h3 className="text-[1rem] font-semibold text-[#1F1F2E]">
                Одно занятие
              </h3>
              <p className="mt-2 text-[0.9rem] leading-relaxed text-[#1F1F2E]">
                Индивидуальное занятие 30–35 минут.
              </p>
              <div className="mt-6 text-3xl font-semibold text-[#1F1F2E]">€10</div>
              <ul className="mt-4 space-y-2 text-[0.9rem] text-[#6B6B85]">
                <li>• Индивидуальный подход</li>
                <li>• Домашнее задание</li>
                <li>• Ответы на возникающие вопросы во внеучебное время</li>
              </ul>
              <a
                href="/book/lesson?src=pricing_lesson"
                className="mt-6 inline-flex w-full justify-center rounded-full border border-[#6B5CFF] px-5 py-2.5 text-sm font-medium text-[#6B5CFF] transition hover:bg-[#EFECFF]"
              >
                Записаться
              </a>
            </div>

            {/* 12-lesson package */}
            <div className="relative rounded-2xl border border-[#E7E1FF] bg-white/70 p-6 shadow-[0_18px_50px_rgba(108,92,255,0.12)] backdrop-blur-md">
              <div className="absolute -top-3 right-4 rounded-full bg-[#C2B8FF] px-3 py-1 text-xs font-medium text-[#3A2E73]">
                −10%
              </div>
              <h3 className="text-[1rem] font-semibold text-[#1F1F2E]">
                Пакет из 12 занятий
              </h3>
              <p className="mt-2 text-[0.9rem] leading-relaxed text-[#1F1F2E]">
                Лучший вариант для стабильного результата.
              </p>
              <div className="mt-6">
                <div className="text-sm text-[#6B6B85] line-through">€120</div>
                <div className="text-3xl font-semibold text-[#1F1F2E]">€108</div>
                <div className="text-sm text-[#1F1F2E]">
                  Скидка 10%, €9 за занятие
                </div>
              </div>
              <ul className="mt-4 space-y-2 text-[0.9rem] text-[#6B6B85]">
                <li>• Индивидуальный план</li>
                <li>• Домашние задания</li>
                <li>• Отслеживание прогресса</li>
               
              </ul>
              <a
                href="/book/package?src=pricing_package"
                className="mt-6 inline-flex w-full justify-center rounded-full bg-[#6B5CFF] px-5 py-2.5 text-sm font-medium text-white transition hover:bg-[#5747FF]"
              >
                Записаться
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section id="reviews" className="border-t border-[#E7E1FF]/60 bg-transparent">
        <div className="clinic-section-inner">
          <h2 className="clinic-section-heading font-semibold text-[#1F1F2E]">
            Отзывы
          </h2>
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {[
              {
                name: "Анна",
                text: "Сын начал выговаривать «р» уже через месяц. Очень понятные домашние задания.",
              },
              {
                name: "Максим",
                text: "Прокачали дикцию для выступлений. Появилась уверенность и голос звучит лучше.",
              },
              {
                name: "Екатерина",
                text: "Быстрая диагностика и понятная обратная связь. Доступно объяснили, как и над чем нужно работать",
              },
            ].map((r) => (
              <div
                key={r.name}
                className="rounded-2xl border border-[#E7E1FF] bg-white/70 p-6 shadow-[0_18px_50px_rgba(108,92,255,0.12)] backdrop-blur-md"
              >
                <div className="text-sm font-semibold text-[#1F1F2E]">
                  {r.name}
                </div>
                <p className="mt-3 text-[0.9rem] leading-relaxed text-[#1F1F2E]">
                  {r.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="border-t border-[#E7E1FF]/60 bg-transparent">
        <div className="clinic-section-inner">
          <h2 className="clinic-section-heading font-semibold text-[#1F1F2E]">
            Вопросы
          </h2>
          <div className="mt-8 grid gap-5 md:grid-cols-2">
            {[
              {
                q: "Сколько нужно занятий?",
                a: "Зависит от задачи. После консультации дам оценку по срокам и частоте.",
              },
              {
                q: "Онлайн работает?",
                a: "Да. Для многих задач онлайн формат отлично подходит, особенно при регулярности.",
              },
              {
                q: "Что нужно для занятий?",
                a: "Тишина, камера/микрофон (для онлайн) и 10–15 минут на домашние задания.",
              },
              {
                q: "Есть ли разовые консультации?",
                a: "Да. Можно прийти за диагностикой, планом и набором упражнений.",
              },
            ].map((f) => (
              <div
                key={f.q}
                className="rounded-2xl border border-[#E7E1FF] bg-white/70 p-6 shadow-[0_18px_50px_rgba(108,92,255,0.12)] backdrop-blur-md"
              >
                <div className="text-sm font-semibold text-[#1F1F2E]">
                  {f.q}
                </div>
                <div className="mt-2 text-[0.9rem] leading-relaxed text-[#1F1F2E]">
                  {f.a}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="border-t border-[#E7E1FF]/60 bg-transparent">
        <div className="clinic-section-inner">
          <h2 className="clinic-section-heading font-semibold text-[#1F1F2E]">
            Контакты
          </h2>
          <p className="clinic-section-intro mt-3 text-[#6B6B85]">
            Свяжитесь со мной — отвечу и помогу подобрать формат занятий.
          </p>

          <div className="mt-8 grid gap-6 md:grid-cols-3">
            <div className="rounded-2xl border border-[#E7E1FF] bg-white/70 p-6 shadow-[0_18px_50px_rgba(108,92,255,0.12)] backdrop-blur-md">
              <div className="text-sm font-semibold text-[#1F1F2E] mb-3">Email</div>
              <a
                href="mailto:lizavetakruch@gmail.com"
                className="text-[0.95rem] text-[#6B5CFF] hover:underline"
              >
                lizavetakruch@gmail.com
              </a>
            </div>

            <div className="rounded-2xl border border-[#E7E1FF] bg-white/70 p-6 shadow-[0_18px_50px_rgba(108,92,255,0.12)] backdrop-blur-md">
              <div className="text-sm font-semibold text-[#1F1F2E] mb-3">Телефон</div>
              <a
                href="tel:+421951928113"
                className="text-[0.95rem] text-[#6B5CFF] hover:underline"
              >
                +421 951 928 113
              </a>
            </div>

            <div className="rounded-2xl border border-[#E7E1FF] bg-white/70 p-6 shadow-[0_18px_50px_rgba(108,92,255,0.12)] backdrop-blur-md">
              <div className="text-sm font-semibold text-[#1F1F2E] mb-3">Социальные сети</div>
              <a
                href="https://www.facebook.com/profile.php?id=61584443705525"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-[#6B5CFF] bg-white px-4 py-2 text-sm font-medium text-[#6B5CFF] transition hover:bg-[#EFECFF]"
              >
                Написать в Facebook
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-[rgba(226,232,240,0.9)] bg-white/90">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-6 md:flex-row md:items-center md:justify-between">
          <div className="text-[0.75rem] text-slate-500">
            © 2026 Елизавета Кручинина. Все права защищены.
          </div>
          <div className="flex flex-wrap gap-4 text-[0.75rem] text-slate-500">
            <a className="hover:underline" href="/privacy">
              Политика конфиденциальности
            </a>
            <a className="hover:underline" href="/terms">
              Условия использования
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}
