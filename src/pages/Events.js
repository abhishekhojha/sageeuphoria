import { useEffect } from 'react';

import "./css/events.css"
import XReveal from "../anime/X";
import Reveal from "../anime/Animation";
import YReveal from "../anime/Y";
import { Sports, Tech, Cultural, Literary, Management } from "./data/Events.js"
export default function Events() {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, []);
    return (
        <>
            <div className="sageEvents container">
                <Reveal>
                    <div className="sageEventsHead flex flex-col items-center justify-center">
                        <h2>Events</h2>
                        <h4 className='text-sm md:text-2xl leading-[35px] md:leading-[40px] text-center font-semibold'>Join the <span className='bg-[#b72723] p-2 text-white'>event and delight</span> in the joyous <br /> experience awaiting you.</h4>
                    </div>
                </Reveal>
                {/* <div className="sageEventsup sageEventsRight">
                    <div className="sageEventsIn">
                        <div className="sageEventsImage">
                            <XReveal>
                                <img src="./events/events.png" alt=""></img>
                            </XReveal>
                        </div>
                        <div className="sageEventsCon">
                            <YReveal>
                                <div className="sageEventsConin">
                                    <h2>Dance</h2>
                                    <p>Get ready to dance at our electrifying event! DJ’s, performers, non-stop fun! Whether you’re a pro or just want to let loose, it’s for everyone. Grab your dancing shoes and let’s party.</p>
                                    <h4>Categories:</h4>
                                    <ul>
                                        <li>Group Street Dance. (Beat the street)</li>
                                        <li>Solo Dance. (Cut-A-Rug)</li>
                                        <li>Duet Dance. (Ecstasy)</li>
                                        <li>Group Dance. (Bliss)</li>
                                        <li>Dance battle. (face-Off)</li>
                                    </ul>
                                    <a target="_blank" rel="noreferrer" href="https://linktr.ee/sage.euphoria" className="sagebuttons">REGISTER NOW</a>
                                </div>
                            </YReveal>
                        </div>
                    </div>
                </div>
                <div className="sageEventsup sageEventsLeft">
                    <div className="sageEventsIn">
                        <div className="sageEventsCon">
                            <XReveal>
                                <div className="sageEventsConin">
                                    <h2>Music Competition</h2>
                                    <p>Calling all talented singers! Compete to be the ultimate singing champ! Show your passion for music on our stage. Industry judges, fierce competition, big prizes. Register now and let's make magic.</p>
                                    <h5>Categories:</h5>
                                    <ul>
                                        <li>Singer-Songwriter competition.</li>
                                        <li>Original Composition.</li>
                                        <li>Battle Of Bands.</li>
                                        <li>Solo Singing.</li>
                                        <li>A-Capella.</li>
                                        <li>Beatboxing.</li>
                                        <li>Solo Rap.</li>
                                        <li>Rap Battle.</li>
                                        <li>DJ Hunt.</li>
                                    </ul>
                                    <a target="_blank" rel="noreferrer" href="https://linktr.ee/sage.euphoria" className="sagebuttons">REGISTER NOW</a>
                                </div>
                            </XReveal>
                        </div>
                        <div className="sageEventsImage">
                            <YReveal>
                                <img src="./events/music.png" alt=""></img>
                            </YReveal>
                        </div>
                    </div>
                </div>
                <div className="sageEventsup sageEventsRight">
                    <div className="sageEventsIn">
                        <div className="sageEventsImage">
                            <XReveal>
                                <img src="./events/play.png" alt=""></img>
                            </XReveal>
                        </div>
                        <div className="sageEventsCon">
                            <YReveal>
                                <div className="sageEventsConin">
                                    <h2>Dramatics Competitions</h2>
                                    <p>The intense rivalry in the dramatic competition heightened emotions and showcased a myriad of captivating performances, leaving the audience on the edge of their seats.</p>
                                    <h5>Categories:</h5>
                                    <ul>
                                        <li>Street Play.</li>
                                        <li>Stage Play.</li>
                                        <li>Improv.</li>
                                    </ul>
                                    <a target="_blank" rel="noreferrer" href="https://linktr.ee/sage.euphoria" className="sagebuttons">REGISTER NOW</a>
                                </div>
                            </YReveal>
                        </div>
                    </div>
                </div>
                <div className="sageEventsup sageEventsLeft">
                    <div className="sageEventsIn">
                        <div className="sageEventsCon">
                            <XReveal>
                                <div className="sageEventsConin">
                                    <h2>Speaking Arts</h2>
                                    <p>The realm of speaking arts is a powerful tapestry where eloquence, persuasion, and storytelling converge, weaving a dynamic narrative that resonates and captivates audiences.</p>
                                    <h5>Categories:</h5>
                                    <ul>
                                        <li>Just-A-Minute. (JAM)</li>
                                        <li>Debate Competition.</li>
                                        <li>Story Telling.</li>
                                        <li>Slam Poetry.Stand Up.</li>
                                    </ul>
                                    <a target="_blank" rel="noreferrer" href="https://linktr.ee/sage.euphoria" className="sagebuttons">REGISTER NOW</a>
                                </div>
                            </XReveal>
                        </div>
                        <div className="sageEventsImage">
                            <YReveal>
                                <img src="./events/poetry.png" alt=""></img>
                            </YReveal>
                        </div>
                    </div>
                </div>
                <div className="sageEventsup sageEventsRight">
                    <div className="sageEventsIn">
                        <div className="sageEventsImage">
                            <XReveal>
                                <img src="./events/fineArts.jpg" alt=""></img>
                            </XReveal>
                        </div>
                        <div className="sageEventsCon">
                            <YReveal>
                                <div className="sageEventsConin">
                                    <h2>Fine Arts</h2>
                                    <p>Fine arts, a symphony of creativity and skill, unveil a canvas of expression, where brushstrokes and form coalesce into timeless masterpieces that speak volumes without uttering a single word.</p>
                                    <h5>Categories:</h5>
                                    <ul>
                                        <li>Live-Sketching Competition.</li>
                                        <li>Water Colour Painting.</li>
                                        <li>Sneaker Designing.</li>
                                        <li>Rapid Fine Arts.</li>
                                    </ul>
                                    <a target="_blank" rel="noreferrer" href="https://linktr.ee/sage.euphoria" className="sagebuttons">REGISTER NOW</a>
                                </div>
                            </YReveal>
                        </div>
                    </div>
                </div>
                <div className="sageEventsup sageEventsLeft">
                    <div className="sageEventsIn">
                        <div className="sageEventsCon">
                            <XReveal>
                                <div className="sageEventsConin">
                                    <h2>Lifestyle</h2>
                                    <p>Lifestyle is the art of curating daily existence, where choices in habits, aesthetics, and values paint a portrait of an individual's unique and intentional way of living.</p>
                                    <h5>Categories:</h5>
                                    <ul>
                                        <li>Mr. And Mrs. Euphoria.</li>
                                        <li>Beauty Pageant.</li>
                                        <li>Modelling.</li>
                                        <li>Cosplay</li>
                                    </ul>
                                    <a target="_blank" rel="noreferrer" href="https://linktr.ee/sage.euphoria" className="sagebuttons">REGISTER NOW</a>
                                </div>
                            </XReveal>
                        </div>
                        <div className="sageEventsImage">
                            <YReveal>
                                <img src="./events/fashion.png" alt=""></img>
                            </YReveal>
                        </div>
                    </div>
                </div>
                <div className="sageEventsup sageEventsRight">
                    <div className="sageEventsIn">
                        <div className="sageEventsImage">
                            <XReveal>
                                <img src="./events/litArts.jpg" alt=""></img>
                            </XReveal>
                        </div>
                        <div className="sageEventsCon">
                            <YReveal>
                                <div className="sageEventsConin">
                                    <h2>Literary Arts</h2>
                                    <p>Literary arts serve as a timeless canvas, where words transcend mere sentences, painting vivid worlds, emotions, and ideas that illuminate the human experience with unparalleled depth and resonance.</p>
                                    <h5>Categories:</h5>
                                    <ul>
                                        <li>Quiz Competition.</li>
                                        <li>Ad-Making.</li>
                                        <li>Rapid Fire.</li>
                                        <li>Talent Hunt.</li>
                                    </ul>
                                    <a target="_blank" rel="noreferrer" href="https://linktr.ee/sage.euphoria" className="sagebuttons">REGISTER NOW</a>
                                </div>
                            </YReveal>
                        </div>
                    </div>
                </div>
                <div className="sageEventsup sageEventsLeft">
                    <div className="sageEventsIn">
                        <div className="sageEventsCon">
                            <XReveal>
                                <div className="sageEventsConin">
                                    <h2>Design And Digital Arts</h2>
                                    <p>In the fusion of design and digital arts, creativity becomes a pixelated masterpiece, where innovation and aesthetics seamlessly converge to shape the visual landscape of the digital era.</p>
                                    <h5>Categories:</h5>
                                    <ul>
                                        <li>One-Minute Movie Making.</li>
                                        <li>Short Film Making.</li>
                                        <li>Reel Making.</li>
                                        <li>Photography.</li>
                                    </ul>
                                    <a target="_blank" rel="noreferrer" href="https://linktr.ee/sage.euphoria" className="sagebuttons">REGISTER NOW</a>
                                </div>
                            </XReveal>
                        </div>
                        <div className="sageEventsImage">
                            <YReveal>
                                <img src="./events/film.png" alt=""></img>
                            </YReveal>
                        </div>
                    </div>
                </div>
                <div className="sageEventsup sageEventsRight">
                    <div className="sageEventsIn">
                        <div className="sageEventsImage">
                            <XReveal>
                                <img src="./events/conclave.jpg" alt=""></img>
                            </XReveal>
                        </div>
                        <div className="sageEventsCon">
                            <YReveal>
                                <div className="sageEventsConin">
                                    <h2>Conclave</h2>
                                    <p>The conclave buzzed with intellectual fervour as minds converged in a harmonious exchange of ideas, fostering a dynamic environment where innovation and collaboration took centre stage.</p>
                                    <h5>Categories:</h5>
                                    <ul>
                                        <li>Entrepreneurship Conclave.</li>
                                        <li>Creators Conclave.</li>
                                        <li>Tech Talks.</li>
                                    </ul>
                                    <a target="_blank" rel="noreferrer" href="https://linktr.ee/sage.euphoria" className="sagebuttons">REGISTER NOW</a>
                                </div>
                            </YReveal>
                        </div>
                    </div>
                </div>
                <div className="sageEventsup sageEventsLeft">
                    <div className="sageEventsIn">
                        <div className="sageEventsCon">
                            <XReveal>
                                <div className="sageEventsConin">
                                    <h2>Techno-Management</h2>
                                    <p>Techno management seamlessly blends technological prowess with strategic acumen, steering organizations through the complexities of the digital landscape with efficiency and foresight.</p>
                                    <h5>Categories:</h5>
                                    <ul>
                                        <li>Euphoria’s Goyt Talent.</li>
                                        <li>Start Up Expo.</li>
                                        <li>VR Showcase.</li>
                                        <li>Bid To Win.</li>
                                        <li>Robo Race.</li>
                                        <li>E-Sports.</li>
                                    </ul>
                                    <a target="_blank" rel="noreferrer" href="https://linktr.ee/sage.euphoria" className="sagebuttons">REGISTER NOW</a>
                                </div>
                            </XReveal>
                        </div>
                        <div className="sageEventsImage">
                            <YReveal>
                                <img src="./events/tech.jpg" alt=""></img>
                            </YReveal>
                        </div>
                    </div>
                </div> */}
            </div>
            <div className='eventsSlider'>
                <div className='eventSliderCat p-8 bg-[#b72723]'>
                    <h3 className='font-semibold text-[30px] text-center'>Sports</h3>
                </div>
                <EventSlider data={Sports} name="sports" />
            </div>
            <div className='eventsSlider mt-16'>
                <div className='eventSliderCat p-8 bg-[#b72723]'>
                    <h3 className='font-semibold text-[30px] text-center'>Technical</h3>
                </div>
                <EventSlider data={Tech} name="Tech" />
            </div>
            <div className='eventsSlider mt-16'>
                <div className='eventSliderCat p-8 bg-[#b72723]'>
                    <h3 className='font-semibold text-[30px] text-center'>Cultural</h3>
                </div>
                <EventSlider data={Cultural} name="Cultural" />
            </div>
            <div className='eventsSlider mt-16'>
                <div className='eventSliderCat p-8 bg-[#b72723]'>
                    <h3 className='font-semibold text-[30px] text-center'>Literary</h3>
                </div>
                <EventSlider data={Literary} name="Cultural" />
            </div>
            <div className='eventsSlider mt-16'>
                <div className='eventSliderCat p-8 bg-[#b72723]'>
                    <h3 className='font-semibold text-[30px] text-center'>Management</h3>
                </div>
                <EventSlider data={Management} name="Cultural" />
            </div>
        </>
    )
}
function EventSlider(props) {
    const data = props.data
    const length = props.data.length
    const gridStyle = {
        display: 'grid',
        gridTemplateColumns: "repeat(" + length + ", 300px)",
        gap: '10px',
    };
    return (<>
        <div className='eventsSlidermain relative overflow-hidden overflow-x-auto py-4 min-h-[450px]'>
            <div className={'eventsSliderIn duration-1000 w-full absolute top-[30px] left-0'} style={gridStyle}>
                {data ? data.map((data) => {
                    return <div className='bg-black row-start-1 duration-500 hover:scale-105' key={data.id}>
                        <a target="_blank" rel="noreferrer" href="https://linktr.ee/sage.euphoria"><img src={data.src} alt='' /></a>
                    </div>
                }) : ""}
            </div>
        </div>
    </>)
}