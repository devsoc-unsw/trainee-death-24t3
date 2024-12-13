import * as React from "react";
import { cn } from "@/lib/utils";
import { Button } from "./button";

const CardTop = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        "flex flex-col align-center items-center justify-center rounded-full shadow-light border-2 border-border bg-secondary py-0 text-black w-[70vw] min-h-[15%] max-h-[15%]",
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
        "flex flex-col align-center items-center justify-center rounded-[2.5em] shadow-light border-2 border-border bg-secondary text-black w-[70vw] min-h-[80%] max-h-[80%] p-5",
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

// TODO: COLOR ENUMS
// const ColorEnum = {
//   COLOR1: '',
//   COLOR2: '',
//   COLOR3: '',
//   COLOR4: '',
//   COLOR5: '',
//   COLOR6: '',
// }
// #A7DBD8 #BAFCA2 #FFDB58 #FFA07A #FFC0CB #C4A1FF

type CardSidebarProps = {
  users: { userName: string; userId: number }[]; // Array of users?
};

// type CardSidebarProps = { userName: string, userId: number }

// const CardSidebar = ({ userName,  userId}[]: CardSidebarProps[]) => {

const CardSidebar = ({ users }: CardSidebarProps) => {
  return (
    <div className="flex flex-col items-center justify-start rounded-[2.5em] shadow-light border-2 border-border bg-secondary text-black w-[125px] h-[100%] p-5 text-center space-y-4">
      <Button className="w-[100%]" onClick={() => {}}>+</Button> {/* Invite user on click? */}

      <ul className="flex-col space-y-4 w-full">
        {users.map((user) => (
          <li key={user.userId}>
            <Button className="w-[100%] focus:outline-2 focus:outline-black">
              {user.userName}
            </Button>
          </li>
        ))}
      </ul>
    </div>
  );
};
CardSidebar.displayName = "CardSidebar";

const CardGIF = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        "flex justify-center w-[45%] h-[300px] align-center items-center rounded-[2.5em] shadow-light border-2 border-border bg-gray-200 text-black",
        className
      )}
      {...props}
    />
  )
);
CardGIF.displayName = "CardGIF";


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
  CardGIF
};
