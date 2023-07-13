"use client"
import { FunctionComponent, useRef, useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import Drawer, { DrawerOptions } from "./Drawer";

interface SectionProps {
    overview: JSX.Element;
    recentActivity: JSX.Element;
    streaksAndMetrics: JSX.Element;
    // milestones: JSX.Element;
    // surroundingActivity: JSX.Element;
    drawerButtonSize: string;
}

const Section: FunctionComponent<SectionProps> = ({ overview, recentActivity, streaksAndMetrics, drawerButtonSize }) => {
    const [selected, setSelected] = useState<DrawerOptions>("Overview");

    const selectionRotation = useRef(0);
    const selectionOptions = ["Overview", "RecentActivity", "StreaksAndMetrics", "Milestones", "SurroundingActivity"] as const;

    function rotateSelectedState() {
        if (selectionRotation.current > 1) {
            selectionRotation.current = 0;
            setSelected(selectionOptions[0]);
        } else {
            selectionRotation.current++;
            setSelected(selectionOptions[selectionRotation.current])
        }
    } 

    return (
        <div
        className="flex flex-col gap-5 items-center lg:w-72 lg:max-h-full lg:flex-none"
        >
            <Drawer
            drawerButtonSize={drawerButtonSize}
            setSelectedValue={setSelected}
            />

            { (selected === "Overview") && overview }

            { (selected === "RecentActivity") && recentActivity }

            { (selected === "StreaksAndMetrics") && streaksAndMetrics }

            {/* { (selected === "Milestones") && milestones }

            { (selected === "SurroundingActivity") && surroundingActivity } */}

            <button
            className="p-2.5 border-[1px] rounded-full sticky -bottom-4 bg-neu-mid shadow-black shadow-lg"
            onPointerUp={rotateSelectedState}
            >
                <IoIosArrowDown
                className="w-6 h-6"
                />
            </button>
        </div>
    );
}
 
export default Section;