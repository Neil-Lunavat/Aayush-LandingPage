import { CheckCircle2 } from "lucide-react";
import { pricingOptions } from "../constants";

const Pricing = () => {
    return (
        <div id="pricing" className="mt-20">
            <h2 className="text-3xl sm:text-5xl lg:text-6xl text-center my-8 tracking-wide">
                Pricing
            </h2>
            <div className="flex flex-wrap justify-center gap-6">
                {pricingOptions.map((option, index) => (
                    <div key={index} className="w-full sm:w-2/3 lg:w-1/3 p-4">
                        <div className="p-10 border border-neutral-700 rounded-xl text-center">
                            <p className="text-4xl mb-6">
                                {option.title}
                                {option.title === "Start Coaching" && (
                                    <span className="bg-gradient-to-r from-orange-500 to-red-400 text-transparent bg-clip-text text-xl ml-2">
                                        <br></br>(Most Popular)
                                    </span>
                                )}
                            </p>
                            <p className="mb-6">
                                <span className="text-5xl font-bold">
                                    {option.price}
                                </span>
                                {option.price !== "$0" && (
                                    <span className="text-neutral-400 text-lg">
                                        {" "}
                                        /Month
                                    </span>
                                )}
                            </p>
                            <ul className="text-left mx-auto w-fit">
                                {option.features.map((feature, index) => (
                                    <li
                                        key={index}
                                        className="mt-4 flex items-center"
                                    >
                                        <CheckCircle2 className="text-green-400" />
                                        <span className="ml-2">{feature}</span>
                                    </li>
                                ))}
                            </ul>
                            <button className="inline-flex justify-center items-center text-center w-full h-12 p-5 mt-10 tracking-tight text-xl hover:bg-orange-900 border border-orange-900 rounded-lg transition duration-200">
                                {option.price === "$0"
                                    ? "Book Now"
                                    : "Subscribe"}
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Pricing;
