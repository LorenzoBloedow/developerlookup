import ContentLoaderWrapper from "../../ContentLoaderWrapper";

function ProgrammingLanguageScoreLoading() {
    return (
        <div className="flex flex-col gap-2 items-center">
            <div className="h-7" />

            <ul
            className="flex flex-col items-center gap-3"
            >
                <ContentLoaderWrapper
                className="w-24 h-24"
                color="#cfa526"
                >
                    <rect
                    width="100%"
                    height="100%"
                    rx={8}
                    />
                </ContentLoaderWrapper>
                <div
                className="flex justify-center gap-8"
                >
                    <ContentLoaderWrapper
                    className="w-24 h-24"
                    color="#8f8f8f"
                    >
                        <rect
                        width="100%"
                        height="100%"
                        rx={8}
                        />
                    </ContentLoaderWrapper>

                    <ContentLoaderWrapper
                    className="w-24 h-24"
                    color="#b37f55"
                    >
                        <rect
                        width="100%"
                        height="100%"
                        rx={8}
                        />
                    </ContentLoaderWrapper>
                </div>
            </ul>
        </div>
    );
}

export default ProgrammingLanguageScoreLoading;