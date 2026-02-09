import Footer from "../Footer";
import Navbar from "../Navbar";
import Banner from "../Privacy/Banner";

export default function Privacy() {
  return (
    <>
      <Navbar />
      <main>
        <div className="container border-x border-primary">
          <Banner />
          <Footer />
        </div>
      </main>
    </>
  );
}
