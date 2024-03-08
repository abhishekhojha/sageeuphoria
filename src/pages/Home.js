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
        <Reveal>
              <div className="sageheaderconthead">
                <h1>SAGE EUPHORIA</h1>
                <p>
                  Unleashing the Ultimate campus experience A celebration of
                  youth, talent, and creativity..
                </p>
              </div>
            </Reveal>
          <div className="sageheadervideo">
            <video width="100%" height="100%" autoPlay={true} loop muted>
              <source src="./gojo.mp4" type="video/mp4" />
            </video>
          </div>
          <div className="sageheadercont container">
           
            <Reveal>
              <div className="sageheadercontBtn">
                <a href="/#" className="sagebuttons">
                  Get your passes
                </a>
                <div className="scroll">
                  <p>Scroll</p>
                  <img src="./down.png" alt="" />
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
                  The primary objective of college fests is to provide students
                  with an opportunity to engage with each other, build
                  relationships, and explore their creative and academic
                  interests. It is a time to showcase student’s talents, as well
                  as to learn new skills, create new memories, and enjoy some
                  much-needed fun. College fests provide students with an
                  exciting and unique platform to engage with their peers, while
                  also developing their professional and academic skills.
                  Moreover, college fests are a great way for students to gain
                  valuable experience and make important connections with people
                  from diverse backgrounds. Through college fests, students can
                  engage in a wide variety of activities, from art competitions
                  and performances to sports and debates. Ultimately, college
                  fests provide an invaluable opportunity for students to
                  explore their interests, create long-lasting relationships,
                  and gain valuable skills and experiences.
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
                  <h3>DJ PERCH</h3>
                </div>
                <div className="sagepassesconincon">
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
              </div>
            </XReveal>
            <div className="sagepassesconin">
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
            </div>
            <YReveal>
              <div className="sagepassesconin">
                <div className="sagepassesconinImage">
                  <img src="./artist/1.jpg" alt="" />
                  <h3>DJ PERCH</h3>
                </div>
                <div className="sagepassesconincon">
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
