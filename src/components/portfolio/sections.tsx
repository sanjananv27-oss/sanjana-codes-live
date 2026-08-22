import { useMemo, useState } from "react";
import {
  Award,
  BookOpen,
  Braces,
  Briefcase,
  Code2,
  Download,
  ExternalLink,
  Github,
  GraduationCap,
  Linkedin,
  Mail,
  Rocket,
  Sparkles,
  Terminal,
  Wrench,
} from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Reveal, SectionHeading } from "./reveal";
import resultImg from "@/assets/project-result.jpg";
import bankImg from "@/assets/project-bank.jpg";
import libraryImg from "@/assets/project-library.jpg";
import ecommerceImg from "@/assets/project-ecommerce.jpg";

export const LINKS = {
  github: "https://github.com/your-username",
  linkedin: "https://www.linkedin.com/in/your-profile",
  email: "your.email@example.com",
  resume: "/resume-placeholder.pdf",
  fiverr: "https://www.fiverr.com/s/VrRm2vV",
};

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div className="hero-glow absolute inset-0 -z-10" aria-hidden="true" />
      <div className="mx-auto max-w-6xl px-5 pb-24 pt-36 sm:pt-44">
        <Reveal className="max-w-3xl">
          <p className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-3 py-1 font-mono text-xs text-muted-foreground">
            <Sparkles className="size-3.5 text-primary" />
            Open to internship opportunities
          </p>
          <h1 className="mt-6 text-4xl font-semibold leading-[1.1] sm:text-6xl">
            Hi, I&apos;m <span className="text-gradient">Sanjana N V</span>
          </h1>
          <p className="mt-4 font-display text-lg text-foreground/90 sm:text-2xl">
            Computer Science Engineering Student &amp; Python Developer
          </p>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground">
            I build practical software projects using Python and continuously improve my skills in
            programming, problem solving, and software development.
          </p>
          <p className="mt-4 font-mono text-sm text-primary">
            &quot;Building practical solutions with Python and learning one project at a time.&quot;
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-3">
            <Button asChild size="lg">
              <a href="#projects">View My Projects</a>
            </Button>
            <Button asChild size="lg" variant="outline">
              <a href={LINKS.resume} download>
                <Download className="size-4" />
                Download Resume
              </a>
            </Button>
            <Button asChild size="lg" variant="ghost">
              <a href="#contact">Contact Me</a>
            </Button>
          </div>

          <div className="mt-8 flex items-center gap-3">
            <Button asChild variant="outline" size="icon" aria-label="GitHub profile">
              <a href={LINKS.github} target="_blank" rel="noreferrer noopener">
                <Github className="size-4" />
              </a>
            </Button>
            <Button asChild variant="outline" size="icon" aria-label="LinkedIn profile">
              <a href={LINKS.linkedin} target="_blank" rel="noreferrer noopener">
                <Linkedin className="size-4" />
              </a>
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export function About() {
  const highlights = [
    { icon: GraduationCap, label: "2nd-year CSE student" },
    { icon: Terminal, label: "Python development" },
    { icon: Braces, label: "Object-Oriented Programming" },
    { icon: Rocket, label: "Preparing for internships" },
  ];

  return (
    <section id="about" className="mx-auto max-w-6xl scroll-mt-24 px-5 py-24">
      <SectionHeading eyebrow="About me" title="A student developer focused on fundamentals" />
      <div className="mt-12 grid gap-8 lg:grid-cols-[1.4fr_1fr]">
        <Reveal className="panel p-7">
          <p className="text-base leading-relaxed text-muted-foreground">
            I&apos;m a Computer Science Engineering student who enjoys turning classroom concepts
            into working software. Most of my work is in Python, where I focus on Object-Oriented
            Programming, clean structure, and writing code that is easy to read and extend.
          </p>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            I spend my time strengthening problem solving, exploring software development practices,
            and following emerging technologies. Right now I&apos;m actively preparing for
            internships and placements, building projects that reflect the fundamentals I&apos;m
            learning.
          </p>
        </Reveal>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
          {highlights.map((item, i) => (
            <Reveal key={item.label} delay={i * 80} className="panel flex items-center gap-3 p-5">
              <span className="grid size-10 shrink-0 place-items-center rounded-lg bg-secondary text-primary">
                <item.icon className="size-5" />
              </span>
              <span className="text-sm font-medium">{item.label}</span>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

const skillGroups = [
  { icon: Code2, title: "Programming", items: ["Python", "C", "HTML", "CSS", "JavaScript"] },
  {
    icon: Terminal,
    title: "Python",
    items: ["OOP", "File Handling", "Exception Handling", "Data Structures", "Functions"],
  },
  { icon: Wrench, title: "Tools", items: ["Git", "GitHub", "VS Code"] },
];

export function Skills() {
  return (
    <section id="skills" className="scroll-mt-24 border-y border-border bg-surface/40 py-24">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHeading
          eyebrow="Skills"
          title="What I work with"
          description="The languages, concepts, and tools I use in my projects and coursework."
        />
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {skillGroups.map((group, i) => (
            <Reveal key={group.title} delay={i * 90} className="panel p-6">
              <div className="flex items-center gap-3">
                <span className="grid size-10 place-items-center rounded-lg bg-secondary text-primary">
                  <group.icon className="size-5" />
                </span>
                <h3 className="text-lg font-semibold">{group.title}</h3>
              </div>
              <ul className="mt-5 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="rounded-md border border-border bg-background/60 px-3 py-1.5 font-mono text-xs text-muted-foreground"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>

        <Reveal className="panel mt-6 p-6" delay={120}>
          <div className="flex flex-wrap items-center gap-x-4 gap-y-3">
            <div className="flex items-center gap-3">
              <span className="grid size-10 place-items-center rounded-lg bg-secondary text-primary">
                <BookOpen className="size-5" />
              </span>
              <h3 className="text-lg font-semibold">Currently Learning</h3>
            </div>
            <ul className="flex flex-wrap gap-2">
              {["DSA", "Advanced Python", "AI/ML"].map((item) => (
                <li
                  key={item}
                  className="rounded-md border border-primary/40 bg-primary/10 px-3 py-1.5 font-mono text-xs text-primary"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

const projects = [
  {
    title: "Student Result Management System",
    image: resultImg,
    description:
      "A Python application for managing student records, calculating results, and displaying student performance.",
    tech: ["Python"],
    demo: null as string | null,
  },
  {
    title: "Bank Management System",
    image: bankImg,
    description:
      "A banking application demonstrating object-oriented programming concepts such as classes, objects, encapsulation, and methods.",
    tech: ["Python", "OOP"],
    demo: null as string | null,
  },
  {
    title: "Library Management System",
    image: libraryImg,
    description:
      "A system for managing books, issuing and returning books, and maintaining library records.",
    tech: ["Python"],
    demo: null as string | null,
  },
  {
    title: "E-Commerce Platform Prototype",
    image: ecommerceImg,
    description:
      "A prototype e-commerce application demonstrating product management and basic shopping functionality.",
    tech: ["Python", "Web Technologies"],
    demo: "https://example.com/demo",
  },
];

const filters = ["All", "Python", "OOP", "Web Technologies"];

export function Projects() {
  const [active, setActive] = useState("All");
  const visible = useMemo(
    () => (active === "All" ? projects : projects.filter((p) => p.tech.includes(active))),
    [active],
  );

  return (
    <section id="projects" className="mx-auto max-w-6xl scroll-mt-24 px-5 py-24">
      <SectionHeading
        eyebrow="Projects"
        title="Things I have built"
        description="Practical applications built while learning Python and software development fundamentals."
      />

      <Reveal className="mt-10 flex flex-wrap justify-center gap-2">
        {filters.map((filter) => (
          <Button
            key={filter}
            size="sm"
            variant={active === filter ? "default" : "outline"}
            aria-pressed={active === filter}
            onClick={() => setActive(filter)}
          >
            {filter}
          </Button>
        ))}
      </Reveal>

      <div className="mt-10 grid gap-6 md:grid-cols-2">
        {visible.map((project, i) => (
          <Reveal key={project.title} delay={i * 80} className="panel overflow-hidden">
            <img
              src={project.image}
              alt={`${project.title} interface preview`}
              loading="lazy"
              width={1024}
              height={640}
              className="h-48 w-full border-b border-border object-cover"
            />
            <div className="p-6">
              <h3 className="text-lg font-semibold">{project.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {project.description}
              </p>
              <ul className="mt-4 flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <li
                    key={t}
                    className="rounded-md border border-border bg-background/60 px-2.5 py-1 font-mono text-xs text-muted-foreground"
                  >
                    {t}
                  </li>
                ))}
              </ul>
              <div className="mt-6 flex flex-wrap gap-3">
                <Button asChild size="sm" variant="outline">
                  <a href={LINKS.github} target="_blank" rel="noreferrer noopener">
                    <Github className="size-4" />
                    GitHub
                  </a>
                </Button>
                {project.demo ? (
                  <Button asChild size="sm">
                    <a href={project.demo} target="_blank" rel="noreferrer noopener">
                      <ExternalLink className="size-4" />
                      Live Demo
                    </a>
                  </Button>
                ) : null}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

const certifications = [
  { title: "Cisco Networking Academy", detail: "Networking Academy certifications" },
  { title: "Microsoft Learn", detail: "Python learning path" },
  { title: "Python Certifications", detail: "Python programming certifications" },
  { title: "Business English", detail: "Communication / Business English certification" },
];

export function Certifications() {
  return (
    <section
      id="certifications"
      className="scroll-mt-24 border-y border-border bg-surface/40 py-24"
    >
      <div className="mx-auto max-w-6xl px-5">
        <SectionHeading eyebrow="Certifications" title="Learning credentials" />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {certifications.map((cert, i) => (
            <Reveal key={cert.title} delay={i * 80} className="panel p-6">
              <span className="grid size-10 place-items-center rounded-lg bg-secondary text-primary">
                <Award className="size-5" />
              </span>
              <h3 className="mt-4 text-base font-semibold">{cert.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{cert.detail}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function GithubSection() {
  const stats = [
    { label: "Projects built", value: "4" },
    { label: "Core language", value: "Python" },
    { label: "Technologies used", value: "6+" },
  ];

  return (
    <section id="github" className="mx-auto max-w-6xl scroll-mt-24 px-5 py-24">
      <SectionHeading
        eyebrow="GitHub &amp; coding"
        title="My coding journey"
        description="I use GitHub to version my projects and track how my code improves over time."
      />
      <div className="mt-12 grid gap-6 lg:grid-cols-[1fr_1.2fr]">
        <Reveal className="panel p-7">
          <div className="grid gap-5 sm:grid-cols-3 lg:grid-cols-1">
            {stats.map((stat) => (
              <div key={stat.label}>
                <p className="font-display text-2xl font-semibold text-primary">{stat.value}</p>
                <p className="mt-1 text-sm text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
          <Button asChild className="mt-7 w-full">
            <a href={LINKS.github} target="_blank" rel="noreferrer noopener">
              <Github className="size-4" />
              Visit GitHub profile
            </a>
          </Button>
        </Reveal>

        <Reveal delay={100} className="panel p-7">
          <h3 className="text-base font-semibold">Contribution activity</h3>
          <p className="mt-2 text-sm text-muted-foreground">
            Placeholder graph — replace with a live contribution graph once the GitHub username is
            added.
          </p>
          <div className="mt-6 grid grid-cols-[repeat(26,minmax(0,1fr))] gap-1" aria-hidden="true">
            {Array.from({ length: 182 }).map((_, index) => (
              <span
                key={index}
                className="aspect-square rounded-[2px] bg-secondary"
                style={{ opacity: 0.35 + ((index * 37) % 5) * 0.16 }}
              />
            ))}
          </div>
          <p className="mt-6 text-sm leading-relaxed text-muted-foreground">
            My focus is steady practice: solving problems, refining project code, and learning new
            concepts one commit at a time.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

export function ResumeSection() {
  return (
    <section id="resume" className="scroll-mt-24 border-y border-border bg-surface/40 py-24">
      <div className="mx-auto max-w-3xl px-5 text-center">
        <Reveal>
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-primary">Resume</p>
          <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">Download My Resume</h2>
          <p className="mt-4 text-base text-muted-foreground">
            A one-page summary of my skills, projects, and certifications for internship and
            placement applications.
          </p>
          <Button asChild size="lg" className="mt-8">
            <a href={LINKS.resume} download>
              <Download className="size-4" />
              Download My Resume
            </a>
          </Button>
        </Reveal>
      </div>
    </section>
  );
}

export function Contact() {
  const [sending, setSending] = useState(false);

  return (
    <section id="contact" className="mx-auto max-w-6xl scroll-mt-24 px-5 py-24">
      <SectionHeading
        eyebrow="Contact"
        title="Let's connect and build something useful."
        description="Reach out for internship opportunities, project collaboration, or just to talk code."
      />
      <div className="mt-12 grid gap-6 lg:grid-cols-[1fr_1.2fr]">
        <Reveal className="panel p-7">
          <ul className="space-y-4">
            <li>
              <a
                href={`mailto:${LINKS.email}`}
                className="flex items-center gap-3 text-sm text-muted-foreground transition-colors hover:text-primary"
              >
                <Mail className="size-4 text-primary" />
                {LINKS.email}
              </a>
            </li>
            <li>
              <a
                href={LINKS.linkedin}
                target="_blank"
                rel="noreferrer noopener"
                className="flex items-center gap-3 text-sm text-muted-foreground transition-colors hover:text-primary"
              >
                <Linkedin className="size-4 text-primary" />
                LinkedIn profile
              </a>
            </li>
            <li>
              <a
                href={LINKS.github}
                target="_blank"
                rel="noreferrer noopener"
                className="flex items-center gap-3 text-sm text-muted-foreground transition-colors hover:text-primary"
              >
                <Github className="size-4 text-primary" />
                GitHub profile
              </a>
            </li>
          </ul>
        </Reveal>

        <Reveal delay={100} className="panel p-7">
          <form
            action="https://formspree.io/f/xaewavow"
            method="POST"
            className="grid gap-4"
            onSubmit={async (event) => {
              event.preventDefault();
              const form = event.currentTarget;
              const fd = new FormData(form);
              setSending(true);
              try {
                const response = await fetch(form.action, {
                  method: "POST",
                  body: fd,
                  headers: { Accept: "application/json" },
                });
                if (response.ok) {
                  form.reset();
                  toast.success("Thanks for reaching out! I'll get back to you soon.");
                } else {
                  throw new Error("Formspree submission failed");
                }
              } catch (error) {
                console.error(error);
                toast.error("Couldn't send your message. Please try again or email me directly.");
              } finally {
                setSending(false);
              }
            }}
          >
            <div className="grid gap-2">
              <Label htmlFor="name">Name</Label>
              <Input id="name" name="name" required placeholder="Your name" />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" name="email" type="email" required placeholder="you@example.com" />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="message">Message</Label>
              <Textarea id="message" name="message" required rows={5} placeholder="Say hello..." />
            </div>
            <Button type="submit" size="lg" disabled={sending}>
              {sending ? "Sending..." : "Send message"}
            </Button>
          </form>
        </Reveal>
      </div>
    </section>
  );
}

export function SiteFooter() {
  return (
    <footer className="border-t border-border py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-3 px-5 text-sm text-muted-foreground sm:flex-row sm:justify-between">
        <p>© {new Date().getFullYear()} Sanjana N V</p>
        <p className="font-mono text-xs">Built with Python curiosity and clean code.</p>
      </div>
    </footer>
  );
}
