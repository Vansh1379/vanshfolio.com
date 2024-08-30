import Fotter from "./Fotter"
import ProjectCard from "./ProjectCard"

const ProjectDisplay = () => {
    return (
        <div className="mx-40 max-w-4xl py-16 px-6  min-h-screen">
            <span className="text-4xl">⚡</span>
            <h1 className="text-3xl font-bold text-gray-600 font-sans">What I've been working on</h1>
            <div>
                <ProjectCard
                    title={"V-Pay"}
                    description={"V-Pay is a secure application enabling seamless money transfers between users, featuring robust security and database-only transactions."}
                    url={"https://liquiddesigns.in/wp-content/uploads/2017/05/03-PaytmLogo.jpg"}
                    tech1={"React.js"}
                    tech2={"Node.js"}
                    tech4={"MongoDB"}
                    tech3={"Express.js"}
                    tech5={"Tailwindcss"}
                />
                <ProjectCard
                    title={"Medium"}
                    description={"V-Pay is a secure application enabling seamless money transfers between users, featuring robust security and database-only transactions."}
                    url={"https://miro.medium.com/v2/1*jfdwtvU6V6g99q3G7gq7dQ.png"}
                    tech1={"React.ts"}
                    tech2={"Cloudflare"}
                    tech4={"PostgreSQL"}
                    tech3={"Prisma"}
                    tech5={"Typescript"}
                />

                <ProjectCard
                    title={"vanshfolio"}
                    description={"V-Pay is a secure application enabling seamless money transfers between users, featuring robust security and database-only transactions."}
                    url={"https://miro.medium.com/v2/1*jfdwtvU6V6g99q3G7gq7dQ.png"}
                    tech1={"React.ts"}
                    tech2={"Tailwindcss"}
                    tech3={"Typescript"}
                />
            </div>
            <div className="mt-10">
                <Fotter />
            </div>
        </div>
    )
}

export default ProjectDisplay