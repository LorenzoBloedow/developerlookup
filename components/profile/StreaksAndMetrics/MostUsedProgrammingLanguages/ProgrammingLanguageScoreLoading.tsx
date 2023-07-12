import ContentLoaderWrapper from "../../ContentLoaderWrapper";

function ProgrammingLanguageScoreLoading() {
    return (
        <div className="flex flex-col gap-2 items-center">
            <div className="h-7 md:h-10" />

            <ul
            className="flex flex-col items-center gap-3 md:gap-6"
            >
                <ContentLoaderWrapper
                className="w-24 h-24 md:w-32 md:h-32"
                color="#cfa526"
                >
                    <rect
                    width="100%"
                    height="100%"
                    rx={8}
                    />
                </ContentLoaderWrapper>
                <div
                className="flex justify-center gap-8 md:gap-10"
                >
                    <ContentLoaderWrapper
                    className="w-24 h-24 md:w-32 md:h-32"
                    color="#8f8f8f"
                    >
                        <rect
                        width="100%"
                        height="100%"
                        rx={8}
                        />
                    </ContentLoaderWrapper>

                    <ContentLoaderWrapper
                    className="w-24 h-24 md:w-32 md:h-32"
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