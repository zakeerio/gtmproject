export default function Philosophy() {
  return (
    <>
      <div className="flex flex-col lg:grid lg:grid-cols-[48%_1fr] items-center">
        <img className="w-full" src="./Dots.svg" alt="" />
        <div className="lg:pl-16.5 pl-4 max-w-[620px] py-14">
          <h2 className="text-primary font-primary">
            Medium frequency, Systematic, No market correlation, Ultra-scalable.
          </h2>
          <p className="text-gray text-body-lg  font-secondary font-normal max-w-125">
            Our strategy uses numerous risk-management techniques to keep
            average volatility lower than market volatility.
          </p>
        </div>
      </div>
      <div className="bg-[url('/dots__bg.png')] bg-no-repeat bg-center bg-cover border-t border-primary pt-15 pb-10.25">
        <div className="flex flex-col-reverse lg:grid lg:grid-cols-2 items-center">
          <div className="flex flex-col gap-3 max-w-136 lg:pl-18.5 pl-4 pr-6">
            <h2 className="text-primary font-primary">Trading Philosophy</h2>
            <p className="text-body text-gray font-secondary ">
              GMT develops strategies that generate alpha from durable
              mathematical truths that exist in equity markets.
            </p>
            <p className="text-body text-gray font-secondary">
              We believe in the value of transparent, explainable strategies.
              Our proprietary trading strategies are designed to exploit price
              patterns that endure across a wide array of market regimes.
            </p>
            <p className="text-body text-gray font-secondary">
              More specifically, our algorithms detect signals predictive of
              large changes in intraday market prices defined as -/+ 1 standard
              deviation away from the market's average price change. Exploiting
              this volatility gives us a highly uncorrelated return.
            </p>
          </div>
          <img src="./graph.svg" alt="Trading philosophy graph illustration" className="lg:w-auto w-full" />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 mb-24 border-b border-primary  ">
        <div className="relative">
          <img src="./lines.svg" alt="Short signal chart at negative one standard deviation" className="w-full" />
          <div className="absolute bottom-4 lg:left-14 left-4">
            <p className="text-body text-gray">-1 SD</p>
            <p className="text-[32px] text-primary font-secondary">Short Signal</p>
          </div>
        </div>
        <div className="relative border border-primary border-collapse">
          <img src="./curved__line.png" alt="Noise signal chart" className="w-full" />
          <div className="absolute bottom-4 lg:left-14 left-4">
            <p className="text-body text-gray">X</p>
            <p className="text-[32px] text-primary font-secondary">Noise Signal</p>
          </div>
        </div>
        <div className="relative">
          <img src="curved.svg" alt="Long signal chart at positive one standard deviation" className="w-full" />
          <div className="absolute bottom-4 lg:left-14 left-4">
            <p className="text-body text-gray">+1 SD</p>
            <p className="text-[32px] text-primary font-secondary">Long Signal</p>
          </div>
        </div>
      </div>
    </>
  );
}
