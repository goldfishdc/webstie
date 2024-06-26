import Link from "next/link";
import Image from "next/image";

export default function Index() {
	
  return (
    <>
      <div className="py-20 mb-30 max-w-3xl mx-auto">
        <div className="flex w-full justify-center">
      <img width="300" src="https://i.imgur.com/MWy7E6b.png" />
      </div>
        <p className="animateHeader text-4xl font-extrabold text-center text-white">
          Goldfish
        </p>
        <p className="animateHeader text-white text-opacity-50 text-center mt-5">
       blip, bloop. meet goldfish, the next generation for discord bots.
	  </p>
        <div className="animateHeader mt-10 flex flex-wrap items-center justify-center gap-x-4">
  
            <Link href={"https://discord.com/oauth2/authorize?client_id=1253003325906092103"}>
              <a
                className={
                  "flex items-center px-6 justify-center gap-x-2 shadow-lg shadow-amber-600/20 rounded-xl py-4 font-medium bg-gradient-to-bl from-amber-700 to-amber-500 hover:opacity-80 transition duration-200 text-white " 
                }
              >
          Invite
              </a>
            </Link>
  <div className="py-10"></div>
  <Link href={"https://top.gg/"}>
  <a className={" px-6 justify-center gap-x-2 shadow-lg shadow-amber-600/20 rounded-xl py-4 font-medium bg-gradient-to-bl from-amber-700 to-amber-500 hover:opacity-80 transition duration-200 text-white " }>
Vote</a>
  </Link>
        </div>
      </div>



      <div className="grid grid-cols-1 lg:grid-cols-12 gap-y-12 lg:gap-y-0 lg:gap-x-12 py-24">
          <div className="col-span-4">
            <p className="text-white text-4xl font-bold" dangerouslySetInnerHTML={{ __html:"Goldfish" }} />
            <p className="text-white text-md font-medium text-gray-500/75" dangerouslySetInnerHTML={{ __html: "How about creating the best environment in your Discord server?" }}/>
            <a href="https://discord.com/oauth2/authorize?client_id=1253003325906092103" className={"mt-10 flex items-center px-4 justify-center gap-x-2 shadow-lg shadow-amber-600/20 cursor-pointer rounded-xl py-4 font-medium bg-gradient-to-r from-amber-700 to-amber-500 hover:opacity-80 transition duration-200 text-white"}>
              <i className="fab fa-discord mr-2" />Invite Goldfish
            </a>
          </div>

          <div className="col-span-8 grid grid-cols-1 lg:grid-cols-2 gap-6">
           
              <div>
                <div className="text-white">
                  <p className="text-xl font-semibold mt-5"><i className={`fa fa-cogs text-2xl text-amber-500`} /> Optimized</p>
                  <p className="text-gray-500 line-clamp-4">With fast and customizable settings specific to your server, Goldfish allows you to sit back while it does all the automation!</p>
                </div>
              </div>
              <div>
                <div className="text-white">
                  <p className="text-xl font-semibold mt-5"><i className={`fa fa-universal-access text-2xl text-amber-500`} /> Universal</p>
                  <p className="text-gray-500 line-clamp-4">A bot that supports multi-language users. (English, French, and more!)</p>
                </div>
              </div>
              <div>
                <div className="text-white">
                  <p className="text-xl font-semibold mt-5"><i className={`fa fa-shield text-2xl text-amber-500`} /> Secure</p>
                  <p className="text-gray-500 line-clamp-4">A semi open-source bot, with acitve updates to secure your servers!</p>
                </div>
              </div>
              <div>
                <div className="text-white">
                  <p className="text-xl font-semibold mt-5"><i className={`fa fa-ticket text-2xl text-amber-500`} /> Plenty Of Support</p>
                  <p className="text-gray-500 line-clamp-4">We provide the fastest response to anyone who needs help, whether it to be with the general inquiries or the bot itself!</p>
                </div>
              </div>
          </div>
      </div>



      <div className="flex flex-row w-full h-auto lg:h-56 my-14 lg:my-40 bg-gradient-to-br lg:px-30 from-neutral-900/90 flex items-center justify-start to-neutral-900/50 rounded-lg p-1 shadow-md">
              <>
                <div className="lg:mx-4 lg:p-8 py-4 lg:py-16 flex items-center justify-center flex-col text-center w-full lg:w-auto lg:text-left lg:flex-none">
                  <img src="https://i.imgur.com/RLUeDvi.jpeg"  width="256" className="lg:hidden rounded-xl mb-5 shadow-xl shadow-black" />
                  <p className="text-3xl text-white font-semibold">Have fun with it!</p>
                  <p className="text-md text-white font-medium text-gray-500 line-clamp-5">Are you ready to throw the best events with Goldfish, the best and most up-to-date bot?</p>
                </div>
                <img src="https://i.imgur.com/RLUeDvi.jpeg" className="hidden lg:block rounded-xl perspective-right shadow-xl shadow-black" />
              </>
      
        </div>

      </>
  )
}
