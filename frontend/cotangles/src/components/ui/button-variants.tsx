import { cva } from "class-variance-authority";

const buttonVariants = cva(
  "inline-flex items-center text-text justify-center rounded-lg text-sm font-base ring-offset-white transition-all active:transform active:translate-x-[6px] active:translate-y-[6px] focus:outline-1 focus-visible:outline-1 disabled:pointer-events-none disabled:opacity-50 outline outline-black",
  {
    variants: {
      variant: {
        default:
          "bg-main border-1 dark:border-darkBorder shadow-light dark:shadow-dark hover:translate-x-boxShadowX hover:translate-y-boxShadowY hover:shadow-none",
        noShadow: "bg-main border-2 border-border dark:border-darkBorder",
        neutral:
          "bg-white dark:bg-secondaryBlack dark:text-darkText border-2 border-border dark:border-darkBorder shadow-light dark:shadow-dark hover:translate-x-boxShadowX hover:translate-y-boxShadowY hover:shadow-none dark:hover:shadow-none",
        reverse:
          "bg-main border-2 border-border dark:border-darkBorder hover:translate-x-reverseBoxShadowX hover:translate-y-reverseBoxShadowY hover:shadow-light dark:hover:shadow-dark",
        affirmative:
          "bg-affirmative border-1 dark:border-darkBorder shadow-light dark:shadow-dark hover:translate-x-boxShadowX hover:translate-y-boxShadowY hover:shadow-none",
        destructive:
          "bg-destructive border-1 dark:border-darkBorder shadow-light dark:shadow-dark hover:translate-x-boxShadowX hover:translate-y-boxShadowY hover:shadow-none",
      },
      size: {
        default: "h-10 px-2 py-2",
        sm: "h-9 px-3",
        lg: "h-11 px-8",
        icon: "h-10 w-10"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
);
export { buttonVariants };