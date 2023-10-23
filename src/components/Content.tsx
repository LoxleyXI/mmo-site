import Header from "./Header";
import GameList from "./GameList";
import Footer from "./Footer";

export default function Content() {
  return (
    <>
    <Header />
    <main>
      <section className="container" id="mainHeader"></section>
      <GameList />
    </main>
    <Footer />
    </>
  );
}
