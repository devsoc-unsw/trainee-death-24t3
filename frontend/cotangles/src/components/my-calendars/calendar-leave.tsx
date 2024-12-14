/*
import { ArrowBigRightDash } from "lucide-react";
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from "../ui/alert-dialog";
import { buttonVariants } from "../ui/button-variants";
import { CalendarRemoveProps } from "./calendar-delete";

// { removeCalendar }: { removeCalendar: CalendarSetter }
// calendarName as a prop

export function CalendarLeave({ calendar, removeCalendar }: CalendarRemoveProps) {
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <ArrowBigRightDash className={buttonVariants() + " w-[20%]"} onClick={() => {console.log("leave")}}/>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>{`Are sure you want to leave ${calendar.calendarName}?`}</AlertDialogTitle>
          <AlertDialogDescription>
            You will not be able to rejoin unless you are reinvited. If you are the owner then ownership will be transferred to someone else.
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