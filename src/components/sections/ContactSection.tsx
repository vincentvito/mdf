import { CONTACT } from "@/lib/constants";
import SectionHeading from "@/components/ui/SectionHeading";
import ScrollReveal from "@/components/ui/ScrollReveal";
import type { Dictionary } from "@/i18n/dictionaries/en";

interface ContactSectionProps {
  translations: Dictionary["contact"];
}

export default function ContactSection({ translations: t }: ContactSectionProps) {
  return (
    <section id="contact" className="py-16 md:py-24 bg-primary text-white">
      <div className="max-w-7xl mx-auto px-6">
        <ScrollReveal>
          <SectionHeading light>{t.heading}</SectionHeading>
        </ScrollReveal>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          {/* Contact info */}
          <ScrollReveal direction="left">
            <div className="space-y-8">
              <p className="text-white/60 text-lg leading-relaxed">
                {t.intro}
              </p>

              {/* Address */}
              <div className="flex items-start gap-4">
                <svg
                  className="w-6 h-6 text-accent mt-0.5 shrink-0"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                  />
                </svg>
                <div>
                  <p className="text-white font-medium">{CONTACT.address.line1}</p>
                  <p className="text-white/60">{CONTACT.address.city}</p>
                  <p className="text-white/60">{CONTACT.address.region}</p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-center gap-4">
                <svg
                  className="w-6 h-6 text-accent shrink-0"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                  />
                </svg>
                <a
                  href={`mailto:${CONTACT.email}`}
                  className="text-white hover:text-accent transition-colors"
                >
                  {CONTACT.email}
                </a>
              </div>

              {/* Phone */}
              <div className="flex items-center gap-4">
                <svg
                  className="w-6 h-6 text-accent shrink-0"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                  />
                </svg>
                <a
                  href={`tel:${CONTACT.phone.replace(/\s/g, "")}`}
                  className="text-white hover:text-accent transition-colors"
                >
                  {CONTACT.phone}
                </a>
              </div>
            </div>
          </ScrollReveal>

          {/* Contact form */}
          <ScrollReveal direction="right">
            <form
              action={`mailto:${CONTACT.email}`}
              method="POST"
              encType="text/plain"
              className="space-y-4"
            >
              <div>
                <label htmlFor="name" className="sr-only">
                  {t.form.nameLabel}
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder={t.form.namePlaceholder}
                  required
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 text-white placeholder:text-white/40 focus:outline-none focus:border-accent transition-colors"
                />
              </div>
              <div>
                <label htmlFor="email" className="sr-only">
                  {t.form.emailLabel}
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder={t.form.emailPlaceholder}
                  required
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 text-white placeholder:text-white/40 focus:outline-none focus:border-accent transition-colors"
                />
              </div>
              <div>
                <label htmlFor="message" className="sr-only">
                  {t.form.messageLabel}
                </label>
                <textarea
                  id="message"
                  name="message"
                  placeholder={t.form.messagePlaceholder}
                  rows={5}
                  required
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 text-white placeholder:text-white/40 focus:outline-none focus:border-accent transition-colors resize-none"
                />
              </div>
              <button
                type="submit"
                className="w-full px-6 py-3 bg-accent text-primary-dark font-medium tracking-wide uppercase text-sm hover:bg-accent-light transition-colors"
              >
                {t.form.submit}
              </button>
            </form>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
