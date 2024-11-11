import Fotter from "./Fotter"
import ProjectCard from "./ProjectCard"
import shopprlanding from "../assets/images/ShopprLanding.png"
import vlanding from "../assets/images/Vanshfolio alnding.png"

const HomeContent = () => {
    return (
        <div className="mx-40 max-w-4xl py-16 px-6">
            <span className="text-4xl">👋</span>
            <h1 className="text-3xl font-bold text-gray-600">Hello there! I'm Vansh</h1>
            <p className="max-w-xl text-base font-normal mt-4 text-gray-500">I'm a full-stack developer that loves
                <span className="bg-neutral-100 px-1 py-0.5">building web apps</span>that can impact some people lives </p>
            <p className="max-w-xl text-base font-normal mt-4 text-gray-500">I'm a junior software engineer with
                <span className="bg-neutral-100 px-1 py-0.5">1 year of experience</span>building scalable web apps that are optimised and
                good looking.</p>
            <h2 className="text-base font-semibold mt-16  text-gray-800 ">What I've been working on</h2>

            <ProjectCard
                title={"Shoppr"}
                description={"V-Pay is a secure application enabling seamless money transfers between users, featuring robust security and database-only transactions."}
                url={shopprlanding}
                tech1={"React.js"}
                tech2={"Node.js"}
                tech4={"MongoDB"}
                tech3={"Express.js"}
                tech5={"Tailwindcss"}
                route={"/shoppr"}
            />
            <ProjectCard
                title={"vanshfolio"}
                description={"V-Pay is a secure application enabling seamless money transfers between users, featuring robust security and database-only transactions."}
                url={vlanding}
                tech1={"React.ts"}
                tech2={"Tailwindcss"}
                tech3={"Typescript"}
                route={"/vanshfolio"}
            />
            <ProjectCard
                title={"V-Pay"}
                description={"V-Pay is a secure application enabling seamless money transfers between users, featuring robust security and database-only transactions."}
                url={"https://liquiddesigns.in/wp-content/uploads/2017/05/03-PaytmLogo.jpg"}
                tech1={"React.js"}
                tech2={"Node.js"}
                tech4={"MongoDB"}
                tech3={"Express.js"}
                tech5={"Tailwindcss"}
                route={"/vpay"}
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
                route={"/medium"}
            />

            <div className="mt-16">
                <h2 className="bg-clip-text font-bold text-lg text-gray-600">Tech Stack</h2>
                <div className="flex items-center justify-center ">
                    <img src="https://seeklogo.com/images/N/nextjs-logo-963D40B71E-seeklogo.com.png" alt="" className="h-14 w-25 " />
                    <img src="https://logotyp.us/file/react.svg" alt="" className="w-20 h-20" />
                    <img src="https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg" alt="" className="h-20 w-20 mx-2" />
                    <img src="https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg" alt="" className="h-14 w-14 ml-2" />
                    <img src="https://logotyp.us/file/typescript.svg" alt="" className="h-20 w-20 " />
                    <img src="https://www.logo.wine/a/logo/MongoDB/MongoDB-Logo.wine.svg" alt="" className="h-20 w-20" />
                    <img src="https://brandlogos.net/wp-content/uploads/2021/11/postgresql-logo-512x512.png" alt="" className="h-16 w-16" />
                    <img src="https://cdn.worldvectorlogo.com/logos/prisma-2.svg" alt="" className="h-14 w-20" />
                    <img src="https://www.logo.wine/a/logo/Cloudflare/Cloudflare-Logo.wine.svg" alt="" className="h-20 w-20 " />
                </div>
            </div>
            <div className="mt-10">
                <Fotter />
            </div>
        </div>
    )
}

export default HomeContent