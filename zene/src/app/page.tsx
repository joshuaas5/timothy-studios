import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Procedimentos from "@/components/Procedimentos";
import Clinica from "@/components/Clinica";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Procedimentos />
        <Clinica />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
