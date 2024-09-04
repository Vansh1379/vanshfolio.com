import TechCompo from "../components/TechCompo"
import Sidebar from "./Sidebar"

const Techstack = () => {
    return (
        <div className="flex bg-gray-100">
            <div>
                <Sidebar />
            </div>
            <div className="bg-white w-screen mt-2 ml-2 rounded-tl-xl border border-gray-300">
                <TechCompo />
            </div>
        </div>
    )
}

export default Techstack