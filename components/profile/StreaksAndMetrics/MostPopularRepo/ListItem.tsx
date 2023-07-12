import { ReactNode } from "react";

function ListItem({ children }: { children: ReactNode }) {
    return (
        <li
        className="flex gap-2 items-center justify-between
        text-xs md:text-sm w-full"
        >
            {children}
        </li>
    );
}

export default ListItem;