"use client"
import { useState } from "react"
import NavItem from "./NavItem"

type NavMenuProps = {
    items: NavItem[]
    className?: string
}

const NavMenu = ({ items, className }: NavMenuProps) => {

    const [activeItem, setActiveItem] = useState<string>("inicio")

    const handleItemClick = (item: NavItem) => {
        setActiveItem(item.id)
    }

    return (
        <div className={`hidden md:flex flex-row justify-center items-center gap-3 w-auto`}>
            {items.map((item, index) => (
                <NavItem key={index} item={item} activeItem={activeItem} onChange={handleItemClick}/>
            ))}
        </div>
    )
}

export default NavMenu
