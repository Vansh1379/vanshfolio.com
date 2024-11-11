import Fotter from "./Fotter"
import landing from "../assets/images/Vanshfolio alnding.png"
import project from "../assets/images/project.png"
import contact from "../assets/images/contact.png"
import about from "../assets/images/about.png"

export const Vanshfolio = () => {
  return (
    <div className="container mx-auto max-w-4xl px-4 sm:px-6 py-16">
      <div>
        <div className="bg-gray-100 rounded-2xl mt-10">
          <div className="cursor-pointer">
            <img
              src={landing}
              alt="Shoppr Landing image"
              className="w-full pt-10 pb-5 px-5 object-contain"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-2 mt-8">
          <div className="bg-gray-100 rounded-lg">
            <div className="cursor-pointer">
              <img
                src={project}
                alt="Product landing page"
                className="w-full h-full object-cover p-2"
              />
            </div>
          </div>

          <div className="bg-gray-100 rounded-lg">
            <div className="cursor-pointer">
              <img
                src={contact}
                alt="Specific product image"
                className="w-full h-full object-cover p-2"
              />
            </div>
          </div>

          <div className="bg-gray-100 rounded-lg">
            <div className="cursor-pointer">
              <img
                src={about}
                alt="Cart image"
                className="w-full h-full object-cover p-2"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="mt-10">

        <div className="flex items-center">
          <div className="text-4xl font-extrabold bg-gradient-to-r from-gray-600 to-gray-500 text-transparent bg-clip-text font-mono">Shoppr</div>
          <div className="flex ml-80">
            <div className="text-xs md:text-xs lg:text-xs bg-gray-100 px-2 py-1 rounded-sm text-gray-500 mr-2">React.js</div>
            <div className="text-xs md:text-xs lg:text-xs bg-gray-100 px-2 py-1 rounded-sm text-gray-500 mr-2">Tailwindcss</div>
            <div className="text-xs md:text-xs lg:text-xs bg-gray-100 px-2 py-1 rounded-sm text-gray-500 mr-2">Node.js</div>
            <div className="text-xs md:text-xs lg:text-xs bg-gray-100 px-2 py-1 rounded-sm text-gray-500 mr-2">Postgresql</div>
            <div className="text-xs md:text-xs lg:text-xs bg-gray-100 px-2 py-1 rounded-sm text-gray-500 mr-2">Prisma</div>
            <div className="text-xs md:text-xs lg:text-xs bg-gray-100 px-2 py-1 rounded-sm text-gray-500">Razorpay</div>
          </div>
        </div>

        <div className="max-w-2xl mt-4 text-sm lg:text-base font-normal text-gray-500">Shoppr is a complete e-commerce platform where clients can browse, purchase,
          and personalize online stores tailored to their needs</div>
        <div className="text-neutral-600 mt-5 font-normal max-w-3xl">Shoppr is a dynamic e-commerce platform designed to help businesses launch online stores with ease and
          customization. Clients can explore a variety of pre-built, professional e-commerce sites tailored for a
          seamless shopping experience, with options for personalization to fit unique branding needs. Each Shoppr store ensures an
          intuitive interface and smooth navigation, helping clients create a strong, user-friendly online presence.</div>
      </div>
      <div className="text-neutral-600 mt-4 font-normal max-w-3xl">To enhance functionality, Shoppr integrates Razorpay for secure and reliable payment processing, making transactions straightforward for customers.
        Additional features include JWT for secure authentication and real-time alerts powered by Nodemailer and Sooner. With these tools and developer support for customizations,
        Shoppr offers an efficient, comprehensive solution to online retail.</div>

      <div className="mt-10 mb-20">
        <button type="button" className="bg-customBlue px-3 py-2.5 rounded-3xl flex items-center justify-center hover:shadow-2xl"
          onClick={() => { window.location.href = "https://vanshfolio-com.vercel.app/" }}>
          <span className=" text-white text-sm  font-semibold">Live Preview</span>
          <span className="pl-1"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-4 text-white flex items-center justify-center">
            <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
          </svg>
          </span></button>
      </div>

      <Fotter />
    </div>
  )
}
