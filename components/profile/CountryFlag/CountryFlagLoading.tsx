import ContentLoaderWrapper from "../ContentLoaderWrapper";
 
const CountryFlagLoading = () => {
    return (
        <ContentLoaderWrapper
        className="w-full h-full"
        >
            <rect
            className="md:hidden"
            width="100%"
            height="100%"
            rx={2}
            />
            <rect
            className="md:block"
            width="100%"
            height="100%"
            rx={5}
            />
        </ContentLoaderWrapper>
    );
}
 
export default CountryFlagLoading;