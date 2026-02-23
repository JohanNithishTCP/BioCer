"use client";

import { Play, Pause } from 'lucide-react';
import { useRef, useState } from 'react';

export default function AnimatedVideo() {
    const videoRef = useRef<HTMLVideoElement>(null);
    const [isPlaying, setIsPlaying] = useState(false);

    const togglePlay = () => {
        if (videoRef.current) {
            if (isPlaying) {
                videoRef.current.pause();
            } else {
                videoRef.current.play();
            }
            setIsPlaying(!isPlaying);
        }
    };

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
                onClick={togglePlay}
            >
                <video
                    ref={videoRef}
                    src="https://cdn.clinicalvisuals.com/siteImages/bytech/bytec_01.webm#t=1"
                    muted
                    playsInline
                    className="absolute inset-0 w-full h-full object-cover z-0 transition-opacity duration-700 opacity-100"
                    preload="metadata"
                    onEnded={() => setIsPlaying(false)}
                />

                {/* Play/Pause Button Overlay */}
                <div className={`absolute inset-0 flex items-center justify-center transition-opacity duration-300 ${isPlaying ? 'opacity-0 group-hover:opacity-100' : 'opacity-100'}`}>
                    <div className="w-20 h-20 rounded-full border-2 border-white flex items-center justify-center bg-black/20 backdrop-blur-md group-hover:bg-primary/90 transition-all duration-300">
                        {isPlaying ? (
                            <Pause className="w-8 h-8 text-white fill-white" />
                        ) : (
                            <Play className="w-8 h-8 text-white ml-1 fill-white" />
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
}
