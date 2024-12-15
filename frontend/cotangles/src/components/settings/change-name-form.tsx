import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form"
import { zodResolver } from "@hookform/resolvers/zod"
import { ControllerRenderProps, useForm } from "react-hook-form"
import { z } from "zod"
import { Input } from "@/components/ui/input"
import { Button } from "../ui/button"
import { Save } from "lucide-react";
import { useState } from "react"
import updateUserInfo from "./../../hooks/updateUserInfo"

export function ChangeNameForm() {
  const [labelText, setLabelText] = useState("Display name");
  // valid form
  // cannot have an existing form of the same name
  // calendar names must be at least > 1 character < 20 characters
  const nameSchema = z.object({
    displayName: z.string().min(2, {
      message: "Display names must be at least 1 character.",
    }).max(20, {
      message: "Display names must not be greater than 20 characters."
    }),
  })

  const ChangeNameForm = useForm<z.infer<typeof nameSchema>>({
    resolver: zodResolver(nameSchema),
    defaultValues: {
      // Todo: Get the user's display name from the database????
      displayName: "",
    },
  })

  function onSubmit(values: z.infer<typeof nameSchema>) {
    // Do something with the form values.
    updateUserInfo(values.displayName, null)
    console.log(values)
    setLabelText("Display name - changes saved!")
    setTimeout(() => {
      setLabelText("Display name")
    }, 3000)
  }

  return (
    <div className="w-full flex flex-col justify-start items-start gap-y-2">
    <p><b>{labelText}</b></p>
    <div className="w-full">
      <Form {...ChangeNameForm}>
      <form onSubmit={ChangeNameForm.handleSubmit(onSubmit)} className="space-y-8 w-full">
        <div className="flex w-full justify-start items-start gap-x-2">
        <FormField className="flex-grow"
          control={ChangeNameForm.control}
          name="displayName"
          render={({ field } : { field: ControllerRenderProps<{ displayName: string }> }) => (
            <FormItem>
              <FormControl>
                <Input placeholder="Your name here" {...field} />
              </FormControl>
              <FormMessage className="text-left"/>
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

