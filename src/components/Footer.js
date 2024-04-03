import "./component.css";
import addr from "./img/addr.png";
import insta from "./img/insta.png";
import linkedin from "./img/linkedin.png";
import call from "./img/call.png";
export default function Footer() {
    return <>
        <div id="contacts" className="container relative z-10 sagefooter">
            <div className="sagefooterIn">
                <div className="sagefooterInAddress">
                    <img src={addr} alt="" className="invertimage" />
                    <p>SAGE University,<br /> Kailod Kartal Rau Bypass Road,<br />Indore. 452020 (Madhya Pradesh)</p>
                </div>
                <div className="sagefooterInSocial">
                    <a href="https://www.instagram.com/sage.euphoria?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" rel="noreferrer"><img src={insta} alt=""></img></a>
                </div>
                <div className="sagefooterInContact">
                    <div className="contact">
                        <img src={call} alt="" className="invertimage"/>
                        <p>Sanket Jain &nbsp; :- &nbsp; <a href="tel:+919630902105">+91 9630902105</a></p>
                    </div>
                    {/* <div className="contact">
                        <img src={call} alt="" className="invertimage"/>
                        <p>Kunal Pandey :- <a href="tel:+918094295767">+91 8094295767</a></p>
                    </div> */}
                    <div className="contact">
                        <img src={call} alt="" className="invertimage"/>
                        <p>Nikhil Pandey :- <a href="tel:+918358863862">+91 8358863862</a></p>
                    </div>
                    <div className="contact">
                        <img src={call} alt="" className="invertimage"/>
                        <p>Arkansh Aryan :- <a href="tel:+919264110100">+91 9264110100</a></p>
                    </div>
                </div>
            </div>
            <div className="sagefootershoutout">
                <h4>@Designed by <a href="https://www.linkedin.com/in/yash-mandlekar-9a974421b/" target="_blank" rel="noreferrer">Yash</a></h4>
                <h4>@Developed by <a href="https://www.linkedin.com/in/abhishekh-ojha-10802b215" target="_blank" rel="noreferrer">Abhishekh</a></h4>
            </div>
        </div>
    </>
}
