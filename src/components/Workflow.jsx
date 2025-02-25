import { CheckCircle2 } from "lucide-react";
import codeImg from "../assets/code.avif";
import { checklistItems } from "../constants";

const Workflow = () => {
    return (
        <div id="workflow" className="mt-16 px-4 sm:px-6 lg:px-10 py-10">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-center mb-8 tracking-wide text-white">
                Accelerate your{" "}
                <span className="bg-gradient-to-r from-orange-500 to-orange-800 text-transparent bg-clip-text">
                    financial expertise.
                </span>
            </h2>
            <div className="flex flex-col lg:flex-row justify-center items-center max-w-6xl mx-auto gap-8">
                <div className="w-full lg:w-1/2 p-3 rounded-lg shadow-md bg-gradient-to-br from-neutral-900">
                    <img
                        src={codeImg}
                        alt="Financial expertise visualization"
                        className="w-full h-auto rounded-lg object-cover shadow-sm transition-transform duration-300 hover:scale-102 workflow-image"
                    />
                </div>
                <div className="w-full lg:w-1/2 p-4 bg-neutral-900 rounded-lg shadow-md">
                    {checklistItems.map((item, index) => (
                        <div
                            key={index}
                            className="flex items-start mb-6 last:mb-0 hover:bg-neutral-800 p-3 rounded-md transition-colors duration-200 checklist-item"
                        >
                            <div className="text-green-400 mt-1 mr-4 flex-shrink-0">
                                <CheckCircle2 className="h-6 w-6" />
                            </div>
                            <div>
                                <h5 className="text-xl font-medium text-white mb-1">
                                    {item.title}
                                </h5>
                                <p className="text-base text-neutral-400 leading-snug">
                                    {item.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Workflow;
