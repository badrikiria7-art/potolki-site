import React, { useEffect, useMemo, useRef, useState } from "react";
import {
  Menu,
  X,
  Sparkles,
  Phone,
  Ruler,
  Palette,
  Hammer,
  Check,
  ChevronDown,
  Star,
  ArrowRight,
  ShieldCheck,
  Clock3,
  Building2,
  Layers3,
  PenTool,
  MessageCircle,
  Send,
  Instagram,
  Linkedin,
  Twitter,
  Github,
  Home,
  Lamp,
} from "lucide-react";

const CONTACT_PHONE = "+79189567240";
const CONTACT_PHONE_VIEW = "+7 918 956-72-40";
const TELEGRAM_LINK = "https://t.me/+79189567240";
const WHATSAPP_LINK = "https://wa.me/79189567240";
const EMAIL = "kiriabadri247@gmail.com";

async function sendLead(data) {
  const response = await fetch("/api/telegram", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    throw new Error("Не удалось отправить заявку");
  }
}
const navItems = [
  { label: "Услуги", href: "#services" },
  { label: "Работы", href: "#works" },
  { label: "Преимущества", href: "#features" },
  { label: "Этапы", href: "#process" },
  { label: "Отзывы", href: "#reviews" },
  { label: "Цены", href: "#pricing" },
  { label: "FAQ", href: "#faq" },
  ];

const works = [
  { img: "/works/work1.jpg", title: "Двухуровневый потолок с контрастной геометрией" },
  { img: "/works/work2.jpg", title: "Монтаж потолка на сложной мансардной геометрии" },
  { img: "/works/work3.jpg", title: "Матовый потолок с точечным освещением в проходной зоне" },
  { img: "/works/work4.jpg", title: "Глянцевый потолок с декоративной вставкой" },
  { img: "/works/work5.jpg", title: "Фигурный узел и работа с криволинейной формой" },
  { img: "/works/work6.jpg", title: "Световые декоративные панели с подсветкой" },
  { img: "/works/work7.jpg", title: "Потолок с контурной LED-подсветкой" },
  { img: "/works/work8.jpg", title: "Скрытая периметральная подсветка в коридоре" },
  { img: "/works/work9.jpg", title: "Световые линии в современном интерьере" },
  { img: "/works/photo_2026-08-23_13-08-31.jpg", title: "Сложный натяжной потолок тёмного цвета с фигурным периметром" },
  { img: "/works/photo_2026-08-23_13-08-43.jpg", title: "Процесс монтажа двухуровневого натяжного потолка" },
  { img: "/works/photo_2026-08-23_13-08-46.jpg", title: "Глянцевый натяжной потолок с контурной подсветкой" },
  { img: "/works/photo_2026-08-23_13-08-54.jpg", title: "Матовый натяжной потолок со встроенным и подвесным освещением" },
];

const features = [
  {
    icon: Layers3,
    title: "Без переделок и сюрпризов",
    text: "Сразу проектируем правильное решение под ваш интерьер и свет.",
  },
  {
    icon: PenTool,
    title: "Дизайн-проект",
    text: "Подключаем партнёра-дизайнера: планировка, визуализации, подбор материалов и логика света под интерьер.",
  },
  {
    icon: Hammer,
    title: "Отделка под ключ",
    text: "Можно заказать не только потолки, но и комплексную реализацию объекта с одной точкой входа.",
  },
  {
    icon: ShieldCheck,
    title: "Прозрачная смета",
    text: "Показываем состав работ, объёмы и решения по объекту заранее, чтобы не было неожиданных доплат.",
  },
  {
    icon: Clock3,
    title: "Сроки и координация",
    text: "Работаем в связке с дизайнером, строителями и заказчиком, чтобы потолки встали точно в график ремонта.",
  },
  {
    icon: Lamp,
    title: "Продуманное освещение",
    text: "Помогаем с логикой света: точки, люстры, бра, линии, сценарии освещения и техническая подготовка.",
  },
];

const stats = [
  { value: 1200, suffix: "+", label: "реализованных помещений" },
  { value: 98, suffix: "%", label: "объектов без срыва сроков" },
  { value: 7, suffix: " дней", label: "средний цикл монтажа" },
  { value: 24, suffix: "/7", label: "связь по проекту" },
];

const steps = [
  {
    icon: MessageCircle,
    title: "Заявка и консультация",
    text: "Получаем размеры, задачи и пожелания. Быстро понимаем: нужен только потолок, дизайн или ремонт под ключ.",
  },
  {
    icon: Ruler,
    title: "Замер и решение",
    text: "Готовим понятную смету, схему света, профильные решения и согласовываем оптимальный формат работ.",
  },
  {
    icon: Building2,
    title: "Монтаж и сопровождение",
    text: "Ведём объект до готового результата: монтаж, координация подрядчиков, финальная сдача и постподдержка.",
  },
];

