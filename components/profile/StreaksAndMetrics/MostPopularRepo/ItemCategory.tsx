import { ReactNode } from "react";

function ItemCategory({ children }: { children: ReactNode }) {
    return (
        <div
        className="w-40 flex flex-grow-0 gap-1.5 md:gap-3"
        >
            {children}
        </div>
    );
}

export default ItemCategory;