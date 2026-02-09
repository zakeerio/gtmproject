import SignupForm from "../SignupForm";

export default function FooterCta() {
    return (
        <>
            <div className="bg-[url('/cta-img.jpg')] bg-no-repeat bg-center bg-cover border-y border-primary overflow-hidden lg:px-4 mb-46.5">
                <div className="px-4">
                    <div className="ring-[0.6px] ring-[#989898]  bg-[url('/shades.png')] bg-no-repeat bg-center bg-cover max-w-161 w-full mx-auto  pt-27 pb-41  lg:px-0   ">
                        <h2 className="text-center text-primary mb-5 ">Interested in learning more</h2>
                        <div className="form_border relative  lg:px-0 px-0 "><SignupForm classButton="!px-0" classInput="!px-0" /></div>
                    </div>
                </div>
            </div>
        </>
    )
}