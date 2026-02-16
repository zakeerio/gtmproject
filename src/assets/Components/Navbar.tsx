import { Link } from "react-router-dom";
import { useState } from "react";
import SignupForm from "./SignupForm";
export default function Navbar() {
  const [open, setOpen] = useState(false);
  const MenuItems = [
    { title: "HOME", link: "/" },
    { title: "ABOUT", link: "/about" },
    { title: "CONTACT", link: "/contact", },
    { title: "Privacy", link: "/privacy", },
  ];
  return (
    <header className="border-y border-primary text-gray px-5 lg:relative fixed inset-x-0 top-0 bg-[#f4f3ee] z-3">
      <div className="container mx-auto">
        <div className="flex justify-between">

          <Link to="/" className="cursor-pointer border-x border-primary p-3 lg:w-35 flex items-center justify-center">
            <img src="./site-logo.svg" alt="Gates Mills Technologies logo" className="cursor-pointer lg:w-11 w-7.5 transition-transform duration-300 ease-out hover:scale-110" />
          </Link>
          {open && <div onClick={() => setOpen(false)} className="fixed inset-0 z-4 lg:hidden"></div>}
          <nav className={`fixed lg:h-auto h-[calc(100dvh-58px)] lg:static top-14.25 z-5 right-0  bg-[#f4f3ee] w-full flex lg:flex-row text-[#3F3F3F] px-5 flex-col transform transition-transform duration-300 ease-in-out ${open ? "translate-x-0" : "translate-x-full"} lg:w-auto lg:translate-x-0 lg:items-center lg:gap-8 lg:p-0`}>
            <ul
              className="lg:bg-none lg:gap-0 gap-10 flex lg:items-center lg:flex-row flex-col lg:border-none border-x border-primary"
              style={{ backgroundImage: "url('./footer_dot.svg')" }}
            >
              {MenuItems.map((item, index) => (
                <li key={index} className="bg-[#f4f3ee] lg:border-none border-y border-primary first:border-t-0 lg:last:hidden font-mono hover:text-[#075F58] transition-colors duration-200">
                  <Link onClick={() => setOpen(false)} className="lg:p-[12px_20px] p-[8px_12px_8px_20px] flex justify-between items-center lg:text-lg" to={item.link}>{item.title} 
                    <img src="./arrow.svg" alt="" className="block lg:hidden" />
                  </Link>
                </li>
              ))}
            </ul>
            <div className="lg:px-6 lg:py-8 border-x border-primary h-full flex items-end">
              <div className="block lg:hidden w-full">
                <div className="pb-5">
                  <h3 className="text-primary font-primary text-center">Interested in learning more</h3>
                </div>
                <SignupForm buttonText="Contact Us" action="mailto:tkrueger@gatesmillstech.com;zwolfe@gatesmillstech.com" classButton="px-3" classInput="px-3 border-y border-primary" /> 
                
              </div>
            </div>
            <div
              className="lg:col-span-1 col-span-4 border-l border-primary lg:mt-0 -mt-14 h-40 lg:hidden"
              style={{ backgroundImage: "url('./footer_dot.svg')" }}
            ></div>

          </nav>
          <button onClick={() => setOpen(!open)} className="lg:hidden border-x border-primary relative z-50 flex justify-center items-center w-12.5 cursor-pointer">
            {open ? (
              <img src="./cross.svg" alt="close menu" className="w-5" />
            ) : (
              <img src="./hamburg.svg" alt="menu" className="w-8.5" />
            )}
          </button>
        </div>
      </div>
    </header>
  );
}
