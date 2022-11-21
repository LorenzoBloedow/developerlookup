"use client"

import { FunctionComponent, useRef, useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import Drawer, { DrawerOptions } from "./Drawer";

interface MenuProps {
    overview: JSX.Element;
    recentActivity: JSX.Element;
    streaksAndMetrics: JSX.Element;
    milestones: JSX.Element;
    surroundingActivity: JSX.Element;
}

const Menu: FunctionComponent<MenuProps> = ({ overview, recentActivity, streaksAndMetrics, milestones, surroundingActivity }) => {
    const [selected, setSelected] = useState<DrawerOptions>("Overview");

    const selectionRotation = useRef(0);
    const selectionOptions = ["Overview", "RecentActivity", "StreaksAndMetrics", "Milestones", "SurroundingActivity"];

    function rotateSelectedState() {
        if (selectionRotation.current > 4) {
            selectionRotation.current = 0;
            // @ts-ignore
            setSelectedState(selectionOptions[0]);
        } else {
            selectionRotation.current++;
            // @ts-ignore
            setSelectedState(selectionOptions[selectionRotation.current])
        }
    } 

    function setSelectedState(value: DrawerOptions) {
        setSelected(value);
        selectionRotation.current = selectionOptions.indexOf(value);
    }

    return (
        <div
        className="flex flex-col gap-5 items-center"
        >
            <Drawer
            setSelectedValue={setSelectedState}
            />

            { (selected === "Overview") && overview }

            { (selected === "RecentActivity") && recentActivity }

            { (selected === "StreaksAndMetrics") && streaksAndMetrics }

            { (selected === "Milestones") && milestones }

            { (selected === "SurroundingActivity") && surroundingActivity }

            <button
            className="p-4 border-black border-2 rounded-3xl absolute -bottom-14 left-[42%] bg-white shadow-black shadow-lg"
            onPointerUp={rotateSelectedState}
            >
                    <IoIosArrowDown size={100} />
            </button>
        </div>
        
    );
}
 
export default Menu;