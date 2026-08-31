import Header from "./components/header";
import Hero from "./components/hero";
import Challenges from "./components/challenges";
import Arena from "./components/arena";
import Rulebook from "./components/rulebook";
import Registration from "./components/registration";
import Faq from "./components/faq";
import Contact from "./components/contact";
import Footer from "./components/footer";
import WebNodes from "./components/web-nodes";

export default function Home() {
  return (
    <>
      <WebNodes />
      <div className="relative z-10">
        <Header />
        <main className="flex-1">
          <Hero />
          <Challenges />
          {/*<Arena />*/}
          <Rulebook />
          {/*<Leaderboard />*/}
          <Registration />
          <Faq />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  );
}
