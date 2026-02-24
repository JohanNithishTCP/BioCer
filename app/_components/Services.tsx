export default function Services() {
    const servicesData = [
        {
            title: "Surgical Mesh Implants",
            description: "BioCer meshes are designed for excellent biocompatibility, optimized weight and pore structure, advanced coating options, and precision laser-cut edges. They support reliable tissue ingrowth and effective hernia repair.",
            imageSrc: "/home/service-1.jpg"
        },
        {
            title: "Plant based Haemostatis",
            description: "Our haemostatic product range includes powder formulations and specialized applicators, supporting use across a wide variety of surgical procedures. BioCer haemostatic solutions are designed to provide natural, safe, and effective bleeding control.",
            imageSrc: "/home/service-2.jpg"
        },
        {
            title: <>Innovating coating <br /> technologies for medicine</>,
            description: "Our advanced ceramic coating technologies are developed to enhance implant surface performance across a wide range of medical applications. BioCer functional coatings provide biocompatible, anti-allergic, osteoconductive, and antibacterial properties to improve device safety and clinical outcomes.",
            imageSrc: "/home/service-3.jpg"
        }
    ];

    return (
        <section className="site-container py-8 mb-16">
            <div className="bg-[#f5f5f5] rounded-[2rem] p-8 lg:p-14 mx-auto">

                {/* Top Header */}
                <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-8 mb-14" data-aos="fade-up">
                    <div className="max-w-xl">
                        <div className="flex items-center gap-2 mb-4">
                            <img src={`/home/vector.svg`} width={`25px`} alt='BioCer' />
                            <span className="text-gray-500 font-medium text-[16px]">Services</span>
                        </div>
                        <h2 className="section-title">
                            Delivering Complete Solutions <br className="hidden md:block" />for <span className="text-primary font-medium">Modern</span> Surgery
                        </h2>
                    </div>
                    <div className="max-w-lg">
                        <p className="section-desc">
                            From implantable mesh systems to advanced haemostatic and coating technologies, our product range is built to meet evolving clinical demands with precision and reliability.
                        </p>
                    </div>
                </div>

                {/* Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                    {servicesData.map((service, index) => (
                        <div key={index} className="bg-white rounded-3xl p-7 lg:p-9 flex flex-col relative overflow-hidden shadow-sm h-full" data-aos="fade-up" data-aos-delay={index * 100}>
                            <h3 className="text-primary text-[1.5rem] font-medium mb-4 pr-4">{service.title}</h3>
                            <p className="section-desc mb-8 flex-grow">
                                {service.description}
                            </p>
                            <div className="w-full aspect-[4/2.5] rounded-2xl bg-white overflow-hidden relative">
                                <img src={service.imageSrc} alt="BioCer" className="w-full h-full object-cover" />
                            </div>
                        </div>
                    ))}
                </div>

                {/* Bottom Contact */}
                <div className="text-center font-medium text-[16px] pt-4">
                    <span className="text-gray-500 mr-2">Please contact for more details</span>
                    <a href="#" className="text-primary font-semibold underline underline-offset-4 hover:text-primary-hover transition-colors">Get in Touch</a>
                </div>

            </div>
        </section>
    );
}
