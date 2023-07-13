import ContentLoaderWrapper from "../../ContentLoaderWrapper";

function LongestStreakLoading() {
    return (
        <ContentLoaderWrapper
        viewBox="0 0 100 200"
        preserveAspectRatio="none"
        className="w-full h-full flex-grow"
        >
            <rect
            width="100%"
            height="100%"
            rx={8}
            />
        </ContentLoaderWrapper>
    );
}

export default LongestStreakLoading;