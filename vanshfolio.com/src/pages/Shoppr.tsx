import { Shoppr as ShopprCompo } from "../components/Shoppr"
import Sidebar from "./Sidebar"

export const Shoppr = () => {
    return (
        <div className="flex bg-gray-100">
            <div>
                <Sidebar />
            </div>
            <div className="bg-white w-screen mt-2 ml-2 rounded-tl-xl border border-gray-300">
                <ShopprCompo />
            </div>
        </div>
    )
}
