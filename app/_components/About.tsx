import { ArrowUpRight } from 'lucide-react';

export default function About() {
    const PatternSVG = "url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCI+PHJlY3Qgd2lkdGg9IjIwIiBoZWlnaHQ9IjIwIiBmaWxsPSIjZmZmIi8+PHJlY3Qgd2lkdGg9IjEwIiBoZWlnaHQ9IjEwIiBmaWxsPSIjZjNmM2YzIi8+PHJlY3QgeD0iMTAiIHk9IjEwIiB3aWR0aD0iMTAiIGhlaWdodD0iMTAiIGZpbGw9IiNmM2YzZjMiLz48L3N2Zz4=')";

    return (
        <section className="site-container lg:px-50! py-16 lg:py-32">
            <div className="flex flex-col lg:flex-row gap-16 lg:gap-5 items-center">
                {/* Left Side: Images */}
                <div className="relative w-full lg:w-1/2 aspect-[4/2.5]" data-aos="fade-right">
                    {/* Main Background Checkered Image */}
                    <div className="absolute top-0 z-1 left-0 w-[65%] bg-white rounded-[2.5rem] overflow-hidden border-4 border-white">
                        <img src={`/home/about-1.jpg`} alt='BioCer' />
                    </div>

                    {/* Overlapping Checkered Image */}
                    <div className="absolute z-0 top-28 right-[10%] w-[55%] bg-white rounded-[2.5rem] overflow-hidden">
                        <img src={`/home/about-2.jpg`} alt='BioCer' />
                    </div>

                    {/* Badge */}
                    <div className="absolute top-[35%] lg:top-[25%] left-[55%] lg:left-[65%] z-20 w-[140px] h-[140px] bg-primary rounded-full flex flex-col items-center justify-center shadow-lg border-[6px] border-white transform -translate-x-1/2 -translate-y-1/2">
                        <div className="relative w-full h-full flex items-center justify-center">
                            {/* Circular text SVG */}
                            <svg viewBox="0 0 100 100" className="absolute inset-0 w-full h-full animate-[spin_15s_linear_infinite]">
                                <defs>
                                    <path id="circlePath" d="M 50, 50 m -34, 0 a 34,34 0 1,1 68,0 a 34,34 0 1,1 -68,0" />
                                </defs>
                                <text fill="white" fontSize="10.5" fontWeight="bold" letterSpacing="0.06em">
                                    <textPath href="#circlePath" startOffset="0%">
                                        . 28 years experience . 28 years experience
                                    </textPath>
                                </text>
                            </svg>
                            {/* Inner decorative light-green circle */}
                            <div className="w-[64px] h-[64px] bg-[#bede7a] rounded-full flex items-center justify-center shadow-sm">
                                <img src={`/home/vector.svg`} width={`28px`} alt='BioCer' />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Side: Content */}
                <div className="w-full lg:w-1/2 flex flex-col items-start pt-8 lg:pt-0" data-aos="fade-left">
                    <div className="flex items-center gap-2 mb-4">
                        <img src={`/home/vector.svg`} width={`25px`} alt='BioCer' />
                        <span className="text-gray-500 text-[16px] font-medium">About Us</span>
                    </div>

                    <h2 className="section-title mb-6">
                        About BioCer Entwicklungs-GmbH
                    </h2>

                    <p className="section-desc mb-10 text-justify">
                        BioCer develops new materials and implements them in innovative medical devices. We are specialized in research, development and production of innovative, biocompatible medical devices without animal or human components. Do you have an idea for a new medical product that you want to bring to market? Make use of our team and our know-how. After all, we not only develop and produce in-house, but also on behalf of customers. Please contact us!
                    </p>

                    <button className="bg-primary hover:bg-primary-hover text-white px-6 py-2.5 rounded-full text-sm font-medium flex items-center gap-3 transition-colors">
                        Know About Me
                        <div className="bg-white rounded-full p-1 text-primary">
                            <ArrowUpRight className="w-4 h-4 stroke-[3]" />
                        </div>
                    </button>
                </div>
            </div>
        </section>
    );
}
