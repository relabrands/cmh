import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/landing/Nav";
import { TopBar } from "@/components/landing/TopBar";
import { Hero } from "@/components/landing/Hero";
import { Ticker } from "@/components/landing/Ticker";
import { Services } from "@/components/landing/Services";
import { Urgency } from "@/components/landing/Urgency";
import { Especialidades } from "@/components/landing/Especialidades";
import { Ars } from "@/components/landing/Ars";
import { WhyUs } from "@/components/landing/WhyUs";
import { Contact } from "@/components/landing/Contact";
import { Footer } from "@/components/landing/Footer";
import { WhatsAppFab } from "@/components/landing/WhatsAppFab";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Centro Médico Hispánico — Atención 24 horas en RD" },
      { name: "description", content: "Centro Médico Hispánico, SRL: atención 24/7 los 365 días del año. Más de 130 especialistas y laboratorio in-house en República Dominicana." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="bg-background">
      <TopBar />
      <Nav />
      <Hero />
      <Ticker />
      <Services />
      <Urgency />
      <Especialidades />
      <Ars />
      <WhyUs />
      <Contact />
      <Footer />
      <WhatsAppFab />
    </main>
  );
}