const testimonials = [
  {
    name: "Ирина С.",
    role: "Владелец дома",
    quote:
      "Нужно было совместить потолки, лестничный узел и свет без переделок. Всё продумали заранее, монтаж прошёл спокойно и аккуратно.",
  },
  {
    name: "Алексей П.",
    role: "Собственник квартиры",
    quote:
      "Понравилось, что дали не просто цену, а решение: где теневой профиль, где скрытый карниз, где лучше оставить люстру. Очень профессионально.",
  },
  {
    name: "Марина К.",
    role: "Дизайнер интерьера",
    quote:
      "Редкий подрядчик, который понимает дизайн-логику проекта и не ломает идею на этапе реализации. Удобно работать в связке.",
  },
];

const pricing = [
  {
    name: "Квартира",
    badge: "",
    priceMonth: "от 35 000 ₽",
    priceYear: "от 35 000 ₽",
    description: "Идеально для стандартных помещений",
    features: [
      "Быстрый монтаж",
      "Чистая работа",
      "Подходит для 1–2 комнат",
      "Типовые помещения без сложных решений",
    ],
  },
  {
    name: "Квартира + свет",
    badge: "Популярный",
    priceMonth: "от 90 000 ₽",
    priceYear: "от 90 000 ₽",
    description: "Световые решения и дизайн",
    features: [
      "Световые линии",
      "Карнизы, свет, закладные",
      "Сопровождение по объекту",
      "Более сложная конфигурация потолков",
    ],
  },
  {
    name: "Под ключ",
    badge: "",
    priceMonth: "по расчёту",
    priceYear: "по расчёту",
    description: "Когда нужен потолок + дизайн-проект + отделка под ключ через одну точку входа.",
    features: [
      "Комплексное решение",
      "Дизайн-проект",
      "Отделка под ключ",
      "Подбор материалов",
      "Полное сопровождение",
    ],
  },
];

const faq = [
  {
    q: "Можно заказать только потолки без ремонта?",
    a: "Да. Сайт и предложение построены так, чтобы клиент мог выбрать только потолки, только дизайн-проект или комплексное решение под ключ.",
  },
  {
    q: "Вы работаете с дизайнером интерьера?",
    a: "Да. У нас есть партнёр-дизайнер, поэтому можем подключить проектирование, визуализацию и подбор решений под реализацию.",
  },
  {
    q: "Что входит в смету?",
    a: "В смету закладываем объёмы, профильные решения, карнизы, линии света, конструкции, точки, закладные и монтажные работы по каждому блоку.",
  },
  {
    q: "Сколько времени занимает монтаж?",
    a: "Зависит от площади, количества помещений, конструкций и освещения. После замера даём реалистичный срок, а не усреднённое обещание.",
  },
  {
    q: "Можно ли заказать отделку под ключ?",
    a: "Да. Если объект нужно вести комплексно, подключаем команду отделки под ключ и собираем единое решение по реализации.",
  },
  {
    q: "Как оставить заявку?",
    a: "Через форму на сайте. Можно выбрать интересующее направление: потолки, дизайн-проект или отделка под ключ.",
  },
];

function useReveal() {
  const refs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("reveal-visible");
          }
        });
      },
      { threshold: 0.12 }
    );

    refs.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const register = (el) => {
    if (el && !refs.current.includes(el)) refs.current.push(el);
  };

  return register;
}

function Counter({ target, suffix, duration = 2000 }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setStarted(true);
        });
      },
      { threshold: 0.3 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!started) return;
    const steps = 40;
    const increment = target / steps;
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [started, target, duration]);

  return (
    <div ref={ref} className="text-4xl md:text-5xl font-bold tracking-tight text-white">
      {count}
      {suffix}
    </div>
  );
}

function FAQItem({ item, open, onClick }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl overflow-hidden transition-all duration-300 hover:border-white/20">
      <button
        onClick={onClick}
        className="w-full min-h-[44px] px-5 py-4 flex items-center justify-between gap-4 text-left"
      >
        <span className="text-white font-medium">{item.q}</span>
        <ChevronDown
          className={`h-5 w-5 shrink-0 text-white/70 transition-transform duration-300 ${open ? "rotate-180" : ""}`}
        />
      </button>
      <div
        className="transition-all duration-300 ease-out"
        style={{ maxHeight: open ? 180 : 0, opacity: open ? 1 : 0 }}
      >
        <div className="px-5 pb-5 text-sm leading-6 text-white/70">{item.a}</div>
      </div>
    </div>
  );
}

