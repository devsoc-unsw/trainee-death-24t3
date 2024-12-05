import * as React from "react";
import { cn } from "@/lib/utils";
import { Plus } from "lucide-react";
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

const CardBodyCalendar = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        "flex flex-wrap align-center justify-start rounded-[2.5em] bg-transparent text-black w-[70vw] h-[85%] p-5 gap-[5%] overflow-auto",
        className
      )}
      {...props}
    />
  )
);
CardBodyCalendar.displayName = "CardBodyCalendar";

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

type CardCalendarProps = { calendarName: string }
const CardCalendar = ({ calendarName }: CardCalendarProps) => {
  return (
    <div className="flex flex-col align-center items-center justify-evenly rounded-[2.5em] shadow-light border-2 border-border bg-secondary text-black w-[15.5em] h-[70%] p-5">
        <h1><b>{calendarName}</b></h1>
        {/* Could add something here like a calendar / person preview , also calendar settings (leave calendar and whatnot) */}
        <div></div>
    </div>
  );
};

// Todo, link this to back end , below component will have the invites prop
// type CardCalendarInfoProps = { invites: calendarInvite[] }
const CardCalendarInfo = () => {
  return (
    <div className="flex flex-col align-center items-center justify-between rounded-[2.5em] bg-transparent text-black w-[15.5em] h-[70%]">
        <Button className="w-[100%] rounded-[2.5em] bg-secondary h-[20%]"><Plus/></Button>
        <div className="flex flex-col align-center items-center justify-start rounded-[2.5em] shadow-light border-2 border-border bg-secondary text-black w-[100%] h-[70%] p-5">
          <h1><b>Pending</b></h1>
        </div>
    </div>
  );
};

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

export {
  CardTop,
  CardBody,
  CardBodyCalendar,
  CardAuth,
  CardCalendar,
  CardCalendarInfo,
  CardHeader,
  CardFooter,
  CardTitle,
  CardDescription,
  CardContent
};
