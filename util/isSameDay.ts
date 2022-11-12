export default function isSameDay(firstDate: Date, secondDate: Date) {
    if (firstDate.getFullYear() === secondDate.getFullYear()) {
        if (firstDate.getMonth() === secondDate.getMonth()) {
            if (firstDate.getDate() === secondDate.getDate()) {
                return true;
            }
        }
    }
    return false;
}