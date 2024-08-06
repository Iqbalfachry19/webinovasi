import Image from "next/image";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import { Suspense } from "react";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Suspense>
        <Hero />
      </Suspense>
    </main>
  );
}
