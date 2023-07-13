import ContentLoader from "react-content-loader";

function UserTypeLoading() {
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

export default UserTypeLoading;