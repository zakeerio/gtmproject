import clsx from "clsx";

type SignupFormProps = {
  buttonText?: string;
  classInput?: string;
  classButton?: string;
  action?: string;
};

export default function SignupForm({ buttonText = "Let us know", classInput, classButton, action }: SignupFormProps) {
  return (
    <form action={action} method={action ? "post" : undefined} encType={action ? "text/plain" : undefined} className="lg:bg-white lg:flex  block lg:p-2 ">
      <div className={clsx("w-full mb-1.5 px-3 border-y border-primary lg:px-0 lg:mb-0 lg:border-none ", classInput)}>
        <input type="email" name="email" required placeholder="What’s your email?" className="w-full text-lg bg-white lg:h-full h-13 px-2 font-secondary outline-none placeholder-[#8D8D8D] placeholder-opacity-100 " />
      </div>
      <div className={clsx("lg:px-0 px-3", classButton)}>
        <button className="bg-[#0D5352] cursor-pointer text-white uppercase font-moo w-full lg:w-auto min-w-35 lg:h-auto h-13 px-4 py-2 flex items-center justify-center lg:block whitespace-nowrap hover:bg-black transition-colors duration-300">
          {buttonText}
        </button>
      </div>
    </form>
  );
}
