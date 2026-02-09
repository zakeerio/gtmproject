type ButtonProps = {
  text?: string;
  href?: string;
  padding?: string;
};

export default function Button({ text, padding }: ButtonProps) {
  return (
    <button className={`relative group uppercase cursor-pointer text-white font-medium overflow-hidden`} style={{ padding }}>
      <span className="absolute inset-0 bg-gradient-to-b from-[#0D5352] to-[#075F58] transition-opacity duration-300 group-hover:opacity-0"></span>
      <span className="absolute inset-0 bg-black opacity-0 transition-opacity duration-300 group-hover:opacity-100"></span>
      <span className="relative z-1">{text}</span>
    </button>
  );
}
