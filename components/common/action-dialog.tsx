import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import Link from "next/link";
import { Button } from "../ui/button";

interface PageProps {
  action: "Follow" | "Message";
  text: string;
  variant: "default" | "outline";
}

const ActionDialog = ({ action, text, variant }: PageProps) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          variant={variant}
          className={`${variant === "default" && "bg-gradientA"}`}
        >
          {action}
        </Button>
      </DialogTrigger>
      <DialogContent className="flex flex-col items-left">
        <DialogHeader>
          <DialogTitle>Easter Egg🥚</DialogTitle>
        </DialogHeader>
        <p className="text-muted-foreground text-sm">
          {action === "Follow"
            ? `These buttons were suppose to do nothing, but since your clicked, why
          not leave me a follow on X (^_~).`
            : `These buttons were suppose to do nothing, but since your clicked, why
          not tell me what you think of the app (^_~).`}
        </p>
        <DialogFooter className="sm:justify-start">
          <DialogClose asChild>
            <Button
              type="button"
              variant={variant}
              className={`${variant === "default" && "bg-gradientA"}`}
              asChild
            >
              <Link
                href={
                  action === "Follow"
                    ? `https://twitter.com/intent/follow?screen_name=codehadit`
                    : `https://twitter.com/messages/compose?recipient_id=1521188289323143170&text=Hey Codehadit, are you free for work?`
                }
                target="_blank"
              >
                {text}
              </Link>
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default ActionDialog;
