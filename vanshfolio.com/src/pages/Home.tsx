import HomeContent from "../components/HomeContent"
import Sidebar from "./Sidebar"

const Home = () => {
    return (
        <div className=" flex bg-gray-100">
            <div>
                <Sidebar />
            </div>
            <div className="bg-white w-screen mt-2 ml-2 rounded-tl-xl border border-gray-300">
                <HomeContent />
            </div>
        </div>
    )
}

export default Home