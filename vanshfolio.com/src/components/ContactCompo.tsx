import Fotter from "./Fotter"

const ContactCompo = () => {
    return (
        <div className="mx-40 max-w-4xl py-16 px-6  min-h-screen ">
            <span className="text-4xl">✉️</span>
            <h1 className="text-3xl font-bold text-gray-700 font-sans">Contact Me</h1>
            <p className="font-normal max-w-xl text-gray-500 mt-2">Reach out to me over email or fill up this contact form. I will get back to you ASAP - I promise.</p>
            <form action="form" className="mt-10">
                <div className=" flex  justify-between gap-5">
                    <input type="text" placeholder="Your name" className="bg-neutral-100 focus:outline-none px-2 py-3 rounded-md text-sm text-neutral-700 w-full" />
                    <input type="email" placeholder="Your email address" className="bg-neutral-100 focus:outline-none px-2 py-3 rounded-md text-sm text-neutral-700 w-full" />
                </div>
                <div>
                    <textarea placeholder="Your message" rows={10} className="bg-neutral-100 focus:outline-none px-2 mt-4 py-2 rounded-md tetx-sm text-neutral-700 w-full"></textarea>
                </div>
                <button type="button" className="w-full bg- bg-neutral-100 rounded-md font-bold text-neutral-500 px-2 py-2 mt-4">Submit</button>
            </form>
            <Fotter />
        </div>
    )
}

export default ContactCompo