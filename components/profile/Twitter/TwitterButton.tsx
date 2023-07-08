"use client";
import { FunctionComponent } from 'react';
import { TbBrandTwitter } from "react-icons/tb";    

interface TwitterButtonProps {
    handle: string;
}
 
const TwitterButton: FunctionComponent<TwitterButtonProps> = ({ handle }) => {
    return (
        <TbBrandTwitter
        role="button"
        className="w-12 h-12 text-blue-400"
        onPointerUp={() => location.assign("https://twitter.com/" + handle)}
        />
    );
}
 
export default TwitterButton;