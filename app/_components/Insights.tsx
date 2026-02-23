import { ArrowUpRight } from 'lucide-react';

export default function Insights() {
    const insightsData = [
        {
            title: "Endoscopy Symposium 2026",
            subtitle: <p className="text-sm text-gray-500 mb-6 font-medium">Düsseldorf</p>,
            imageSrc: "/home/blog-1.jpg"
        },
        {
            title: "Endoscopy Practical training",
            subtitle: <p className="text-sm text-gray-500 mb-6 font-medium">days 2026 Erlangen</p>,
            imageSrc: "/home/blog-2.png"
        },
        {
            title: "DHG Hernia Days 2026 Berlin",
            subtitle: <p className="text-sm text-gray-500 mb-6 font-medium opacity-0 select-none">Hidden alignment text</p>,
            imageSrc: "/home/blog-3.png"
        }
    ];

    return (
        <section className="px-4 lg:px-8 py-8 mb-16 max-w-[1400px] mx-auto">
            {/* Top Header */}
            <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-8 mb-14">
                <div className="max-w-xl">
                    <div className="flex items-center gap-2 mb-4">
                        <img src={`/home/vector.svg`} width={`25px`} alt='BioCer' />
                        <span className="text-gray-500 font-medium text-sm">Services</span>
                    </div>
                    <h2 className="text-3xl lg:text-[2.25rem] font-medium text-gray-800 leading-tight">
                        Our latest insights on plastic <br className="hidden md:block" /> surgery
                    </h2>
                </div>
                <div className="max-w-sm">
                    <p className="text-gray-500 text-[13px] leading-relaxed">
                        At BioCer Entwicklungs-GmbH we are constantly developing – just like our product solutions for medicine. Here we provide information about new products, awards and trade fairs. Stay up to date!
                    </p>
                </div>
            </div>

            {/* Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {insightsData.map((insight, index) => (
                    <div key={index} className="flex flex-col group">
                        <div className="w-full aspect-[4/3] rounded-[2rem] bg-slate-100 mb-6 overflow-hidden relative shadow-sm">
                            <img src={insight.imageSrc} alt={insight.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                        </div>
                        <div className="flex-grow">
                            <h3 className="text-[1.05rem] font-semibold text-gray-800 mb-1 leading-snug">{insight.title}</h3>
                            {insight.subtitle}
                        </div>
                        <div className="flex items-center">
                            <button className="bg-primary hover:bg-primary-hover text-white px-5 py-2 rounded-full text-xs font-medium flex items-center gap-2 transition-colors">
                                Read More
                                <div className="bg-white rounded-full p-1 text-primary">
                                    <ArrowUpRight className="w-3.5 h-3.5 stroke-[3]" />
                                </div>
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
