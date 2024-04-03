import "./buttonAn.css"
export default function AnimBtn() {
    return (
        <>
            <div className="fixed bottom-4 right-4 z-20">
                <a href="https://linktr.ee/sage.euphoria" target="_blank" rel="noreferrer" class="link">
                    <svg viewBox='0 0 200 200' width='200' height='200' xmlns='http://www.w3.org/2000/svg' class="link__svg" aria-labelledby="link1-title link1-desc">
                        <title id="link1-title">Get your passes now</title>
                        <desc id="link1-desc"></desc>

                        <path id="link-circle" class="link__path" d="M 20, 100 a 80,80 0 1,1 160,0 a 80,80 0 1,1 -160,0" stroke="none" fill="none" />

                        <path class="link__arrow" d="M 75 100 L 125 100 L 110 85 M 125 100 L 110 115" fill="none" />

                        <text class="link__text">
                            <textPath href="#link-circle" stroke="none">
                                Get your passes now
                            </textPath>
                        </text>
                    </svg>
                </a>
            </div>
        </>
    )
}