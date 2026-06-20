import { useState } from 'react';
import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

const PORTRAIT =
  'https://cdn.poehali.dev/projects/7f0dedbb-678a-4c4a-b7ef-c0ade51dd1d6/files/7b79bdf1-0793-4b83-9dae-5210b69d6327.jpg';

const NAV = [
  { label: 'Обо мне', href: '#about' },
  { label: 'Я предлагаю вам', href: '#services' },
  { label: 'Цены на услуги', href: '#pricing' },
  { label: 'Контакты', href: '#contacts' },
];

const STATS = [
  { value: '12', label: 'лет практики' },
  { value: '800+', label: 'клиентов' },
  { value: '5000+', label: 'часов сессий' },
  { value: '94%', label: 'достигли цели' },
];

const CREDENTIALS = [
  'Сертифицированный коуч ICF (PCC)',
  'Магистр психологии, МГУ',
  'Член Ассоциации психологов России',
  'Спикер бизнес-конференций',
];

const SERVICES = [
  {
    icon: 'Target',
    title: 'Карьерный коучинг',
    text: 'Найдём ваше профессиональное предназначение и выстроим путь к карьерному росту.',
    format: 'Индивидуально · 8 сессий',
  },
  {
    icon: 'Brain',
    title: 'Работа со стрессом',
    text: 'Освоите техники управления тревогой, выгоранием и эмоциональным напряжением.',
    format: 'Индивидуально · 6 сессий',
  },
  {
    icon: 'Heart',
    title: 'Отношения и баланс',
    text: 'Гармонизируем личную жизнь и научимся выстраивать здоровые границы.',
    format: 'Индивидуально · 10 сессий',
  },
  {
    icon: 'Rocket',
    title: 'Коучинг для лидеров',
    text: 'Программа для руководителей: уверенность, влияние и управление командой.',
    format: 'Индивидуально · 12 сессий',
  },
];

const PLANS = [
  {
    name: 'Разовая консультация',
    price: '6 000 ₽',
    unit: 'за сессию',
    features: ['Сессия 60 минут', 'Диагностика запроса', 'План действий', 'Поддержка в чате 3 дня'],
    featured: false,
  },
  {
    name: 'Программа трансформации',
    price: '45 000 ₽',
    unit: 'за 8 сессий',
    features: ['8 сессий по 60 минут', 'Персональная стратегия', 'Домашние практики', 'Поддержка 24/7', 'Гарантия результата'],
    featured: true,
  },
  {
    name: 'VIP-сопровождение',
    price: '120 000 ₽',
    unit: 'за 3 месяца',
    features: ['Безлимит сессий', 'Личный куратор', 'Доступ к материалам', 'Экстренные сессии', 'Полное сопровождение'],
    featured: false,
  },
];

