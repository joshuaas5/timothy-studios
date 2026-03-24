import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Imoveis from "@/components/Imoveis";
import Sobre from "@/components/Sobre";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Imoveis />
        <Sobre />
      </main>
      <Footer />
    </>
  );
}
