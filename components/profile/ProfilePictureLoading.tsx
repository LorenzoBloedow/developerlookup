import Spinner from "../Spinner";

const ProfilePictureLoading = () => {
    

    return (
        <div>
            <div
            className="h-[30%] w-[50%] relative left-[25%]"
            aria-label="Blurred version of the image to indicate that the it's loading."
            >
                <Spinner
                color="#99d6ff"
                />
            </div>
        </div>
    );
}
 
export default ProfilePictureLoading;