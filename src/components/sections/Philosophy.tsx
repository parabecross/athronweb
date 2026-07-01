"use client";

import { SectionWrapper } from "@/components/ui/SectionWrapper";

export function Philosophy() {
  return (
    <SectionWrapper>
      <div className="mx-auto max-w-4xl px-6 text-center lg:px-8">
        <h2 className="mb-12 text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">
          No solo administramos boxes.
          <br />
          <span className="brand-text">Impulsamos comunidades.</span>
        </h2>

        <div className="mx-auto max-w-2xl space-y-6 text-lg leading-relaxed text-zinc-400">
          <p>
            Creemos que un box de CrossFit es mucho más que un espacio físico.
            Es una comunidad que crece con disciplina, esfuerzo y conexión
            humana.
          </p>
          <p>
            ATHRON nació con la convicción de que la tecnología debe servir a
            esa comunidad — no complicarla. Por eso diseñamos una plataforma
            que aporta profesionalismo y orden a la operación diaria, liberando
            tiempo y energía para lo que realmente importa: entrenar, motivar y
            crecer.
          </p>
          <p>
            Cada función, cada pantalla y cada detalle de ATHRON está pensado
            para que dueños, coaches y atletas vivan una experiencia moderna,
            confiable y a la altura de la comunidad que construyen juntos.
          </p>
        </div>
      </div>
    </SectionWrapper>
  );
}
