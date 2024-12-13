import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { AlertDialog, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from "../ui/alert-dialog";
import { zodResolver } from "@hookform/resolvers/zod"
import { ControllerRenderProps, useForm } from "react-hook-form"
import { z } from "zod"
import { Input } from "@/components/ui/input"
import { Button } from "../ui/button"
import { Plus } from "lucide-react";
import createCalendar from '../../../hooks/createCalendar';

export function CalendarCreateForm() {
  // valid form
  // cannot have an existing form of the same name
  // calendar names must be at least > 1 character < 20 characters
  const calendarSchema = z.object({
    calendarName: z.string().min(2, {
      message: "Calendar names must be at least 1 character.",
    }).max(20, {
      message: "Calendar names must not be greater than 20 characters."
    }),
  })

  const calendarCreateForm = useForm<z.infer<typeof calendarSchema>>({
    resolver: zodResolver(calendarSchema),
    defaultValues: {
      calendarName: "",
    },
  })

  async function onSubmit(values: z.infer<typeof calendarSchema>) {
    try {
      const response = await createCalendar(values.calendarName);
      console.log("Calendar created successfully:", response);
      calendarCreateForm.reset();
    } catch (error) {
      console.error("Error in creating calendar:", error);
    }
  }

  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button className="w-full rounded-[2.5em] bg-secondary h-[20%]"><Plus/></Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Create new calendar</AlertDialogTitle>
          <AlertDialogDescription/>
        </AlertDialogHeader>
        <div>
        <Form {...calendarCreateForm}>
          <form onSubmit={calendarCreateForm.handleSubmit(onSubmit)} className="space-y-8">
            <FormField
              control={calendarCreateForm.control}
              name="calendarName"
              render={({ field } : { field: ControllerRenderProps<{ calendarName: string }> }) => (
                <FormItem>
                  <FormLabel>Calendar Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Example name" {...field} />
                  </FormControl>
                  <FormMessage/>
                </FormItem>
              )}
            />
            <div className="flex w-full justify-end gap-x-3">
              <AlertDialogCancel asChild>
                <Button variant="destructive" onClick={() => {calendarCreateForm.reset()}}>Cancel</Button>
              </AlertDialogCancel>
              <Button variant="affirmative" type="submit">Confirm</Button>
            </div>
          </form>
        </Form>
        </div>
      </AlertDialogContent>
    </AlertDialog>
  )
}

