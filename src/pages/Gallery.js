import { useEffect, useState } from "react";
import "./css/events.css";
import "./css/gallery.css";
import XReveal from "../anime/X";
import Reveal from "../anime/Animation";
import Data1 from "./Day1.json";
import Data2 from "./Day2.json";

export default function Gallery() {
  const [Day1, setDay1] = useState(Data1);
  const [Day2, setDay2] = useState(Data2);
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
              In the creative wilderness, clients <br />
              find our work truly beloved.
            </p>
          </div>
        </Reveal>
        <div className="sageEventsup sageEventsRight">
          <h2>Day 1</h2>
          <div className="sageGalleryIn">
            {Day1.splice(0, 4).map((e, i) => (
              <XReveal key={i}>
                <iframe
                  width="500"
                  height="315"
                  src={e.url}
                  frameBorder="0"
                  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </XReveal>
            ))}
          </div>
        </div>
        <div className="sageEventsup sageEventsRight">
          <h2>Day 2</h2>
          <div className="sageGalleryIn">
            {Day2.splice(0, 4).map((e, i) => (
              <XReveal key={i}>
                <iframe
                  src={e.url}
                  frameBorder="0"
                  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </XReveal>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
