import Hero from "@/components/Hero";
import Navbar from "../components/Navbar";
import Footer from "@/components/Footer";
import Features from "@/components/Features";

export default function Home() {
  return (
    <div className="w-full flex flex-col">
      <Navbar />
      <Hero />
      <Features />
      <Footer />
    </div>
  );
}
