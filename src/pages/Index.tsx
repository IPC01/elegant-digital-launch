import { useEffect, useState } from "react";
import {
  Building2, TrendingUp, Users, Wrench, Monitor, ShieldCheck,
  ArrowUpRight, MapPin, Mail, Twitter, Linkedin, Phone, Calendar, Sparkles
} from "lucide-react";
import heroImg from "@/assets/hero-identity.jpg";
import logoAsset from "@/assets/zipbcc-logo.png.asset.json";
const logoImg = logoAsset.url;
import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";
import project4 from "@/assets/project-4.jpg";

const metrics = [
  { value: "12+", label: "Anos de mercado", sub: "fundada em Maio de 2013" },
  { value: "40+", label: "Projectos entregues", sub: "engenharia e digital" },
  { value: "25+", label: "Clientes institucionais", sub: "público e privado" },
  { value: "99.9%", label: "Disponibilidade média", sub: "infraestrutura crítica" },
];

const projects = [
  { img: project1, tag: "Plataforma eID", title: "Dashboard Nacional de Identidade", desc: "Sistema centralizado de gestão de identidades digitais com analytics em tempo real.", year: "2025" },
  { img: project2, tag: "Mobile ID", title: "Autenticação SIM-based", desc: "Solução de autenticação móvel para operador de telecomunicações líder.", year: "2024" },
  { img: project3, tag: "Sector Público", title: "Quiosques de Enrolment Cidadão", desc: "Rede de pontos físicos para emissão e validação de credenciais digitais.", year: "2024" },
  { img: project4, tag: "PKI / Banca", title: "Infraestrutura de Chave Pública", desc: "CA hierárquica para assinatura de transações financeiras de alto volume.", year: "2025" },
];
import { useReveal } from "@/hooks/use-reveal";
import { ThemeToggle } from "@/components/ThemeToggle";

const services = [
  { icon: Building2, title: "Projectos de Infra-estrutura", desc: "Desenvolvimento de projectos de infra-estrutura, abrangendo edifícios, portos, linhas férreas, estradas e pontes com rigor técnico." },
  { icon: TrendingUp, title: "Soluções de Investimentos", desc: "Consultoria e estruturação de soluções de investimentos para projectos de média e grande dimensão." },
  { icon: Users, title: "Consultoria Diversa", desc: "Consultoria estratégica e técnica nas áreas de engenharia, IT e transformação digital." },
  { icon: Wrench, title: "Engenharia", desc: "Serviços de engenharia civil, mecânica e eléctrica, desde o desenho até à execução e fiscalização." },
  { icon: Monitor, title: "Soluções de Informática e Comunicações", desc: "Implementação de sistemas de informação, redes, telecomunicações e infra-estruturas tecnológicas." },
  { icon: ShieldCheck, title: "Manutenção e Conservação", desc: "Desenho de estratégias de manutenção e conservação de infra-estruturas, edifícios, portos, estradas e pontes." },
];

