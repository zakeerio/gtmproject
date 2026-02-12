import clsx from "clsx";
import { type FormEvent, useState, useRef } from "react";
import emailjs from "emailjs-com";

type SignupFormProps = {
  buttonText?: string;
  classInput?: string;
  classButton?: string;
  action?: string;
  source?: string; // 👈 add this

};

export default function SignupForm({ buttonText = "Let us know", classInput, classButton, action, source = "default", }: SignupFormProps) {
  const [email, setEmail] = useState("");
  const form = useRef<HTMLFormElement>(null);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    if (form.current) {
      
      emailjs.sendForm('service_2izvhy9', 'template_gnlmn3i', form.current, 'S4yGIlJuhOmPKgE9i')
        .then((result) => {
          console.log(result.text);
          alert("Message sent successfully!");
          setEmail("");
        }, (error) => {
          console.log(error.text);
        });
    }
  };

  return (
    <form
      ref={form}
      onSubmit={handleSubmit}
      className="lg:bg-white lg:flex  block lg:p-2 "
      id={source || "default"}
    >
      <div className={clsx("w-full mb-1.5 px-3 border-y border-primary lg:px-0 lg:mb-0 lg:border-none ", classInput)}>
        <input type="email" name="email" required placeholder="What’s your email?" className="w-full text-lg bg-white lg:h-full h-13 px-2 font-secondary outline-none placeholder-[#8D8D8D] placeholder-opacity-100 " value={email}
          onChange={(e) => setEmail(e.target.value)} />
      </div>
      <div className={clsx("lg:px-0 px-3", classButton)}>
        <button type="submit" className="bg-[#0D5352] cursor-pointer text-white uppercase font-mono w-full lg:w-auto min-w-35 lg:h-auto h-13 px-4 py-2 flex items-center justify-center lg:block whitespace-nowrap hover:bg-black transition-colors duration-300">
          {buttonText}
        </button>

      </div>
    </form>
  );
}
