import { useState } from 'react';
import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

const HERO_IMG =
  'https://cdn.poehali.dev/projects/7f0dedbb-678a-4c4a-b7ef-c0ade51dd1d6/files/c7e7e15f-47a7-4eff-a7e1-d142a3331a1c.jpg';

const NAV = [
  { label: 'О компании', href: '#about' },
  { label: 'Услуги', href: '#services' },
  { label: 'Преимущества', href: '#advantages' },
  { label: 'Контакты', href: '#contacts' },
];

const SERVICES = [
  {
    icon: 'Briefcase',
    title: 'Бизнес-консалтинг',
    text: 'Стратегический анализ и развитие компании на основе данных и опыта.',
  },
  {
    icon: 'TrendingUp',
    title: 'Финансовое планирование',
    text: 'Оптимизация бюджета, управление рисками и рост прибыли.',
  },
  {
    icon: 'Scale',
    title: 'Юридическое сопровождение',
    text: 'Полная правовая защита сделок и корпоративных процессов.',
  },
  {
    icon: 'Users',
    title: 'Управление персоналом',
    text: 'Подбор, развитие и удержание ключевых специалистов.',
  },
];

const ADVANTAGES = [
  { icon: 'Award', title: '15 лет на рынке', text: 'Безупречная репутация и сотни успешных проектов.' },
  { icon: 'ShieldCheck', title: 'Гарантия результата', text: 'Работаем на показатели, а не на процесс.' },
  { icon: 'Clock', title: 'Точно в срок', text: 'Соблюдаем дедлайны и держим слово.' },
  { icon: 'Headphones', title: 'Поддержка 24/7', text: 'Персональный менеджер всегда на связи.' },
];

const STATS = [
  { value: '15+', label: 'лет опыта' },
  { value: '500+', label: 'клиентов' },
  { value: '98%', label: 'довольных' },
  { value: '40+', label: 'экспертов' },
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
          <a href="#" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-primary flex items-center justify-center">
              <Icon name="Hexagon" size={18} className="text-accent" />
            </div>
            <span className="font-display text-xl font-600 tracking-wide text-primary">МЕРИДИАН</span>
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
            <a href="#contacts">Связаться</a>
          </Button>
        </div>
      </header>

      {/* Hero */}
      <section className="relative min-h-screen flex items-center pt-16 overflow-hidden">
        <div className="absolute inset-0">
          <img src={HERO_IMG} alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-primary/85" />
        </div>
        <div className="container relative z-10 py-24">
          <div className="max-w-3xl animate-fade-in">
            <div className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 border border-accent/40">
              <span className="w-1.5 h-1.5 bg-accent" />
              <span className="text-xs uppercase tracking-[0.2em] text-accent">Деловые решения</span>
            </div>
            <h1 className="font-display text-5xl md:text-7xl font-700 leading-[1.05] text-white text-balance">
              Стратегия роста для вашего бизнеса
            </h1>
            <p className="mt-6 text-lg text-white/70 max-w-xl leading-relaxed">
              Помогаем компаниям выстраивать устойчивые процессы, увеличивать прибыль и уверенно
              двигаться вперёд.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Button asChild size="lg" className="rounded-none bg-accent text-accent-foreground hover:bg-accent/90">
                <a href="#contacts">Оставить заявку</a>
              </Button>
              <Button asChild size="lg" variant="outline" className="rounded-none border-white/30 text-white bg-transparent hover:bg-white/10 hover:text-white">
                <a href="#services">Наши услуги</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-primary">
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
          <div>
            <span className="text-xs uppercase tracking-[0.2em] text-accent">О компании</span>
            <h2 className="font-display text-4xl md:text-5xl font-700 mt-3 text-primary leading-tight">
              Надёжный партнёр с 2010 года
            </h2>
            <p className="mt-6 text-muted-foreground leading-relaxed">
              «Меридиан» — это команда экспертов, объединённых единой целью: помогать бизнесу
              достигать амбициозных результатов. Мы сочетаем глубокую аналитику, отраслевой опыт и
              индивидуальный подход к каждому клиенту.
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              За годы работы мы реализовали сотни проектов в самых разных сферах — от стартапов до
              крупных корпораций.
            </p>
            <div className="mt-8 space-y-3">
              {['Прозрачные процессы и отчётность', 'Команда сертифицированных экспертов', 'Индивидуальная стратегия для каждого'].map(
                (t) => (
                  <div key={t} className="flex items-center gap-3">
                    <Icon name="Check" size={18} className="text-accent shrink-0" />
                    <span className="text-foreground">{t}</span>
                  </div>
                ),
              )}
            </div>
          </div>
          <div className="relative">
            <div className="absolute -top-4 -left-4 w-full h-full border-2 border-accent/30" />
            <img src={HERO_IMG} alt="Офис компании Меридиан" className="relative w-full h-[440px] object-cover" />
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-24 md:py-32 bg-secondary">
        <div className="container">
          <div className="max-w-2xl mb-16">
            <span className="text-xs uppercase tracking-[0.2em] text-accent">Услуги</span>
            <h2 className="font-display text-4xl md:text-5xl font-700 mt-3 text-primary leading-tight">
              Полный спектр деловых услуг
            </h2>
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
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Advantages */}
      <section id="advantages" className="py-24 md:py-32">
        <div className="container">
          <div className="max-w-2xl mb-16">
            <span className="text-xs uppercase tracking-[0.2em] text-accent">Преимущества</span>
            <h2 className="font-display text-4xl md:text-5xl font-700 mt-3 text-primary leading-tight">
              Почему выбирают нас
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {ADVANTAGES.map((a) => (
              <div key={a.title} className="border-t-2 border-accent pt-6">
                <Icon name={a.icon} size={28} className="text-primary" />
                <h3 className="font-display text-lg font-600 mt-4 text-primary">{a.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{a.text}</p>
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
              Оставьте заявку
            </h2>
            <p className="mt-6 text-white/70 leading-relaxed max-w-md">
              Заполните форму, и наш специалист свяжется с вами в течение рабочего дня для бесплатной
              консультации.
            </p>
            <div className="mt-10 space-y-5">
              {[
                { icon: 'Phone', text: '+7 (495) 000-00-00' },
                { icon: 'Mail', text: 'info@meridian.ru' },
                { icon: 'MapPin', text: 'Москва, Пресненская наб., 12' },
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
                <p className="mt-2 text-muted-foreground">Мы свяжемся с вами в ближайшее время.</p>
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
                  <label className="text-sm font-500 text-primary uppercase tracking-wider">Сообщение</label>
                  <Textarea
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    placeholder="Опишите вашу задачу"
                    rows={4}
                    className="mt-2 rounded-none resize-none"
                  />
                </div>
                <Button type="submit" size="lg" className="w-full rounded-none bg-accent text-accent-foreground hover:bg-accent/90">
                  Отправить заявку
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
          <div className="flex items-center gap-2">
            <Icon name="Hexagon" size={16} className="text-accent" />
            <span className="font-display text-lg font-600 tracking-wide text-white">МЕРИДИАН</span>
          </div>
          <p className="text-sm text-white/50">© 2026 Меридиан. Все права защищены.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
