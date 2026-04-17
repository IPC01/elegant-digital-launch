import { useEffect, useState } from "react";
import {
  ShieldCheck, Fingerprint, KeyRound, Network, Lock, Sparkles,
  ArrowUpRight, Building2, Smartphone, Banknote, Briefcase,
  ChevronRight, MapPin, Mail
} from "lucide-react";
import heroImg from "@/assets/hero-identity.jpg";
import logoImg from "@/assets/logo.png";
import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";
import project4 from "@/assets/project-4.jpg";

const metrics = [
  { value: "12+", label: "Projectos entregues", sub: "em fase piloto e produção" },
  { value: "08", label: "Clientes institucionais", sub: "governo, telecom e banca" },
  { value: "99.9%", label: "Disponibilidade média", sub: "infraestrutura crítica" },
  { value: "4", label: "Sectores estratégicos", sub: "cobertura nacional" },
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
  { icon: Fingerprint, title: "Sistemas de Identidade Digital", desc: "Mobile ID baseado em SIM, sistemas eID e plataformas seguras de autenticação." },
  { icon: KeyRound, title: "Infraestrutura de Chave Pública", desc: "Configuração de Autoridades de Certificação, gestão do ciclo de vida e validação." },
  { icon: Network, title: "Integração de Sistemas", desc: "Camadas de identidade em sistemas existentes, APIs seguras e autenticação." },
  { icon: ShieldCheck, title: "Cibersegurança e Conformidade", desc: "Estruturas de autenticação, conformidade de assinatura digital e mitigação de fraude." },
  { icon: Sparkles, title: "Consultoria e Estratégia", desc: "Transformação digital, arquitetura técnica e apoio institucional." },
];

const useCases = [
  { icon: Building2, tag: "Governo", items: ["Identidade digital para serviços públicos", "Autenticação segura", "Assinaturas digitais"] },
  { icon: Smartphone, tag: "Telecom", items: ["Implementação de Mobile ID", "Infraestrutura de identidade", "Geração de receita"] },
  { icon: Banknote, tag: "Financeiro", items: ["Onboarding KYC seguro", "Autenticação de transações", "Prevenção de fraude"] },
  { icon: Briefcase, tag: "Sector Privado", items: ["Autenticação de colaboradores", "Contratos digitais", "Controlo de acesso"] },
];

const steps = [
  { n: "01", t: "Avaliação Institucional", d: "Diagnóstico do contexto, requisitos regulatórios e maturidade digital." },
  { n: "02", t: "Desenho da Solução", d: "Arquitetura técnica alinhada aos quadros nacionais e melhores práticas." },
  { n: "03", t: "Apoio à Implementação", d: "Acompanhamento técnico, integração e validação de cada componente." },
  { n: "04", t: "Suporte e Capacitação", d: "Formação contínua e operação assistida para autonomia institucional." },
];

const values = [
  "Alinhamento com quadros nacionais de certificação digital",
  "Soluções escaláveis para mercados emergentes",
  "Integração com infraestruturas de telecomunicações",
  "Promoção da inclusão financeira e acesso digital",
  "Forte foco em segurança e confiança",
];

