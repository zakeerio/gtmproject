export default function Banner() {
  return (
    <>
      <div className="bg-[url('/about-bg.jpg')] bg-cover bg-center bg-no-repeat text-center px-4">
        <img src="/banner-img.svg" className="inline-block lg:h-52 h-44.5" />
      </div>
      <div className="text-center lg:py-27 py-11 px-2 border-t border-primary">
        <div className="max-w-263 mx-auto">
          <p className="text-gray text-[18px font-mono] uppercase font-normal">Our Mission</p>
          <h2 className="text-primary font-secondary lg:text-[40px] text-[28px] max-w-280 mx-auto">
            Our team is committed to intellectual curiosity and rigor. We bring deep experience in investment, business, and software development.
          </h2>
        </div>
      </div>
    </>
  );
}
