import { FunctionComponent, ReactNode } from 'react';
import ContentLoader from "react-content-loader";
    
interface ContentLoaderWrapperProps {
    children: ReactNode;
    className?: string;
    speed?: number;
    viewBox?: string;
    color?: string
}
 
const ContentLoaderWrapper: FunctionComponent<ContentLoaderWrapperProps> = ({ children, className = "", speed = 1, viewBox, color }) => {
    
    return (
        <ContentLoader
        speed={speed}
        className={className || "w-full h-full"}
        backgroundColor="transparent"
        foregroundColor={color || "#94a3b8"}
        viewBox={viewBox}
        >
            {children}
        </ContentLoader>
    );
}

export default ContentLoaderWrapper;