function WorksSection() {
  return (
    <section id="works" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 md:py-24">
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
        <div className="max-w-2xl">
          <div className="text-sm uppercase tracking-[0.2em] text-cyan-300/80">Наши работы</div>
          <h2 className="mt-4 text-3xl md:text-5xl font-semibold tracking-tight">Реальные фотографии объектов</h2>
          <p className="mt-5 text-lg leading-8 text-white/65">


          </p>
        </div>
        <div className="flex flex-wrap gap-3">
          <a href={WHATSAPP_LINK} target="_blank" rel="noreferrer" className="btn-hover inline-flex min-h-[44px] items-center justify-center rounded-full bg-gradient-to-r from-emerald-400 to-emerald-500 px-5 py-3 text-sm font-medium text-white transition">WhatsApp</a>
          <a href={TELEGRAM_LINK} target="_blank" rel="noreferrer" className="btn-hover inline-flex min-h-[44px] items-center justify-center rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm font-medium text-white/90 backdrop-blur-xl transition">Telegram</a>
        </div>
      </div>

      <div className="mt-12 grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
        {works.map((work, index) => (
          <div key={index} className="group relative overflow-hidden rounded-[28px] border border-white/10 bg-white/5 backdrop-blur-xl">
            <img src={work.img} alt={work.title} loading="lazy" className="h-[320px] w-full object-cover transition duration-500 group-hover:scale-110" style={{ filter: "contrast(1.06) saturate(1.08) brightness(0.92)" }} />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-90" />
            <div className="absolute inset-x-0 bottom-0 p-6">
              <div className="inline-flex rounded-full border border-white/10 bg-black/25 px-3 py-1 text-xs text-white/70 backdrop-blur-md">Проект {index + 1}</div>
              <div className="mt-3 text-lg font-medium text-white leading-6">{work.title}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default function PotolkiLanding() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [yearly, setYearly] = useState(false);
  const [openFaq, setOpenFaq] = useState(0);
  const [formStatus, setFormStatus] = useState("idle");
  const reveal = useReveal();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const yearDiscountLabel = useMemo(() => "-12%", []);

  return (
    <div className="min-h-screen bg-[#08080f] text-white overflow-x-hidden selection:bg-cyan-400/30 selection:text-white">
      <style>{`
        html { scroll-behavior: smooth; }
        :root {
          --bg-primary: #08080f;
          --accent-from: #22d3ee;
          --accent-to: #8b5cf6;
          --card-bg: rgba(255,255,255,0.06);
          --border: rgba(255,255,255,0.12);
        }
        .fade-in-up { animation: fadeInUp .9s ease-out both; }
        .fade-delay-1 { animation-delay: .12s; }
        .fade-delay-2 { animation-delay: .24s; }
        .fade-delay-3 { animation-delay: .36s; }
        .reveal { opacity: 0; transform: translateY(28px); transition: opacity .7s ease, transform .7s ease; }
        .reveal-visible { opacity: 1; transform: translateY(0); }
        .blob { animation: floatBlob 9s ease-in-out infinite; }
        .blob-2 { animation-delay: 1.5s; }
        .blob-3 { animation-delay: 3s; }
        .glow-hover:hover { box-shadow: 0 0 40px rgba(34,211,238,.18), 0 0 60px rgba(139,92,246,.12); }
        .card-hover:hover { transform: translateY(-4px) scale(1.03); border-color: rgba(255,255,255,.22); box-shadow: 0 0 30px rgba(34,211,238,.15); }
        .btn-hover:hover { transform: scale(1.05); box-shadow: 0 0 30px rgba(34,211,238,.25); }
        .grid-bg {
          background-image:
            linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px);
          background-size: 48px 48px;
          mask-image: radial-gradient(circle at center, black 45%, transparent 85%);
        }
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(26px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes floatBlob {
          0%,100% { transform: translateY(0px) translateX(0px) scale(1); }
          50% { transform: translateY(-18px) translateX(10px) scale(1.04); }
        }
      `}</style>

      <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
        <div className="grid-bg absolute inset-0 opacity-40" />
        <div className="blob absolute -top-20 -left-20 h-72 w-72 rounded-full bg-cyan-400/20 blur-3xl" />
        <div className="blob blob-2 absolute top-1/3 right-0 h-80 w-80 rounded-full bg-violet-500/20 blur-3xl" />
        <div className="blob blob-3 absolute bottom-0 left-1/3 h-72 w-72 rounded-full bg-fuchsia-500/10 blur-3xl" />
      </div>

      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? "bg-[#08080f]/70 backdrop-blur-xl border-b border-white/10" : "bg-transparent"
        }`}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex min-h-[72px] items-center justify-between">
            <a href="#top" className="flex shrink-0 items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-400 to-violet-500 shadow-lg shadow-cyan-500/20">
                <Home className="h-5 w-5 text-white" />
              </div>
              <div>
                <div className="text-sm font-semibold tracking-wide">Мастерская потолков</div>
                <div className="text-xs text-white/50">Потолки • Дизайн • Отделка</div>
              </div>
            </a>

            <nav className="hidden xl:flex items-center gap-4 flex-1 justify-center">
              {navItems.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                     className="shrink-0 whitespace-nowrap px-2 text-sm text-white/70 transition hover:text-white"
                     style={{ writingMode: "horizontal-tb" }}
                  >
                  {item.label}
                </a>
              ))}
            </nav>

            <div className="hidden xl:flex shrink-0 items-center gap-3">
              <a
                href="#lead"
                className="btn-hover rounded-full border border-white/10 bg-white/5 px-5 py-2.5 text-sm text-white/90 transition"
              >
                Рассчитать проект
              </a>
            </div>

            <button
              className="xl:hidden flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5"
              onClick={() => setMenuOpen((s) => !s)}
              aria-label="Открыть меню"
            >
              {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        <div
          className={`xl:hidden transition-all duration-300 ${menuOpen ? "max-h-[calc(100vh-72px)] overflow-y-auto border-t border-white/10 bg-[#0b0b13]/95 backdrop-blur-xl" : "max-h-0 overflow-hidden"}`}
        >
          <div className="px-4 py-4 space-y-2">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className="block rounded-xl px-4 py-3 text-white/80 hover:bg-white/5"
              >
                {item.label}
              </a>
            ))}
            <a
              href="#lead"
              onClick={() => setMenuOpen(false)}
              className="block rounded-xl bg-gradient-to-r from-cyan-400 to-violet-500 px-4 py-3 text-center font-medium text-white"
            >
              Оставить заявку
            </a>
          </div>
        </div>
      </header>

      <main id="top" className="relative z-10 pt-20 md:pt-24">
        <section className="mx-auto max-w-8xl px-4 sm:px-6 lg:px-8 pt-6 sm:pt-10 lg:pt-14 pb-16 md:pb-20">
          <div className="grid items-start gap-10 lg:grid-cols-2 lg:gap-14">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs text-white/70 backdrop-blur-xl">
                <Sparkles className="h-4 w-4 text-cyan-300" />
                Краснодар • Бесплатный замер
              </div>

              <h1 className="mt-4 text-4xl sm:text-5xl xl:text-6xl font-semibold leading-[1.02] sm:leading-[0.98] tracking-tight">
                Натяжные потолки в Краснодаре
                <span className="block bg-gradient-to-r from-cyan-300 via-sky-400 to-violet-400 bg-clip-text text-transparent">
                  Монтаж от 700 ₽/м² с материалом
                </span>
              </h1>

              <p className="mt-5 max-w-2xl text-base sm:text-lg md:text-xl leading-7 md:leading-8 text-white/70">
                Стартовая цена для базового решения. Световые линии, теневые профили,
                скрытые карнизы и сложные конструкции рассчитываются после замера.
              </p>

              <div className="mt-6 flex flex-col sm:flex-row gap-4">
                <a
                  href="#lead"
                  className="btn-hover min-h-[44px] rounded-full bg-gradient-to-r from-cyan-400 to-violet-500 px-6 py-3.5 font-medium text-white transition"
                >
                  Рассчитать проект
                </a>
                <a
                  href="#works"
                  className="btn-hover min-h-[44px] rounded-full border border-white/10 bg-white/5 px-6 py-3.5 font-medium text-white/90 backdrop-blur-xl transition"
                >
                  Посмотреть работы
                </a>
              </div>

              <div className="mt-6 flex flex-wrap gap-x-7 gap-y-3 text-sm text-white/55">
                <div className="flex items-center gap-2"><Check className="h-4 w-4 text-cyan-300" />Бесплатный замер</div>
                <div className="flex items-center gap-2"><Check className="h-4 w-4 text-cyan-300" />Цена с материалом</div>
                <div className="flex items-center gap-2"><Check className="h-4 w-4 text-cyan-300" />Расчёт под ваш проект</div>
              </div>
            </div>

            <div className="fade-in-up fade-delay-2 relative">
              <div className="rounded-[32px] border border-white/10 bg-white/5 p-4 md:p-6 backdrop-blur-2xl shadow-2xl shadow-cyan-500/10">
                <div className="rounded-[28px] border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-5 md:p-7">
                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="rounded-3xl border border-white/10 bg-[#0f1018] p-5">
                      <div className="text-sm text-white/50">Формат обращения</div>
                      <div className="mt-3 space-y-3">
                        {["Натяжные потолки", "Дизайн-проект", "Отделка под ключ"].map((item) => (
                          <div key={item} className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm">
                            <span>{item}</span>
                            <Check className="h-4 w-4 text-cyan-300" />
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="rounded-3xl border border-white/10 bg-[#0f1018] p-5">
                      <div className="text-sm text-white/50">Что вы получите</div>
                      <div className="mt-4 space-y-4">
                        <div>
                          <div className="text-2xl font-semibold">Бесплатный замер</div>
                          <div className="text-sm text-white/60">Уточним размеры, материалы, освещение и сложность конструкции</div>
                        </div>
                        <div className="h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
                        <div className="text-sm text-white/90 leading-7">
                        <div className="text-1xl font-semibold">✔ Базовое решение от 700 ₽/м²</div>
                        <div className="text-1xl font-semibold">✔ Материал включён в стартовую цену</div>
                        <div className="text-1x1 font-semibold">✔ Сложные решения — по расчёту</div>

                          Рассчитаем итоговую стоимость после замера
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="mt-4 rounded-3xl border border-cyan-400/20 bg-gradient-to-r from-cyan-400/10 to-violet-500/10 p-5">
                    <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
                      <div>
                        <div className="text-sm text-cyan-200/80">Натяжные потолки под ключ</div>
                        <div className="mt-1 text-xl font-semibold">Бесплатный замер в Краснодаре</div>
                      </div>
                      <a href="#lead" className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-medium text-slate-900 transition hover:scale-[1.03]">
                        Рассчитать проект

                        <ArrowRight className="h-4 w-4" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="services" ref={reveal} className="reveal mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6 md:py-10">
          <div className="grid gap-4 md:grid-cols-3">
            {[
              {
                title: "Натяжные потолки",
                text: "Установка потолков любой сложности: световые линии, карнизы, скрытый свет",
                icon: Layers3,
              },
              {
                title: "Дизайн потолка",
                text: "Подберём решение под интерьер, чтобы выглядело дорого и современно",
                icon: Palette,
              },
              {
                title: "Под ключ",
                text: "Полное ведение объекта: потолки, свет, решения, координация",
                icon: Hammer,
              },
            ].map((card) => {
              const Icon = card.icon;
              return (
                <div key={card.title} className="card-hover transition-all duration-300 rounded-[28px] border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-400/20 to-violet-500/20 border border-white/10">
                    <Icon className="h-6 w-6 text-cyan-300" />
                  </div>
                  <h3 className="mt-5 text-2xl font-semibold">{card.title}</h3>
                  <p className="mt-3 text-white/65 leading-7">{card.text}</p>
                </div>
              );
            })}
          </div>
        </section>

        <WorksSection />

        <section id="features" ref={reveal} className="reveal mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 md:py-24">
          <div className="max-w-2xl">
            <div className="text-sm uppercase tracking-[0.2em] text-cyan-300/80">Преимущества</div>
            <h2 className="mt-4 text-3xl md:text-5xl font-semibold tracking-tight">Сайт, который продаёт не только потолки, а доверие к реализации объекта</h2>
            <p className="mt-5 text-lg leading-8 text-white/65">

            </p>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {features.map((feature, idx) => {
              const Icon = feature.icon;
              return (
                <div
                  key={feature.title}
                  className="card-hover glow-hover rounded-[28px] border border-white/10 bg-[rgba(255,255,255,0.06)] p-6 backdrop-blur-xl transition-all duration-300"
                  style={{ transitionDelay: `${idx * 80}ms` }}
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-400/20 to-violet-500/20 border border-white/10">
                    <Icon className="h-6 w-6 text-cyan-300" />
                  </div>
                  <h3 className="mt-5 text-xl font-semibold">{feature.title}</h3>
                  <p className="mt-3 text-white/65 leading-7">{feature.text}</p>
                </div>
              );
            })}
          </div>
        </section>

        <section ref={reveal} className="reveal mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 md:py-10">
          <div className="rounded-[32px] border border-white/10 bg-gradient-to-r from-cyan-400/10 via-white/5 to-violet-500/10 p-8 md:p-10 backdrop-blur-xl">
            <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">
              {stats.map((item) => (
                <div key={item.label}>
                  <Counter target={item.value} suffix={item.suffix} />
                  <div className="mt-3 text-sm uppercase tracking-[0.16em] text-white/50">{item.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="process" ref={reveal} className="reveal mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 md:py-24">
          <div className="max-w-2xl">
            <div className="text-sm uppercase tracking-[0.2em] text-cyan-300/80">Как это работает</div>
            <h2 className="mt-4 text-3xl md:text-5xl font-semibold tracking-tight">От первого касания до готового объекта — без потери логики и эстетики</h2>
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {steps.map((step, idx) => {
              const Icon = step.icon;
              return (
                <div key={step.title} className="relative rounded-[28px] border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
                  <div className="mb-6 flex items-center justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-400 to-violet-500 text-white shadow-lg shadow-cyan-500/20">
                      <Icon className="h-6 w-6" />
                    </div>
                    <div className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-sm font-semibold text-white/90">
                      0{idx + 1}
                    </div>
                  </div>
                  <h3 className="text-2xl font-semibold">{step.title}</h3>
                  <p className="mt-3 text-white/65 leading-7">{step.text}</p>
                  {idx < steps.length - 1 && (
                    <div className="hidden lg:block absolute top-10 -right-3 h-px w-6 bg-gradient-to-r from-cyan-400/60 to-violet-500/60" />
                  )}
                </div>
              );
            })}
          </div>
        </section>

        <section id="reviews" ref={reveal} className="reveal mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 md:py-24">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <div className="max-w-2xl">
              <div className="text-sm uppercase tracking-[0.2em] text-cyan-300/80">Отзывы</div>
              <h2 className="mt-4 text-3xl md:text-5xl font-semibold tracking-tight">Когда проект выглядит дороже, чем ожидали</h2>
            </div>
            <div className="text-white/60 max-w-xl"></div>
          </div>

          <div className="mt-12 grid gap-5 lg:grid-cols-3 overflow-x-auto">
            {testimonials.map((item, idx) => (
              <div key={item.name} className="min-w-[290px] rounded-[28px] border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
                <div className="flex items-center gap-4">
                  <div className={`flex h-14 w-14 items-center justify-center rounded-full text-lg font-semibold ${idx === 0 ? "bg-cyan-400/20 text-cyan-200" : idx === 1 ? "bg-violet-500/20 text-violet-200" : "bg-fuchsia-500/20 text-fuchsia-200"}`}>
                    {item.name
                      .split(" ")
                      .map((x) => x[0])
                      .join("")}
                  </div>
                  <div>
                    <div className="font-semibold">{item.name}</div>
                    <div className="text-sm text-white/50">{item.role}</div>
                  </div>
                </div>
                <div className="mt-5 flex gap-1 text-amber-300">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-current" />
                  ))}
                </div>
                <p className="mt-5 text-white/70 leading-7">“{item.quote}”</p>
              </div>
            ))}
          </div>
        </section>

        <section id="pricing" ref={reveal} className="reveal mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 md:py-24">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <div className="max-w-2xl">
              <div className="text-sm uppercase tracking-[0.2em] text-cyan-300/80">Цены</div>
              <h2 className="mt-4 text-3xl md:text-5xl font-semibold tracking-tight">Стоимость через понятные форматы объектов, а не через сухой прайс</h2>
            </div>
            <div className="inline-flex items-center gap-3 self-start rounded-full border border-white/10 bg-white/5 p-1 backdrop-blur-xl">
              <button
                className={`rounded-full px-4 py-2 text-sm transition ${!yearly ? "bg-white text-slate-900" : "text-white/70"}`}
                onClick={() => setYearly(false)}
              >
                Проект
              </button>
              <button
                className={`rounded-full px-4 py-2 text-sm transition ${yearly ? "bg-white text-slate-900" : "text-white/70"}`}
                onClick={() => setYearly(true)}
              >
                Комплекс <span className="ml-1 text-emerald-400">{yearDiscountLabel}</span>
              </button>
            </div>
          </div>

          <div className="mt-12 grid gap-5 lg:grid-cols-3">
            {pricing.map((plan, idx) => (
              <div
                key={plan.name}
                className={`card-hover relative rounded-[30px] border p-7 backdrop-blur-xl transition-all duration-300 ${
                  idx === 1
                    ? "scale-[1.02] border-cyan-400/30 bg-gradient-to-b from-cyan-400/10 to-violet-500/10 shadow-2xl shadow-cyan-500/10"
                    : "border-white/10 bg-white/5"
                }`}
              >
                {plan.badge ? (
                  <div className="absolute right-5 top-5 rounded-full bg-gradient-to-r from-cyan-400 to-violet-500 px-3 py-1 text-xs font-medium text-white">
                    {plan.badge}
                  </div>
                ) : null}
                <div className="text-lg font-semibold">{plan.name}</div>
                <div className="mt-4 text-4xl font-bold tracking-tight">{yearly ? plan.priceYear : plan.priceMonth}</div>
                <p className="mt-3 text-white/60 leading-7">{plan.description}</p>
                <div className="mt-6 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent" />
                <div className="mt-6 space-y-3">
                  {plan.features.map((item) => (
                    <div key={item} className="flex items-start gap-3 text-white/80">
                      <Check className="mt-0.5 h-4 w-4 text-cyan-300 shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
                <a
                  href="#lead"
                  className={`btn-hover mt-8 flex min-h-[44px] items-center justify-center rounded-full px-5 py-3 font-medium transition ${
                    idx === 1
                      ? "bg-white text-slate-900"
                      : "border border-white/10 bg-white/5 text-white"
                  }`}
                >
                  Выбрать формат
                </a>
              </div>
            ))}
          </div>
        </section>

        <section id="faq" ref={reveal} className="reveal mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 md:py-24">
          <div className="max-w-2xl">
            <div className="text-sm uppercase tracking-[0.2em] text-cyan-300/80">FAQ</div>
            <h2 className="mt-4 text-3xl md:text-5xl font-semibold tracking-tight">Частые вопросы перед заявкой</h2>
          </div>

          <div className="mt-12 grid gap-4 lg:grid-cols-2">
            {faq.map((item, idx) => (
              <FAQItem
                key={item.q}
                item={item}
                open={openFaq === idx}
                onClick={() => setOpenFaq(openFaq === idx ? -1 : idx)}
              />
            ))}
          </div>
        </section>

        <section id="lead" ref={reveal} className="reveal mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-20 md:pb-24">
          <div className="relative overflow-hidden rounded-[36px] border border-white/10 bg-gradient-to-r from-cyan-400/15 via-violet-500/15 to-fuchsia-500/15 p-8 md:p-12 backdrop-blur-2xl">
            <div className="absolute -left-8 top-10 h-28 w-28 rounded-full bg-cyan-400/20 blur-3xl" />
            <div className="absolute -right-8 bottom-10 h-32 w-32 rounded-full bg-violet-500/20 blur-3xl" />
            <div className="relative grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
              <div>
                <div className="text-sm uppercase tracking-[0.2em] text-cyan-200/90">Оставить заявку</div>
                <h2 className="mt-4 text-3xl md:text-5xl font-semibold tracking-tight">Рассчитаем стоимость потолка за 15 минут</h2>
                <p className="mt-5 max-w-2xl text-lg leading-8 text-white/70">
                  Оставьте заявку — свяжемся, уточним задачу и предложим лучшее решение.
                </p>
              </div>

              <form
                 className="rounded-[28px] border border-white/10 bg-[#0d0e16]/70 p-6 backdrop-blur-xl space-y-4"
                 onSubmit={async (e) => {
                   e.preventDefault();

                   if (formStatus === "sending") return;

                   const formData = new FormData(e.target);

                   const data = {
                       name: formData.get("name"),
                       phone: formData.get("phone"),
                       service: formData.get("service"),
                       message: formData.get("message"),
                     };

                   setFormStatus("sending");

                   try {
                     await sendLead(data);
                     setFormStatus("success");
                     e.target.reset();
                   } catch {
                     setFormStatus("error");
                   }
                 }}
                   >
                     <input
                       type="text"
                       name="name"
                       placeholder="Ваше имя"
                       required
                       className="min-h-[44px] w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-white/35 outline-none focus:border-cyan-300/40"
                     />

                     <input
                       type="tel"
                       name="phone"
                       placeholder="Телефон"
                       required
                       className="min-h-[44px] w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-white/35 outline-none focus:border-cyan-300/40"
                    />

                     <select
                       name="service"
                       className="min-h-[44px] w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none focus:border-cyan-300/40"
                     >
                       <option className="text-slate-900">Натяжные потолки</option>
                       <option className="text-slate-900">Дизайн</option>
                       <option className="text-slate-900">Отделка</option>
                     </select>

                     <textarea
                       name="message"
                       placeholder="Опишите задачу"
                       rows={4}
                       className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-white/35 outline-none focus:border-cyan-300/40"
                     />

                     <button
                       type="submit"
                       disabled={formStatus === "sending"}
                       className="btn-hover min-h-[44px] w-full rounded-2xl bg-gradient-to-r from-cyan-400 to-violet-500 px-5 py-3.5 font-medium text-white transition"
                     >
                       {formStatus === "sending" ? "Отправляем..." : "Отправить заявку"}
                     </button>

                     <div className="text-xs leading-5 text-white/45" aria-live="polite">
                       {formStatus === "success" && "Заявка отправлена"}
                       {formStatus === "error" && "Не удалось отправить заявку. Попробуйте ещё раз."}
                       {(formStatus === "idle" || formStatus === "sending") && "Ответим в течение 5 минут"}
                     </div>
                  </form>
            </div>
          </div>
        </section>
      </main>

            <div className="fixed bottom-4 right-4 z-[60] flex flex-col gap-3">
        <a href={WHATSAPP_LINK} target="_blank" rel="noreferrer" className="btn-hover flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-r from-emerald-400 to-emerald-500 text-white shadow-2xl shadow-emerald-500/30" aria-label="WhatsApp" title="Написать в WhatsApp">
          <MessageCircle className="h-6 w-6" />
        </a>
        <a href={TELEGRAM_LINK} target="_blank" rel="noreferrer" className="btn-hover flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-r from-sky-400 to-cyan-500 text-white shadow-2xl shadow-cyan-500/30" aria-label="Telegram" title="Написать в Telegram">
          <Send className="h-6 w-6" />
        </a>
      </div>

      <footer className="relative z-10 border-t border-white/10 bg-black/20">
        <div className="mx-auto max-w-[1500px] px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 md:grid-cols-2 xl:grid-cols-5">
            <div className="xl:col-span-1">
              <div className="flex items-center gap-2">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-400 to-violet-500">
                  <Home className="h-5 w-5 text-white" />
                </div>
                <div>
                  <div className="font-semibold">Мастерская потолков</div>
                  <div className="text-sm text-white/45">Потолки • Дизайн • Отделка</div>
                </div>
              </div>
              <p className="mt-5 max-w-md text-white/60 leading-7">

              </p>
              <div className="mt-6 flex items-center gap-3 text-white/55">
                  <a
                    href="https://instagram.com/potolki.atelier"
                    target="_blank"
                   rel="noopener noreferrer"
                   className="w-10 h-10 flex items-center justify-center rounded-full border border-white/10 hover:bg-white/10 transition"
                  >
                    <Instagram size={18} />
                  </a>
                  <a
                    href="https://vk.com/ТВОЙ_НИК"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 flex items-center justify-center rounded-full border border-white/10 hover:bg-white/10 transition"
                  >
                    <span className="text-sm font-bold">VK</span>
                  </a>

              </div>
            </div>
            <div className="flex justify-center items-center px-4">
                <img
                  src="/logo.png"
                  alt="Потолки Краснодар"
                   className="w-[160px] opacity-60 hover:scale-80 transition"
               />
               </div>

            <div>
              <div className="font-medium">Услуги</div>
              <div className="mt-4 space-y-3 text-sm text-white/55">
                <a href="#services" className="block hover:text-white">Натяжные потолки</a>
                <a href="#services" className="block hover:text-white">Дизайн-проект</a>
                <a href="#services" className="block hover:text-white">Отделка под ключ</a>
              </div>
            </div>

            <div>
              <div className="font-medium">Навигация</div>
              <div className="mt-4 space-y-3 text-sm text-white/55">
                {navItems.map((item) => (
                  <a key={item.href} href={item.href} className="block hover:text-white">
                    {item.label}
                  </a>
                ))}
              </div>
            </div>

            <div>
              <div className="font-medium">Контакты</div>
              <div className="mt-4 space-y-3 text-sm text-white/55">
                <div className="flex items-center gap-2"><Phone className="h-4 w-4" /> {CONTACT_PHONE_VIEW}</div>
                <div>{EMAIL}</div>
                <a href={WHATSAPP_LINK} target="_blank" rel="noreferrer" className="block hover:text-white">WhatsApp</a>
                <a href={TELEGRAM_LINK} target="_blank" rel="noreferrer" className="block hover:text-white">Telegram</a>
                <div>Краснодар и край</div>
              </div>
            </div>
          </div>

          <div className="mt-12 flex flex-col gap-4 border-t border-white/10 pt-6 text-sm text-white/40 md:flex-row md:items-center md:justify-between">
            <div>© 2026 Ceiling Atelier. Все права защищены.</div>
            <div></div>
          </div>
        </div>
      </footer>
    </div>
  );
}
