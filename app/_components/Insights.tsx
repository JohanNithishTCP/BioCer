import { ArrowUpRight } from 'lucide-react';

export default function Insights() {
    const insightsData = [
        {
            title: "Endoscopy Symposium 2026 Düsseldorf",
            imageSrc: "/home/blog-1.jpg"
        },
        {
            title: "Endoscopy Practical training days 2026 Erlangen",
            imageSrc: "/home/blog-2.png"
        },
        {
            title: "DHG Hernia Days 2026 Berlin",
            imageSrc: "/home/blog-3.png"
        }
    ];

    return (
        <section className="site-container py-8 mb-13 lg:px-33">
            {/* Top Header */}
            <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-8 mb-14" data-aos="fade-up">
                <div className="max-w-3xl">
                    <div className="flex items-center gap-2 mb-4">
                        <img src={`/home/vector.svg`} width={`25px`} alt='BioCer' />
                        <span className="text-gray-500 font-medium text-[16px]">Company News</span>
                    </div>
                    <h2 className="section-title">
                        Our latest insights on plastic surgery
                    </h2>
                </div>
                <div className="max-w-lg">
                    <p className="section-desc">
                        At BioCer Entwicklungs-GmbH we are constantly developing – just like our product solutions for medicine. Here we provide information about new products, awards and trade fairs. Stay up to date!
                    </p>
                </div>
            </div>

            {/* Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {insightsData.map((insight, index) => (
                    <div key={index} className="flex flex-col group" data-aos="fade-up" data-aos-delay={index * 100}>
                        <div className="w-full aspect-[4/2] rounded-[2rem] bg-slate-100 mb-6 overflow-hidden relative shadow-sm">
                            <img src={insight.imageSrc} alt={insight.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                        </div>
                        <div className="flex-grow">
                            <h3 className="text-[1.05rem] font-semibold text-gray-800 mb-1 leading-snug">{insight.title}</h3>
                        </div>
                        <div className="flex items-center mt-3">
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
