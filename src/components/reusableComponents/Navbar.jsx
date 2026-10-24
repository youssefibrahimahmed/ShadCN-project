import { useEffect, useState } from 'react';
import logo from '../../images/logo.png'
import { setActiveSection } from '@/features/uiSlice';
import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
} from "../ui/navigation-menu"
import { SheetSide } from './SheetSide'
import { useDispatch, useSelector } from 'react-redux';
import { BurgerIcon } from './BurgerIcon';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false)
    useEffect(() => {
        const handleScrolled = () => {
            setScrolled(window.scrollY > 200)
        };
        window.addEventListener("scroll", handleScrolled);
        return () => {
            window.removeEventListener("scroll", handleScrolled)
        };
    }, [])
    const NAV_ITEMS = [
        { name: 'HOME', href: 'hero' },
        { name: 'ABOUT', href: 'about' },
        { name: 'MENU', href: 'menu' },
        { name: 'SERVICES', href: 'services' },
        { name: 'PORTFOLIO', href: 'portfolio' },
        { name: 'HELP', href: 'help' },
        { name: 'CONTACT', href: 'contact' },
    ];

    const dispatch = useDispatch();
    const activeSection = useSelector(
        (state) => state.ui.activeSection
    )
    return (
        <nav className={` fixed py-3 top-0 left-0 right-0 z-50  
        transition duration-500  items-center flex px-10
         ${scrolled ?
                "!bg-black shadow-md " : "!bg-transparent "
            }

        `}>
            <div className="text-white container mx-auto flex h-16 items-center justify-between px-0">

                <NavigationMenu>
                    <NavigationMenuList>
                        <NavigationMenuItem>
                            <NavigationMenuLink
                                onClick={() => dispatch(setActiveSection('hero'))}
                                href='#hero'
                                className="logo !bg-transparent transition-transform 
                                duration-500 hover:scale-105 font-bold flex gap-2
                                 items-center text-xl">
                                <img className='w-10 h-10 ' src={logo} alt="Logo" />
                                <p className='font-extrabold bg-gradient-to-r
                                 from-orange-600 via-orange-500 to-amber-400 
                                 bg-clip-text text-transparent text-3xl 
                                 hidden lg:inline
                                 '>
                                    BURGER HOME</p>

                            </NavigationMenuLink>
                        </NavigationMenuItem>
                    </NavigationMenuList>
                </NavigationMenu>

                <NavigationMenu>
                    <NavigationMenuList className="md:flex gap-4 font-semibold hidden  ">
                        {NAV_ITEMS.map((item) => (
                            <NavigationMenuItem key={item.name} className="relative w-full h-full">
                                <NavigationMenuLink
                                    href={`#${item.href}`}
                                    onClick={() => dispatch(setActiveSection(item.href))}
                                    className={`relative
                                    after:absolute after:bottom-0 after:left-0
                                    after:w-full after:h-0.5
                                    after:bg-gradient-to-r
                                    after:from-orange-600
                                    after:via-orange-500
                                    after:to-amber-400
                                    after:origin-bottom-left
                                    after:transition-transform
                                    after:duration-300
                                    !bg-transparent
                                    text-white duration-700
                                    transition
                                    ${activeSection === item.href ?
                                            'after:scale-x-100 bg-gradient-to-r text-transparent bg-clip-text to-amber-400 via-orange-500 from-orange-600 '
                                            :
                                            'hover:bg-gradient-to-r hover:from-orange-600  hover:via-orange-500 hover:to-amber-400 after:scale-x-0 text-white bg-transparent hover:after:scale-x-100 hover:text-transparent  hover:bg-clip-text'}
                                    `}
                                >
                                    {item.name}
                                </NavigationMenuLink>
                            </NavigationMenuItem>
                        ))}

                    </NavigationMenuList>
                </NavigationMenu>
                <NavigationMenu>
                    <NavigationMenuList>
                        <NavigationMenuItem className='flex'>
                            <SheetSide />
                            <BurgerIcon />
                        </NavigationMenuItem>
                    </NavigationMenuList>
                </NavigationMenu>



            </div>
        </nav>
    )
}

export default Navbar