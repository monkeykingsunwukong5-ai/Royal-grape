import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Marquee from "./components/Marquee";
import About from "./components/About";
import Menu from "./components/Menu";
import Wine from "./components/Wine";
import Posts from "./components/Posts";
import Reviews from "./components/Reviews";
import Visit from "./components/Visit";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="bg-noir text-cream min-h-screen overflow-x-hidden">
      <Nav />
      <main>
        <Hero />
        <Marquee />
        <About />
        <Menu />
        <Wine />
        <Posts />
        <Reviews />
        <Visit />
      </main>
      <Footer />
    </div>
  );
}
