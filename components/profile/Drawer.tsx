"use client";
import { FunctionComponent, useEffect, useRef, useState } from "react";
import { CgMenu } from "react-icons/cg";

export type DrawerOptions = "Overview" | "RecentActivity" | "StreaksAndMetrics" | "Milestones" | "SurroundingActivity";
 
const DrawerOption = ({ changeSelected, children }: { changeSelected: () => void, children: string }) => {
    return (
        <li
        role="button"
        className="text-center text-xs border-slate-400 rounded-lg
        active:shadow-inner active:shadow-black bg-slate-300
        tracking-wide text-slate-400 border-[1px] p-2 font-thin
        md:text-sm md:p-3"
        onPointerUp={changeSelected}
        >
            {children}
        </li>
    )
}

interface DrawerProps {
    setSelectedValue: (value: DrawerOptions) => void;
    drawerButtonSize: string;
}

const Drawer: FunctionComponent<DrawerProps> = ({ setSelectedValue, drawerButtonSize }) => {
    const [toggle, setToggle] = useState(false);
    const menuContentRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (toggle) {
            menuContentRef.current!.style.display = "flex";
        } else {
            menuContentRef.current!.style.display = "none";
        }
    }, [toggle]);

    function handleSelected(option: DrawerOptions) {
        setSelectedValue(option);
        setToggle(false);
    }

    return (
        <menu
        className="absolute w-36 md:w-52 top-0 right-0 flex
        flex-col z-50 items-end gap-2.5 md:gap-3.5"
        >
            <button
            tabIndex={0}
            aria-owns="profile-drawer"
            aria-expanded={toggle}
            style={{
                boxShadow: "9px 9px 13px var(--neu-dark), -9px -9px 30px var(--neu-light)"
            }}
            className={"p-2 rounded-lg bg-neu-mid neu-button " + drawerButtonSize}
            onPointerUp={() => setToggle(prev => !prev)}
            >
                <CgMenu
                className="w-8 h-8 md:w-10 md:h-10"
                />
            </button>

            <div
            className="shadow-black shadow-lg p-5
            bg-slate-300 rounded-md hidden flex-col
            gap-5 text-slate-400 md:p-7"
            ref={menuContentRef}
            >
                <header
                id="drawer-header"
                className="text-center text-lg bg-slate-300 tracking-wide font-bold
                flex items-center justify-center z-20 text-slate-400 md:text-xl"
                >
                    Profile Section
                </header>
                <ul
                aria-describedby="drawer-header"
                id="profile-drawer"
                className="flex flex-col gap-5"
                >
                    
                    <DrawerOption changeSelected={() => handleSelected("Overview")}>Overview</DrawerOption>
                    <hr role="separator" />

                    <DrawerOption changeSelected={() => handleSelected("RecentActivity")}>Recent Activity</DrawerOption>
                    <hr role="separator" />

                    <DrawerOption changeSelected={() => handleSelected("StreaksAndMetrics")}>Streaks and Metrics</DrawerOption>
                    {/* <hr role="separator" />

                    <DrawerOption changeSelected={() => handleSelected("Milestones")}>Milestones</DrawerOption>
                    <hr role="separator" />

                    <DrawerOption changeSelected={() => handleSelected("SurroundingActivity")}>Surrounding Activity</DrawerOption> */}
                </ul>
            </div>
        </menu>
    );
}
 
export default Drawer;