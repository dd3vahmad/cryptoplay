import Hero from "@/components/Hero";
import Navbar from "../components/Navbar";
import Footer from "@/components/Footer";
import Features from "@/components/Features";
import Providers from "@/components/Providers";
import Newsletter from "@/components/Newsletter";

export default function Home() {
  return (
    <div className="w-full flex flex-col">
      <Navbar />
      <Hero />
      <Newsletter />
      <Providers />
      <Features />
      <Footer />
    </div>
  );
}
