import React from "react";
import img1 from "../assets/Carousel-Post/Carousel-1.jpg";
import img2 from "../assets/Carousel-Post/Carousel-2.jpg";
import img3 from "../assets/Carousel-Post/Carousel-3.jpg";
import img4 from "../assets/Carousel-Post/Carousel-4.jpg";
import img5 from "../assets/Carousel-Post/Carousel-5.jpg";
import img6 from "../assets/Image-Listing/ImageListing-9.jpg";
import img7 from "../assets/EBC-Banners/EBC-1.jpg";
import img8 from "../assets/EBC-Banners/EBC-2.jpg";
import img9 from "../assets/Image-Listing-2/ImageListing-Second-7.jpg";
import img10 from "../assets/Mushrooms/Mushrooms-8.jpg";
import img11 from "../assets/Oil-Bottle/Oil-1.png";
import img12 from "../assets/Oil-Bottle/Oil-2.png";
import img13 from "../assets/Phone-Cleaner/PhoneCleaner-6.png";

const images = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11, img12, img13];

const Marquee = () => {
  // Generate randomized sets of images so it feels organic, but repeat it twice to maintain the perfect CSS infinite marquee math
  const row1Base = React.useMemo(() => [...images, ...images].sort(() => Math.random() - 0.5), []);
  const row2Base = React.useMemo(() => [...images, ...images].sort(() => Math.random() - 0.5), []);

  return (
    <section className="relative py-12 sm:py-20 overflow-hidden">
      <div className="mx-auto flex flex-col gap-12 px-6">
        <div className="flex flex-col items-center gap-4 text-center">
          <h2 className="text-3xl font-bold uppercase tracking-[0.2em] text-slate-100 sm:text-4xl">
            Recent Work
          </h2>
          <p className="max-w-xl text-sm text-slate-400">
            A glimpse into my latest design creations.
          </p>
        </div>

        <div className="relative flex flex-col gap-6 w-full overflow-hidden">
          {/* Fades on left and right */}
          <div className="absolute top-0 bottom-0 left-0 w-32 bg-gradient-to-r from-ink to-transparent z-10 pointer-events-none" />
          <div className="absolute top-0 bottom-0 right-0 w-32 bg-gradient-to-l from-ink to-transparent z-10 pointer-events-none" />

          <div className="flex w-max animate-marquee gap-6 hover:[animation-play-state:paused]">
            {[...row1Base, ...row1Base].map((src, index) => (
              <img
                key={`row1-${index}`}
                src={src}
                alt={`Portfolio Item Row 1 ${index + 1}`}
                className="h-[200px] w-[140px] sm:h-[280px] sm:w-[200px] rounded-xl sm:rounded-2xl object-cover border border-white/10 shadow-[0_4px_20px_rgba(0,0,0,0.5)] transition duration-500 hover:scale-105 hover:border-accent/40"
              />
            ))}
          </div>

          <div className="flex w-max animate-marquee-reverse gap-6 hover:[animation-play-state:paused]">
            {[...row2Base, ...row2Base].map((src, index) => (
              <img
                key={`row2-${index}`}
                src={src}
                alt={`Portfolio Item Row 2 ${index + 1}`}
                className="h-[200px] w-[140px] sm:h-[280px] sm:w-[200px] rounded-xl sm:rounded-2xl object-cover border border-white/10 shadow-[0_4px_20px_rgba(0,0,0,0.5)] transition duration-500 hover:scale-105 hover:border-accent/40"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Marquee;
