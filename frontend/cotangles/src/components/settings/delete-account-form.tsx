import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form"
import { AlertDialog, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from "../ui/alert-dialog";
import { zodResolver } from "@hookform/resolvers/zod"
import { ControllerRenderProps, useForm } from "react-hook-form"
import { z } from "zod"
import { Input } from "@/components/ui/input"
import { Button } from "../ui/button"
import { LogOut, Trash2 } from "lucide-react";
import { logout } from "@/utils/accountSettings";

export function DeleteAccountForm() {
  // valid form
  // cannot have an existing form of the same name
  // email names must be at least > 1 character < 20 characters
  // Todo - connect existing emails to backend
  const emailSchema = z.object({
    emailToDelete: z
    .string()
    .min(1, { message: "Email cannot be blank." })
    .email("This is not a valid email.")
  // .refine(async (e) => {
   //   const emails = await fetchEmails();
  //   return emails.includes(e);
  // }, "This email is not in our database")
  })

  const DeleteAccountForm = useForm<z.infer<typeof emailSchema>>({
    resolver: zodResolver(emailSchema),
    defaultValues: {
      emailToDelete: "",
    },
  })

  function onSubmit(values: z.infer<typeof emailSchema>) {
    // Do something with the form values.
    console.log(values);
  }

  return (
    <AlertDialog>
    <div className="flex w-full gap-x-4">
      <AlertDialogTrigger asChild>
        <Button variant="destructive" className="flex gap-x-2 px-4 w-[50%]">
            <Trash2/><p>Delete account</p>
        </Button>
      </AlertDialogTrigger>
      {/* Todo: Turn this logout into a component */}
        <Button onClick={logout} className="flex gap-x-2 px-4 w-[50%]"><LogOut/><p>Logout</p></Button>
    </div>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Are you sure?</AlertDialogTitle>
          <AlertDialogDescription>
            Deleting your account is an <span className="text-destructive">irreversible action</span>.<br/><br/>
            You will be removed from all calendars and your data will be wiped.<br/><br/>
            Enter your current email to proceed.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <div>
        <Form {...DeleteAccountForm}>
          <form onSubmit={DeleteAccountForm.handleSubmit(onSubmit)} className="space-y-8">
            <FormField
              control={DeleteAccountForm.control}
              name="emailToDelete"
              render={({ field } : { field: ControllerRenderProps<{ emailToDelete: string }> }) => (
                <FormItem>
                  <FormControl>
                    <Input placeholder="example@gmail.com" {...field} />
                  </FormControl>
                  <FormMessage/>
                </FormItem>
              )}
            />
            <div className="flex w-full justify-end gap-x-3">
              <AlertDialogCancel asChild>
                <Button variant="destructive" onClick={() => {DeleteAccountForm.reset()}}>Cancel</Button>
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