const translations = {
  pt: {
    nav: {
      sobre: "Sobre",
      servicos: "Serviços",
      casos: "Casos de Uso",
      projectos: "Projectos",
      abordagem: "Abordagem",
      visao: "Visão",
      agendar: "Falar connosco"
    },
    hero: {
      location: "Maputo · Moçambique · Digital & AI Partner",
      title1: "Engenharia",
      title2: "digital",
      title3: "para o futuro",
      title4: "de Moçambique",
      desc: "A ZIPBCC é o seu parceiro de tecnologia, engenharia e inteligência artificial. Desde 2013 desenhamos, implementamos e mantemos infra-estruturas, sistemas de informação e soluções digitais para instituições públicas e privadas.",
      button1: "Solicitar Proposta",
      button2: "Agendar Reunião",
      grid: [
        ["IT", "Software & Cloud"],
        ["AI", "Inteligência Artificial"],
        ["ENG", "Engenharia & Infra"],
        ["GOV", "Consultoria & Estratégia"],
      ]
    },
    vision: {
      section: "/ 05 — A NOSSA VISÃO",
      title: "A Nossa Visão",
      text: "Ser o parceiro digital e de inteligência artificial de referência em Moçambique, acelerando a transformação tecnológica das instituições e a competitividade do tecido empresarial.",
      focus: "DESDE 2013 · NUEL 100390205 · Maputo, Moçambique"
    },
    mission: {
      title: "A Nossa Missão",
      text: "Entregar projectos de engenharia, infra-estruturas, software e IA com excelência técnica, criando valor sustentável para clientes, parceiros e comunidades."
    },
    values: {
      title: "Por que a ZIPBCC",
      list: [
        "Mais de uma década de experiência em Moçambique",
        "Equipa multidisciplinar: engenharia, IT e IA",
        "Soluções end-to-end, da estratégia à operação",
        "Parcerias com fabricantes e marcas internacionais",
        "Compromisso com qualidade, prazos e conformidade"
      ]
    }
  },
  en: {
    nav: {
      sobre: "About",
      servicos: "Services",
      casos: "Use Cases",
      projectos: "Projects",
      abordagem: "Approach",
      visao: "Vision",
      agendar: "Talk to us"
    },
    hero: {
      location: "Maputo · Mozambique · Digital & AI Partner",
      title1: "Digital engineering",
      title2: "shaping",
      title3: "the future of",
      title4: "Mozambique",
      desc: "ZIPBCC is your technology, engineering and AI partner. Since 2013 we design, build and operate infrastructure, information systems and digital solutions for public and private institutions.",
      button1: "Request Proposal",
      button2: "Schedule Meeting",
      grid: [
        ["IT", "Software & Cloud"],
        ["AI", "Artificial Intelligence"],
        ["ENG", "Engineering & Infra"],
        ["GOV", "Strategy & Consulting"],
      ]
    },
    vision: {
      section: "/ 05 — OUR VISION",
      title: "Our Vision",
      text: "To be the leading digital & AI partner in Mozambique, accelerating institutional transformation and business competitiveness.",
      focus: "SINCE 2013 · NUEL 100390205 · Maputo, Mozambique"
    },
    mission: {
      title: "Our Mission",
      text: "Deliver engineering, infrastructure, software and AI projects with technical excellence, creating sustainable value for clients, partners and communities."
    },
    values: {
      title: "Why ZIPBCC",
      list: [
        "Over a decade of proven experience in Mozambique",
        "Multidisciplinary team: engineering, IT and AI",
        "End-to-end solutions, from strategy to operations",
        "Partnerships with international brands and vendors",
        "Commitment to quality, deadlines and compliance"
      ]
    }
  }
};

