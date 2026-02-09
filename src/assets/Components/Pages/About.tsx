import Footer from "../Footer";
import Navbar from "../Navbar";
import Banner from "../About/Banner";
import Teamside from "../About/Teamside";

export default function () {
  return (
    <>
      <Navbar />
      <main>
        <div className="container border-x border-primary">
          <Banner />
          <Teamside/>
          <Footer />
        </div>
      </main>
    </>
  );
}
