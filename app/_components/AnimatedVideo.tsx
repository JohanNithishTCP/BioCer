"use client";
import { useState } from 'react';
import { Play } from 'lucide-react';

export default function AnimatedVideo() {
    const [isStarted, setIsStarted] = useState(false);

    return (
        <section className="px-4 lg:px-8 py-8 mb-16 max-w-[1400px] mx-auto">
            {/* Top Header */}
            <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-8 mb-10">
                <div className="max-w-xl">
                    <div className="flex items-center gap-2 mb-4">
                        <img src={`/home/vector.svg`} width={`25px`} alt='BioCer' />
                        <span className="text-gray-500 font-medium text-sm">BioCer-Highlights</span>
                    </div>
                    <h2 className="text-3xl lg:text-[2.25rem] font-medium text-gray-800 leading-tight">
                        Animated Video: HaemoCer™ PLUS
                    </h2>
                </div>
                <div className="max-w-sm">
                    <p className="text-gray-500 text-[13px] leading-relaxed">
                        This video explains in a vivid way the effect of our haemostatis powder.
                    </p>
                </div>
            </div>

            {/* Video Container */}
            <div
                className="relative w-full aspect-video md:h-[600px] rounded-[2rem] overflow-hidden bg-slate-200 shadow-sm cursor-pointer group"
                onClick={() => setIsStarted(true)}
            >
                {!isStarted ? (
                    <div className="absolute inset-0 z-10 flex items-center justify-center">
                        {/* YouTube Thumbnail Background */}
                        <img
                            src="https://img.youtube.com/vi/gsFaD5x8orA/maxresdefault.jpg"
                            className="absolute inset-0 w-full h-full object-cover"
                            alt="Video Thumbnail"
                        />
                        {/* Custom Play Icon (Only thing shown) */}
                        <div className="relative z-20 w-24 h-24 rounded-full border-4 border-white flex items-center justify-center bg-black/40 backdrop-blur-md group-hover:bg-primary/90 transition-all duration-300">
                            <Play className="w-10 h-10 text-white fill-white ml-2" />
                        </div>
                    </div>
                ) : (
                    <iframe
                        src="https://www.youtube.com/embed/gsFaD5x8orA?autoplay=1&modestbranding=1&rel=0"
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin"
                        allowFullScreen
                        className="absolute inset-0 w-full h-full"
                    ></iframe>
                )}
            </div>
        </section>
    );
}
