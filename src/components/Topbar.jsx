import Link from "next/link"


const Topbar = () => {
  return (
    <section className="bg-white">
        <div className="pl-11 flex justify-between items-center">
            <ul className="flex justify-start items-center gap-10 leading-[160%] text-base">
               <li className="flex justify-center items-center gap-1.5">
                    <div className="w-full h-full overflow-x-hidden object-cover">
                          <img src="message.png" alt="message_icon" />
                    </div>
                    info@example.com
               </li>
               <li className="flex justify-items-start items-start gap-1">
                    <div>
                        <img src="location.png" alt="location_icon" />
                    </div>
                    6391 Elgin St. Celina, 10299
               </li>
            </ul>
            <div className="flex justify-center items-center gap-[30px]">
                <button className="bg-[#0D7DFB] py-[20px] px-[30px] text-white leading-[130%] font-semibold ">Get a quote</button>
                <div className="flex justify-center items-center gap-6 pr-5">
                    <Link href={`#`}>
                        <img src="fbIcon.svg" alt="FaceBook-icon" />
                    </Link>
                    <Link href={`#`}>
                        <img src="InstaIcon.svg" alt="Instagram-icon" />
                    </Link>
                    <Link href={`#`}>
                        <img src="TweIcon.svg" alt="Twitter-icon" />
                    </Link>
                    <Link href={`#`}>
                        <img src="InIcon.svg" alt="Linkin-icon" />
                    </Link>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Topbar