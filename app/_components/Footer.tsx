import { ArrowUpRight, Youtube, Linkedin, Instagram, Facebook, Phone, Mail, MapPin } from 'lucide-react';
import Link from 'next/link';

export default function Footer() {
    return (
        <footer className="site-container pb-10">
            <div className="bg-[#8ABD24] rounded-[2rem] p-8 lg:p-14 pt-9! pb-3! text-white overflow-hidden">

                {/* Top Row: Title & Newsletter */}
                <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8 mb-5">
                    <h2 className="text-2xl lg:text-3xl font-medium leading-tight max-w-md">
                        Our latest insights on <br /> plastic surgery & skincare
                    </h2>

                    <div className="flex items-center gap-3 w-full max-w-md">
                        <div className="relative flex-1">
                            <input
                                type="email"
                                placeholder="Enter your email address"
                                className="w-full bg-white/20 text-white placeholder:text-white/80 rounded-full py-4 px-6 outline-none border border-transparent focus:border-white/40 transition-colors text-sm font-medium"
                            />
                        </div>
                        <button className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-[#8CC63F] hover:bg-gray-100 transition-colors shadow-sm flex-shrink-0">
                            <ArrowUpRight className="w-5 h-5 stroke-[3]" />
                        </button>
                    </div>
                </div>

                {/* Sub-Separator Line */}
                <div className="w-full h-px bg-white/20 mb-6" />

                {/* Main Content Section */}
                <div className="flex flex-col lg:flex-row gap-12 lg:gap-24">

                    {/* Left: Brand & Social */}
                    <div className="flex flex-col gap-2 lg:w-[30%]">
                        <img src="/logo-white.png" width={160} alt="BioCer Logo" />
                        <p className="text-white/90 text-[16px] leading-relaxed max-w-[280px]">
                            Transforming beauty with expert care and personalized treatments.
                        </p>
                        <div className="flex items-center gap-4 lg:mt-4">
                            <a href="#" className="hover:opacity-80 transition-opacity"><Youtube className="w-5 h-5" /></a>
                            <a href="#" className="hover:opacity-80 transition-opacity"><Linkedin className="w-4.5 h-4.5" /></a>
                            <a href="#" className="hover:opacity-80 transition-opacity"><Instagram className="w-5 h-5" /></a>
                            <a href="#" className="hover:opacity-80 transition-opacity"><Facebook className="w-5 h-5" /></a>
                        </div>
                    </div>

                    {/* Right: Quick Links & Info */}
                    <div className="flex-1 flex flex-col gap-10">
                        {/* Quick Links */}
                        <div className="border-b border-white/20">
                            <h3 className="text-white font-bold mb-2 text-lg">Quick Links</h3>
                            <nav className="flex flex-wrap items-center gap-x-8 gap-y-3 text-sm font-medium pb-5">
                                <Link href="#" className="font-bold hover:text-white/80 transition-colors">Home</Link>
                                <Link href="#" className="hover:text-white/80 transition-colors">Haemostasis</Link>
                                <Link href="#" className="hover:text-white/80 transition-colors">Coating</Link>
                                <Link href="#" className="hover:text-white/80 transition-colors">Company</Link>
                                <Link href="#" className="hover:text-white/80 transition-colors">News</Link>
                                <Link href="#" className="hover:text-white/80 transition-colors">Career</Link>
                                <Link href="#" className="hover:text-white/80 transition-colors">Research Partner</Link>
                                <Link href="#" className="hover:text-white/80 transition-colors">Download Area</Link>
                            </nav>
                            <h3 className="text-white font-bold mb-2 text-lg">Company</h3>
                            <nav className="flex flex-wrap items-center gap-x-8 gap-y-3 text-sm font-medium pb-5">
                                <Link href="#" className="font-bold hover:text-white/80 transition-colors">Contact</Link>
                                <Link href="#" className="hover:text-white/80 transition-colors">Site Notice</Link>
                                <Link href="#" className="hover:text-white/80 transition-colors">Privacy Policy</Link>
                                <Link href="#" className="hover:text-white/80 transition-colors">GTC</Link>
                                <Link href="#" className="hover:text-white/80 transition-colors">Client Module Online Presentation</Link>
                                <Link href="#" className="hover:text-white/80 transition-colors">Remote Management</Link>
                            </nav>


                        </div>

                        {/* Info Grid: Contact, Email, Address */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {/* Contact */}
                            <div className="flex flex-col gap-3">
                                <span className="text-white font-medium text-sm">Contact:</span>
                                <div className="flex items-start gap-2.5">
                                    <Phone className="w-4 h-4 mt-1" strokeWidth={2.5} />
                                    <div className="flex flex-col text-sm font-medium">
                                        <a href="tel:+4909217877700" className="hover:text-white/80">+49 (0921) 78 77 70-0</a>
                                        <a href="tel:+49092178777079" className="hover:text-white/80">+49 (0921) 78 77 70-79</a>
                                    </div>
                                </div>
                            </div>

                            {/* Email */}
                            <div className="md:border-l border-white/20 md:pl-8 flex flex-col gap-3">
                                <span className="text-white font-medium text-sm">Email</span>
                                <div className="flex items-center gap-2.5">
                                    <Mail className="w-4 h-4" strokeWidth={2.5} />
                                    <a href="mailto:domainname@gmail.com" className="text-sm font-medium hover:text-white/80">domainname@gmail.com</a>
                                </div>
                            </div>

                            {/* Address */}
                            <div className="md:border-l border-white/20 md:pl-8 flex flex-col gap-3">
                                <span className="text-white font-medium text-sm">Address</span>
                                <div className="flex items-start gap-2.5">
                                    <MapPin className="w-4 h-4 mt-1" strokeWidth={2.5} />
                                    <address className="not-italic text-sm font-medium leading-relaxed">
                                        Ludwig-Thoma-Straße 36c<br />
                                        95447 Bayreuth
                                    </address>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Row */}
                <div className="mt-6 pt-3 border-t border-white/20 text-center">
                    <p className="text-xs font-medium text-white/90">
                        © 2026 BioCer Entwicklungs-GmbH
                    </p>
                </div>

            </div>
        </footer>
    );
}
