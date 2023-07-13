import ContentLoader from "react-content-loader";

function GistLoading() {
    return (
        <ContentLoader>
            <rect
            width="100%"
            height="100%"
            rx={8}
            />
        </ContentLoader>
    );
}

export default GistLoading;