const Index = () => {
  const [form, setForm] = useState({ name: '', phone: '', message: '' });
  const [sent, setSent] = useState(false);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="fixed top-0 inset-x-0 z-50 bg-background/85 backdrop-blur-md border-b border-border">
        <div className="container flex items-center justify-between h-16">
          <a href="#" className="font-display text-xl font-600 tracking-wide text-primary">
            ИРИНА <span className="text-accent">СОКОЛОВА</span>
          </a>
          <nav className="hidden md:flex items-center gap-8">
            {NAV.map((n) => (
              <a
                key={n.href}
                href={n.href}
                className="text-sm text-muted-foreground hover:text-primary transition-colors uppercase tracking-wider"
              >
                {n.label}
              </a>
            ))}
          </nav>
          <Button asChild className="hidden sm:inline-flex rounded-none">
            <a href="#contacts">Записаться</a>
          </Button>
        </div>
      </header>

      {/* Hero */}
      <section className="relative min-h-screen flex items-center pt-16 bg-primary overflow-hidden">
        <div className="container relative z-10 py-20 grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <div className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 border border-accent/40">
              <span className="w-1.5 h-1.5 bg-accent" />
              <span className="text-xs uppercase tracking-[0.2em] text-accent">Коуч · Психолог</span>
            </div>
            <h1 className="font-display text-5xl md:text-6xl font-700 leading-[1.05] text-white text-balance">
              Помогаю раскрыть потенциал и изменить жизнь
            </h1>
            <p className="mt-6 text-lg text-white/70 max-w-lg leading-relaxed">
              Меня зовут Ирина Соколова. 12 лет помогаю людям преодолевать внутренние барьеры,
              находить ясность и достигать целей, которые казались недостижимыми.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Button asChild size="lg" className="rounded-none bg-accent text-accent-foreground hover:bg-accent/90">
                <a href="#contacts">Записаться на консультацию</a>
              </Button>
              <Button asChild size="lg" variant="outline" className="rounded-none border-white/30 text-white bg-transparent hover:bg-white/10 hover:text-white">
                <a href="#services">Я предлагаю вам</a>
              </Button>
            </div>
          </div>
          <div className="relative hidden lg:block">
            <div className="absolute -top-4 -right-4 w-full h-full border-2 border-accent/30" />
            <img src={PORTRAIT} alt="Ирина Соколова" className="relative w-full h-[560px] object-cover object-top" />
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-primary border-t border-white/10">
        <div className="container grid grid-cols-2 md:grid-cols-4 divide-x divide-white/10">
          {STATS.map((s) => (
            <div key={s.label} className="py-10 text-center">
              <div className="font-display text-4xl md:text-5xl font-700 text-accent">{s.value}</div>
              <div className="mt-1 text-sm uppercase tracking-wider text-white/60">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-24 md:py-32">
        <div className="container grid md:grid-cols-2 gap-16 items-center">
          <div className="relative order-2 md:order-1">
            <div className="absolute -bottom-4 -left-4 w-full h-full border-2 border-accent/30" />
            <img src={PORTRAIT} alt="Ирина Соколова" className="relative w-full h-[480px] object-cover object-top" />
          </div>
          <div className="order-1 md:order-2">
            <span className="text-xs uppercase tracking-[0.2em] text-accent">Обо мне</span>
            <h2 className="font-display text-4xl md:text-5xl font-700 mt-3 text-primary leading-tight">
              Ваш проводник к переменам
            </h2>
            <p className="mt-6 text-muted-foreground leading-relaxed">
              Более 12 лет я работаю с людьми, которые хотят больше от жизни — большей ясности,
              уверенности и свободы. Мой подход сочетает доказательную психологию и современные
              методики коучинга.
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Я верю, что в каждом есть ресурс для изменений. Моя задача — помочь вам его найти и
              превратить намерения в реальные результаты.
            </p>
            <div className="mt-8 space-y-3">
              {CREDENTIALS.map((c) => (
                <div key={c} className="flex items-center gap-3">
                  <Icon name="BadgeCheck" size={18} className="text-accent shrink-0" />
                  <span className="text-foreground">{c}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-24 md:py-32 bg-secondary">
        <div className="container">
          <div className="max-w-2xl mb-16">
            <span className="text-xs uppercase tracking-[0.2em] text-accent">Услуги</span>
            <h2 className="font-display text-4xl md:text-5xl font-700 mt-3 text-primary leading-tight">
              Я предлагаю вам
            </h2>
            <p className="mt-4 text-muted-foreground">
              Каждая программа — это структурированная система работы под конкретный запрос.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 gap-px bg-border">
            {SERVICES.map((s) => (
              <div key={s.title} className="bg-background p-10 group hover:bg-primary transition-colors duration-300">
                <div className="w-12 h-12 bg-primary group-hover:bg-accent flex items-center justify-center transition-colors">
                  <Icon name={s.icon} size={24} className="text-accent group-hover:text-accent-foreground transition-colors" />
                </div>
                <h3 className="font-display text-xl font-600 mt-6 text-primary group-hover:text-white transition-colors">
                  {s.title}
                </h3>
                <p className="mt-3 text-muted-foreground group-hover:text-white/70 leading-relaxed transition-colors">
                  {s.text}
                </p>
                <div className="mt-5 text-xs uppercase tracking-wider text-accent">{s.format}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-24 md:py-32 bg-secondary">
        <div className="container">
          <div className="max-w-2xl mb-16">
            <span className="text-xs uppercase tracking-[0.2em] text-accent">Цены</span>
            <h2 className="font-display text-4xl md:text-5xl font-700 mt-3 text-primary leading-tight">
              Цены на услуги
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {PLANS.map((p) => (
              <div
                key={p.name}
                className={`p-10 flex flex-col ${
                  p.featured ? 'bg-primary text-white' : 'bg-background border border-border'
                }`}
              >
                {p.featured && (
                  <div className="self-start mb-5 px-3 py-1 bg-accent text-accent-foreground text-xs uppercase tracking-wider">
                    Популярный
                  </div>
                )}
                <h3 className={`font-display text-xl font-600 ${p.featured ? 'text-white' : 'text-primary'}`}>
                  {p.name}
                </h3>
                <div className="mt-4 flex items-baseline gap-2">
                  <span className={`font-display text-4xl font-700 ${p.featured ? 'text-accent' : 'text-primary'}`}>
                    {p.price}
                  </span>
                  <span className={p.featured ? 'text-white/60 text-sm' : 'text-muted-foreground text-sm'}>
                    {p.unit}
                  </span>
                </div>
                <div className="mt-8 space-y-3 flex-1">
                  {p.features.map((f) => (
                    <div key={f} className="flex items-center gap-3">
                      <Icon name="Check" size={16} className="text-accent shrink-0" />
                      <span className={p.featured ? 'text-white/80 text-sm' : 'text-foreground text-sm'}>{f}</span>
                    </div>
                  ))}
                </div>
                <Button
                  asChild
                  className={`mt-8 rounded-none ${
                    p.featured ? 'bg-accent text-accent-foreground hover:bg-accent/90' : ''
                  }`}
                  variant={p.featured ? 'default' : 'outline'}
                >
                  <a href="#contacts">Выбрать</a>
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contacts */}
      <section id="contacts" className="py-24 md:py-32 bg-primary">
        <div className="container grid lg:grid-cols-2 gap-16">
          <div>
            <span className="text-xs uppercase tracking-[0.2em] text-accent">Контакты</span>
            <h2 className="font-display text-4xl md:text-5xl font-700 mt-3 text-white leading-tight">
              Запишитесь на консультацию
            </h2>
            <p className="mt-6 text-white/70 leading-relaxed max-w-md">
              Оставьте заявку, и я свяжусь с вами, чтобы обсудить ваш запрос и подобрать подходящий
              формат работы. Первый созвон-знакомство — бесплатно.
            </p>
            <div className="mt-10 space-y-5">
              {[
                { icon: 'Phone', text: '+7 (495) 000-00-00' },
                { icon: 'Mail', text: 'hello@sokolova.coach' },
                { icon: 'Send', text: '@irina_sokolova' },
              ].map((c) => (
                <div key={c.text} className="flex items-center gap-4">
                  <div className="w-10 h-10 border border-white/20 flex items-center justify-center">
                    <Icon name={c.icon} size={18} className="text-accent" />
                  </div>
                  <span className="text-white/80">{c.text}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-background p-8 md:p-10">
            {sent ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-12">
                <div className="w-16 h-16 bg-accent flex items-center justify-center">
                  <Icon name="Check" size={32} className="text-accent-foreground" />
                </div>
                <h3 className="font-display text-2xl font-600 mt-6 text-primary">Заявка отправлена!</h3>
                <p className="mt-2 text-muted-foreground">Я свяжусь с вами в ближайшее время.</p>
              </div>
            ) : (
              <form onSubmit={submit} className="space-y-5">
                <div>
                  <label className="text-sm font-500 text-primary uppercase tracking-wider">Имя</label>
                  <Input
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    placeholder="Ваше имя"
                    className="mt-2 rounded-none h-12"
                  />
                </div>
                <div>
                  <label className="text-sm font-500 text-primary uppercase tracking-wider">Телефон</label>
                  <Input
                    required
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    placeholder="+7 (___) ___-__-__"
                    className="mt-2 rounded-none h-12"
                  />
                </div>
                <div>
                  <label className="text-sm font-500 text-primary uppercase tracking-wider">Ваш запрос</label>
                  <Textarea
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    placeholder="Коротко опишите, с чем хотите поработать"
                    rows={4}
                    className="mt-2 rounded-none resize-none"
                  />
                </div>
                <Button type="submit" size="lg" className="w-full rounded-none bg-accent text-accent-foreground hover:bg-accent/90">
                  Записаться на консультацию
                </Button>
                <p className="text-xs text-muted-foreground text-center">
                  Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности
                </p>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary border-t border-white/10">
        <div className="container py-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <span className="font-display text-lg font-600 tracking-wide text-white">
            ИРИНА <span className="text-accent">СОКОЛОВА</span>
          </span>
          <p className="text-sm text-white/50">© 2026 Ирина Соколова · Коуч, психолог</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;