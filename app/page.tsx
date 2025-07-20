import { Header, Hero, Services, About } from "./components";
export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Services />
        <About />
      </main>
    </>
  );
}
