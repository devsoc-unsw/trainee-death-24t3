import * as React from "react";
import { cn } from "@/lib/utils";
import { Button } from "./button";
import { Crown } from 'lucide-react';
import { RemoveUserPopup } from "../calendar/calendar-remove-user.tsx";
import { InviteUserForm } from "../calendar/calendar-invite-user-form.tsx";
import { useState } from "react";

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

type User = {
  userName: string;
  userId: string;
  userColor: string; 
  isOwner: boolean; 
};

type CardSidebarProps = {
  users: User[];
  onKickUser: (userId: string) => void;
  onInviteUser: (email: string) => void;
};


const CardSidebar = ({ users, onInviteUser, onKickUser }: CardSidebarProps) => {
  const [selectedUser, setSelectedUser] = useState<User | null>(null);
  const [showRemoveModal, setShowRemoveModal] = useState(false);
  const [showInviteModal, setShowInviteModal] = useState(false); 

  const handleUserClick = (user: User) => {
    setSelectedUser(user);
    setShowRemoveModal(true); 
  };

  return (
    <div className="flex flex-col items-center justify-start rounded-[2.5em] shadow-light border-2 border-border bg-secondary text-black w-[125px] h-[100%] text-center space-y-4 py-4">
      <Button className="w-[75%]" onClick={() => setShowInviteModal(true)}>+</Button>
      <ul className="flex-col space-y-4 overflow-y-auto w-[90%] h-[90%] py-2 px-2">
        {users.map((user) => (
          <li key={user.userId}>
            <Button 
              className="w-[100%] h-[8%] focus:outline-2 focus:outline-black flex items-center gap-1" 
              style={{ backgroundColor: user.userColor }}
              onClick={() => handleUserClick(user)}
            >
              {user.userName}
              {user.isOwner && <Crown className="w-4 h-4" />}
            </Button>
          </li>
        ))}
      </ul>

      {showRemoveModal && selectedUser && (
        <RemoveUserPopup
          userName={selectedUser.userName}
          userColor={selectedUser.userColor}
          onClose={() => setShowRemoveModal(false)}
          onRemove={() => {
            // ! TODO: CHECK IF USER IS AN OWNER
            onKickUser(selectedUser.userId);
            setShowRemoveModal(false);
          }}
        />
      )}

      {/* Invite User Modal */}
      {showInviteModal && (
        <InviteUserForm
          onClose={() => setShowInviteModal(false)}
          onInvite={onInviteUser}
        />
      )}
    </div>
  );
};

CardSidebar.displayName = "CardSidebar";



const CardGIF = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        "flex justify-center w-[95%] h-full align-center items-center rounded-[2.5em] shadow-light border-2 border-border bg-gray-200 text-black",
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
