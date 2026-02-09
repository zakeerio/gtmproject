import Footer from "../Footer";
import Banner from "../Home/Banner";
import FooterCta from "../Home/FooterCta";
import Philosophy from "../Home/Philosophy";
import Navbar from "../Navbar";

export default function HomeSection() {
  return (
    <>
      <Navbar />
      <main>
        <div className="container border-x border-primary">
          <Banner />
          <Philosophy />
          <FooterCta />
          <Footer />
        </div>
      </main>
    </>
  );
}
