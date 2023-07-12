"use client";
import { useRef, useEffect } from "react";
    
interface NameClientProps {
    name: string;
}
 
const NameClient = ({ name }: NameClientProps) => {
    const nameRef = useRef<HTMLHeadingElement>(null);
    const fadeRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        // @ts-ignore
        const isOverflow = (nameRef.current?.scrollWidth > nameRef.current?.clientWidth);

        if (isOverflow) {
            // @ts-ignore
            fadeRef.current.style.visibility = "visible";
        } else {
            // @ts-ignore
            fadeRef.current.style.visibility = "hidden";
        }
    }, [name]);

    return (
        <h1
        ref={nameRef}
        className="text-2xl font-bold w-full h-full
        whitespace-nowrap overflow-clip relative
        md:text-4xl"
        >
            <div
            ref={fadeRef}
            className="absolute right-0 top-0 w-16 h-full
            bg-gradient-to-l from-slate-200 to-transparent"
            />
            
            {name}
        </h1>
    );
}
 
export default NameClient;