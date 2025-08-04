import style from '@/components/Topbar.module.css'
import Link from 'next/link'
const Navbar = () => {
  return (
    <nav className={`py-4 px-11 bg-(--color-navbar) relative ${style.topbar}`}>
      <div className='flex justify-center items-center'>
        <div className='z-10 flex justify-start items-center'>
          <Link href="#">
          <img src="logo.png" alt="Logo" />
          </Link>
        </div>
          <ul className='pl-[155px] flex items-center gap-[25px] flex-1'>
            <li><Link href={"/"}>Home</Link></li>
            <li><Link href={"/about Us"}>About Us</Link></li>
            <li><Link href={"/services"}>Services</Link></li>
            <li><Link href={"/projects"}>Projects</Link></li>
            <li><Link href={"/blog"}>Blog</Link></li>
            <li><Link href={"/page"}>Page</Link></li>
            <li><Link href={"/contact"}>Contact</Link></li>
          </ul>
          <div>message</div>
      </div>

    </nav>
  )
}

export default Navbar