import Postponed from "./components/postponed";
import WebNodes from "./components/web-nodes";

export default function Home() {
  return (
    <>
      <WebNodes />
      <div className="relative z-10">
        <main className="flex-1">
          <Postponed />
        </main>
      </div>
    </>
  );
}
