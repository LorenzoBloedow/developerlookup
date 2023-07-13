import ContentLoaderWrapper from "../../ContentLoaderWrapper";

function LastActiveLoading() {
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

export default LastActiveLoading;