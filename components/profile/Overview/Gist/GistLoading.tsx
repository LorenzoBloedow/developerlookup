import ContentLoaderWrapper from "../../ContentLoaderWrapper";

function GistLoading() {
    return (
        <ContentLoaderWrapper>
            <rect
            width="100%"
            height="100%"
            rx={8}
            />
        </ContentLoaderWrapper>
    );
}

export default GistLoading;