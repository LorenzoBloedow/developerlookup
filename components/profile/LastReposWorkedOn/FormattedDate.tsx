import formatDate from "../../../util/formatDate";

function FormattedDate({ date }: { date: string }) {
    const formattedDate = formatDate(date);
    return (
        <div>
            <p className="text-[0.6rem]">{formattedDate}</p>
            <p className="text-[0.6rem]">{new Date(date).toLocaleTimeString()}</p>
        </div>
    )
}

export default FormattedDate;