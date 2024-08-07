import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import WebsiteTypes from "./components/WebsiteTypes";
import WebsiteBuilderSection from "./components/WebisteBuilder";
import Design from "./components/Design";
import Portfolio from "./components/Portfolio";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <WebsiteTypes />
      <WebsiteBuilderSection />
      <Design />
      <Portfolio />
    </main>
  );
}
