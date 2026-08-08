/*
 * THESIS: Presentar el estudio y convertir interés en conversaciones reales por WhatsApp.
 * OWN-WORLD: Marfil técnico, carbón, rojo Zealous y geometría automotriz sin activos inventados.
 * STORY: Identidad, propuesta, contacto, servicios y datos esenciales.
 * FIRST VIEWPORT: Header funcional y Hero editorial con dos rutas de conversión.
 * FORM: Split asimétrico que se apila con claridad desde 320 px.
 */
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { Services } from "@/components/sections/Services";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Services />
      </main>
      <Footer />
    </>
  );
}
