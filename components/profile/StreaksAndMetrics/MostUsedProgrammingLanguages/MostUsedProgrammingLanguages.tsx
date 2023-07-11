import { FunctionComponent, Suspense } from 'react';
import Podium from "../../../svg/Podium";
import ProgrammingLanguageScore from "./ProgrammingLanguageScore";
import ProgrammingLanguageScoreLoading from "./ProgrammingLanguageScoreLoading";
import Subheading from "../../Subheading";
    
interface MostUsedProgrammingLanguagesProps {
    username: string;
}
 
const MostUsedProgrammingLanguages: FunctionComponent<MostUsedProgrammingLanguagesProps> = ({ username }) => {
    return (
        <div className="flex flex-col gap-2 items-center">
            <Subheading>Most used programming languages</Subheading>
            <Podium />
            <Suspense
            fallback={<ProgrammingLanguageScoreLoading />}
            >
                {/* @ts-expect-error Server Component */}
                <ProgrammingLanguageScore
                username={username}
                />
            </Suspense>
        </div>
    );
}
 
export default MostUsedProgrammingLanguages;