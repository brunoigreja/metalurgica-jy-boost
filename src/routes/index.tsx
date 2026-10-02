import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowRight,
  BadgeCheck,
  CheckCircle2,
  Clock3,
  FileCheck2,
  FileUp,
  Gauge,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Menu,
  MessageCircle,
  Phone,
  Ruler,
  ShieldCheck,
  Sparkles,
  Wrench,
  X,
} from "lucide-react";
import { useState, type FormEvent } from "react";

import heroFactory from "@/assets/jyb-hero-factory.jpg";
import cncProject from "@/assets/jyb-cnc-project.jpg";
import weldingProject from "@/assets/jyb-welding-project.jpg";
import bendingProject from "@/assets/jyb-bending-project.jpg";
import jybLogo from "@/assets/logo.png";
import logo from "@/assets/logo.png";
import logoAzul from "@/assets/logo-azul.jpg";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Metalúrgica JYB | Usinagem e Caldeiraria em Rio do Sul" },
      { name: "description", content: "Usinagem de precisão, caldeiraria, corte, dobra e peças sob medida para indústrias do Alto Vale e Santa Catarina." },
      { property: "og:title", content: "Metalúrgica JYB | Soluções industriais sob medida" },
      { property: "og:description", content: "Precisão técnica, agilidade na cotação e compromisso com o seu prazo." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const services = [
  { number: "01", title: "Usinagem de precisão", text: "Componentes e conjuntos produzidos conforme desenho, com controle dimensional e acabamento rigoroso." },
  { number: "02", title: "Caldeiraria industrial", text: "Fabricação, montagem e recuperação de equipamentos, chapas e conjuntos soldados para sua operação." },
  { number: "03", title: "Corte e dobra", text: "Processamento preciso de chapas para lotes, protótipos e demandas recorrentes, conforme especificação." },
  { number: "04", title: "Peças sob medida", text: "Soluções exclusivas a partir de amostra, croqui, CAD ou desenho técnico, do projeto à entrega." },
  { number: "05", title: "Estruturas metálicas", text: "Estruturas robustas e funcionais, dimensionadas para as necessidades do ambiente industrial." },
  { number: "06", title: "Manutenção industrial", text: "Reparo e adequação de peças e conjuntos para reduzir paradas e manter sua produção em movimento." },
];

const advantages = [
  { icon: Clock3, title: "Cotação ágil", text: "Análise objetiva da sua demanda e retorno comercial rápido para não travar o andamento do projeto." },
  { icon: Ruler, title: "Precisão técnica", text: "Leitura de projetos, CAD e especificações com atenção a tolerâncias, materiais e aplicação da peça." },
  { icon: ShieldCheck, title: "Prazo é compromisso", text: "Planejamento de produção e comunicação transparente para entregar conforme o combinado." },
  { icon: FileCheck2, title: "Qualidade controlada", text: "Acompanhamento em cada etapa e conferência dimensional antes da liberação do serviço." },
];

const whatsappMessage = encodeURIComponent("Olá! Gostaria de solicitar um orçamento para um serviço industrial.");
const whatsappUrl = `https://wa.me/?text=${whatsappMessage}`;

function Index() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [fileName, setFileName] = useState("");

  function submitQuote(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const message = [
      "Olá! Gostaria de solicitar um orçamento.",
      `Nome: ${form.get("nome")}`,
      `Empresa/CNPJ: ${form.get("empresa")}`,
      `Telefone: ${form.get("telefone")}`,
      `E-mail: ${form.get("email")}`,
      `Serviço: ${form.get("servico")}`,
      `Detalhes: ${form.get("detalhes") || "Não informado"}`,
      fileName ? `Tenho o arquivo ${fileName} para anexar.` : "",
    ].filter(Boolean).join("\n");
    window.open(`https://wa.me/?text=${encodeURIComponent(message)}`, "_blank", "noopener,noreferrer");
  }

  return (
    <main className="min-h-screen overflow-x-hidden bg-background text-foreground">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-border/20 bg-surface-deep/95 text-secondary-foreground backdrop-blur-md">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 lg:px-8">
          <a href="#inicio" className="flex items-center gap-3" aria-label="Metalúrgica JYB — início">
            <img src={jybLogo} alt="Metalúrgica JYB" className="h-15 w-auto object-contain" width={170} height={80} />
          </a>
          <nav className="hidden items-center gap-7 lg:flex" aria-label="Navegação principal">
            {[["Serviços", "#servicos"], ["Diferenciais", "#diferenciais"], ["Projetos", "#projetos"], ["Contato", "#contato"]].map(([label, href]) => (
              <a key={href} href={href} className="text-sm font-semibold text-steel transition-colors hover:text-primary">{label}</a>
            ))}
            <Button asChild><a href={whatsappUrl} target="_blank" rel="noreferrer"><MessageCircle className="size-4" /> Solicitar orçamento</a></Button>
          </nav>
          <Button variant="outline" size="icon" className="border-steel/50 text-secondary-foreground lg:hidden" onClick={() => setMenuOpen((value) => !value)} aria-label="Abrir menu">
            {menuOpen ? <X className="size-5" /> : <Menu className="size-5" />}
          </Button>
        </div>
        {menuOpen && (
          <nav className="border-t border-border/20 bg-surface-deep px-5 py-5 lg:hidden">
            {[ ["Serviços", "#servicos"], ["Diferenciais", "#diferenciais"], ["Projetos", "#projetos"], ["Contato", "#contato"] ].map(([label, href]) => (
              <a key={href} href={href} onClick={() => setMenuOpen(false)} className="block border-b border-border/15 py-3 font-semibold text-secondary-foreground">{label}</a>
            ))}
          </nav>
        )}
      </header>

      <section id="inicio" className="relative flex min-h-[760px] items-end pt-20 lg:min-h-[820px]">
        <img src={heroFactory} alt="Centro de usinagem em operação em parque fabril moderno" className="absolute inset-0 size-full object-cover" width={1920} height={1088} fetchPriority="high" />
        <div className="absolute inset-0 bg-surface-deep/70 lg:bg-surface-deep/55" />
        <div className="absolute inset-0 bg-gradient-to-r from-surface-deep via-surface-deep/80 to-transparent" />
        <div className="relative mx-auto w-full max-w-7xl px-5 pb-16 pt-28 lg:px-8 lg:pb-24">
          <div className="max-w-3xl">
            <div className="mb-7 flex items-center gap-3 text-sm font-bold uppercase tracking-[0.16em] text-primary"><span className="h-px w-10 bg-primary" /> Rio do Sul · Santa Catarina</div>
            <h1 className="max-w-3xl text-5xl font-extrabold uppercase leading-[0.94] text-secondary-foreground sm:text-6xl lg:text-8xl">Precisão que move a sua <span className="text-primary">indústria.</span></h1>
            <p className="mt-7 max-w-2xl text-lg leading-relaxed text-steel sm:text-xl">Usinagem, caldeiraria e fabricação sob medida com leitura técnica, agilidade na cotação e compromisso real com o seu prazo.</p>
            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <Button asChild size="large"><a href={whatsappUrl} target="_blank" rel="noreferrer"><MessageCircle className="size-5" /> Solicitar orçamento via WhatsApp</a></Button>
              <Button asChild size="large" variant="outline"><a href="#servicos" className="border-steel/60 text-secondary-foreground hover:border-primary hover:text-primary">Conhecer serviços <ArrowRight className="size-5" /></a></Button>
            </div>
            <div className="mt-12 grid max-w-2xl grid-cols-2 gap-px bg-steel/20 sm:grid-cols-3">
              {[ ["+10 anos", "de experiência"], ["Alto Vale", "e todo o estado"], ["CAD · PDF", "leitura técnica"] ].map(([value, label], index) => (
                <div key={value} className={`bg-surface-deep/70 px-5 py-4 ${index === 2 ? "col-span-2 sm:col-span-1" : ""}`}><strong className="block font-display text-2xl text-secondary-foreground">{value}</strong><span className="text-xs uppercase tracking-[0.12em] text-steel">{label}</span></div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="servicos" className="scroll-mt-20 py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <SectionTitle eyebrow="Capacidade produtiva" title="Soluções completas para demandas industriais" text="Da peça unitária ao conjunto fabricado, transformamos especificações técnicas em soluções prontas para operar." />
          <div className="mt-12 grid gap-px bg-border md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <article key={service.number} className="group relative bg-card p-7 transition-colors hover:bg-surface-dark hover:text-secondary-foreground lg:p-9">
                <span className="font-display text-sm font-bold text-primary">{service.number}</span>
                <Wrench className="mt-8 size-7 text-muted-foreground transition-colors group-hover:text-primary" />
                <h3 className="mt-5 text-2xl font-bold uppercase">{service.title}</h3>
                <p className="mt-3 leading-relaxed text-muted-foreground group-hover:text-steel">{service.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="diferenciais" className="scroll-mt-20 bg-surface-dark py-20 text-secondary-foreground technical-grid lg:py-28">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <SectionTitle dark eyebrow="Por que escolher a JYB" title="Seu projeto tratado com responsabilidade técnica" text="Entendemos o impacto de cada componente na sua produção. Por isso, combinamos experiência, processo e comunicação direta." />
          <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {advantages.map(({ icon: Icon, title, text }) => (
              <article key={title} className="border-t-2 border-primary pt-6">
                <Icon className="size-8 text-primary" />
                <h3 className="mt-5 text-2xl font-bold uppercase">{title}</h3>
                <p className="mt-3 leading-relaxed text-steel">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="projetos" className="scroll-mt-20 py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <SectionTitle eyebrow="Projetos e capacidade" title="Estrutura preparada para entregar precisão" text="Processos conduzidos com técnica, segurança e atenção aos detalhes que fazem diferença no chão de fábrica." />
          <div className="mt-12 grid gap-4 md:grid-cols-12">
            <ProjectImage src={cncProject} alt="Usinagem de flange metálica em torno CNC" title="Usinagem CNC" detail="Componentes de precisão" className="md:col-span-7" />
            <ProjectImage src={weldingProject} alt="Soldador montando estrutura metálica industrial" title="Caldeiraria" detail="Montagem e soldagem" className="md:col-span-5" />
            <ProjectImage src={bendingProject} alt="Chapa metálica sendo dobrada em prensa industrial" title="Corte e dobra" detail="Conformação de chapas" className="md:col-span-5" />
            <div className="flex min-h-72 flex-col justify-between bg-primary p-8 md:col-span-7 lg:p-10">
              <Sparkles className="size-9" />
              <div><p className="max-w-xl font-display text-3xl font-bold uppercase leading-tight lg:text-4xl">Tem uma demanda fora do padrão?</p><p className="mt-3 max-w-xl font-medium">Nossa equipe analisa a aplicação e desenvolve a melhor rota de fabricação.</p></div>
              <a href="#orcamento" className="mt-8 inline-flex items-center gap-2 font-bold">Enviar desenho técnico <ArrowRight className="size-5" /></a>
            </div>
          </div>
        </div>
      </section>

      <section id="orcamento" className="scroll-mt-20 bg-muted py-20 lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 lg:grid-cols-[0.8fr_1.2fr] lg:px-8">
          <div>
            <div className="inline-flex items-center gap-2 font-bold uppercase tracking-[0.16em] text-primary-strong"><FileUp className="size-5" /> Orçamento técnico</div>
            <h2 className="mt-5 text-4xl font-extrabold uppercase leading-none sm:text-5xl">Envie seu desenho. Nós analisamos a solução.</h2>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">Anexe seu projeto em PDF, CAD ou uma imagem da peça. Quanto mais detalhes sobre material, medidas, tolerâncias e quantidade, mais precisa será nossa cotação.</p>
            <ul className="mt-8 space-y-4">
              {["Análise por equipe experiente", "Retorno comercial ágil", "Informações tratadas com confidencialidade"].map((item) => <li key={item} className="flex items-center gap-3 font-semibold"><CheckCircle2 className="size-5 shrink-0 text-success" /> {item}</li>)}
            </ul>
          </div>
          <form onSubmit={submitQuote} className="grid gap-5 bg-card p-6 shadow-xl shadow-surface-deep/5 sm:grid-cols-2 lg:p-9">
            <Field label="Nome" name="nome" placeholder="Seu nome" required />
            <Field label="Empresa / CNPJ" name="empresa" placeholder="Nome da empresa" required />
            <Field label="Telefone" name="telefone" type="tel" placeholder="(47) 00000-0000" required />
            <Field label="E-mail" name="email" type="email" placeholder="compras@empresa.com.br" required />
            <label className="sm:col-span-2"><span className="mb-2 block text-sm font-bold">Serviço de interesse</span><select name="servico" required className="h-12 w-full border border-input bg-background px-4 outline-none focus:border-primary focus:ring-1 focus:ring-primary"><option value="">Selecione uma opção</option>{services.map((service) => <option key={service.title}>{service.title}</option>)}</select></label>
            <label className="sm:col-span-2"><span className="mb-2 block text-sm font-bold">Detalhes da demanda</span><textarea name="detalhes" rows={4} placeholder="Material, quantidade, medidas, tolerâncias e prazo desejado..." className="w-full resize-none border border-input bg-background p-4 outline-none focus:border-primary focus:ring-1 focus:ring-primary" /></label>
            <label className="sm:col-span-2 flex min-h-28 cursor-pointer items-center justify-center gap-4 border border-dashed border-border-strong bg-muted px-5 text-center transition-colors hover:border-primary">
              <FileUp className="size-7 shrink-0 text-primary-strong" />
              <span><strong className="block">{fileName || "Anexar desenho técnico"}</strong><small className="text-muted-foreground">PDF, DWG, DXF ou imagem</small></span>
              <input type="file" accept=".pdf,.dwg,.dxf,image/*" className="sr-only" onChange={(event) => setFileName(event.target.files?.[0]?.name ?? "")} />
            </label>
            <div className="sm:col-span-2"><Button type="submit" size="large" className="w-full sm:w-auto"><MessageCircle className="size-5" /> Enviar solicitação via WhatsApp</Button><p className="mt-3 text-xs text-muted-foreground">O WhatsApp será aberto com os dados preenchidos. O arquivo poderá ser anexado na conversa.</p></div>
          </form>
        </div>
      </section>

      <footer id="contato" className="scroll-mt-20 bg-surface-deep text-secondary-foreground">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-16 sm:grid-cols-2 lg:grid-cols-4 lg:px-8">
          <div className="sm:col-span-2"><img src={jybLogo} alt="Metalúrgica JYB" className="h-20 w-auto object-contain" width={200} height={100} /><p className="mt-5 max-w-md leading-relaxed text-steel">Soluções em usinagem e caldeiraria para empresas que valorizam precisão, confiabilidade e parceria de longo prazo.</p></div>
          <div><h3 className="text-lg font-bold uppercase">Comercial</h3><div className="mt-5 space-y-4 text-steel"><a href={whatsappUrl} target="_blank" rel="noreferrer" className="flex gap-3 hover:text-primary"><Phone className="size-5" /> Atendimento via WhatsApp</a><a href="#orcamento" className="flex gap-3 hover:text-primary"><Mail className="size-5" /> Solicitar cotação</a><div className="flex gap-3"><Clock3 className="size-5" /> Atendimento comercial</div></div></div>
          <div><h3 className="text-lg font-bold uppercase">Localização</h3><div className="mt-5 flex gap-3 text-steel"><MapPin className="size-5 shrink-0" /><p>Rio do Sul, Santa Catarina<br /><span className="text-sm">Atendimento no Alto Vale e em todo o estado</span></p></div><div className="mt-6 flex gap-3"><a href="#" aria-label="Instagram" className="flex size-10 items-center justify-center border border-steel/30 hover:border-primary hover:text-primary"><Instagram className="size-5" /></a><a href="#" aria-label="LinkedIn" className="flex size-10 items-center justify-center border border-steel/30 hover:border-primary hover:text-primary"><Linkedin className="size-5" /></a></div></div>
        </div>
        <div className="border-t border-steel/15"><div className="mx-auto flex max-w-7xl flex-col gap-2 px-5 py-5 text-xs text-steel sm:flex-row sm:justify-between lg:px-8"><span>© 2026 Metalúrgica JYB. Todos os direitos reservados.</span><span>Desenvolvido por Bruno Igreja</span></div></div>
      </footer>

      <a href={whatsappUrl} target="_blank" rel="noreferrer" aria-label="Solicitar orçamento pelo WhatsApp" className="fixed bottom-5 right-5 z-40 flex size-14 items-center justify-center rounded-full bg-success text-primary-foreground shadow-xl transition-transform hover:scale-105 sm:size-16"><MessageCircle className="size-7" /></a>
    </main>
  );
}

function SectionTitle({ eyebrow, title, text, dark = false }: { eyebrow: string; title: string; text: string; dark?: boolean }) {
  return <div className="grid gap-6 lg:grid-cols-[1fr_0.7fr] lg:items-end"><div><div className="flex items-center gap-3 text-sm font-bold uppercase tracking-[0.16em] text-primary-strong"><span className="h-px w-8 bg-primary" />{eyebrow}</div><h2 className={`mt-4 max-w-3xl text-4xl font-extrabold uppercase leading-none sm:text-5xl ${dark ? "text-secondary-foreground" : ""}`}>{title}</h2></div><p className={`max-w-xl text-lg leading-relaxed ${dark ? "text-steel" : "text-muted-foreground"}`}>{text}</p></div>;
}

function ProjectImage({ src, alt, title, detail, className }: { src: string; alt: string; title: string; detail: string; className: string }) {
  return <figure className={`group relative min-h-80 overflow-hidden ${className}`}><img src={src} alt={alt} loading="lazy" width={1200} height={912} className="absolute inset-0 size-full object-cover transition-transform duration-700 group-hover:scale-105" /><div className="absolute inset-0 bg-gradient-to-t from-surface-deep/90 via-transparent to-transparent" /><figcaption className="absolute inset-x-0 bottom-0 p-7 text-secondary-foreground"><span className="text-xs font-bold uppercase tracking-[0.15em] text-primary">{detail}</span><h3 className="mt-1 text-3xl font-bold uppercase">{title}</h3></figcaption></figure>;
}

function Field({ label, name, type = "text", placeholder, required }: { label: string; name: string; type?: string; placeholder: string; required?: boolean }) {
  return <label><span className="mb-2 block text-sm font-bold">{label}</span><input name={name} type={type} placeholder={placeholder} required={required} className="h-12 w-full border border-input bg-background px-4 outline-none focus:border-primary focus:ring-1 focus:ring-primary" /></label>;
}