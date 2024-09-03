import AboutCompo from "../components/AboutCompo"
import Sidebar from "./Sidebar"

const About = () => {
    return (
        <div className="flex bg-gray-100">
            <div>
                <Sidebar />
            </div>
            <div className="bg-white w-screen mt-2 ml-2 rounded-tl-xl border border-gray-300 ">
                <AboutCompo />
            </div>
        </div>
    )
}

export default About