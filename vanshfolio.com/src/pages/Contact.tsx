import ContactCompo from "../components/ContactCompo"
import Sidebar from "./Sidebar"

const Contact = () => {
    return (
        <div className="flex bg-gray-100">
            <div>
                < Sidebar />
            </div>
            <div className="bg-white w-screen mt-2 ml-2 rounded-tl-xl border border-gray-300">
                <ContactCompo />
            </div>
        </div >
    )
}

export default Contact