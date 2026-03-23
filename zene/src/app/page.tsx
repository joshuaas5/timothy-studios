import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Procedimentos from "@/components/Procedimentos";
import Clinica from "@/components/Clinica";
import Footer from "@/components/Footer";

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
    </>
  );
}
