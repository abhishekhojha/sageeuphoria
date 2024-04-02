import { useEffect, useState } from "react";
import "./css/gallery.css";
import Reveal from "../anime/Animation";
import { SlideshowLightbox } from "lightbox.js-react";
import { gallery } from "../anime/gallery";
export default function Gallery() {
  const [imgdata, setimgdata] = useState(gallery.slice(0, 9));
  const [count, setcount] = useState(1);

  useEffect(() => {
    // window.scrollTo(0, 0);
    console.log(imgdata);
  }, [imgdata, SlideshowLightbox]);
  const loadmore = () => {
    var skip = count * 9;
    var val = (count + 1) * 9;
    setimgdata((prev) => [...prev, ...gallery.slice(skip, val)]);
    setcount(count + 1);
  };
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

        <div className="px-4">
          <SlideshowLightbox className="container grid grid-cols-2 px-2 md:grid-cols-3 gap-2 mx-auto">
            {imgdata?.map((img) => (
              <img
                key={img.id}
                className="h-full object-cover w-full rounded"
                src={img.imageSrc}
              />
            ))}
          </SlideshowLightbox>
          <button onClick={loadmore}>Load more</button>
        </div>
      </div>
    </>
  );
}
