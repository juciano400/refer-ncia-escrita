import { createFileRoute } from "@tanstack/react-router";
import logo from "@/assets/referencia-logo.png";
import fox from "@/assets/referencia-fox.png";
import hero from "@/assets/hero-writing.jpg";
import { Button } from "@/components/ui/button";
import { PenLine, BookOpen, GraduationCap, Sparkles, ArrowRight, CheckCircle2, Quote, Instagram, Mail, MapPin, Phone } from "lucide-react";

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
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* NAV */}
      <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-background/80 border-b border-border/50">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 h-20 flex items-center justify-between">
          <a href="#top" className="flex items-center gap-3">
            <img src={fox} alt="Referência" className="h-10 w-auto" />
            <div className="leading-tight hidden sm:block">
              <div className="font-serif text-lg tracking-wide">REFERÊNCIA</div>
              <div className="text-[10px] tracking-[0.25em] text-muted-foreground">CENTRO DE ENSINO</div>
            </div>
          </a>
          <nav className="hidden md:flex items-center gap-10 text-sm">
            <a href="#metodologia" className="hover:text-[var(--gold)] transition">Metodologia</a>
            <a href="#cursos" className="hover:text-[var(--gold)] transition">Cursos</a>
            <a href="#depoimentos" className="hover:text-[var(--gold)] transition">Resultados</a>
            <a href="#contato" className="hover:text-[var(--gold)] transition">Contato</a>
          </nav>
          <Button asChild className="bg-[var(--ink)] text-[var(--cream)] hover:bg-[var(--ink)]/90 rounded-full px-6">
            <a href="#contato">Matricule-se</a>
          </Button>
        </div>
      </header>

      {/* HERO */}
      <section id="top" className="pt-32 pb-24 lg:pt-40 lg:pb-32 px-6 lg:px-10">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[var(--gold)]/30 bg-[var(--gold)]/5 text-xs tracking-[0.2em] uppercase text-[var(--gold)] mb-8">
              <Sparkles className="h-3.5 w-3.5" /> Linguagens & Redação
            </div>
            <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl leading-[1.05] tracking-tight">
              Desperte o seu <em className="text-[var(--gold)] not-italic">potencial</em> de escrita.
            </h1>
            <p className="mt-8 text-lg text-muted-foreground max-w-xl leading-relaxed">
              Uma metodologia estratégica e exclusiva, dedicada a transformar estudantes em escritores precisos, críticos e preparados para o ENEM e para a vida.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Button asChild size="lg" className="bg-[var(--gold)] hover:bg-[var(--gold)]/90 text-white rounded-full px-8 h-12 shadow-[var(--shadow-elegant)]">
                <a href="#cursos">Conheça os cursos <ArrowRight className="ml-2 h-4 w-4" /></a>
              </Button>
              <Button asChild variant="outline" size="lg" className="rounded-full px-8 h-12 border-[var(--ink)]/20 hover:bg-[var(--ink)]/5">
                <a href="#metodologia">Nossa metodologia</a>
              </Button>
            </div>
            <div className="mt-14 flex items-center gap-10 text-sm text-muted-foreground">
              <div><div className="font-serif text-3xl text-[var(--ink)]">+10</div>anos de experiência</div>
              <div className="h-10 w-px bg-border" />
              <div><div className="font-serif text-3xl text-[var(--ink)]">900+</div>alunos formados</div>
              <div className="h-10 w-px bg-border hidden sm:block" />
              <div className="hidden sm:block"><div className="font-serif text-3xl text-[var(--ink)]">980</div>nota máxima ENEM</div>
            </div>
          </div>
          <div className="lg:col-span-5 relative">
            <div className="absolute -inset-6 bg-[var(--gold)]/10 blur-3xl rounded-full" />
            <div className="relative rounded-2xl overflow-hidden shadow-[var(--shadow-elegant)] border border-[var(--gold)]/10">
              <img src={hero} alt="Caderno aberto com escrita à mão" width={1536} height={1152} className="w-full h-auto" />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-card rounded-xl p-5 shadow-[var(--shadow-soft)] border border-border max-w-[220px] hidden md:block">
              <div className="flex items-center gap-2 text-[var(--gold)] mb-1"><PenLine className="h-4 w-4" /><span className="text-xs tracking-widest uppercase">Redação Nota 1000</span></div>
              <p className="text-sm text-muted-foreground leading-snug">Estratégia, repertório e estilo em cada linha.</p>
            </div>
          </div>
        </div>
      </section>

      {/* METODOLOGIA */}
      <section id="metodologia" className="py-24 lg:py-32 px-6 lg:px-10 bg-[var(--secondary)]">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl">
            <p className="text-xs tracking-[0.3em] uppercase text-[var(--gold)] mb-4">A metodologia</p>
            <h2 className="font-serif text-4xl md:text-5xl leading-tight">
              Escrever bem é uma <em className="text-[var(--gold)] not-italic">arte estratégica</em>. E pode ser ensinada.
            </h2>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
              Nosso método combina técnica, repertório cultural e prática orientada — guiando o aluno passo a passo do domínio da norma até a construção de uma voz autoral.
            </p>
          </div>

          <div className="mt-16 grid md:grid-cols-3 gap-6">
            {[
              { n: "01", t: "Diagnóstico", d: "Avaliamos o ponto de partida do aluno: estrutura, coesão, repertório e estilo." },
              { n: "02", t: "Estratégia", d: "Plano individual com técnicas de argumentação, modelos de introdução e proposta de intervenção." },
              { n: "03", t: "Prática guiada", d: "Produções semanais corrigidas com devolutiva detalhada e mentoria personalizada." },
            ].map((s) => (
              <div key={s.n} className="group bg-card rounded-2xl p-8 border border-border hover:border-[var(--gold)]/40 hover:shadow-[var(--shadow-soft)] transition-all">
                <div className="font-serif text-5xl text-[var(--gold)]/40 group-hover:text-[var(--gold)] transition">{s.n}</div>
                <h3 className="mt-4 text-xl font-serif">{s.t}</h3>
                <p className="mt-3 text-muted-foreground leading-relaxed">{s.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CURSOS */}
      <section id="cursos" className="py-24 lg:py-32 px-6 lg:px-10">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-end justify-between flex-wrap gap-6 mb-16">
            <div>
              <p className="text-xs tracking-[0.3em] uppercase text-[var(--gold)] mb-4">Nossos cursos</p>
              <h2 className="font-serif text-4xl md:text-5xl max-w-2xl leading-tight">Formação em Linguagens e Redação para cada etapa.</h2>
            </div>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {[
              { icon: GraduationCap, tag: "ENEM & Vestibulares", title: "Redação ENEM", desc: "Domínio das 5 competências, repertório sociocultural curado e simulados corrigidos pela banca interna.", items: ["Aulas semanais ao vivo", "Banco de propostas inéditas", "Correção em até 72h"] },
              { icon: BookOpen, tag: "Ensino Fundamental", title: "Linguagens Fund. II", desc: "Base sólida em interpretação, gramática aplicada e produção textual para alunos do 6º ao 9º ano.", items: ["Leitura orientada", "Oficinas de escrita criativa", "Acompanhamento pedagógico"] },
              { icon: Sparkles, tag: "Capacitações", title: "Capacitação Docente", desc: "Formação continuada para professores que desejam ensinar redação com método e propósito.", items: ["Trilha modular", "Material exclusivo", "Certificação Referência"] },
            ].map((c) => (
              <article key={c.title} className="group relative bg-card rounded-2xl p-8 border border-border hover:shadow-[var(--shadow-elegant)] transition-all overflow-hidden">
                <div className="absolute top-0 right-0 h-32 w-32 bg-[var(--gold)]/5 rounded-full blur-2xl group-hover:bg-[var(--gold)]/15 transition" />
                <c.icon className="h-8 w-8 text-[var(--gold)]" strokeWidth={1.5} />
                <p className="mt-5 text-[10px] tracking-[0.25em] uppercase text-muted-foreground">{c.tag}</p>
                <h3 className="mt-2 text-2xl font-serif">{c.title}</h3>
                <p className="mt-3 text-muted-foreground leading-relaxed">{c.desc}</p>
                <ul className="mt-6 space-y-2">
                  {c.items.map((i) => (
                    <li key={i} className="flex items-center gap-2 text-sm"><CheckCircle2 className="h-4 w-4 text-[var(--gold)]" /> {i}</li>
                  ))}
                </ul>
                <a href="#contato" className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-[var(--ink)] group-hover:text-[var(--gold)] transition">
                  Saber mais <ArrowRight className="h-4 w-4" />
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* MANIFESTO */}
      <section className="py-24 lg:py-32 px-6 lg:px-10 bg-[var(--ink)] text-[var(--cream)] relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.04]">
          <img src={fox} alt="" className="absolute -right-40 top-1/2 -translate-y-1/2 h-[800px] w-auto" aria-hidden />
        </div>
        <div className="relative max-w-4xl mx-auto text-center">
          <Quote className="h-10 w-10 mx-auto text-[var(--gold)]" strokeWidth={1.5} />
          <blockquote className="mt-8 font-serif text-3xl md:text-5xl leading-[1.2] tracking-tight">
            "Cada palavra escrita com <em className="text-[var(--gold)] not-italic">intenção</em> é um passo em direção ao futuro que o aluno escolhe construir."
          </blockquote>
          <p className="mt-8 text-sm tracking-[0.25em] uppercase text-[var(--gold-soft)]">— Centro de Ensino Referência</p>
        </div>
      </section>

      {/* DEPOIMENTOS */}
      <section id="depoimentos" className="py-24 lg:py-32 px-6 lg:px-10">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-2xl mb-16">
            <p className="text-xs tracking-[0.3em] uppercase text-[var(--gold)] mb-4">Resultados</p>
            <h2 className="font-serif text-4xl md:text-5xl leading-tight">Histórias que escrevem o nosso método.</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { n: "Mariana S.", r: "980 — Redação ENEM 2024", t: "A metodologia me deu confiança e clareza. Cada correção era uma aula." },
              { n: "Lucas R.", r: "Aprovado em Medicina", t: "Saí de 600 para 940 em quatro meses. Estratégia, treino e devolutivas certeiras." },
              { n: "Profa. Helena", r: "Capacitação Docente", t: "Reaprendi a ensinar redação. Hoje meus alunos escrevem com propósito." },
            ].map((d) => (
              <figure key={d.n} className="bg-card border border-border rounded-2xl p-8 hover:border-[var(--gold)]/40 transition">
                <div className="flex gap-1 text-[var(--gold)] mb-4">{"★★★★★"}</div>
                <blockquote className="text-lg leading-relaxed">"{d.t}"</blockquote>
                <figcaption className="mt-6 pt-6 border-t border-border">
                  <div className="font-serif text-lg">{d.n}</div>
                  <div className="text-xs tracking-wider uppercase text-muted-foreground mt-1">{d.r}</div>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* CONTATO / CTA */}
      <section id="contato" className="py-24 lg:py-32 px-6 lg:px-10 bg-[var(--secondary)]">
        <div className="max-w-5xl mx-auto text-center">
          <img src={fox} alt="" className="h-20 w-auto mx-auto mb-8 opacity-90" />
          <h2 className="font-serif text-4xl md:text-6xl leading-tight">Pronto para escrever o próximo capítulo?</h2>
          <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto">
            Fale com a nossa equipe e descubra a turma ideal para você. Vagas limitadas por turma para garantir acompanhamento individual.
          </p>
          <div className="mt-10 flex flex-wrap gap-4 justify-center">
            <Button asChild size="lg" className="bg-[var(--gold)] hover:bg-[var(--gold)]/90 text-white rounded-full px-8 h-12 shadow-[var(--shadow-elegant)]">
              <a href="https://wa.me/5500000000000" target="_blank" rel="noreferrer">Falar no WhatsApp</a>
            </Button>
            <Button asChild variant="outline" size="lg" className="rounded-full px-8 h-12 border-[var(--ink)]/20">
              <a href="mailto:contato@centroreferencia.com.br">Enviar e-mail</a>
            </Button>
          </div>
          <div className="mt-16 grid sm:grid-cols-3 gap-8 text-sm">
            <div className="flex flex-col items-center gap-2"><Phone className="h-5 w-5 text-[var(--gold)]" /><span>(00) 00000-0000</span></div>
            <div className="flex flex-col items-center gap-2"><Mail className="h-5 w-5 text-[var(--gold)]" /><span>contato@centroreferencia.com.br</span></div>
            <div className="flex flex-col items-center gap-2"><MapPin className="h-5 w-5 text-[var(--gold)]" /><span>Unidade Central</span></div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-12 px-6 lg:px-10 border-t border-border">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <img src={logo} alt="Referência Centro de Ensino" className="h-12 w-auto" />
          </div>
          <p className="text-sm text-muted-foreground">© {new Date().getFullYear()} Centro de Ensino Referência. Todos os direitos reservados.</p>
          <a href="#" className="text-muted-foreground hover:text-[var(--gold)] transition"><Instagram className="h-5 w-5" /></a>
        </div>
      </footer>
    </div>
  );
}
