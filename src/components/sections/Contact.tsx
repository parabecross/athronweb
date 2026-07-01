"use client";

import { Button } from "@/components/ui/Button";
import { InstagramIcon } from "@/components/ui/InstagramIcon";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { CTAS, SITE } from "@/lib/constants";
import { motion } from "framer-motion";

export function Contact() {
  return (
    <SectionWrapper id="contacto">
      <div className="mx-auto max-w-3xl px-6 text-center lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="mb-6 text-4xl font-semibold tracking-tight text-white sm:text-5xl">
            ¿Quieres ver ATHRON funcionando en tu box?
          </h2>
          <p className="mb-10 text-lg text-muted-foreground">
            Escríbenos y solicita acceso promocional para uno de los 5 boxes
            piloto.
          </p>

          <div className="mb-10 flex flex-col items-center gap-4 text-sm text-muted-foreground sm:flex-row sm:justify-center sm:gap-8">
            <a
              href={SITE.whatsappPromoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-primary"
            >
              WhatsApp · {SITE.whatsapp}
            </a>
            <a
              href={`mailto:${SITE.email}?subject=Solicitud%20acceso%20promocional%20ATHRON`}
              className="transition-colors hover:text-primary"
            >
              {SITE.email}
            </a>
            <a
              href={SITE.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 transition-colors hover:text-primary"
            >
              <InstagramIcon className="h-4 w-4" />
              {SITE.instagram}
            </a>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <Button href={SITE.whatsappPromoUrl} size="lg">
              {CTAS.secondary}
            </Button>
            <Button
              href={`mailto:${SITE.email}?subject=Solicitud%20acceso%20promocional%20ATHRON`}
              variant="secondary"
              size="lg"
            >
              Enviar correo
            </Button>
          </div>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
