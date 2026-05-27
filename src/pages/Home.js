import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <section className="hero">
          <h1>Little Lemon</h1>
          <p>Reserve your table online.</p>
        </section>
      </main>
      <Footer />
    </>
  );
}
