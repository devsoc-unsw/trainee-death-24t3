import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form"
import { zodResolver } from "@hookform/resolvers/zod"
import { ControllerRenderProps, useForm } from "react-hook-form"
import { z } from "zod"
import { Input } from "@/components/ui/input"
import { Button } from "../ui/button";
import { Save } from "lucide-react"
import { useState } from "react";
import userUpdate from "../../hooks/userUpdate";

export function DefaultCalendarForm() {
  const [labelText, setLabelText] = useState("My calendar");
  // valid ical link
  const icalSchema = z.object({
    defaultIcalLink: z.string()
  })

  const DefaultCalendarForm = useForm<z.infer<typeof icalSchema>>({
    resolver: zodResolver(icalSchema),
    defaultValues: {
      defaultIcalLink: "",
    },
  })

  function onSubmit(values: z.infer<typeof icalSchema>) {
    // Do something with the form values.
    userUpdate({ ical: values.defaultIcalLink }).response
      .then(() => {
        setLabelText("My calendar - changes saved!");
      })
      .catch((err) => {
        console.error("Failed to update iCal:", err);
        setLabelText("My calendar - update failed!");
      })
      .finally(() => {
        setTimeout(() => {
          setLabelText("My calendar");
        }, 3000);
    });
  }

  return (
    <div className="w-full flex flex-col justify-start items-start gap-y-2">
    <p><b>{labelText}</b></p>
    <div className="w-full">
      <Form {...DefaultCalendarForm}>
      <form onSubmit={DefaultCalendarForm.handleSubmit(onSubmit)} className="space-y-8 w-full">
        <div className="flex w-full justify-start items-start gap-x-2">
        <FormField className="flex-grow"
          control={DefaultCalendarForm.control}
          name="defaultIcalLink"
          render={({ field } : { field: ControllerRenderProps<{ defaultIcalLink: string }> }) => (
            <FormItem>
              <FormControl>
                <Input placeholder="webcal://my.unsw.edu.au/cal/pttd/example.ics" {...field} />
              </FormControl>
              <FormMessage/>
            </FormItem>
          )}
        />
      <Button variant="affirmative" className="flex gap-x-2 align-middle px-3" type="submit">
        <Save/>
        <p>Save</p>
      </Button>
      </div>
      </form>
    </Form>
  </div>
  </div>
  )
}

