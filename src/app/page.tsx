import Image from "next/image";
import Link from "next/link";
import Logo from "@/assets/images/logo.jpg";
import HeroPattern from "@/assets/images/hero-pattern.jpeg";
import {
    Instagram,
    Send,
    Image as Gallery,
    PhoneOutgoing,
    MapPin,
} from "lucide-react";

function Home() {
    return (
        <div className="relative container">
            <Image
                className="absolute top-0 left-0 -z-10 w-full h-full"
                src={HeroPattern}
                alt=""
                width={430}
                height={932}
                priority
            />
            <div className="max-w-[475px] w-full mx-auto pt-4 pb-12">
                <div className="w-[150px] mx-auto rounded-full overflow-hidden mb-4">
                    <Image
                        src={Logo}
                        alt=""
                        width={640}
                        height={640}
                        priority
                    />
                </div>

                <div className="text-center bg-white/90 py-2 mb-8">
                    <h1 className="text-2xl font-serif font-bold mb-2">B3B</h1>
                    <p className="text-lg">
                        КАЧЕСТВО, СТИЛЬ, УЮТ - ВАШ ДОМ ЗАСЛУЖИВАЕТ ЛУЧШЕГО!
                    </p>
                </div>

                <div className="flex flex-col gap-y-4 px-4">
                    <Link
                        className="flex items-center justify-center bg-primary text-primary-foreground pr-[56px] py-1 pl-2 rounded-xl text-center min-h-[60px]"
                        href="https://instagram.com/b3b_kafel_assortiment"
                        target="_blank"
                    >
                        <Instagram className="w-[42px] min-w-[42px] flex flex-grow-0 items-center" />
                        <div className="flex-grow-[1] p-[6px] flex flex-col justify-center">
                            <div className="uppercase font-bold leading-[1.2]">
                                Instagram
                            </div>
                        </div>
                    </Link>

                    <Link
                        className="flex items-center justify-center bg-primary text-primary-foreground pr-[56px] py-1 pl-2 rounded-xl text-center min-h-[60px]"
                        href="https://t.me/mirkafeley"
                        target="_blank"
                    >
                        <Send className="w-[42px] min-w-[42px] flex flex-grow-0 items-center" />
                        <div className="flex-grow-[1] p-[6px] flex flex-col justify-center">
                            <div className="uppercase font-bold leading-[1.2]">
                                Telegram
                            </div>
                        </div>
                    </Link>

                    <Link
                        className="flex items-center justify-center bg-primary text-primary-foreground pr-[56px] py-1 pl-2 rounded-xl text-center min-h-[60px]"
                        href="https://b3b-catalog.vercel.app/"
                        target="_blank"
                    >
                        <Gallery className="w-[42px] min-w-[42px] flex flex-grow-0 items-center" />
                        <div className="flex-grow-[1] p-[6px] flex flex-col justify-center">
                            <div className="uppercase font-bold leading-[1.2]">
                                Каталог
                            </div>
                        </div>
                    </Link>

                    <div className="my-1" />

                    <Link
                        className="flex items-center justify-center bg-primary text-primary-foreground pr-[56px] py-1 pl-2 rounded-xl text-center min-h-[60px]"
                        href="tel:998770992222"
                    >
                        <PhoneOutgoing className="w-[42px] min-w-[42px] flex flex-grow-0 items-center" />
                        <div className="flex-grow-[1] p-[6px] flex flex-col justify-center">
                            <div className="uppercase font-bold leading-[1.2]">
                                +998 (77) 099-22-22
                            </div>
                            <div className="text-sm leading-[1.2] opacity-70">
                                Баходир
                            </div>
                        </div>
                    </Link>

                    <Link
                        className="flex items-center justify-center bg-primary text-primary-foreground pr-[56px] py-1 pl-2 rounded-xl text-center min-h-[60px]"
                        href="tel:998339189999"
                    >
                        <PhoneOutgoing className="w-[42px] min-w-[42px] flex flex-grow-0 items-center" />
                        <div className="flex-grow-[1] p-[6px] flex flex-col justify-center">
                            <div className="uppercase font-bold leading-[1.2]">
                                +998 (33) 918-99-99
                            </div>
                            <div className="text-sm leading-[1.2] opacity-70">
                                Усмон
                            </div>
                        </div>
                    </Link>

                    <Link
                        className="flex items-center justify-center bg-primary text-primary-foreground pr-[56px] py-1 pl-2 rounded-xl text-center min-h-[60px]"
                        href="https://yandex.com/maps/10335/tashkent/?ll=69.334417%2C41.237484&mode=whatshere&whatshere%5Bpoint%5D=69.334421%2C41.237484&whatshere%5Bzoom%5D=18.559345&z=18"
                        target="_blank"
                    >
                        <MapPin className="w-[42px] min-w-[42px] flex flex-grow-0 items-center" />
                        <div className="flex-grow-[1] p-[6px] flex flex-col justify-center">
                            <div className="uppercase font-bold leading-[1.2]">
                                Место расположения
                            </div>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Home;
