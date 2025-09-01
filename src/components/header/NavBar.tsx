import Image from "next/image"
import NavMenu from "./NavMenu"
import { Button } from "../ui/button"

const NavBar = () => {

    const navItems: NavItem[] = [
        { id: "inicio", title: "Início", href: "#início" },
        { id: "recursos", title: "Recursos", href: "#recursos" },
        { id: "como-funciona", title: "Como Funciona", href: "#como-funciona" },
        { id: "benefícios", title: "Benefícios", href: "#benefícios" },
    ]

    return (
        <div className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 rounded-xl shadow-lg container py-[13.5px] px-[16px] flex flex-row justify-between items-center bg-white">
            <div>
                <Image
                    src="/logo.png"
                    alt="AvailaBem-AI Logo"
                    width={166}
                    height={41}
                    fetchPriority="high"
                    priority
                    className="w-auto h-8 md:h-10 lg:h-12"
                />
            </div>
            <NavMenu items={navItems} />
            <div className="flex flex-row gap-2">
                <Button variant="outline">Entrar</Button>
                <Button variant="default">Comçar</Button>
            </div>
        </div>
    )
}

export default NavBar
