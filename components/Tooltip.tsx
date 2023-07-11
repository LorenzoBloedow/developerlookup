"use client";
import { CSSProperties, FunctionComponent, ReactNode } from 'react';
    
interface TooltipProps {
    tip: string;
    children: ReactNode;
}
 
const Tooltip: FunctionComponent<TooltipProps> = ({ children, tip }) => {
    return (
        <div
        className="flex relative items-center"
        >
            <span
            className="peer cursor-pointer"
            tabIndex={0}
            >
                {children}
            </span>

            <div
            className="flex items-center absolute opacity-0
            peer-focus:opacity-100 peer-hover:opacity-100
            transition-opacity duration-100 z-[60]
            drop-shadow-lg pointer-events-none
            [margin-left:calc(100%+0.2rem)]
            w-24"
            >
                <svg
                className="w-[16px] h-[16px]"
                >
                    <polygon className="fill-slate-200" points="0,8 16,16 16,0" />
                </svg>

                <p
                className="rounded-lg bg-slate-200 p-2
                text-slate-700 min-h-[16px] text-[0.6rem]
                w-full"
                >
                    {tip}
                </p>
            </div>
        </div>
    );
}
 
export default Tooltip;