'use client'
import React, { useState } from 'react'
import DesktopNav from './desktopNav/DesktopNav'
import MobileNav from './mobileNav/MobileNav'

const NavBar = () => {
  return (
    <nav className='w-full absolute'>
      <DesktopNav />
      <MobileNav />
    </nav>

  )
}

export default NavBar

{/*
        
        <NavbarContent className="w-1/2 hidden sm:flex gap-4" justify="center">
          <NavbarItem>
            <Link color="foreground" href="#">
              Features
            </Link>
          </NavbarItem>
          <NavbarItem isActive>
            <Link href="#" aria-current="page">
              Customers
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link color="foreground" href="#">
              Integrations
            </Link>
          </NavbarItem>
        </NavbarContent>

*/}

{/*
import React from "react";
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button} from "@nextui-org/react";
import {AcmeLogo} from "./AcmeLogo.jsx";

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const menuItems = [
    "Profile",
    "Dashboard",
    "Activity",
    "Analytics",
    "System",
    "Deployments",
    "My Settings",
    "Team Settings",
    "Help & Feedback",
    "Log Out",
  ];

  return (
    <Navbar onMenuOpenChange={setIsMenuOpen}>
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NavbarBrand>
          <AcmeLogo />
          <p className="font-bold text-inherit">ACME</p>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
          <Link color="foreground" href="#">
            Features
          </Link>
        </NavbarItem>
        <NavbarItem isActive>
          <Link href="#" aria-current="page">
            Customers
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#">
            Integrations
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem className="hidden lg:flex">
          <Link href="#">Login</Link>
        </NavbarItem>
        <NavbarItem>
          <Button as={Link} color="primary" href="#" variant="flat">
            Sign Up
          </Button>
        </NavbarItem>
      </NavbarContent>
      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              color={
                index === 2 ? "primary" : index === menuItems.length - 1 ? "danger" : "foreground"
              }
              className="w-full"
              href="#"
              size="lg"
            >
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}








  );
}
*/}

{/*
const NavBar = () => {
  const [stick, setStick] = useState<boolean>(false)
  const [activeItem, setActiveItem] = useState<string>('Home')
  
  const activeNav:(arg:string)=>void=(arg)=>{
    setActiveItem(arg)
    console.log(activeItem);
  }
  const changeNavMode: () => void = () => {
    if (window.scrollY > 105) {
      setStick(true)
    }
    else {
      setStick(false)
    }
  }
  window.addEventListener('scroll', changeNavMode)

  const navItem: string[] = ['Home','Features', 'customers', 'Integrations']

  return (
    <Navbar className={stick ? styles.fullNav : styles.centerNav}>
      <div>
        <NavbarBrand className='w-1/2'>
          <Image src={'/images/logo.png'} alt='logo' width={150} height={150} />
        </NavbarBrand>
      </div>
      <div>
        <NavbarContent className="w-1/2 hidden sm:flex" justify="center">
          {navItem.map(item =>
            <NavbarItem key={item} className='border' onClick={()=>activeNav(item)}>
              <Link className={activeItem===item?"text-blue-500":"text-gray-800"} href={`/${item}`}>
                {item}
              </Link>
            </NavbarItem>
          )}
        </NavbarContent>
      </div>
    </Navbar>
  )
}

export default NavBar

*/}