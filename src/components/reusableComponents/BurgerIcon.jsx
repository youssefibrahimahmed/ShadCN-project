"use client"

import { Button } from "@/components/ui/button"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Menu } from "lucide-react"
import { setActiveSection } from '@/features/uiSlice';
import { useDispatch, useSelector } from "react-redux"

export function BurgerIcon() {
    const dispatch = useDispatch()
    const activeSection = useSelector(
        (state) => state.ui.activeSection
    )
    return (
        <div className="md:hidden">
            <DropdownMenu >
                <DropdownMenuTrigger
                    render=
                    {<Button
                        variant="contained"
                        className=''  >

                        <Menu className=" text-orange-500
                        p-3 !h-12 !w-12" />
                    </Button>} />
                <DropdownMenuContent>
                    <DropdownMenuGroup>
                        <DropdownMenuLabel>Layers </DropdownMenuLabel>
                        <DropdownMenuItem
                            onClick={() => dispatch(setActiveSection('hero'))}
                            href='#hero'
                        ><a href="#hero">Home</a></DropdownMenuItem>
                        <DropdownMenuItem
                            onClick={() => dispatch(setActiveSection('about'))}

                        ><a href="#about">About</a></DropdownMenuItem>
                        <DropdownMenuItem
                            onClick={() => dispatch(setActiveSection('menu'))}
                        ><a href="#menu">Menu</a></DropdownMenuItem>
                        <DropdownMenuItem
                            onClick={() => dispatch(setActiveSection('services'))}
                        ><a href="#services">Services</a></DropdownMenuItem>
                    </DropdownMenuGroup>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem
                        onClick={() => dispatch(setActiveSection('portfolio'))}
                    ><a href="#portfolio">Portfolio</a></DropdownMenuItem>
                    <DropdownMenuItem
                        onClick={() => dispatch(setActiveSection('help'))}
                    ><a href="#help">Help</a></DropdownMenuItem>
                    <DropdownMenuItem
                        onClick={() => dispatch(setActiveSection('contct'))}
                    ><a href="#contact">Contact</a></DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
        </div>
    )
}
