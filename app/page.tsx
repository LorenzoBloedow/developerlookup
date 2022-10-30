import { FunctionComponent } from "react";
import ProfileSearchInput from "../components/ProfileSearchInput";

interface PageProps {
    
}
 
const Page: FunctionComponent<PageProps> = () => {
    return (
        <div>
            
            <div
            className="flex items-center justify-center h-[100vh]"
            >
                <ProfileSearchInput />
            </div>

        </div>
    );
}
 
export default Page;