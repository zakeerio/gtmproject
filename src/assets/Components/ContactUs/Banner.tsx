import SignupForm from "../SignupForm";
export default function () {
  return (
    <>
      <div className="border-b border-primary">
        <div className="grid grid-cols-1 lg:grid-cols-[40%_1fr] items-center justify-center relative overflow-hidden">
          <div className="absolute top-0 lg:left-[13.6%] bg-[url('/dots-banner.png')] left-0 bottom-0 right-0 z-1"/>
          <div className="text-center py-20">
              <h1 className="text-primary border-y border-primary text-[76px] font-mono px-2 leading-[50px]">CONTACT</h1>
          </div>
          <img src="/contact-bg.jpg" className="w-full lg:h-auto h-30.5 object-cover object-center" />
        </div>
        <div  className="grid grid-cols-1 lg:grid-cols-[40%_1fr] items-center justify-center ">
          <div className="lg:border-t border-r  border-primary text-gray font-secondary lg:py-23 lg:pl-14 py-10 pl-6 pr-10">
            <p className="text-h5 max-w-200">Our team is open to meaningful conversation. Reach out and connect with GMT. </p>
          </div>
          <div className="lg:pl-12 px-4 lg:pr-14 py-6 lg:border-none border-t border-primary">
            <SignupForm classInput="border-none !p-0" classButton="!p-0" />
          </div>
        </div>
      </div>
    </>
  );
}
