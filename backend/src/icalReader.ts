import ical, { VEvent, DateWithTimeZone } from 'node-ical';
import crypto from 'crypto';
import { CalendarData } from './types.ts';


// NOTE: all ical links with webcal protocol should be replaced with http and webcals be replaced with https
// turns link string from webcal to http for axios request
// function parseLink(link: string): string {
//    return link;
// }


function generateEventId(): number {
    return crypto.randomInt(4194304);
}

// lowkey kinda cursed - create date from event start time
function convertIcalToDate(icalDate: DateWithTimeZone): Date {
    const date = new Date(icalDate.getFullYear(), icalDate.getMonth(), icalDate.getDate(), icalDate.getHours(), icalDate.getMinutes());
    return date;

}

export function readIcalLink(link: string): Promise<CalendarData[]> {
    return new Promise((resolve, reject) => {
        const options = { headers: { 'Access-Control-Allow-Origin': '*' } };
        const calendarData: CalendarData[] = [];

        ical.async.fromURL(link, options, function (err, webEvents) {
            if (err) {
                console.error(err);
                reject(err);
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

            resolve(calendarData); // Resolve the promise with the results
        });
    });
}