import formatNumber from "../../../../util/formatNumber";

function ItemNumber({ children }: { children: number }) {
    return (
        <p className="w-20 flex-grow-0 overflow-clip">
            {formatNumber.format(children)}
        </p>
    );
}

export default ItemNumber;