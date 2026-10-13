import {
  Navigation,
  Hero,
  About,
  Projects,
  Technologies,
  Experience,
  Contact,
  Footer,
} from "./components/sections";

export default function Home() {
  return (
    <>
      <Navigation />
      <Hero />
      <main>
        <About />
        <Projects />
        <Technologies />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
