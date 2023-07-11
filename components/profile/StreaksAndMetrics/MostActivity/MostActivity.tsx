import getDateSensitiveData from "../../../../util/getDateSensitiveData";
import BypassErrorSerialization from "../../../BypassErrorSerialization";
import Subheading from "../../Subheading";
import ActivityList from "./ActivityList";

interface MostActivityProps {
    username: string;
}

async function MostActivity({ username }: MostActivityProps) {
    const result = await getDateSensitiveData(username);
    
    return (
        <>
            <BypassErrorSerialization
            result={result}
            />
            
            {
                (result.success) &&
                <div
                className="flex flex-col gap-3"
                >
                    <Subheading>
                        Most Active 24 Hours
                    </Subheading>
                    
                    <ActivityList
                    activity={result.data.thirtyDays.mostActiveDay}
                    />
                </div>
            }
        </>
    );
}

export default MostActivity;