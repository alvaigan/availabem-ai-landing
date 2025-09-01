"use client";
import Link from "next/link";
import { useEffect, useState } from "react";

type NavItemProps = {
    item: NavItem;
    activeItem: string;
    className?: string;
    onChange?: (item: NavItem) => void;
};

const NavItem = ({item, activeItem, className, onChange }: NavItemProps) => {

    return (
        <div className="cursor-pointer">
            <Link
                href={item.href}
                className={`text-base ${item.id === activeItem ? "font-bold text-[#8B8B8B]" : "font-normal"} hover:text-[#8B8B8B] mx-2`}
                onClick={() => onChange ? onChange(item) : null}
            >
                {item.title}
            </Link>
        </div>
    );
};

export default NavItem;
