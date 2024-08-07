import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import WebsiteTypes from "./components/WebsiteTypes";
import WebsiteBuilderSection from "./components/WebisteBuilder";
import DesignSection from "./components/Design";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <WebsiteTypes />
      <WebsiteBuilderSection />
      <DesignSection />
    </main>
  );
}
