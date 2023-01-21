import dayjs from "dayjs";

export function generateDatesFromYearBeginning() {
    const firstDayOfTheYear = dayjs().startOf('year').add(4, 'hours');
    const today = new Date();

    const dates = [];
    let compareDate = firstDayOfTheYear;

    while (compareDate.isBefore(today)) {
        dates.push(compareDate.toDate())
        compareDate = compareDate.add(1, 'day');
    }

    return dates;
}