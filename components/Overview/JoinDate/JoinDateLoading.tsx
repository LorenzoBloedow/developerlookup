import ContentLoader from "react-content-loader";

function JoinDateLoading() {
    return (
        <ContentLoader
        className="w-full h-full"
        >
            <rect
            width="100%"
            height="100%"
            rx={8}
            />
        </ContentLoader>
    );
}

export default JoinDateLoading;