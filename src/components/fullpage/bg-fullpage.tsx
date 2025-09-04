import Image from "next/image";

const BgFullpage = () => {
    return (
        <div className="fixed top-0 left-0 w-full min-h-screen z-0 overflow-hidden">
            {/*  gradient blur component */}
            <div className="absolute -bottom-50 -left-50 w-[670px] h-[670px] bg-[#01ADEC] rounded-full blur-[80px] opacity-20"></div>

            <Image
                src="/bg/lines.svg"
                alt="Logo"
                width={0}
                height={0}
                className="absolute w-full h-full -bottom-1 object-cover"
                priority
                fetchPriority="high"
            />

            {/*  gradient blur component */}
            <div className="absolute -top-50 -right-50 w-[670px] h-[670px] bg-[#01ADEC] rounded-full blur-[80px] opacity-20"></div>
        </div>
    );
};

export default BgFullpage;
