// import Button from "../Button";

export default function Banner() {
    return (
        <>
            <div className="py-20 lg:py-46 md:pl-[6.25%] px-5 md:bg-[url('/dots-img.png'),url('/hero-side-img.png'),url('/hero-bg-1.jpg')] bg-[url('/mobile-bg-home.png')] bg-no-repeat md:bg-[size:cover,52%_100%,cover] md:bg-[position:center,top_right,left_center] bg-cover md:h-auto h-[calc(100dvh-57px)] flex items-center">
                <div className="lg:max-w-150 flex flex-col items-start gap-1">
                    <div className="flex items-center gap-2.5">
                        <img className="w-7.5" src="./site-logo.svg" alt="Gates Mills Technologies logo" />
                        <p className="text-h5 text-primary font-mono "> GATES MILLS TECHNOLOGIES </p>
                    </div>
                    <h1 className="text-h1 text-secondary font-primary"> Quantitative, automated <br /> trading of US Equities. </h1>
                    {/* <Button text="Download whitepaper" padding="14px 32px" /> */}
                </div>
            </div>

        </>
    )
}
