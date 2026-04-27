import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import logo from "@/assets/referencia-logo.png";
import fox from "@/assets/referencia-fox.png";
import hero from "@/assets/hero-writing.jpg";
import { Button } from "@/components/ui/button";
import {
  PenLine, BookOpen, GraduationCap, Sparkles, ArrowRight, ArrowUpRight,
  CheckCircle2, Quote, Instagram, Mail, MapPin, Phone, Menu, X,
} from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Referência — Centro de Ensino | Linguagens e Redação" },
      { name: "description", content: "Desenvolva seu potencial de escrita com a metodologia estratégica da Referência. ENEM, Ensino Fundamental e Capacitações." },
    ],
  }),
  component: Index,
});

function Index() {
  const [open, setOpen] = useState(false);

  const nav = [
    { href: "#metodologia", label: "Metodologia" },
    { href: "#cursos", label: "Cursos" },
    { href: "#manifesto", label: "Manifesto" },
    { href: "#contato", label: "Contato" },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* NAV */}
      <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-xl bg-background/70 border-b border-border/40">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 h-16 sm:h-20 flex items-center justify-between">
          <a href="#top" className="flex items-center gap-2.5 sm:gap-3 min-w-0">
            <img src={fox} alt="Referência" className="h-8 sm:h-10 w-auto shrink-0" />
            <div className="leading-tight min-w-0">
              <div className="font-serif text-base sm:text-lg tracking-wide truncate">REFERÊNCIA</div>
              <div className="text-[9px] sm:text-[10px] tracking-[0.22em] text-muted-foreground">CENTRO DE ENSINO</div>
            </div>
          </a>
          <nav className="hidden lg:flex items-center gap-10 text-sm">
            {nav.map((n) => (
              <a key={n.href} href={n.href} className="relative text-foreground/80 hover:text-[var(--gold)] transition-colors">{n.label}</a>
            ))}
          </nav>
          <div className="flex items-center gap-2">
            <Button asChild className="hidden sm:inline-flex bg-[var(--ink)] text-[var(--cream)] hover:bg-[var(--ink)]/90 rounded-full px-5 h-10 text-sm">
              <a href="#contato">Matricule-se</a>
            </Button>
            <button
              onClick={() => setOpen(!open)}
              aria-label="Menu"
              className="lg:hidden h-10 w-10 inline-flex items-center justify-center rounded-full border border-border"
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
        {/* Mobile menu */}
        {open && (
          <div className="lg:hidden border-t border-border bg-background/95 backdrop-blur-xl">
            <nav className="px-5 py-6 flex flex-col gap-1">
              {nav.map((n) => (
                <a
                  key={n.href}
                  href={n.href}
                  onClick={() => setOpen(false)}
                  className="py-3 text-base border-b border-border/50 flex items-center justify-between"
                >
                  {n.label} <ArrowUpRight className="h-4 w-4 text-[var(--gold)]" />
                </a>
              ))}
              <Button asChild className="mt-4 bg-[var(--ink)] text-[var(--cream)] rounded-full h-11">
                <a href="#contato" onClick={() => setOpen(false)}>Matricule-se</a>
              </Button>
            </nav>
          </div>
        )}
      </header>

      {/* HERO */}
      <section id="top" className="relative pt-28 sm:pt-32 lg:pt-40 pb-16 sm:pb-24 lg:pb-32 px-5 sm:px-8 lg:px-10">
        {/* ambient blobs */}
        <div className="absolute top-20 -left-32 h-72 w-72 rounded-full bg-[var(--gold)]/15 blur-3xl pointer-events-none" />
        <div className="absolute top-40 right-0 h-96 w-96 rounded-full bg-[var(--gold)]/10 blur-3xl pointer-events-none" />

        <div className="relative max-w-7xl mx-auto grid lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          <div className="lg:col-span-7 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 rounded-full border border-[var(--gold)]/30 bg-[var(--gold)]/5 text-[10px] sm:text-xs tracking-[0.2em] uppercase text-[var(--gold)] mb-6 sm:mb-8">
              <Sparkles className="h-3 w-3 sm:h-3.5 sm:w-3.5" /> Linguagens & Redação
            </div>
            <h1 className="font-serif text-[2.5rem] leading-[1.05] sm:text-5xl md:text-6xl lg:text-7xl tracking-tight">
              Desperte o seu <em className="text-[var(--gold)] not-italic">potencial</em> de escrita.
            </h1>
            <p className="mt-6 sm:mt-8 text-base sm:text-lg text-muted-foreground max-w-xl mx-auto lg:mx-0 leading-relaxed">
              Uma metodologia estratégica e exclusiva, dedicada a transformar estudantes em escritores precisos, críticos e preparados para o ENEM e para a vida.
            </p>
            <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start">
              <Button asChild size="lg" className="bg-[var(--gold)] hover:bg-[var(--gold)]/90 text-white rounded-full px-7 h-12 shadow-[var(--shadow-elegant)]">
                <a href="#cursos">Conheça os cursos <ArrowRight className="ml-2 h-4 w-4" /></a>
              </Button>
              <Button asChild variant="outline" size="lg" className="rounded-full px-7 h-12 border-[var(--ink)]/20 hover:bg-[var(--ink)]/5">
                <a href="#metodologia">Nossa metodologia</a>
              </Button>
            </div>
            <div className="mt-12 sm:mt-14 grid grid-cols-3 gap-4 sm:gap-10 max-w-lg mx-auto lg:mx-0 text-xs sm:text-sm text-muted-foreground">
              <div><div className="font-serif text-2xl sm:text-3xl text-[var(--ink)]">+10</div>anos de experiência</div>
              <div className="border-l border-border pl-4 sm:pl-0 sm:border-0"><div className="font-serif text-2xl sm:text-3xl text-[var(--ink)]">900+</div>alunos formados</div>
              <div className="border-l border-border pl-4 sm:pl-0 sm:border-0"><div className="font-serif text-2xl sm:text-3xl text-[var(--ink)]">980</div>nota ENEM</div>
            </div>
          </div>

          <div className="lg:col-span-5 relative max-w-md mx-auto lg:max-w-none w-full">
            <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-[var(--shadow-elegant)] border border-[var(--gold)]/10 aspect-[4/5] sm:aspect-auto">
              <img src={hero} alt="Caderno aberto com escrita à mão" width={1536} height={1152} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--ink)]/30 via-transparent to-transparent" />
            </div>
            <div className="absolute -bottom-4 left-4 sm:-bottom-6 sm:-left-6 bg-card/95 backdrop-blur rounded-xl sm:rounded-2xl p-4 sm:p-5 shadow-[var(--shadow-soft)] border border-border max-w-[200px] sm:max-w-[220px]">
              <div className="flex items-center gap-2 text-[var(--gold)] mb-1">
                <PenLine className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                <span className="text-[10px] sm:text-xs tracking-widest uppercase">Nota 1000</span>
              </div>
              <p className="text-xs sm:text-sm text-muted-foreground leading-snug">Estratégia, repertório e estilo em cada linha.</p>
            </div>
          </div>
        </div>
      </section>

      {/* METODOLOGIA */}
      <section id="metodologia" className="py-20 sm:py-24 lg:py-32 px-5 sm:px-8 lg:px-10 bg-[var(--secondary)]">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl">
            <p className="text-[10px] sm:text-xs tracking-[0.3em] uppercase text-[var(--gold)] mb-3 sm:mb-4">A metodologia</p>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl leading-[1.1]">
              Escrever bem é uma <em className="text-[var(--gold)] not-italic">arte estratégica</em>. E pode ser ensinada.
            </h2>
            <p className="mt-5 sm:mt-6 text-base sm:text-lg text-muted-foreground leading-relaxed">
              Combinamos técnica, repertório cultural e prática orientada — guiando o aluno do domínio da norma à construção de uma voz autoral.
            </p>
          </div>

          <div className="mt-12 sm:mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
            {[
              { n: "01", t: "Diagnóstico", d: "Avaliamos o ponto de partida do aluno: estrutura, coesão, repertório e estilo." },
              { n: "02", t: "Estratégia", d: "Plano individual com técnicas de argumentação, modelos de introdução e proposta de intervenção." },
              { n: "03", t: "Prática guiada", d: "Produções semanais corrigidas com devolutiva detalhada e mentoria personalizada." },
            ].map((s) => (
              <div key={s.n} className="group bg-card rounded-2xl p-6 sm:p-8 border border-border hover:border-[var(--gold)]/40 hover:shadow-[var(--shadow-soft)] hover:-translate-y-1 transition-all duration-300">
                <div className="font-serif text-4xl sm:text-5xl text-[var(--gold)]/40 group-hover:text-[var(--gold)] transition">{s.n}</div>
                <h3 className="mt-3 sm:mt-4 text-lg sm:text-xl font-serif">{s.t}</h3>
                <p className="mt-2 sm:mt-3 text-sm sm:text-base text-muted-foreground leading-relaxed">{s.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CURSOS */}
      <section id="cursos" className="py-20 sm:py-24 lg:py-32 px-5 sm:px-8 lg:px-10">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12 sm:mb-16">
            <p className="text-[10px] sm:text-xs tracking-[0.3em] uppercase text-[var(--gold)] mb-3 sm:mb-4">Nossos cursos</p>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl max-w-2xl leading-[1.1]">Formação em Linguagens e Redação para cada etapa.</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 lg:gap-8">
            {[
              { icon: GraduationCap, tag: "ENEM & Vestibulares", title: "Redação ENEM", desc: "Domínio das 5 competências, repertório sociocultural curado e simulados corrigidos pela banca interna.", items: ["Aulas semanais ao vivo", "Banco de propostas inéditas", "Correção em até 72h"] },
              { icon: BookOpen, tag: "Ensino Fundamental", title: "Linguagens Fund. II", desc: "Base sólida em interpretação, gramática aplicada e produção textual para alunos do 6º ao 9º ano.", items: ["Leitura orientada", "Oficinas de escrita criativa", "Acompanhamento pedagógico"] },
              { icon: Sparkles, tag: "Capacitações", title: "Capacitação Docente", desc: "Formação continuada para professores que desejam ensinar redação com método e propósito.", items: ["Trilha modular", "Material exclusivo", "Certificação Referência"] },
            ].map((c) => (
              <article key={c.title} className="group relative bg-card rounded-2xl sm:rounded-3xl p-6 sm:p-8 border border-border hover:shadow-[var(--shadow-elegant)] hover:-translate-y-1 transition-all duration-300 overflow-hidden">
                <div className="absolute top-0 right-0 h-32 w-32 bg-[var(--gold)]/5 rounded-full blur-2xl group-hover:bg-[var(--gold)]/15 transition" />
                <div className="relative">
                  <div className="h-12 w-12 rounded-xl bg-[var(--gold)]/10 flex items-center justify-center">
                    <c.icon className="h-6 w-6 text-[var(--gold)]" strokeWidth={1.5} />
                  </div>
                  <p className="mt-5 text-[10px] tracking-[0.25em] uppercase text-muted-foreground">{c.tag}</p>
                  <h3 className="mt-1.5 text-xl sm:text-2xl font-serif">{c.title}</h3>
                  <p className="mt-3 text-sm sm:text-base text-muted-foreground leading-relaxed">{c.desc}</p>
                  <ul className="mt-5 sm:mt-6 space-y-2">
                    {c.items.map((i) => (
                      <li key={i} className="flex items-center gap-2 text-sm"><CheckCircle2 className="h-4 w-4 text-[var(--gold)] shrink-0" /> {i}</li>
                    ))}
                  </ul>
                  <a href="#contato" className="mt-7 sm:mt-8 inline-flex items-center gap-2 text-sm font-medium text-[var(--ink)] group-hover:text-[var(--gold)] transition">
                    Saber mais <ArrowRight className="h-4 w-4" />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* MANIFESTO */}
      <section id="manifesto" className="py-20 sm:py-24 lg:py-32 px-5 sm:px-8 lg:px-10 bg-[var(--ink)] text-[var(--cream)] relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.04] pointer-events-none">
          <img src={fox} alt="" className="absolute -right-32 sm:-right-40 top-1/2 -translate-y-1/2 h-[500px] sm:h-[800px] w-auto" aria-hidden />
        </div>
        <div className="relative max-w-4xl mx-auto text-center">
          <Quote className="h-8 w-8 sm:h-10 sm:w-10 mx-auto text-[var(--gold)]" strokeWidth={1.5} />
          <blockquote className="mt-6 sm:mt-8 font-serif text-2xl sm:text-3xl md:text-5xl leading-[1.2] tracking-tight">
            "Cada palavra escrita com <em className="text-[var(--gold)] not-italic">intenção</em> é um passo em direção ao futuro que o aluno escolhe construir."
          </blockquote>
          <p className="mt-6 sm:mt-8 text-[10px] sm:text-sm tracking-[0.25em] uppercase text-[var(--gold-soft)]">— Centro de Ensino Referência</p>
        </div>
      </section>

      {/* CONTATO */}
      <section id="contato" className="py-20 sm:py-24 lg:py-32 px-5 sm:px-8 lg:px-10 bg-[var(--secondary)]">
        <div className="max-w-5xl mx-auto text-center">
          <img src={fox} alt="" className="h-16 sm:h-20 w-auto mx-auto mb-6 sm:mb-8 opacity-90" />
          <h2 className="font-serif text-3xl sm:text-4xl md:text-6xl leading-[1.1]">Pronto para escrever o próximo capítulo?</h2>
          <p className="mt-5 sm:mt-6 text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
            Fale com a nossa equipe e descubra a turma ideal para você. Vagas limitadas para garantir acompanhamento individual.
          </p>
          <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <Button asChild size="lg" className="bg-[var(--gold)] hover:bg-[var(--gold)]/90 text-white rounded-full px-8 h-12 shadow-[var(--shadow-elegant)]">
              <a href="https://wa.me/5500000000000" target="_blank" rel="noreferrer">Falar no WhatsApp</a>
            </Button>
            <Button asChild variant="outline" size="lg" className="rounded-full px-8 h-12 border-[var(--ink)]/20">
              <a href="mailto:contato@centroreferencia.com.br">Enviar e-mail</a>
            </Button>
          </div>
          <div className="mt-12 sm:mt-16 grid sm:grid-cols-3 gap-6 sm:gap-8 text-sm">
            <div className="flex flex-col items-center gap-2"><Phone className="h-5 w-5 text-[var(--gold)]" /><span>(00) 00000-0000</span></div>
            <div className="flex flex-col items-center gap-2"><Mail className="h-5 w-5 text-[var(--gold)]" /><span className="break-all">contato@centroreferencia.com.br</span></div>
            <div className="flex flex-col items-center gap-2"><MapPin className="h-5 w-5 text-[var(--gold)]" /><span>Unidade Central</span></div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-8 sm:py-12 px-5 sm:px-8 lg:px-10 border-t border-border">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-5 text-center sm:text-left">
          <img src={logo} alt="Referência Centro de Ensino" className="h-10 sm:h-12 w-auto" />
          <p className="text-xs sm:text-sm text-muted-foreground order-3 sm:order-2">© {new Date().getFullYear()} Centro de Ensino Referência. Todos os direitos reservados.</p>
          <a href="#" aria-label="Instagram" className="text-muted-foreground hover:text-[var(--gold)] transition order-2 sm:order-3"><Instagram className="h-5 w-5" /></a>
        </div>
      </footer>
    </div>
  );
}
