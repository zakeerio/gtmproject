export default function Teamside() {
  const teamData = [
    {
      role: "Founder & CEO",
      name: "Zachary Wolfe",
      description:
        "Zach is the CIO of Gates Mills Technologies. Zach sets the company's strategic goals and oversees all of research and trading within GMT. His day to day responsibilities include managing GMT's portfolio trading, advising in the design of our trading technologies, and interacting with GMT's expansive network of stakeholders.",
      description2:
        "Zach began his investment and trading career in 2012 as a trader with Chimera Securities, a proprietary trading firm located in New York City. It was at Chimera where Zach noticed there was some structure to markets that could be expressed mathematically. He later left Chimera in 2014 to pursue his MBA at Case Western Reserve University where he subsequently founded Gates Mills Technologies in 2018, and implement his first automated, systematic trading strategy.",
      image: "./ceo.jpg", 
    },
    {
      role: "CFO",
      name: "Timothy Krueger",
      description:
        "Tim is the CFO of Gates Mills Technologies. Tim's role focuses primarily on building and maintaining clean accounting and reporting systems, tracking KPIs, and managing GMT's relationships with its external service providers. Tim has seven years of experience working as a finance and strategy consultant, primarily in the SaaS and financial services industries. He has served as a consultant or fractional CFO for 20+ companies over this time period.",
      description2:
        "His work has often included accounting, financial modeling, organizational budgeting, price modeling, price negotiations, go-to-market strategy for new ventures, identifying acquisition targets, and occasionally assisting distressed companies with turn-around plans. He also serves on the boards of two organizations that each own and operate $30 - 50MM of commercial real estate.Tim has a BA from Cornell University and an MBA from Case Western Reserve University.",
      image: "./cfo.jpg",
    },
    {
      role: "CTO",
      name: "Andrew Brewer",
      description:
        "Andy is the CTO of Gates Mills Technologies. Andy's primary role includes building, implementing and maintaining GMT's core technologies and trading algorithms. Andy has a wealth of experience bringing complex technologies to market including having built early-stage products for Palantir, Fiverr, Okta and Elastic. Andy has also consulted for several multi-billion dollar global companies like Cisco, Naspers, Sanmina & Bruker, and has delivered expert code audit testimony for dozens of software patent cases.",
      description2:
        "Personally, Andy has 3 successful exits (Simpli: Natural Language Processing software now powering Google AdSense; UpTrending: Software Agency to top Silicon Valley startups; Flyreel: AI Home Inspections, Claims & Risk Mitigation powering 50% of the US automated home inspection market) Andy has a BS in Entrepreneurship from Babson College.",
      image: "./cto.jpg",
    },
  ];
  return (
    <div className="border-x border-primary mb-46.5">
      {teamData.map((data, index) => (
        <>
          <div key={index} className={`lg:flex grid grid-cols-[49px_1fr] border-y border-collapse border-primary ${index % 2?'flex-row-reverse':''}`}>
            <div className="flex justify-center items-center lg:w-[88px] w-[49px]">
              <p className="font-mono text-2xl uppercase text-[#3F3F3F] rotate-[-90deg] whitespace-nowrap">
                {data.role}
              </p>
            </div>
            <div className="border-x border-primary flex-1">
              <h2 className="text-h2 font-secondary text-primary border-b border-primary lg:pb-4 pb-2 lg:pt-6 pt-2 lg:px-11.5 pl-3">
                {data.name}
              </h2>
  
              <div className="lg:px-11.5 px-3 text-small font-secondary max-w-189 text-gray pt-5.5 pb-7.5">
                <p className="mb-4">{data.description}</p>
                {data.description2 && <p>{data.description2}</p>}
              </div>
            </div>
            <img src={data.image} alt={data.name} className="lg:w-[41%] w-full col-span-2 row-start-1 lg:h-auto  h-full object-cover" />
          </div>
            <div className={`bg-[url('/footer_dot.svg')] ${index % 2?'text-right':''} last:hidden`}><img src="./teamshades.svg" alt="" className="inline-block w-[41%]"/></div>
        </> 
      ))}
    </div>
  );
}