const Index = () => {
  useReveal();
  const [language, setLanguage] = useState('pt');
  const toggleLanguage = () => setLanguage(language === 'pt' ? 'en' : 'pt');
  const t = translations[language];
  const values = t.values.list;
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* NAV */}
      <header className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${scrolled ? "py-3 backdrop-blur-xl bg-background/70 border-b border-border" : "py-6 bg-transparent"}`}>
        <div className="container flex items-center justify-between">
          <a href="#top" className="flex items-center gap-2.5 group">
            <img src={logoImg} alt="ZIPBCC" className="w-10 h-10 object-contain group-hover:scale-105 transition-transform" />
            <div className="flex flex-col leading-none">
              <span className="font-display text-xl tracking-tight">ZIPBCC</span>
              <span className="text-[10px] font-mono text-muted-foreground tracking-wider hidden sm:block">DIGITAL & AI PARTNER</span>
            </div>
          </a>
          <nav className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
            <a href="#sobre" className="hover:text-foreground transition-colors">{t.nav.sobre}</a>
            <a href="#servicos" className="hover:text-foreground transition-colors">{t.nav.servicos}</a>
            <a href="#casos" className="hover:text-foreground transition-colors">{t.nav.casos}</a>
            <a href="#projectos" className="hover:text-foreground transition-colors">{t.nav.projectos}</a>
            <a href="#abordagem" className="hover:text-foreground transition-colors">{t.nav.abordagem}</a>
            <a href="#visao" className="hover:text-foreground transition-colors">{t.nav.visao}</a>
          </nav>
          <div className="flex items-center gap-2">
            <button onClick={toggleLanguage} className="w-8 h-8 rounded-sm border border-border grid place-items-center hover:border-primary hover:bg-primary/5 transition-all text-xs font-mono">
              {language === 'pt' ? 'EN' : 'PT'}
            </button>
            <ThemeToggle />
            <a href="#contacto" className="group inline-flex items-center gap-2 text-sm px-4 py-2 rounded-sm border border-border hover:border-primary hover:bg-primary/5 transition-all">
              {t.nav.agendar}
              <ArrowUpRight className="w-3.5 h-3.5 group-hover:rotate-45 transition-transform" />
            </a>
          </div>
        </div>
      </header>

      {/* HERO */}
      <section id="top" className="relative min-h-screen flex items-center pt-32 pb-20">
        <div className="absolute inset-0 bg-grid opacity-40 pointer-events-none" />
        <div
          className="absolute right-0 top-0 w-full md:w-[60%] h-full opacity-60 md:opacity-90 pointer-events-none"
          style={{
            backgroundImage: `url(${heroImg})`,
            backgroundSize: "cover",
            backgroundPosition: "center right",
            maskImage: "linear-gradient(to left, black 30%, transparent 90%)",
            WebkitMaskImage: "linear-gradient(to left, black 30%, transparent 90%)",
          }}
        />
        <div className="absolute right-[10%] top-[20%] w-[500px] h-[500px] rounded-full bg-primary/10 blur-[120px] animate-pulse-glow pointer-events-none" />

        <div className="container relative">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-border bg-card/50 backdrop-blur text-xs font-mono text-muted-foreground mb-8 animate-fade-in">
              <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
              {t.hero.location}
            </div>
            <h1 className="font-display text-5xl md:text-7xl lg:text-8xl leading-[0.95] mb-8 animate-fade-up">
              {t.hero.title1}
              <br />
              <span className="italic font-light text-gradient">{t.hero.title2}</span> {t.hero.title3}
              <br />
              {t.hero.title4}.
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-xl mb-10 leading-relaxed animate-fade-up" style={{ animationDelay: "150ms" }}>
              {t.hero.desc}
            </p>
            <div className="flex flex-wrap gap-3 animate-fade-up" style={{ animationDelay: "300ms" }}>
              <a href="#contacto" className="group inline-flex items-center gap-2 px-6 py-3.5 rounded-sm bg-foreground text-background font-medium hover:bg-primary hover:text-primary-foreground transition-all shadow-elegant">
                {t.hero.button1}
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
              <a href="#contacto" className="inline-flex items-center gap-2 px-6 py-3.5 rounded-sm border border-border hover:border-primary hover:bg-primary/5 transition-all">
                {t.hero.button2}
              </a>
            </div>
          </div>

          <div className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-px bg-border/60 border border-border rounded-sm overflow-hidden max-w-4xl">
            {t.hero.grid.map(([k, v]) => (
              <div key={k} className="bg-card p-5">
                <div className="font-mono text-xs text-primary mb-1">{k}</div>
                <div className="text-sm text-muted-foreground">{v}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="sobre" className="py-32 relative">
        <div className="container grid md:grid-cols-12 gap-12 items-start">
          <div className="md:col-span-4 reveal">
            <div className="font-mono text-xs text-primary mb-4">/ 01 — SOBRE</div>
            <h2 className="font-display text-4xl md:text-5xl leading-tight">
              Mais de uma década a construir <span className="italic text-gradient">Moçambique</span> digital.
            </h2>
          </div>
          <div className="md:col-span-7 md:col-start-6 space-y-6 reveal">
            <p className="text-lg text-muted-foreground leading-relaxed">
              A <span className="text-foreground">ZIPBCC, Lda</span> é uma sociedade por quotas constituída a
              17 de Maio de 2013, com sede em Maputo. Combinamos engenharia, infra-estruturas e
              soluções de informática e comunicações para entregar projectos completos, da concepção
              à operação.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Operamos em áreas tão diversas como desenho e manutenção de infra-estruturas, edifícios,
              portos, vias férreas, estradas e pontes, mas também em <span className="text-foreground">software,
              cloud e inteligência artificial</span> — sempre como parceiro digital de confiança dos nossos clientes.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4">
              <div className="border border-border rounded-sm p-3">
                <div className="font-mono text-[10px] text-primary mb-1">NUEL</div>
                <div className="text-sm">100390205</div>
              </div>
              <div className="border border-border rounded-sm p-3">
                <div className="font-mono text-[10px] text-primary mb-1">FUNDADA</div>
                <div className="text-sm">17 Mai 2013</div>
              </div>
              <div className="border border-border rounded-sm p-3">
                <div className="font-mono text-[10px] text-primary mb-1">TIPO</div>
                <div className="text-sm">Soc. por Quotas</div>
              </div>
              <div className="border border-border rounded-sm p-3">
                <div className="font-mono text-[10px] text-primary mb-1">SEDE</div>
                <div className="text-sm">Maputo, MZ</div>
              </div>
            </div>
            <div className="pt-4 grid grid-cols-2 gap-4">
              {values.map((v, i) => (
                <div key={i} className="flex gap-3 items-start">
                  <ChevronRight className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                  <span className="text-sm text-muted-foreground">{v}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      

      {/* SERVICES */}
      <section id="servicos" className="py-32 relative border-t border-border">
        <div className="container">
          <div className="flex items-end justify-between mb-16 reveal">
            <div>
              <div className="font-mono text-xs text-primary mb-4">/ 02 — SERVIÇOS</div>
              <h2 className="font-display text-4xl md:text-6xl leading-tight max-w-2xl">
                Serviços <span className="italic text-gradient-accent">principais</span>.
              </h2>
            </div>
            <div className="hidden md:block text-sm text-muted-foreground max-w-xs">
              Cinco pilares que sustentam a infraestrutura de identidade digital moderna.
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-border rounded-sm overflow-hidden border border-border">
            {services.map((s, i) => {
              const Icon = s.icon;
              return (
                <div key={i} className="group bg-card p-8 lg:p-10 hover:bg-secondary/40 transition-all duration-500 reveal" style={{ transitionDelay: `${i * 60}ms` }}>
                  <div className="flex items-start justify-between mb-8">
                    <div className="w-12 h-12 rounded-sm border border-border grid place-items-center group-hover:border-primary group-hover:bg-primary/10 transition-all">
                      <Icon className="w-5 h-5 text-primary" strokeWidth={1.5} />
                    </div>
                    <span className="font-mono text-xs text-muted-foreground">0{i + 1}</span>
                  </div>
                  <h3 className="font-display text-2xl mb-3 leading-tight">{s.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
                </div>
              );
            })}
            <div className="bg-gradient-card p-8 lg:p-10 flex flex-col justify-between reveal">
              <div className="font-mono text-xs text-muted-foreground">→ Mais</div>
              <a href="#contacto" className="group">
                <h3 className="font-display text-2xl leading-tight">
                  Vamos conversar sobre o seu projecto.
                  <ArrowUpRight className="inline-block w-6 h-6 ml-2 group-hover:rotate-45 group-hover:text-primary transition-all" />
                </h3>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* USE CASES */}
      <section id="casos" className="py-32 border-t border-border">
        <div className="container">
          <div className="mb-16 reveal">
            <div className="font-mono text-xs text-primary mb-4">/ 03 — CASOS DE USO</div>
            <h2 className="font-display text-4xl md:text-6xl leading-tight max-w-3xl">
              Quatro sectores. Uma <span className="italic text-gradient">infraestrutura</span> comum.
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {useCases.map((u, i) => {
              const Icon = u.icon;
              return (
                <div key={i} className="glass rounded-sm p-7 hover-lift reveal" style={{ transitionDelay: `${i * 80}ms` }}>
                  <Icon className="w-7 h-7 text-primary mb-6" strokeWidth={1.5} />
                  <div className="font-mono text-xs text-accent mb-2">{u.tag.toUpperCase()}</div>
                  <ul className="space-y-3 mt-6">
                    {u.items.map((it, k) => (
                      <li key={k} className="text-sm text-muted-foreground flex gap-2 items-start border-t border-border pt-3 first:border-0 first:pt-0">
                        <span className="text-primary mt-0.5">·</span>
                        {it}
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projectos" className="py-32 border-t border-border">
        <div className="container">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 reveal">
            <div>
              <div className="font-mono text-xs text-primary mb-4">/ PROJECTOS</div>
              <h2 className="font-display text-4xl md:text-6xl leading-tight max-w-3xl">
                Selecção de <span className="italic text-gradient-accent">trabalhos</span> recentes.
              </h2>
            </div>
            <p className="text-sm text-muted-foreground max-w-sm">
              Implementações em ambientes reais — da concepção arquitetural à operação assistida.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-4">
            {projects.map((p, i) => (
              <article
                key={i}
                className="group relative overflow-hidden rounded-sm border border-border bg-card hover-lift reveal"
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <div className="aspect-[4/3] overflow-hidden relative">
                  <img
                    src={p.img}
                    alt={p.title}
                    width={1024}
                    height={768}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-card/20 to-transparent" />
                  <div className="absolute top-4 left-4 px-2.5 py-1 rounded-sm bg-background/70 backdrop-blur border border-border font-mono text-[11px] text-primary">
                    {p.tag}
                  </div>
                  <div className="absolute top-4 right-4 font-mono text-[11px] text-muted-foreground">
                    {p.year}
                  </div>
                </div>
                <div className="p-5">
                  <div className="flex items-start justify-between gap-4 mb-3">
                    <h3 className="font-display text-xl leading-tight group-hover:text-gradient transition-all">
                      {p.title}
                    </h3>
                    <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:rotate-45 transition-all flex-shrink-0 mt-1" />
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* APPROACH */}
      <section id="abordagem" className="py-32 border-t border-border">
        <div className="container">
          <div className="grid md:grid-cols-12 gap-12 mb-16">
            <div className="md:col-span-5 reveal">
              <div className="font-mono text-xs text-primary mb-4">/ 04 — A NOSSA ABORDAGEM</div>
              <h2 className="font-display text-4xl md:text-6xl leading-tight">
                Quatro etapas, <span className="italic text-gradient-accent">um caminho</span> claro.
              </h2>
            </div>
          </div>

          <div className="relative">
            <div className="absolute left-0 right-0 top-[60px] h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent hidden md:block" />
            <div className="grid md:grid-cols-4 gap-6">
              {steps.map((s, i) => (
                <div key={i} className="relative reveal" style={{ transitionDelay: `${i * 100}ms` }}>
                  <div className="relative z-10 bg-card border border-border rounded-sm p-6 h-full hover-lift">
                    <div className="flex items-baseline justify-between mb-8">
                      <span className="font-display text-5xl text-gradient">{s.n}</span>
                      <div className="w-2 h-2 rounded-full bg-primary shadow-glow" />
                    </div>
                    <h3 className="font-display text-xl mb-2">{s.t}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{s.d}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* VISION */}
      <section id="visao" className="py-32 border-t border-border relative overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-30 pointer-events-none" />
        <div className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-primary/5 blur-[120px] pointer-events-none" />
        <div className="container relative">
          <div className="max-w-6xl mx-auto reveal">
            <div className="font-mono text-xs text-primary mb-6 text-center">{t.vision.section}</div>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="text-center">
                <h3 className="font-display text-2xl mb-4">{t.vision.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{t.vision.text}</p>
              </div>
              <div className="text-center">
                <h3 className="font-display text-2xl mb-4">{t.mission.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{t.mission.text}</p>
              </div>
            </div>
            <div className="mt-12 text-center">
              <div className="inline-flex items-center gap-3 text-sm text-muted-foreground font-mono">
                <span className="w-8 h-px bg-primary" />
                {t.vision.focus}
                <span className="w-8 h-px bg-primary" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="contacto" className="py-32 border-t border-border">
        <div className="container">
          <div className="glass rounded-sm p-10 md:p-16 relative overflow-hidden reveal">
            <div className="absolute -right-20 -top-20 w-80 h-80 rounded-full bg-gradient-accent opacity-20 blur-[80px]" />
            <div className="relative grid md:grid-cols-12 gap-10 items-end">
              <div className="md:col-span-7">
                <div className="font-mono text-xs text-primary mb-6">/ CONTACTO</div>
                <h2 className="font-display text-4xl md:text-6xl leading-[1.05] mb-6">
                  Vamos construir o seu próximo <span className="italic text-gradient">projecto</span> digital.
                </h2>
                <p className="text-muted-foreground text-lg max-w-xl">
                  Engenharia, software e IA num só parceiro. Estamos abertos a propostas, concursos e parcerias estratégicas.
                </p>
                <div className="mt-8 space-y-3 text-sm">
                  <div className="flex items-center gap-3 text-muted-foreground">
                    <MapPin className="w-4 h-4 text-primary" />
                    Rua Alfred Keil nº 75, 1º Andar · Polana · KaMpfumo · Maputo
                  </div>
                  <a href="mailto:geral@zipbcc.co.mz" className="flex items-center gap-3 hover:text-foreground transition-colors text-muted-foreground">
                    <Mail className="w-4 h-4 text-primary" /> geral@zipbcc.co.mz
                  </a>
                  <a href="tel:+258213000000" className="flex items-center gap-3 hover:text-foreground transition-colors text-muted-foreground">
                    <Phone className="w-4 h-4 text-primary" /> +258 21 300 000 · +258 84 300 0000
                  </a>
                </div>
              </div>
              <div className="md:col-span-5 space-y-3">
                {[
                  "Solicitar Proposta Comercial",
                  "Agendar Reunião Técnica",
                  "Explorar Parcerias Estratégicas",
                ].map((t, i) => (
                  <a
                    key={i}
                    href="mailto:comercial@zipbcc.co.mz"
                    className="group flex items-center justify-between gap-4 px-5 py-4 rounded-sm border border-border bg-background/40 hover:border-primary hover:bg-primary/5 transition-all"
                  >
                    <span className="text-sm md:text-base">{t}</span>
                    <ArrowUpRight className="w-4 h-4 text-muted-foreground group-hover:text-primary group-hover:rotate-45 transition-all" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
{/* METRICS */}
      <section id="metricas" className="py-24 border-t border-border relative overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-20 pointer-events-none" />
        <div className="absolute left-1/3 top-0 w-[500px] h-[500px] rounded-full bg-accent/10 blur-[120px] pointer-events-none" />
        <div className="container relative">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14 reveal">
            <div>
              <div className="font-mono text-xs text-primary mb-4">/ EM NÚMEROS</div>
              <h2 className="font-display text-4xl md:text-5xl leading-tight max-w-2xl">
                Resultados que <span className="italic text-gradient">comprovam</span> a nossa entrega.
              </h2>
            </div>
            <p className="text-sm text-muted-foreground max-w-sm">
              Métricas consolidadas desde a fundação — projectos em ambiente real, com instituições de referência.
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-border border border-border rounded-sm overflow-hidden">
            {metrics.map((m, i) => (
              <div key={i} className="bg-card p-8 lg:p-10 group hover:bg-secondary/40 transition-all reveal" style={{ transitionDelay: `${i * 80}ms` }}>
                <div className="font-display text-5xl md:text-6xl text-gradient mb-4 group-hover:scale-105 transition-transform origin-left">
                  {m.value}
                </div>
                <div className="text-foreground font-medium mb-1">{m.label}</div>
                <div className="text-xs font-mono text-muted-foreground uppercase tracking-wider">{m.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* FOOTER */}
      <footer className="border-t border-border py-12">
        <div className="container grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <img src={logoImg} alt="ZIPBCC" className="w-9 h-9 object-contain" />
              <div className="flex flex-col leading-none">
                <span className="font-display text-xl">ZIPBCC</span>
                <span className="text-[10px] font-mono text-muted-foreground tracking-wider">YOUR DIGITAL & AI PARTNER</span>
              </div>
            </div>
            <p className="text-sm text-muted-foreground max-w-xs leading-relaxed">
              ZIPBCC, Lda — engenharia, infra-estruturas, soluções de informática e IA. A construir Moçambique digital desde 2013.
            </p>
            <div className="mt-4 space-y-1 text-[11px] font-mono text-muted-foreground">
              <div>NUEL · 100390205</div>
              <div>SOC. POR QUOTAS · 40.000,00 MT</div>
            </div>
          </div>
          <div>
            <h3 className="font-medium mb-4 text-sm">Links Rápidos</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#sobre" className="hover:text-foreground transition-colors">Sobre</a></li>
              <li><a href="#servicos" className="hover:text-foreground transition-colors">Serviços</a></li>
              <li><a href="#casos" className="hover:text-foreground transition-colors">Casos de Uso</a></li>
              <li><a href="#projectos" className="hover:text-foreground transition-colors">Projectos</a></li>
              <li><a href="#contacto" className="hover:text-foreground transition-colors">Contactos</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-medium mb-4 text-sm">Contactos</h3>
            <div className="space-y-2 text-sm text-muted-foreground">
              <div className="flex gap-2 items-start">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>Rua Alfred Keil nº 75, 1º Andar<br/>Polana · KaMpfumo · Maputo</span>
              </div>
              <a href="mailto:geral@zipbcc.co.mz" className="flex items-center gap-2 hover:text-foreground transition-colors">
                <Mail className="w-4 h-4" /> geral@zipbcc.co.mz
              </a>
              <a href="tel:+258213000000" className="flex items-center gap-2 hover:text-foreground transition-colors">
                <Phone className="w-4 h-4" /> +258 21 300 000
              </a>
            </div>
          </div>
          <div>
            <h3 className="font-medium mb-4 text-sm">Redes Sociais</h3>
            <div className="flex gap-3">
              <a href="#" className="w-8 h-8 rounded-sm border border-border grid place-items-center hover:border-primary hover:bg-primary/5 transition-all">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href="#" className="w-8 h-8 rounded-sm border border-border grid place-items-center hover:border-primary hover:bg-primary/5 transition-all">
                <Twitter className="w-4 h-4" />
              </a>
            </div>
            <div className="mt-6 text-[11px] font-mono text-muted-foreground leading-relaxed">
              HORÁRIO<br/>
              Seg–Sex · 08:00 — 17:00
            </div>
          </div>
        </div>
        <div className="container mt-8 pt-8 border-t border-border text-center text-xs font-mono text-muted-foreground">
          © {new Date().getFullYear()} ZIPBCC, LDA · Todos os direitos reservados
        </div>
      </footer>
    </div>
  );
};

export default Index;
