import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import WebsiteTypes from "./components/WebsiteTypes";
import WebsiteBuilderSection from "./components/WebsiteBuilder";
import Design from "./components/Design";
import Portfolio from "./components/Portfolio";
import Alasan from "./components/Alasan";
import Fitur from "./components/Fitur";
import Artikel from "./components/Artikel";

export default function Home() {
  return (
    <main>
      <Hero />
      <WebsiteTypes />
      <WebsiteBuilderSection />
      <Design />
      <Portfolio />
      <Alasan />
      <Fitur />
      <Artikel />
    </main>
  );
}
