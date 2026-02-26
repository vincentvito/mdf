import ScrollReveal from "@/components/ui/ScrollReveal";
import SplitText from "@/components/ui/SplitText";
import type { Dictionary } from "@/i18n/dictionaries/en";

interface AboutSectionProps {
  translations: Dictionary["about"];
}

export default function AboutSection({ translations: t }: AboutSectionProps) {
  return (
    <section id="about" className="py-16 md:py-24 bg-secondary">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <ScrollReveal>
          <p className="text-sm font-medium tracking-widest uppercase text-accent mb-6">
            {t.label}
          </p>
        </ScrollReveal>
        <SplitText
          as="blockquote"
          splitBy="words"
          scrub
          staggerDelay={0.02}
          className="font-heading text-2xl md:text-4xl lg:text-5xl text-primary font-bold leading-snug mb-8"
        >
          {`\u201C${t.quote}\u201D`}
        </SplitText>
        <ScrollReveal>
          <div className="w-16 h-0.5 bg-accent mx-auto mb-8" />
        </ScrollReveal>
        <ScrollReveal delay={0.15}>
          <p className="text-muted text-lg leading-relaxed mb-6">
            {t.paragraph1}
          </p>
          <p className="text-muted text-lg leading-relaxed">
            {t.paragraph2}
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
