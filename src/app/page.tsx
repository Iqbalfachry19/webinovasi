import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import WebsiteTypes from "./components/WebsiteTypes";
import WebsiteBuilderSection from "./components/WebisteBuilder";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <WebsiteTypes />
      <WebsiteBuilderSection />
    </main>
  );
}
