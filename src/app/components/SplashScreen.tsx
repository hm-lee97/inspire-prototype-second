import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";

interface SplashScreenProps {
    onComplete: () => void;
}

export function SplashScreen({ onComplete }: SplashScreenProps) {
    const [clicked, setClicked] = useState(false);
    const [videoPlaying, setVideoPlaying] = useState(false);
    const [fontsLoaded, setFontsLoaded] = useState(false);

    useEffect(() => {
        // Wait for all fonts to be loaded
        document.fonts.ready.then(() => {
            setFontsLoaded(true);
        });
    }, []);

    const handleVideoPlay = () => {
        setVideoPlaying(true);
    };

    const handleStart = () => {
        setClicked(true);
        setTimeout(() => {
            onComplete();
        }, 800);
    };

    return (
        <AnimatePresence>
            {!clicked && (
                <motion.div
                    className="absolute inset-0 z-50 flex items-center justify-center overflow-hidden bg-black"
                    exit={{ opacity: 0 }}
                    transition={{ duration: 1 }}
                >
                    {/* Video Background */}
                    <video
                        autoPlay
                        muted
                        loop
                        playsInline
                        className={`absolute left-1/2 top-1/2 min-h-full min-w-full -translate-x-1/2 -translate-y-1/2 object-cover transition-opacity duration-1000 ${videoPlaying && fontsLoaded ? "opacity-100" : "opacity-0"
                            }`}
                        style={{
                            filter: "brightness(0.6) contrast(1.1) blur(2px)",
                        }}
                        onPlaying={handleVideoPlay}
                    >
                        <source src="/videos/splash.mp4" type="video/mp4" />
                    </video>

                    {/* Overlay Content */}
                    {videoPlaying && fontsLoaded && (
                        <motion.div
                            className="relative z-10 flex h-full w-full flex-col items-center justify-center bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.4)_100%)] p-8 text-center text-white"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 1.5, delay: 0.2 }}
                        >
                            <motion.div
                                className="mt-[60px] flex flex-col items-center origin-center"
                                initial={{ scale: 0.9 }}
                                animate={{ scale: 1 }}
                                transition={{ duration: 2 }}
                            >
                                <img
                                    src="/images/inpsire-logo-white.png"
                                    alt="INSPIRE"
                                    className="block h-auto w-[240px] min-h-[40px]"
                                />
                                <p className="mt-2 text-[10px] font-light tracking-[0.5em] opacity-60">
                                    ENTERTAINMENT RESORT
                                </p>
                            </motion.div>

                            <motion.button
                                onClick={handleStart}
                                className="group relative mt-[100px] cursor-pointer border-none bg-transparent p-5"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 1, delay: 1 }}
                            >
                                <div className="flex flex-col items-center gap-4">
                                    <div className="relative flex h-[60px] w-[60px] items-center justify-center rounded-full border border-white/30">
                                        <div className="h-1.5 w-1.5 rounded-full bg-white shadow-[0_0_15px_white]" />
                                        <div className="absolute inset-[-10px] animate-[pulse_2s_infinite_ease-out] rounded-full border border-white/20" />
                                    </div>
                                    <span className="text-[11px] font-normal tracking-[0.3em] text-white/80 transition-all duration-300 group-hover:tracking-[0.45em] group-hover:text-white">
                                        TOUCH TO ENTER
                                    </span>
                                </div>
                            </motion.button>
                        </motion.div>
                    )}
                </motion.div>
            )}
        </AnimatePresence>
    );
}
