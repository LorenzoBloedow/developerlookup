import getBasicUserData from "../../../util/getBasicUserData";
import BypassErrorSerialization from "../../BypassErrorSerialization";
import Pic from "./Pic";
 
interface ProfilePictureProps {
    username: string
}

const ProfilePicture = async ({ username }: ProfilePictureProps) => {
    const result = await getBasicUserData(username);
    
    return (
        <>
            <BypassErrorSerialization
            result={result}
            />
            
            {
                (result.success) &&
                <Pic
                pictureUrl={result.data.profilePic}
                profileLink={"https://github.com/" + username}
                />
            }
        </>
    );
}
 
export default ProfilePicture;