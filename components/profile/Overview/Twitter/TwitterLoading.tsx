import ContentLoaderWrapper from "../../ContentLoaderWrapper";

function TwitterLoading() {
    return (
        <ContentLoaderWrapper
        className="h-48 py-8"
        >
            <rect
            width="100%"
            height="100%"
            rx={8}
            />
        </ContentLoaderWrapper>
    );
}

export default TwitterLoading;