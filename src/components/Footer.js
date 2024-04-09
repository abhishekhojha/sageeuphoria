import "./component.css";
import addr from "./img/addr.png";
import Reveal from "../anime/Animation";
import sponser1 from './sponsers/1.png';
import sponser2 from './sponsers/2.png';
import sponser3 from './sponsers/3.png';
import sponser4 from './sponsers/4.png';
import sponser5 from './sponsers/5.png';
import sponser6 from './sponsers/6.png';
import sponser7 from './sponsers/7.png';
import sponser8 from './sponsers/8.png';
import sponser9 from './sponsers/9.png';
import call from "./img/call.png";
export default function Footer() {
    return <>
        {/* sponsers */}
        <div id="sponsors" className="main relative z-10">
            <Reveal>
                <div className="sageourteamhead pb-4">
                    <h2>SPONSORS</h2>
                </div>
            </Reveal>
            <div className="grid items-center gap-8 p-[20px] md:px-0 grid-cols-3 md:grid-cols-5 justify-center container">
                <Reveal><div className="spons-img">
                    <img src={sponser1} alt="" />
                </div></Reveal>
                <Reveal><div className="spons-img">
                    <img src={sponser2} alt="" />
                </div></Reveal>
                <Reveal><div className="spons-img">
                    <img src={sponser3} alt="" />
                </div></Reveal>
                <Reveal><div className="spons-img">
                    <img src={sponser4} alt="" />
                </div></Reveal>
                <Reveal><div className="spons-img">
                    <img src={sponser5} alt="" />
                </div></Reveal>
                <Reveal><div className="spons-img">
                    <img src={sponser6} alt="" />
                </div></Reveal>
                <Reveal><div className="spons-img">
                    <img src={sponser7} alt="" />
                </div></Reveal>
                <Reveal><div className="spons-img">
                    <img src={sponser8} alt="" />
                </div></Reveal>
                <Reveal><div className="spons-img">
                    <img src={sponser9} alt="" />
                </div></Reveal>
            </div>
        </div>
        <div className="border-y-2 border-black border-solid py-4 md:py-8 mt-16 mb-32">
            <div id="contacts" className="container relative z-10 sagefooter">
                <div className="sagefooterIn">
                    <div className="sagefooterInAddress">
                        <img src={addr} alt="" className="invertimage" />
                        <p>SAGE University,<br /> Kailod Kartal Rau Bypass Road,<br />Indore. 452020 (Madhya Pradesh)</p>
                    </div>

                    <div className="sagefooterInContact">
                        <div className="contact">
                            <img src={call} alt="" className="invertimage" />
                            <p>Arkansh Aryan :- <a href="tel:+919264110100">+91 9264110100</a></p>
                        </div>
                        <div className="contact">
                            <img src={call} alt="" className="invertimage" />
                            <p>Nikhil Pandey &nbsp;&nbsp;:- <a href="tel:+918358863862">+91 8358863862</a></p>
                        </div>
                    </div>
                </div>
                <div className="sagefootershoutout">
                    <h4>@Designed by <a href="https://www.linkedin.com/in/yash-mandlekar-9a974421b/" target="_blank" rel="noreferrer">Yash</a></h4>
                    <h4>@Developed by <a href="https://www.linkedin.com/in/abhishekh-ojha-10802b215" target="_blank" rel="noreferrer">Abhishekh</a></h4>
                </div>
            </div>
        </div>
    </>
}
