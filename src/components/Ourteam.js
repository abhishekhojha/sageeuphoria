import { OurTeamData } from "./data/OurTeam";
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import "./socialicon.css"
export default function OurTeam() {
    console.log(OurTeamData)
    return (<div className="grid grid-cols-1 md:grid-cols-2 px-[20px] lg:grid-cols-4 items-stretch gap-2 items-center lg:justify-between">
        
        {OurTeamData ?
            OurTeamData.map((data) => {
                return (
                    <div className="relative flex flex-col text-gray-700 bg-white shadow-md bg-clip-border rounded-xl lg:w-[230px] xl:w-[250px]" key={data.name}>
                    <div className="relative mx-4 mt-4 overflow-hidden text-gray-700 shadow-lg bg-clip-border rounded-xl">
                    <img src={data.src} alt="" />
                        <div className="social-icons">
                            <a href="#facebook" className="social-icon"><FaFacebook /></a>
                            <a href="#twitter" className="social-icon"><FaTwitter /></a>
                            <a href={data.instagram} className="social-icon"><FaInstagram /></a>
                        </div>
                    </div>
                    <div className="p-6 text-center">
                        <h4 className="block mb-2 font-sans text-sm md:text-2xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                        {data.name}
                        </h4>
                        <p className="text-blue-gray-600">
                        {data.Des}
                        </p>
                    </div>
                </div>
                )
            })
            : <></>}
    </div>)
}