const Index = () => {
  useReveal();
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
            <img src={logoImg} alt="ePersona" className="w-9 h-9 rounded-sm object-cover shadow-glow group-hover:scale-105 transition-transform" />
            <span className="font-display text-xl tracking-tight">ePersona</span>
          </a>
          <nav className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
            <a href="#sobre" className="hover:text-foreground transition-colors">Sobre</a>
            <a href="#servicos" className="hover:text-foreground transition-colors">Serviços</a>
            <a href="#casos" className="hover:text-foreground transition-colors">Casos de Uso</a>
            <a href="#projectos" className="hover:text-foreground transition-colors">Projectos</a>
            <a href="#abordagem" className="hover:text-foreground transition-colors">Abordagem</a>
            <a href="#visao" className="hover:text-foreground transition-colors">Visão</a>
          </nav>
          <div className="flex items-center gap-2">
            <ThemeToggle />
            <a href="#contacto" className="group inline-flex items-center gap-2 text-sm px-4 py-2 rounded-sm border border-border hover:border-primary hover:bg-primary/5 transition-all">
              Agendar
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
              Maputo · Moçambique · Identidade Digital
            </div>
            <h1 className="font-display text-5xl md:text-7xl lg:text-8xl leading-[0.95] mb-8 animate-fade-up">
              Infraestrutura
              <br />
              <span className="italic font-light text-gradient">segura</span> de
              <br />
              identidade <span className="text-gradient-accent">digital</span>.
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-xl mb-10 leading-relaxed animate-fade-up" style={{ animationDelay: "150ms" }}>
              A ePersona apoia instituições governamentais, operadores de telecomunicações e empresas
              na concepção de sistemas seguros de identidade, autenticação e assinatura — alinhados
              com os quadros nacionais.
            </p>
            <div className="flex flex-wrap gap-3 animate-fade-up" style={{ animationDelay: "300ms" }}>
              <a href="#contacto" className="group inline-flex items-center gap-2 px-6 py-3.5 rounded-sm bg-foreground text-background font-medium hover:bg-primary hover:text-primary-foreground transition-all shadow-elegant">
                Solicitar Apresentação Institucional
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
              <a href="#contacto" className="inline-flex items-center gap-2 px-6 py-3.5 rounded-sm border border-border hover:border-primary hover:bg-primary/5 transition-all">
                Agendar Consulta
              </a>
            </div>
          </div>

          <div className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-px bg-border/60 border border-border rounded-sm overflow-hidden max-w-4xl">
            {[
              ["PKI", "Chave Pública"],
              ["eID", "Identidade Digital"],
              ["Mobile ID", "SIM-based"],
              ["KYC", "Onboarding seguro"],
            ].map(([k, v]) => (
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
              Construindo <span className="italic text-gradient">confiança</span> digital em Moçambique.
            </h2>
          </div>
          <div className="md:col-span-7 md:col-start-6 space-y-6 reveal">
            <p className="text-lg text-muted-foreground leading-relaxed">
              A ePersona é uma empresa emergente de consultoria em tecnologias de informação e
              infraestruturas digitais, focada em <span className="text-foreground">sistemas seguros de identidade</span>,
              Infraestrutura de Chave Pública (PKI) e mecanismos de autenticação.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Desenvolvemos capacidades para apoiar instituições públicas e privadas na criação de
              ecossistemas digitais confiáveis e escaláveis — que permitam acesso seguro, assinaturas
              digitais e verificação de identidade.
            </p>
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

          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((p, i) => (
              <article
                key={i}
                className="group relative overflow-hidden rounded-sm border border-border bg-card hover-lift reveal"
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <div className="aspect-[16/10] overflow-hidden relative">
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
                <div className="p-7">
                  <div className="flex items-start justify-between gap-4 mb-3">
                    <h3 className="font-display text-2xl leading-tight group-hover:text-gradient transition-all">
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
          <div className="max-w-4xl mx-auto text-center reveal">
            <div className="font-mono text-xs text-primary mb-6">/ 05 — A NOSSA VISÃO</div>
            <blockquote className="font-display text-3xl md:text-5xl lg:text-6xl leading-[1.1] tracking-tight">
              Contribuir para o desenvolvimento de uma <span className="italic text-gradient">economia digital</span> segura e inclusiva em Moçambique — onde indivíduos e instituições interagem com <span className="text-gradient-accent">confiança</span> e eficiência.
            </blockquote>
            <div className="mt-12 inline-flex items-center gap-3 text-sm text-muted-foreground font-mono">
              <span className="w-8 h-px bg-primary" />
              FOCO ACTUAL · Em fase de desenvolvimento, abertos a parcerias e projectos-piloto
              <span className="w-8 h-px bg-primary" />
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
                  Vamos construir o seu <span className="italic text-gradient">ecossistema</span> de identidade digital.
                </h2>
                <p className="text-muted-foreground text-lg max-w-xl">
                  Estamos abertos a parcerias estratégicas, projectos-piloto e implementações colaborativas.
                </p>
              </div>
              <div className="md:col-span-5 space-y-3">
                {[
                  "Agendar Reunião Inicial",
                  "Solicitar Discussão Técnica",
                  "Explorar Oportunidades de Parceria",
                ].map((t, i) => (
                  <a
                    key={i}
                    href="mailto:marvin@e-persona.com"
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

      {/* FOOTER */}
      <footer className="border-t border-border py-12">
        <div className="container grid md:grid-cols-3 gap-8 items-center">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-sm bg-gradient-accent grid place-items-center">
              <Lock className="w-4 h-4 text-primary-foreground" strokeWidth={2.5} />
            </div>
            <span className="font-display text-xl">ePersona</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-muted-foreground md:justify-center">
            <MapPin className="w-4 h-4" /> Maputo, Moçambique
          </div>
          <a href="mailto:marvin@e-persona.com" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors md:justify-end">
            <Mail className="w-4 h-4" /> marvin@e-persona.com
          </a>
        </div>
        <div className="container mt-8 pt-8 border-t border-border flex flex-col md:flex-row justify-between gap-3 text-xs font-mono text-muted-foreground">
          <span>© {new Date().getFullYear()} ePersona — Todos os direitos reservados</span>
          <span>Identidade Digital · PKI · Autenticação</span>
        </div>
      </footer>
    </div>
  );
};

export default Index;
