import { useEffect, useState } from "react";
import "./css/gallery.css";
import XReveal from "../anime/X";
import Reveal from "../anime/Animation";
import { SlideshowLightbox } from "lightbox.js-react";
export default function Gallery() {
  const images = [
    {
      src: "https://timellenberger.com/static/blog-content/dark-mode/win10-dark-mode.jpg",
      alt: "Windows 10 Dark Mode Setting",
    },
    {
      src: "https://timellenberger.com/static/blog-content/dark-mode/macos-dark-mode.png",
      alt: "macOS Mojave Dark Mode Setting",
    },
    {
      src: "https://timellenberger.com/static/blog-content/dark-mode/android-9-dark-mode.jpg",
      alt: "Android 9.0 Dark Mode Setting",
    },
  ];
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <div className="sageEvents container">
        <Reveal>
          <div className="sageEventsHead">
            <h2>Gallery</h2>
            <p>
              In the creative wilderness, clients find our work truly beloved.
            </p>
          </div>
        </Reveal>
        <SlideshowLightbox className="container grid grid-cols-3 gap-2 mx-auto">
          <img
            className="w-full rounded"
            src="https://source.unsplash.com/pAKCx4y2H6Q/1400x1200"
          />
          <img
            className="w-full rounded"
            src="https://source.unsplash.com/AYS2sSAMyhc/1400x1200"
          />
          <img
            className="w-full rounded"
            src="https://source.unsplash.com/Kk8mEQAoIpI/1600x1200"
          />
          <img
            className="w-full rounded"
            src="https://source.unsplash.com/HF3X2TWv1-w/1600x1200"
          />
        </SlideshowLightbox>
      </div>
    </>
  );
}
