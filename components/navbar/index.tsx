import DesktopNav from './desktopNav/DesktopNav'
import MobileNav from './mobileNav/MobileNav'
const NavBar = () => {
  return (
    <nav>
      <div className='hidden md:block'>
        <DesktopNav />
      </div>
      <MobileNav />
    </nav>

  )
}

export default NavBar

