import AppConfig from "@/lib/AppConfig";
import { IGridCard, IGridCards } from "./GridCards.interface";
import Anchor from "@/components/Anchor/Anchor";
import Picture from "@/components/Picture/Picture";
import { getAkamayUrl } from "@/logic/utilities";

const GridCards: React.FC<IGridCards> = ({ cards }) => {
    const { html } = AppConfig;
    return (
        <section className="w-full">
            <div className="max-w-screen-xl mx-4 xl:mx-auto my-4 xl:my-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-4 xl:gap-8">
                {cards?.map((card: IGridCard, i: number) => {
                    const { date, cardTitle, description, ctaLogo } = card;
                    if (cards.length < 1) return null;
                    return (
                        <div key={i} className="p-8 flex flex-col gap-4 justify-between shadow-lg border-t-2 border-black w-full relative min-h-[312px]">
                            {date && <div className="bg-black text-white text-[12px] xl:text-[14px] w-fit h-[30px] flex items-center px-2 ml-auto absolute right-8 top-0">{date}</div>}

                            {(cardTitle || description) && <div className="flex flex-col gap-4">
                                {cardTitle && <div className="mt-8 text-[14px] xl:text-[16px] text-center line-clamp-3">{html(cardTitle)}</div>}

                                {description && <div className="text-[12px] xl:text-[14px] text-justify text-gray-600 leading-5 line-clamp-4">{html(description)}</div>}
                            </div>}


                            {ctaLogo && <div>
                                {ctaLogo[0].picture[0]?.dataUri &&
                                    ctaLogo[0].cta?.[0]?.url && (
                                        <div className="flex flex-row gap-4 items-center justify-center w-full">
                                            {ctaLogo?.map((logoItem: any, i: number) => {
                                                const logoPic = logoItem?.picture
                                                    ? logoItem.picture[0]
                                                    : logoItem?.picture;
                                                const isExternal = !!logoItem?.cta?.isExternal;

                                                return (
                                                    <Anchor
                                                        href={logoItem?.cta?.[i]?.url || "#"}
                                                        isExternal={isExternal}
                                                        key={i}
                                                    >
                                                        <Picture
                                                            className="object-contain w-9 md:w-12"
                                                            src={getAkamayUrl(logoPic?.dataUri)}
                                                            alt={logoPic?.title || ""}
                                                            width={48}
                                                            height={48}
                                                            unoptimized
                                                        />
                                                    </Anchor>
                                                );
                                            })}
                                        </div>
                                    )} </div>}
                        </div>
                    );
                })}
            </div>
        </section>
    );
};

export default GridCards;
