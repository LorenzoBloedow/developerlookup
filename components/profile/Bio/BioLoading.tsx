import ContentLoaderWrapper from "../ContentLoaderWrapper";
 
const BioLoading = () => {
    return (
        <ContentLoaderWrapper>
            <rect y="0%" width="100%" rx="5" height="23%" />
            <rect y="40%" width="100%" rx="5" height="23%" />
            <rect y="80%" width="100%" rx="5" height="23%" />
        </ContentLoaderWrapper>
    );
}
 
export default BioLoading;