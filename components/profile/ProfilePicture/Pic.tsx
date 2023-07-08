// "use client"
import Image from "next/image";

function Pic({ pictureUrl, profileLink }: { pictureUrl: string, profileLink: string }) {
    return (
        <button
        className="w-full h-full relative rounded-full"
        // onPointerUp={() => location.assign(profileLink)}
        >
            <Image
            className="rounded-full"
            alt="The user's current GitHub profile picture"
            src={pictureUrl}
            priority
            fill
            />
        </button>
    );
}

export default Pic;