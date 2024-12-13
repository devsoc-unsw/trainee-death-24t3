// import {
//     AlertDialog,
//     AlertDialogCancel,
//     AlertDialogContent,
//     AlertDialogHeader,
//     AlertDialogTitle,
//   } from "../ui/alert-dialog";
//   import { Button } from "../ui/button";
  
//   type RemoveUserPopupProps = {
//     userName: string;
//     userColor: string;
//     onClose: () => void;
//   };
  
//   export function RemoveUserPopup({ userName, userColor, onClose }: RemoveUserPopupProps) {
//     return (
//       <AlertDialog open>
//         <AlertDialogContent className="w-[300px]">
//           <AlertDialogHeader>
//             <AlertDialogTitle>Remove <span style={{ backgroundColor: userColor, padding: "0.2em 0.1em", borderRadius: "2px",
//     }}
//   >
//     {userName}
//   </span>?</AlertDialogTitle>
//           </AlertDialogHeader>
//           <div className="flex w-full justify-end gap-x-3">
//           <AlertDialogCancel asChild>
//                 <Button variant="destructive" onClick={() => {}}
//                     >Cancel</Button>
//               </AlertDialogCancel>
//               <Button variant="affirmative" onClick={() => {onClose}}>Confirm</Button>
//           </div>
//         </AlertDialogContent>
//       </AlertDialog>
//     );
//   }
  