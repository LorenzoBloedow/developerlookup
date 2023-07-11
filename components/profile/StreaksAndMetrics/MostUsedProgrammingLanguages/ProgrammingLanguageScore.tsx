import getDateSensitiveData from "../../../../util/getDateSensitiveData";
import BypassErrorSerialization from "../../../BypassErrorSerialization";

function getTopProgrammingLanguages(programmingLanguageScore: { name: string, score: number, color: string }[] ) {
    const programmingLanguages = [];
    const colors = ["#cfa526","#8f8f8f", "#b37f55"];

    for (let i = 0; i < 3; i++) {
        const lang = programmingLanguageScore[i];
        
        programmingLanguages.push(
            <li
            className="text-center rounded-lg border-[1px] p-3 w-24 h-24"
            style={{
                borderColor: colors[i]
            }}
            key={lang.name}
            >
                <p className="font-bold text-center flex flex-col items-center text-xs">
                    <span className="font-bold text-xl" style={{ color: colors[i] }}>#{i + 1}</span>

                    <div className="font-normal filter brightness-75 saturate-50 w-20">
                        <span className="font-bold" style={{ color: lang.color }}>
                            {" " + lang.name}
                        </span>
                        
                        <br />

                        <span>{lang.score.toFixed(2)}%</span>
                    </div>
                </p>
            </li>
        );
    }
    return (
        <ul
        className="flex flex-col items-center gap-3"
        >
            {programmingLanguages.shift()}
            <div
            className="flex justify-center gap-8"
            >
                {programmingLanguages}
            </div>
        </ul>
    );
}

async function ProgrammingLanguageScore({ username }: { username: string }) {
    const result = await getDateSensitiveData(username);
    // @ts-ignore
    const progLang = result.data?.thirtyDays?.programmingLanguageScore;
    
    return (
        <>
            <BypassErrorSerialization
            result={result}
            />
            
            {
                (result.success) &&
                    (result.data.thirtyDays.programmingLanguageScore.languages.length >= 3) ?
                    <>
                        <p
                        className="text-[0.6rem] w-48 h-7"
                        style={{
                            visibility: (progLang.dataUsed < 100) ? "visible" : "hidden"
                        }}
                        >
                            Results based on limited data{" "}
                            (last {result.data.thirtyDays.COMMIT_DETAILS_LIMIT} commits, or{" "}
                            {progLang.dataUsed.toFixed(progLang.dataUsed < 1 ? 2 : 0)}%)
                        </p>
            
                        {getTopProgrammingLanguages(progLang.languages)}
                    </>
                    :
                    <p
                    className="text-xs text-slate-500"
                    >
                        We couldn't find any data about your three most used programming languages in the past 30 days
                    </p>
            }
        </>
    );
}

export default ProgrammingLanguageScore;