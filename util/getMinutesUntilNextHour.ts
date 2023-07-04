function getMinutesUntilNextHour() {
    return 60 - new Date().getMinutes();
}

export default getMinutesUntilNextHour;