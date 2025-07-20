import { Header, Hero, Services, About, Contact } from "./components";
export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Services />
        <About />
        <Contact />
      </main>
    </>
  );
}
