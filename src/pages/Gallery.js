import { useEffect, useState } from "react";
import "./css/gallery.css";
import Reveal from "../anime/Animation";
import { gallery } from "../anime/gallery";
export default function Gallery() {
  const [image, setImage] = useState(null);
  const [imgdata, setimgdata] = useState([gallery.slice(0, 10)]);
  const [count, setcount] = useState(1);
  const limit = Math.ceil(gallery.length / 10);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const loadmore = () => {
    var val = (count + 1) * 10 - 1;
    let skip = val - 10 <= 0 ? val - 9 : val - 10;
    const data = imgdata;
    data.push([...gallery.slice(skip, val)]);
    setimgdata(data);
    setcount(count + 1);
  };
  const handleOverlay = (e) => {
    if (
      e.target.classList.value === "overlay" ||
      e.target.classList.value === "close"
    ) {
      setImage(null);
    }
  };
  const handleImage = (e) => {
    setImage(e);
  };
  useEffect(() => {
    window.addEventListener("click", handleOverlay);
    return () => {
      window.removeEventListener("click", handleOverlay);
    };
  }, []);
  let i = 0;
  return (
    <>
      {image && (
        <div className="overlay">
          <div className="close">X</div>
          <img className="close-img" src={image} alt="" />
        </div>
      )}
      <div className="sageEvents container">
        <Reveal>
          <div className="sageEventsHead">
            <h2 className="text-center">Gallery</h2>
            <h4 className='text-sm md:text-2xl leading-[35px] md:leading-[40px] text-center font-semibold'>Explore a curated collection of captivating <br /><span className='bg-[#b72723] p-2 text-white'>artworks and photography</span> on our gallery page.</h4>
            <p> </p>
          </div>
        </Reveal>

        <div className="px-4">
          <>
            {imgdata?.map((images,j) => {
              return (
                <Reveal >
                <div className="container gallery_grid grid px-2 grid-cols-3 gap-2 mx-auto">
                  {images?.map((img,i) => (
                    <div key={img.id} className={i==2?"row-start-1	row-end-3 col-start-3":i==3?"row-start-3	row-end-5 col-start-1":""}>
                      <img
                        className="h-full object-cover w-full rounded"
                        src={img.imageSrc}
                        onClick={() => handleImage(img.imageSrc)}
                        alt=""
                      />
                    </div>
                  ))}
                </div></Reveal>
              );
            })}
            {limit > count ? (
              <div className="grid items-center justify-center py-6">
                <button className="sagebuttons mt-2" onClick={loadmore}>
                  Load more...
                </button>
              </div>
            ) : (
              <></>
            )}
          </>
        </div>
      </div>
    </>
  );
}
