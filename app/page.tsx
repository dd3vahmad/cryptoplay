import Hero from "@/components/Hero";
import Navbar from "../components/Navbar";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="w-full flex flex-col">
      <Navbar />
      <Hero />
      <Hero />
      <Footer />
    </div>
  );
}
