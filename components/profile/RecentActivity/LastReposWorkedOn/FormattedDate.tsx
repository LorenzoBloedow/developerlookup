import formatDate from "../../../../util/formatDate";

function FormattedDate({ date }: { date: string }) {
    const formattedDate = formatDate(date);
    return (
        <div>
            <p className="text-[0.6rem] md:text-xs">{formattedDate}</p>
            <p className="text-[0.6rem] md:text-xs">{new Date(date).toLocaleTimeString()}</p>
        </div>
    )
}

export default FormattedDate;