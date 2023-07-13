import ContentLoaderWrapper from "../../ContentLoaderWrapper";

function LastReposWorkedOnLoading() {
    return (
        <ContentLoaderWrapper
        className="h-72 max-w-full"
        >
            <rect
            width="100%"
            height="100%"
            rx={8}
            />
        </ContentLoaderWrapper>
    );
}

export default LastReposWorkedOnLoading;