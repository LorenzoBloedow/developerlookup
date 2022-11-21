"use client";
import { FunctionComponent, useEffect, useRef, useState } from "react";
import { CgMenu } from "react-icons/cg";
import handleEnterKeyPress from "../../util/handleEnterKeyPress";

export type DrawerOptions = "Overview" | "RecentActivity" | "StreaksAndMetrics" | "Milestones" | "SurroundingActivity";

interface DrawerProps {
    setSelectedValue: (value: DrawerOptions) => void;
}
 
const DrawerOption = ({ changeSelected, children }: { changeSelected: () => void, children: string }) => {
    return (
        <li
        role="button"
        className="text-center py-2 text-5xl bg-slate-400 tracking-wide"
        onPointerUp={changeSelected}
        >
            {children}
        </li>
    )
}

const Drawer: FunctionComponent<DrawerProps> = ({ setSelectedValue }) => {
    const [toggle, setToggle] = useState(false);
    const menuContentRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (toggle) {
            menuContentRef.current!.style.visibility = "visible";
        } else {
            menuContentRef.current!.style.visibility = "hidden";
        }
    }, [toggle]);

    function handleSelected(option: DrawerOptions) {
        setSelectedValue(option);
        setToggle(false);
    }

    return (
        <menu
        className="absolute w-3/4 top-0 right-0 flex flex-col z-50"
        >
            <button
            tabIndex={0}
            aria-owns="profile-drawer"
            aria-expanded={toggle}
            className="ml-auto right-0 border-2 border-black p-4 bg-slate-400 shadow-lg shadow-black"
            onPointerUp={() => setToggle(prev => !prev)}
            >
                <CgMenu size={75} />
            </button>

            <div className="invisible" ref={menuContentRef}>
                <header
                id="drawer-header"
                className="text-center text-6xl bg-slate-400 tracking-wide font-bold border-2 p-8 rounded-md border-black
                border-b-slate-300 flex items-center justify-center -mb-2 z-20 shadow-lg shadow-black"
                >
                        Profile
                </header>
                <ul
                aria-describedby="drawer-header"
                id="profile-drawer"
                className="flex flex-col border-black border-x-2 border-b-2 gap-9 bg-slate-400 p-10 rounded-md shadow-lg shadow-black"
                >
                    
                    <DrawerOption changeSelected={() => handleSelected("Overview")}>Overview</DrawerOption>
                    <hr role="separator" />

                    <DrawerOption changeSelected={() => handleSelected("RecentActivity")}>Recent Activity</DrawerOption>
                    <hr role="separator" />

                    <DrawerOption changeSelected={() => handleSelected("StreaksAndMetrics")}>Streaks and metrics</DrawerOption>
                    <hr role="separator" />

                    <DrawerOption changeSelected={() => handleSelected("Milestones")}>Milestones</DrawerOption>
                    <hr role="separator" />

                    <DrawerOption changeSelected={() => handleSelected("SurroundingActivity")}>Surrounding activity</DrawerOption>
                </ul>
            </div>
        </menu>
    );
}
 
export default Drawer;