import * as React from "react";
import { cn } from "@/lib/utils";
import { Button } from "./button";

const CardTop = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        "flex flex-col align-center items-center justify-center rounded-full shadow-light border-2 border-border bg-secondary py-0 text-black w-[70vw] h-[15%]",
        className
      )}
      {...props}
    />
  )
);
CardTop.displayName = "CardTop";

const CardBody = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        "flex flex-col align-center items-center justify-center rounded-[2.5em] shadow-light border-2 border-border bg-secondary text-black w-[70vw] h-[85%] p-5",
        className
      )}
      {...props}
    />
  )
);
CardBody.displayName = "CardBody";



const CardAuth = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        "flex flex-col align-center text-left justify-between text-black w-[60%] h-[100%] p-5",
        className
      )}
      {...props}
    />
  )
);
CardAuth.displayName = "CardAuth";

const CardHeader = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, style, ...props }, ref) => (
    <div
      ref={ref}
      className={cn("flex flex-col space-y-1.5 p-3", className)}
      style={style}
      {...props}
    />
  )
);
CardHeader.displayName = "CardHeader";

const CardTitle = React.forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLHeadingElement>>(
  ({ className, ...props }, ref) => (
    <h3
      ref={ref}
      className={cn("text-xl leading-none font-heading tracking-tight", className)}
      {...props}
    />
  )
);
CardTitle.displayName = "CardTitle";

const CardDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p ref={ref} className={cn("text-sm text-black font-base !mt-3", className)} {...props} />
));
CardDescription.displayName = "CardDescription";

const CardContent = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn("p-6 pt-0", className)} {...props} />
  )
);
CardContent.displayName = "CardContent";

const CardFooter = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn("flex items-center p-6 pt-0", className)} {...props} />
  )
);
CardFooter.displayName = "CardFooter";


// type CardSidebarProps = { userName: string, userId: number }

// const CardSidebar = ({ userName,  userId}[]: CardSidebarProps[]) => {
//   return (
//     <div
//       className="flex-column align-center items-center justify-evenly rounded-[2.5em] shadow-light border-2 border-border bg-secondary text-black w-[20%] h-[80%] p-5 text-center"
//     >
//       <Button className=" w-full">+</Button>

//       <ul className="flex-col space-y-4">
//         {CardSidebarProps.map((user) => (
//           <li key={user.id}>
//             <Button className=" w-full">{user.name}</Button>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };


type CardSidebarProps = {
  users: { userName: string; userId: number }[]; // Array of users?
};

const CardSidebar = ({ users }: CardSidebarProps) => {
  return (
    <div className="flex flex-col align-center items-center justify-evenly rounded-[2.5em] shadow-light border-2 border-border bg-secondary text-black w-[20%] h-[80%] p-5 text-center">
      <Button className="w-full" onClick={() => {}}>+</Button> {/* Invite user on click? */}

      <ul className="flex-col space-y-4 w-full">
        {users.map((user) => (
          <li key={user.userId}>
            <Button className="w-full">
              {user.userName}
            </Button>
          </li>
        ))}
      </ul>
    </div>
  );
};
CardSidebar.displayName = "CardSidebar";


export {
  CardTop,
  CardBody,
  CardAuth,
  CardHeader,
  CardFooter,
  CardTitle,
  CardDescription,
  CardContent,
  CardSidebar,
};
