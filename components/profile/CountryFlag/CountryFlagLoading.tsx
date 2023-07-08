import { FunctionComponent } from "react";
import ContentLoader from "react-content-loader";

interface CountryFlagLoadingProps {
    
}
 
const CountryFlagLoading: FunctionComponent<CountryFlagLoadingProps> = () => {
    return (
        <ContentLoader
        speed={1}
        className="w-full h-full"
        backgroundColor="transparent"
        foregroundColor="#94a3b8"
        >
            <rect
            width="100%"
            rx="7"
            height="100%"
            /> 
        </ContentLoader>
    );
}
 
export default CountryFlagLoading;