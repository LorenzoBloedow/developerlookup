import ContentLoader from "react-content-loader";

function TwitterLoading() {
    return (
        <ContentLoader
        className="h-48 py-8"
        >
            <rect
            width="100%"
            height="100%"
            rx={8}
            />
        </ContentLoader>
    );
}

export default TwitterLoading;