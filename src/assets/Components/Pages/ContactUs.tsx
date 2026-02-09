import Banner from "../ContactUs/Banner";
import Footer from "../Footer";
import Navbar from "../Navbar";

export default function () {
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
