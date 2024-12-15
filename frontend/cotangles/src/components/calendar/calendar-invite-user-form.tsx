import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogTitle,
} from "../ui/alert-dialog";
import { Button } from "../ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

type InviteUserFormProps = {
  onClose: () => void;
  onInvite: (email: string) => void;
};

const emailSchema = z.object({
  email: z.string().email({ message: "Please enter a valid email address." }),
});

export function InviteUserForm({ onClose, onInvite }: InviteUserFormProps) {
  const inviteForm = useForm<z.infer<typeof emailSchema>>({
    resolver: zodResolver(emailSchema),
    defaultValues: {
      email: "",
    },
  });

  const onSubmit = (values: z.infer<typeof emailSchema>) => {
    onInvite(values.email); 
    inviteForm.reset(); 
    onClose(); 
  };

  return (
    <AlertDialog open>
      <AlertDialogContent className="w-[350px]">
        <AlertDialogHeader>
          <AlertDialogTitle>Invite User</AlertDialogTitle>
        </AlertDialogHeader>
        <Form {...inviteForm}>
          <form onSubmit={inviteForm.handleSubmit(onSubmit)} className="space-y-6">
            <FormField
              control={inviteForm.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter user's email" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="flex w-full justify-end gap-x-3">
              <AlertDialogCancel asChild>
                <Button variant="destructive" onClick={onClose}>
                  Cancel
                </Button>
              </AlertDialogCancel>
              <Button variant="affirmative" type="submit">
                Confirm
              </Button>
            </div>
          </form>
        </Form>
      </AlertDialogContent>
    </AlertDialog>
  );
}