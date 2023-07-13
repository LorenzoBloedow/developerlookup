import { Suspense } from "react";
import Bio from "./Bio/Bio";
import BioLoading from "./Bio/BioLoading";
import CountryFlag from "./CountryFlag/CountryFlag";
import CountryFlagLoading from "./CountryFlag/CountryFlagLoading";
import Name from "./Name/Name";
import NameLoading from "./Name/NameLoading";
import ProfilePicture from "./ProfilePicture/ProfilePicture";
import ProfilePictureLoading from "./ProfilePicture/ProfilePictureLoading";
import Overview from "./Overview/Overview";
import Section from "./Section";
import RecentActivity from "./RecentActivity/RecentActivity";
import StreaksAndMetrics from "./StreaksAndMetrics/StreaksAndMetrics";
import Achievements from "./Achievements/Achievements";

interface ProfileProps {
    username: string
}

const Profile = ({ username }: ProfileProps) => {
    // An invisible div is needed because if we split the drawer button and the section into two components
    // we'll have to move state up and therefore make all children components client-rendered.
    // The current setup creates a hole by passing the component as a prop, allowing for
    // most of the components to be server-rendered
    const drawerButtonSize = "w-12 h-12 md:w-14 md:h-14";

    return (
        // The first div needs to exist so the scrollbar doesn't overflow the profile and stays round
        // The second div needs to exist with padding so the absolutely positioned elements
        // inside the child div don't ignore the padding of the parent div
        <div
        className="overflow-hidden rounded-xl"
        >
            <div
            className="bg-slate-200 shadow-xl shadow-black 
            w-72 h-[35rem] bg-neu-mid p-6 overflow-x-hidden overflow-y-auto
            sm:w-80 sm:h-[37rem] md:w-96 md:h-[40rem] lg:w-[50rem] lg:h-[30rem]
            xl:w-[60rem] xl:h-[40rem] md:p-10"
            style={{
                boxShadow: "9px 9px 13px var(--neu-dark), -9px -9px 30px var(--neu-light)"
            }}
            >
                <div
                className="relative flex flex-col items-center
                text-center gap-5 w-full lg:flex-row"
                >
                    <div
                    className="flex flex-col items-center text-center
                    gap-5 w-full lg:sticky lg:top-0 lg:left-0
                    lg:self-start lg:h-[30rem]"
                    >
                        <div
                        className="w-full"
                        >
                            <div
                            className="flex justify-center items-center w-full"
                            >
                                <div
                                className="w-10 h-5 md:w-14 md:h-7 mr-auto rounded-full overflow-hidden"
                                >
                                    <Suspense fallback={<CountryFlagLoading />}>
                                        {/* @ts-expect-error Server Component */}
                                        <CountryFlag username={username} />
                                    </Suspense>
                                </div>
                                <p
                                className="text-[0.5rem] md:text-[0.55rem] text-slate-500
                                w-32 md:w-48 mr-auto -ml-1 md:-ml-2"
                                >
                                    All Data Shown Is Based On The Last 30 Days Of Public Activity
                                </p>
                                <div
                                className={drawerButtonSize}
                                />
                            </div>
                            <Suspense>
                                {/* @ts-expect-error Server Component */}
                                <Achievements
                                username={username}
                                />
                            </Suspense>
                        </div>
                        <div
                        className="w-40 h-40 md:w-56 md:h-56 flex-shrink-0"
                        >
                            <Suspense fallback={<ProfilePictureLoading />}>
                                {/* @ts-expect-error Server Component */}
                                <ProfilePicture username={username} />
                            </Suspense>
                        </div>
                        <div
                        className="flex flex-col items-center gap-1"
                        >
                            <div
                            className="w-52 h-7 md:w-72 md:h-10"
                            >
                                <Suspense fallback={<NameLoading />}>
                                    {/* @ts-expect-error Server Component */}
                                    <Name username={username} />
                                </Suspense>
                            </div>
                            <div
                            className="w-48 h-10 md:w-64 md:h-14"
                            >
                                <Suspense fallback={<BioLoading />}>
                                    {/* @ts-expect-error Server Component */}
                                    <Bio username={username} />
                                </Suspense>
                            </div>
                        </div>
                        <hr className="border-[1px] border-slate-300 w-full lg:hidden" />
                    </div>
                    <Section
                    drawerButtonSize={drawerButtonSize}
                    overview={<Overview username={username} />}
                    recentActivity={<RecentActivity username={username} />}
                    streaksAndMetrics={<StreaksAndMetrics username={username} />}
                    />
                    <div
                    className={"hidden lg:block mb-auto flex-shrink-0 " + drawerButtonSize}
                    />
                </div>
            </div>
        </div>
    );
};
 
export default Profile;