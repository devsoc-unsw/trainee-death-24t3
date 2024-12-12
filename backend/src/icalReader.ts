import ical, { VEvent, DateWithTimeZone } from 'node-ical';
import crypto from 'crypto';
import { CalendarData } from './types.ts';


function generateEventId(): number {
    return crypto.randomInt(4194304);
}



// lowkey kinda cursed - create date from event start time
function convertIcalToDate(icalDate: DateWithTimeZone): Date {
    const date = new Date(icalDate.getFullYear(), icalDate.getMonth(), icalDate.getDate(), icalDate.getHours(), icalDate.getMinutes());
    return date;

}

export function readIcalLink(link: string, callback: (err: string | null, data: CalendarData[] | null) => void): void {
    const options = { headers: { 'Access-Control-Allow-Origin': '*' } };
    const calendarData: CalendarData[] = [];

    ical.async.fromURL(link, options, function (err, webEvents) {
        if (err) {
            console.error(err);
            callback(err, null);
            return;
        }

        for (const event of Object.values(webEvents)) {
            if (event.type === 'VEVENT') {
                const value: VEvent = event;
                const startDate = convertIcalToDate(value.start);
                const endDate = convertIcalToDate(value.end);
                const formattedData: CalendarData = {
                    id: generateEventId(),
                    title: value.summary,
                    start: startDate,
                    end: endDate,
                };

                calendarData.push(formattedData);
            }
        }

        callback(null, calendarData); // Pass the results to the callback
    });
}