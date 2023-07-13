import ContentLoaderWrapper from "../../ContentLoaderWrapper";

function MostActivityLoading() {
    return (
        <ContentLoaderWrapper
        viewBox="0 0 100 200"
        preserveAspectRatio="none"
        className="w-full h-full"
        >
            <rect
            width="100%"
            height="100%"
            rx={8}
            />
        </ContentLoaderWrapper>
    );
}

export default MostActivityLoading;