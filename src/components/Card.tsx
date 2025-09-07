import { ShareIcon } from "../Icons/ShareIcon";
import {DeleteIcons} from "../Icons/DeleteIcons"
import type { ReactElement } from "react";

interface CardProps{
    title: string, 
    link: string,
    type: "YouTube" | "Twitter"
    icon: ReactElement
}

export function Card ({title, link, type, icon}: CardProps){
    return <div>
        <div className="p-4 bg-[#f9fbfc] rounded-md border-grey-200 max-w-96 border min-h-42 min-w-72">
            <div className="flex justify-between">
                <div className="flex items-center text-md">
                    <div className="text-gray-500 pr-2">
                        {icon}
                    </div>
                    {title}
                </div>
                <div className="flex items-center">
                    <div className="pr-2 text-grey-500">
                        <a href={link} target="_blank">
                            <ShareIcon/>
                        </a>
                    </div>
                    <div className="text-gray-500">
                        <DeleteIcons/>
                    </div>
                </div>
            </div>
            <div className="pt-4">
                {type=== "YouTube" && <iframe className="w-full" src={link.replace("watch", "embed").replace("?v=", "/")} 
                title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>}
                {type === "Twitter" && <blockquote className="twitter-tweet">
                <a href={link.replace("x.com", "twitter.com")}></a>
                </blockquote>}             
            </div>
        </div>
    </div>
}