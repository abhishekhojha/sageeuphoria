import { useEffect } from "react";
import sponsor1 from "./img/1.png";
import sponsor2 from "./img/2.png";
import sponsor3 from "./img/3.png";
import sponsor4 from "./img/4.png";
import sponsor5 from "./img/5.png";
import sponsor6 from "./img/6.png";
import sponsor7 from "./img/7.png";
import sponsor8 from "./img/8.png";
import sponsor9 from "./img/9.png";
import Reveal from "../anime/Animation";
import YReveal from "../anime/Y";
import XReveal from "../anime/X";
import { Link } from "react-router-dom";
export default function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <div>
        <div className="sageheader">
          {/* <Reveal>
            <div className="sageheaderconthead">
              <h1>SAGE EUPHORIA</h1>
              <p>
                Unleashing the Ultimate campus experience A celebration of
                youth, talent, and creativity..
              </p>
            </div>
          </Reveal> */}
          <div className="sageHeaderSlider">
            <img src="./slider/5.png" alt=""></img>
          </div>
          {/* <div className="sageheadervideo">
            <video autoPlay={true} loop muted>
              <source src="./gojo.mp4" type="video/mp4" />
            </video>
          </div> */}
          <div className="sageheadercont container">

            <Reveal>
              <div className="sageheadercontBtn">
                <a href="/#" className="sagebuttons">
                  Get your passes
                </a>
                <div className="scroll">
                  <p>Scroll</p>
                  <img style={{ filter: "invert(1)" }} src="./down.png" alt="" />
                </div>
                <a href="/#" className="sagebuttons">
                  Get your passes
                </a>
              </div>
            </Reveal>
          </div>
        </div>
        {/* sage aboutus */}
        <div className="sageeventsaboutus container">
          <Reveal>
            <>
              <div className="sageeventsaboutusfirst">
                <div className="sageeventsaboutusImage">
                  <img src="./about.jpg" alt="" />
                </div>
                <div className="sageeventsaboutusCon">
                  <h2>JOY OF COLORS</h2>
                  <p>
                    A Celebratory College Extravaganza Are you ready for a
                    celebration to remember? SAGE Euphoria is your opportunity
                    to experience a weekend full of fun, learning, and
                    entertainment! From 27th to 29th March 2023, we invite you
                    to join us for the ultimate college fest.
                  </p>
                </div>
              </div>
              <div className="sageeventsaboutusSecond">
                <p>
                  SAGE Euphoria 2.0 presents an unforgettable celebration of college life! From March 11th to 13th, 2024, immerse yourself in a dynamic blend of entertainment, education, and camaraderie. Experience a diverse range of activities, including technical, cultural, literary , E-sports competitions. Dive into special events like the entrepreneurship conclave, creator's conclave, Shark Tank Sage, and electrifying live concerts. Engage in enriching workshops spanning various fields. SAGE Euphoria offers the perfect platform to forge enduring memories, expand your skill set, connect with peers, and revel in the essence of college life. Don't miss out on this opportunity to embrace the spirit of learning, growth, and celebration!
                </p>
              </div>
            </>
          </Reveal>
        </div>
        {/* sage passes  */}
        <div className="container sagepasses">
          <Reveal>
            <div className="sagepasseshead">
              <h2>Get your passes</h2>
            </div>
          </Reveal>
          <Reveal>
            <div className="sagepassesintro">
              <h3>Rhythm & Beats on 29th March</h3>
              <p>
                Get ready to groove to the electrifying beats of Zaeden and DJ
                Perch as SAGE Euphoria, the first edition of the annual college
                fest of SAGE university, Indore, presents its much-awaited night
                concert on 29th March 2023. Brace yourselves for an
                unforgettable musical journey as the two renowned DJs take the
                stage and set it on fire with their explosive performances.
              </p>
              <a href="/#" className="sagebuttons">
                Get your passes
              </a>
            </div>
          </Reveal>
          <div className="sagepassescon">
            <XReveal>
              <div className="sagepassesconin">
                <div className="sagepassesconinImage">
                  <img src="./artist/1.jpg" alt="" />
                </div>
                <div className="sagepassesconincon">
                  <h3>AKHIL SACHDEVA</h3>
                  <p>
                    Akhil Sachdeva is a multi-talented Indian musician who wears many hats - singer, songwriter, and composer. He rose to fame with his soulful ballad "Humsafar" from the Bollywood film "Badrinath Ki Dulhania." Sachdeva's voice has captivated audiences, and his compositions have become chart-topping hits like "Tera Ban Jaunga" from "Kabir Singh."  Be prepared to be enthralled by his musical magic!
                  </p>
                  <p>20<sup>th</sup> April At Sage university</p>
                </div>
              </div>
            </XReveal>
            {/* <div className="sagepassesconin">
              <div className="sagepassesconincon sagepassesconinconsec">
                <p>
                  Sahil Sharma, better known by his stage name Zaeden, is a
                  talented singer and record producer who is set to perform at
                  the Sage Euphoria night concert. Hailing from India, Zaeden
                  has gained a reputation for his unique style of blending
                  electronic dance music with Indian classical music. He first
                  rose to fame with his remix of Coldplay's hit song "Magic"
                  which gained millions of views on YouTube.
                </p>
              </div>
              <div className="sagepassesconinImage">
                <img src="./artist/2.jpg" alt="" />
                <h3>ZAEDEN</h3>
              </div>
            </div> */}
            <YReveal>
              <div className="sagepassesconin">
                <div className="sagepassesconinImage">
                  <img src="./artist/2.jpg" alt="" />
                </div>
                <div className="sagepassesconincon">
                  <h3>DJ RHEA</h3>
                  <p>
                    Hailing from the Indian electronic dance scene, DJ Rhea brings the party wherever she goes. A master of setting the mood, she seamlessly blends genres from Bollywood to EDM, keeping the dance floor packed with infectious energy.  Having performed at major events like IPL after-parties and music festivals, DJ Rhea is sure to get your feet moving and create an unforgettable experience.
                  </p>
                  <p>19<sup>th</sup> April At Sage university</p>
                </div>
              </div>
            </YReveal>
          </div>
        </div>

        {/* our team */}
        <div id="team" className="container sageourteam">
          <div className="sageourteamin">
            <Reveal>
              <div className="sageourteamhead">
                <h2>Our Team</h2>
              </div>
            </Reveal>
            <div className="sageourteammembers">
              <Reveal>
                <Link to="https://www.instagram.com/nikhill.pandeyy?igsh=NmlxY3Uyd2pkenJr" className="sageourteammember">
                  <img src="./team/nikhil.jpeg" alt="" />
                </Link>
                <p>
                  <Link to="https://www.instagram.com/nikhill.pandeyy?igsh=NmlxY3Uyd2pkenJr">
                    Nikhil Pandey
                  </Link>
                </p>
              </Reveal>
              <Reveal>
                <Link to="https://www.instagram.com/sanketjain29?igsh=MW9yc2d0NWc1N2wydQ==" className="sageourteammember">
                  <img src="./team/sanket.jpeg" alt="" />
                </Link>
                <p>
                  <Link to="https://www.instagram.com/sanketjain29?igsh=MW9yc2d0NWc1N2wydQ==">
                    Sanket Jain
                  </Link>
                </p>
              </Reveal>
              <Reveal>
                <Link to="https://www.instagram.com/iamarkansh?igsh=MTlwcjE5cjN5dmI4cg==" className="sageourteammember">
                  <img src="./team/arkansh.jpeg" alt="" />
                </Link>
                <p>
                  <Link to="https://www.instagram.com/iamarkansh?igsh=MTlwcjE5cjN5dmI4cg==">
                    Arkansh Aryan
                  </Link>
                </p>
              </Reveal>
            </div>
            {/* <div className="sageourteammembers">
              <Reveal>
                <div className="sageourteammember">
                  <img src="./team/1.jpg" alt="" />
                </div>
              </Reveal>
              <Reveal>
                <div className="sageourteammember">
                  <img src="./team/1.jpg" alt="" />
                </div>
              </Reveal>
            </div> */}
          </div>
        </div>
        {/* sponsers */}
        <div id="sponsors" className="main">
          <Reveal>
            <div className="sageourteamhead">
              <h2>OUR PAST SPONSORS</h2>
            </div>
          </Reveal>
          <div className="top">
            <div className="img-cnt marquee">
              <div className="img">
                <img src={sponsor1} alt="" />
              </div>
              <div className="img">
                <img src={sponsor2} alt="" />
              </div>
              <div className="img">
                <img src={sponsor3} alt="" />
              </div>
              <div className="img">
                <img src={sponsor4} alt="" />
              </div>
              <div className="img">
                <img src={sponsor1} alt="" />
              </div>
              <div className="img">
                <img src={sponsor2} alt="" />
              </div>
              <div className="img">
                <img src={sponsor3} alt="" />
              </div>
              <div className="img">
                <img src={sponsor4} alt="" />
              </div>
              <div className="img">
                <img src={sponsor1} alt="" />
              </div>
              <div className="img">
                <img src={sponsor2} alt="" />
              </div>
            </div>
          </div>
          <div className="top">
            <div className="img-cnt marquee-2">
              <div className="img">
                <img src={sponsor5} alt="" />
              </div>
              <div className="img">
                <img src={sponsor6} alt="" />
              </div>
              <div className="img">
                <img src={sponsor7} alt="" />
              </div>
              <div className="img">
                <img src={sponsor8} alt="" />
              </div>
              <div className="img">
                <img src={sponsor9} alt="" />
              </div>
              <div className="img">
                <img src={sponsor5} alt="" />
              </div>
              <div className="img">
                <img src={sponsor6} alt="" />
              </div>
              <div className="img">
                <img src={sponsor7} alt="" />
              </div>
              <div className="img">
                <img src={sponsor8} alt="" />
              </div>
              <div className="img">
                <img src={sponsor9} alt="" />
              </div>
            </div>
          </div>
        </div>
        {/* footer */}
      </div>
    </>
  );
}
