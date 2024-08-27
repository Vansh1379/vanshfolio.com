import Avatarimg from "../../src/assets/images/Avatar.png"

const Avatar = () => {
    return (
        <div className="pl-4">
            <div className="flex">
                <div className=" ">
                    <img src={Avatarimg} alt="Avatar" className="rounded-full object-cover object-top h-10 w-10" />
                </div>
                <div className="text-sm flex flex-col pl-2">
                    <div className="text-sm">
                        <p className="font-bold text-gray-700">Vansh Kalra</p>
                    </div>
                    <div className="">
                        <p className="font-light text-gray-600">Developer</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Avatar