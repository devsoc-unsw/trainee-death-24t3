/*
import { Trash2 } from "lucide-react";
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from "../ui/alert-dialog";
import { CardBodyCalendarProp, CalendarSetter } from "./calendar-list";
import { buttonVariants } from "../ui/button-variants";

// { removeCalendar }: { removeCalendar: CalendarSetter }
export type CalendarRemoveProps = {
  calendar: CardBodyCalendarProp, 
  removeCalendar: CalendarSetter
}

export function CalendarDelete({ calendar, removeCalendar }: CalendarRemoveProps ) {
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
      <Trash2 className={buttonVariants() + " w-[20%]"} onClick={() => {console.log("trash")}}/>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>{`Are sure you want to delete ${calendar.calendarList[0].calendarName}?`}</AlertDialogTitle>
          <AlertDialogDescription>
            This action <span className="text-destructive">cannot be undone</span>. This will permanently delete the calendar from our server and remove anyone who has joined.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <div className="flex justify-end gap-x-2">
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction onClick={() => {removeCalendar(calendar)}}>Continue</AlertDialogAction>
        </div>
      </AlertDialogContent>
    </AlertDialog>
  )
}
*/