import Header from "./components/header";
import Hero from "./components/hero";
import Challenges from "./components/challenges";
import Arena from "./components/arena";
import Rulebook from "./components/rulebook";
import Registration from "./components/registration";
import Contact from "./components/contact";
import Footer from "./components/footer";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <Hero />
        <Challenges />
        <Arena />
        <Rulebook />
        {/*<Leaderboard />*/}
        <Registration />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
