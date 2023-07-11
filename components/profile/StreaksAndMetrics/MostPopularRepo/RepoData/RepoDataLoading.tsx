import ContentLoaderWrapper from "../../../ContentLoaderWrapper";

function RepoMetricLine() {
    return (
        <ContentLoaderWrapper
        className="w-full h-3"
        >
            <rect
            className="w-full h-full"
            rx="2"
            />
        </ContentLoaderWrapper>
    );
}

function RepoDataLoading() {
    return (
        <>
            <ul
            className="flex flex-col items-center gap-2 w-full"
            >
                <ContentLoaderWrapper
                className="mx-auto w-36 h-2"
                >
                    <rect
                    className="w-full h-full"
                    rx="2"
                    />
                </ContentLoaderWrapper>

                <RepoMetricLine />
                <RepoMetricLine />
                <RepoMetricLine />
            </ul>
        </>
    );
}

export default RepoDataLoading;