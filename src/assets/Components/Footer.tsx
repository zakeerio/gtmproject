import { Link } from "react-router-dom";
import SignupForm from "./SignupForm";

export default function Footer() {
  const footerLinks = [
    {
      text: "Home",
      to: "/",
      borders: "border-l border-r border-primary",
    },
    { text: "About", to: "/about", borders: "" },
    {
      text: "Contact",
      to: "/contact",
      borders: "border-l border-r border-primary",
    },
    {
      text: "Privacy",
      to: "/privacy",
      borders: "border-r border-primary",
    },
  ];

  return (
    <div className="grid gap-0 content-start">
      <div className="grid lg:grid-cols-[12%_12%_12%_12%_12%_40%] grid-cols-[1fr_1fr_1fr_1fr] border-t border-b border-primary font-mono">
        <div className="bg-[url('/footer_dot.svg')] border-r border-primary col-span-4 lg:col-span-5 border-b border-primary lg:h-auto h-21"></div>
        <div className="lg:py-6.5 text-center lg:row-start-auto row-start-4 col-span-4 lg:col-span-1 pt-4 pb-5 border-t border-primary lg:border-none">
          <h3 className="text-primary font-primary text-center">
            Interested in learning more
          </h3>
        </div>
        <div className="border-b border-primary lg:block hidden"></div>
        {footerLinks.map((link, index) => (
          <Link key={index} to={link.to} className={`text-lg uppercase hover:text-[#075F58] transition-colors duration-300 flex items-center justify-center p-2 ${link.borders}`}> {link.text}</Link>
        ))}
        <div className="lg:border-y border-primary lg:row-start-auto row-start-5 col-span-4 lg:col-span-1"> 
          <SignupForm buttonText="Contact Us" action="mailto:tkrueger@gatesmillstech.com;zwolfe@gatesmillstech.com" classButton="!px-0" classInput="!px-0" />
        </div>
        <Link to="/" className="lg:flex hidden p-11 border-r border-primary items-center justify-center ">
            <img src="/site-logo.svg" alt="" className="cursor-pointer transition-transform duration-300 ease-out hover:scale-110" />
        </Link>
        <div className="lg:py-12 pt-20 pb-9 px-3 col-span-4  border-t border-l border-primary lg:row-start-auto row-start-3">
          <img src="/text.svg" alt="" className="w-full mb-2" />
          <p className="text-primary text-small">
            Copyright © 2026 Gates Mills Technologies LLC - All Rights Reserved.
          </p>
        </div>
        <div className="bg-[url('/footer_dot.svg')] lg:col-span-1 col-span-4 border-l border-primary lg:mt-0 -mt-14 lg:h-auto h-40"></div>
      </div>
    </div>
  );
}
