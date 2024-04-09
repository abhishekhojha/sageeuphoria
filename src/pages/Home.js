import { useEffect } from "react";
import sponsor1 from "./img/SI_Global.png";
import sponsor2 from "./img/Intex.png";
import sponsor3 from "./img/Gopal_Namkeen.png";
import sponsor4 from "./img/Sage_Radio.jpg";
import sponsor5 from "./img/Decathlon_Logo.png";
import sponsor6 from "./img/upsc.png";
import Reveal from "../anime/Animation";
import YReveal from "../anime/Y";
import XReveal from "../anime/X";
import ImageSlider from "../anime/slider";
import Marquee from "react-fast-marquee";
import SecondBtn from "../components/SecondBtn"
import { Link } from "react-router-dom";
import OurTeam from "../components/Ourteam";
import { FaInstagram } from 'react-icons/fa';

export default function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <div>
        <div className="sage-texture__difference"></div>
        <div className="sageheader">
          <ImageSlider />
        </div>
        <div className="z-10 sageeventsaboutusbg relative ">
          <Reveal>
            <div className="sageheaderconthead relative z-10">
              <h1>SAGE EUPHORIA 2024</h1>
              <p>
                Unleashing the Ultimate campus experience A celebration of youth,
                talent, and creativity..
              </p>
            </div>
          </Reveal>
          {/* sage aboutus */}
          <div className="sageeventsaboutus container">
            <Reveal>
              <>
                <div className="sageeventsaboutusfirst">
                  <div className="sageeventsaboutusImage">
                    <img src="./about.png" alt="" />
                  </div>
                  <div className="sageeventsaboutusCon">
                    {/* <h2>SAGE Euphoria'24</h2> */}
                    <p className="text-justify">
                      Welcome to Sage EUPHORIA 2024, the dynamic sequel to our
                      annual college fest hosted by SAGE University Indore.
                      Building on the triumph of our inaugural event, we're
                      excited to announce that SAGE EUPHORIA 2024 will run from
                      April 18th to 20th, 2024. This three-day extravaganza
                      guarantees a thrilling experience with live music, diverse
                      events, and engaging activities for all interests.
                      Anticipating a crowd of 15,000 and over 2,500 participants,
                      we aim to surpass last year's success. Prepare for an array
                      of captivating events, forums, competitions, and tech
                      showcases, culminating in a celebration of talent and
                      innovation. Join us for an unforgettable experience!
                    </p>
                  </div>
                </div>
                <div className="sageeventsaboutusSecond">
                  <p className="text-justify">
                    SAGE EUPHORIA 2024 revolves around "Panchtatv," celebrating
                    the five foundational elements—earth, water, fire, air, and
                    space—guiding our fest with profound symbolism. Integrating
                    this theme enriches participant experiences across
                    competitions. For example, the Battle of Bands embodies fire,
                    igniting passion, while Dance Extravaganza reflects water's
                    fluidity. The Entrepreneurship Conclave symbolizes earth's
                    stability, Tech Talks delve into air's intangibility, and the
                    VR Showcase embodies space's boundlessness. Each event
                    intertwines with Panchtatva, fostering connections with nature
                    and spirituality. Join us for a journey of exploration and
                    self-discovery, guided by the harmony of the elements.
                  </p>
                </div>
              </>
            </Reveal>
          </div>
        </div>
        {/* sage passes  */}
        <div className="z-10 relative sagepassesbg py-[30px] mt-16 md:py-[20px] bg-[#b72723]">
          <div className="container sagepasses">
            <Reveal>
              <div className="sagepasseshead">
                <h2>Get your passes</h2>
              </div>
            </Reveal>
            <Reveal>
              <div className="sagepassesintro">
                <h3>Rhythm & Beats on 19th April/20th April</h3>
                <p>
                  Prepare to be mesmerised by the explosive performances of AKHIL SACHDEVA and DJ RHEA as SAGE Euphoria, the first edition of SAGE University's annual college fest, offers its highly anticipated night concerts on April 19th and 20th, 2024. Prepare for an incredible musical trip as these renowned performers take the stage and excite the crowd with their electrifying performances. Prepare for an exciting encounter that will leave you wanting more!
                </p>
                <a target="_blank" rel="noreferrer" href="https://securegw.paytm.in/link/paymentForm/76113/LL_685845813" className="sagepassesintrobutton">
                  Get your passes
                </a>
              </div>
            </Reveal>
            <div className="sagepassescon">
              <XReveal>
                <div className="sagepassesconin p-[20px] relative rounded-lg overflow-hidden">
                  <div className="sagepassesconinImage relative rounded-lg overflow-hidden">
                    <img src="./artist/rhea.jpg" alt="" />
                    <h3 className="absolute bottom-0 left-0 p-4 text-white bg-black bg-opacity-50 w-full text-center font-bold text-3xl">DJ RHEA</h3>
                    <p className="absolute top-0 right-0 p-2 text-white bg-[#b72723] rounded-tl-md rounded-br-md">19<sup>th</sup> April</p>
                    <div className="instagram-icon absolute top-0 left-0 w-full h-full flex items-center justify-center opacity-0 transition-opacity duration-300">
                      <a href="https://www.instagram.com/djrhea?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" rel="noreferrer" className=""><FaInstagram className="text-[#d6249f] text-4xl" /></a>
                    </div>
                  </div>
                  <div className="sagepassesconincon">
                    <p className="text-justify">
                      Hailing from the Indian electronic dance scene, DJ Rhea brings the party wherever she goes. A master of setting the mood, she seamlessly blends genres from Bollywood to EDM, keeping the dance floor packed with infectious energy. Having performed at major events like IPL after-parties and music festivals, DJ Rhea is sure to get your feet moving and create an unforgettable experience.
                    </p>
                  </div>
                </div>
              </XReveal>
              <YReveal>
                <div className="sagepassesconin p-[20px] relative rounded-lg overflow-hidden">
                  <div className="sagepassesconinImage relative rounded-lg overflow-hidden">
                    <img src="./artist/akhil.jpg" alt="" />
                    <h3 className="absolute bottom-0 left-0 p-4 text-white bg-black bg-opacity-50 w-full text-center font-bold text-3xl">AKHIL SACHDEVA</h3>
                    <p className="absolute top-0 right-0 p-2 text-white bg-[#b72723] rounded-tl-md rounded-br-md">20<sup>th</sup> April</p>
                    <div className="instagram-icon absolute top-0 left-0 w-full h-full flex items-center justify-center opacity-0 transition-opacity duration-300">
                      <a href="https://www.instagram.com/sachdevaakhilnasha?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" rel="noreferrer" className=""><FaInstagram className="text-[#d6249f] text-4xl" /></a>
                    </div>
                  </div>
                  <div className="sagepassesconincon">
                    <p className="text-justify">
                      Akhil Sachdeva is a multi-talented Indian musician who wears
                      many hats - singer, songwriter, and composer. He rose to
                      fame with his soulful ballad "Humsafar" from the Bollywood
                      film "Badrinath Ki Dulhania." Sachdeva's voice has
                      captivated audiences, and his compositions have become
                      chart-topping hits like "Tera Ban Jaunga" from "Kabir
                      Singh." Be prepared to be enthralled by his musical magic!
                    </p>
                  </div>
                </div>
              </YReveal>
            </div>
          </div>
        </div>

        {/* register now */}

        <div className="sageRegister">
          <Reveal>
            <div className="container p-[20px] pt-16 md:p-[0] md:py-6 md:pt-32">
              <div className="sagepasseshead">
                <h2 className="">Register Now</h2>
              </div>
              <p className="text-center mt-4">Get ready to ignite your senses at SAGE Euphoria 2024!Mark your calendars for April 18th-20th as we bring you the ultimate extravaganza of the year, back and bigger than ever before! With the electrifying performances of Akhil Sachdeva and DJ Rhea, get ready to groove all night long! But that's not all - brace yourselves for 35+ epic events including Fashion Shows, Dance-offs, Singing showdowns, Treasure Hunts, Online Gaming, E-sports, and much more! Don't miss out on the thrill, join us for an unforgettable experience at SAGE University, Indore!</p>
              <div className="flex flex-col py-8 items-center justify-center gap-2 md:flex-row">
                <a className="sagebuttons" target="_blank" rel="noreferrer" href="https://linktr.ee/sage.euphoria">Register</a>
                <Link className="sagebuttons" to="/Events">Explore Events</Link>
              </div>
            </div>
          </Reveal>
        </div>

        {/* Gallery */}
        <div className="gallerybg bg-[#b72723] p-[20px]">
          <div className="gallerSageIn container py-16 md:py-32">
            <Reveal>
              <div className="sagepasseshead mb-8">
                <h2 className="text-[#ffa42c] outlined_text">2023 Recap</h2>
              </div>
            </Reveal>
            <Reveal>
              <div className="galleryImage">
                <Link to="/Events">
                <img src="Gallery.png" alt="" />
                </Link>
              </div>
            </Reveal>
            <Reveal>
              <div className="flex align-center justify-center py-6">
                <SecondBtn />
              </div>
            </Reveal>
          </div>
        </div>
        {/* our team */}
        <div id="team" className="container relative z-10 sageourteam">
          <div className="sageourteamin">
            <Reveal>
              <div className="sageourteamhead m-8">
                <h2>Our Team</h2>
              </div>
            </Reveal>
            <OurTeam />
          </div>
        </div>
        {/* sponsers */}
        <div id="sponsors" className="main relative z-10">
          <Reveal>
            <div className="sageourteamhead pb-4">
              <h2>SPONSORS</h2>
            </div>
          </Reveal>
          <Marquee direction="right" speed={100}>
            <div className="image_wrapper">
              <img src={sponsor1} alt="" />
            </div>
            <div className="image_wrapper">
              <img src={sponsor2} alt="" />
            </div>
            <div className="image_wrapper">
              <img src={sponsor3} alt="" />
            </div>
            <div className="image_wrapper">
              <img src={sponsor4} alt="" />
            </div>
            <div className="image_wrapper">
              <img src={sponsor5} alt="" />
            </div>
            <div className="image_wrapper">
              <img src={sponsor6} alt="" />
            </div>
            <div className="image_wrapper">
              <img src={sponsor1} alt="" />
            </div>
            <div className="image_wrapper">
              <img src={sponsor2} alt="" />
            </div>
            <div className="image_wrapper">
              <img src={sponsor3} alt="" />
            </div>
            <div className="image_wrapper">
              <img src={sponsor4} alt="" />
            </div>
            <div className="image_wrapper">
              <img src={sponsor5} alt="" />
            </div>
            <div className="image_wrapper">
              <img src={sponsor6} alt="" />
            </div>
          </Marquee>
          <Marquee direction="left" speed={100}>
            <div className="image_wrapper">
              <img src={sponsor1} alt="" />
            </div>
            <div className="image_wrapper">
              <img src={sponsor2} alt="" />
            </div>
            <div className="image_wrapper">
              <img src={sponsor3} alt="" />
            </div>
            <div className="image_wrapper">
              <img src={sponsor4} alt="" />
            </div>
            <div className="image_wrapper">
              <img src={sponsor5} alt="" />
            </div>
            <div className="image_wrapper">
              <img src={sponsor6} alt="" />
            </div>
            <div className="image_wrapper">
              <img src={sponsor1} alt="" />
            </div>
            <div className="image_wrapper">
              <img src={sponsor2} alt="" />
            </div>
            <div className="image_wrapper">
              <img src={sponsor3} alt="" />
            </div>
            <div className="image_wrapper">
              <img src={sponsor4} alt="" />
            </div>
            <div className="image_wrapper">
              <img src={sponsor5} alt="" />
            </div>
            <div className="image_wrapper">
              <img src={sponsor6} alt="" />
            </div>
          </Marquee>
        </div>
        {/* footer */}
      </div>
    </>
  );
}
