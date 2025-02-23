import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Articles from "../components/Articles";
import Subscribe from "../components/Subscribe";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className="overflow-x-hidden">
      <Navbar /> {/* Include Navbar at the Top */}
      <Hero />
      <Articles />
      <Subscribe />
      <Footer />
    </div>
  );
}
