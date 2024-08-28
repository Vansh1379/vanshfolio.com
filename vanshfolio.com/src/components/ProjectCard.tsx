
interface ProjectProps {
    title: string;
    description: string;
    url: string;
    tech1: string;
    tech2: string;
    tech3: string;
    tech4?: string;
    tech5?: string;
}

const ProjectCard = ({
    title,
    description,
    url,
    tech1,
    tech2,
    tech3,
    tech4,
    tech5
}: ProjectProps) => {
    return (
        <div className="bg-white rounded-2xl flex mt-7">
            <div className="hover:bg-gray-50 flex">
                <div className="mt-4  rounded-2xl">
                    <img src={url} alt="" className="w-48 h-36 rounded-xl" />
                </div>
                <div className="mt-4  ml-2 mr-4 mb-1">
                    <div className="">
                        <h4 className="bg-clip-text text-transparent bg-gray-600 font-bold ">{title}</h4>
                        <p className="mt-3 max-w-lg text-sm font-normal text-gray-500">{description}</p>
                    </div>
                    <div className="mt-10">
                        <span className="text-sm bg-gray-50 rounded-sm px-2 mx-2 py-1">{tech1}</span>
                        <span className="text-sm bg-gray-50 rounded-sm px-2 mx-2 py-1">{tech2}</span>
                        <span className="text-sm bg-gray-50 rounded-sm px-2 mx-2 py-1">{tech3}</span>
                        <span className="text-sm bg-gray-50 rounded-sm px-2 mx-2 py-1">{tech4}</span>
                        <span className="text-sm bg-gray-50 rounded-sm px-2 mx-2 py-1">{tech5}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProjectCard