import { FunctionComponent, ReactNode } from 'react';
import ContentLoader from "react-content-loader";
    
interface ContentLoaderWrapperProps {
    children: ReactNode;
    className?: string;
    speed?: number;
    viewBox?: string;
    preserveAspectRatio?: string;
    color?: string
}
 
const ContentLoaderWrapper: FunctionComponent<ContentLoaderWrapperProps> = ({
    children, className = "", speed = 1,
    viewBox, preserveAspectRatio, color
}) => {
    
    return (
        <ContentLoader
        speed={speed}
        className={className || "w-full h-full max-w-full"}
        backgroundColor="transparent"
        foregroundColor={color || "#94a3b8"}
        viewBox={viewBox}
        preserveAspectRatio={preserveAspectRatio}
        >
            {children}
        </ContentLoader>
    );
}

export default ContentLoaderWrapper;