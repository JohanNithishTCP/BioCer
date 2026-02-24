import { ArrowUpRight } from 'lucide-react';

export default function TradeFair() {
    return (
        <section className="site-container py-8 mb-10">
            <div className="relative w-full h-[280px] md:h-[320px] bg-[#6c9826] rounded-[2rem] overflow-hidden flex flex-col items-center justify-center text-center px-6 shadow-md">

                {/* Background Image Placeholder overlaying the green color */}
                <div className="absolute inset-0 bg-[url('/home/trade-fare-bg.jpg')] z-1 bg-bottom bg-cover bg-fixed bg-no-repeat mix-blend-overlay" />
                <div className="absolute inset-0 bg-black/40 mix-blend-multiply" />

                <div className="relative z-10 flex flex-col items-center" data-aos="fade-up">
                    <h2 className="text-3xl md:text-[1.95rem] font-semibold text-white mb-4 tracking-wide">Trade Fair Dates</h2>
                    <p className="text-white/95 text-[16px] md:text-sm mb-8 max-w-[800px] mx-auto leading-relaxed font-medium">
                        Would you like to get an idea of our developments and products at a trade fair?
                        Then visit us on location. Check out which trade fairs we are attending.
                    </p>
                    <div className="flex items-center mt-2">
                        <button className="bg-primary hover:bg-primary-hover border border-white/20 text-white px-6 py-2.5 rounded-full text-sm font-medium flex items-center gap-3 transition-colors shadow-sm">
                            Our Trade Fair Dates
                            <div className="bg-white rounded-full p-1 text-primary">
                                <ArrowUpRight className="w-4 h-4 stroke-[3]" />
                            </div>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}
