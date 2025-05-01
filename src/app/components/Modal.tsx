/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "./Dialog";
import { textVariants } from "./Text";
import { cn } from "../lib/utils";
import { useMediaQuery } from "usehooks-ts";
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
} from "./Drawer";
import { X } from "lucide-react";
import type { JSX } from "react";

interface Props {
  open: boolean;
  setOpen: (val: any) => void;
  children: string | JSX.Element | JSX.Element[];
  size?: "sm" | "md" | "lg" | "xl";
  title?: string;
  description?: string;
  drawerHeight?: string;
  footer?: string | JSX.Element | JSX.Element[];
  setter?: "url" | "state";
  centeredHeader?: boolean;
}

export function Modal({
  open,
  children,
  setOpen,
  title,
  description,
  size = "xl",
//   drawerHeight,
  footer,
  setter = "url",
  centeredHeader,
}: Props) {
  const matches = useMediaQuery("(min-width: 300px)");

  const width = {
    sm: "md:w-4/5 lg:w-[90%] xl:w-[95%]",
    md: "md:w-5/6 lg:w-[90%] xl:w-[95%]",
    lg: "md:w-[90%] lg:w-[95%] xl:w-[96%]",
    xl: "md:w-[95%] lg:w-[96%] xl:w-[98%]",
  };
  const selectedWidth = width[size];

  const handleClose = (val: boolean) => {
    if (setter === "url") setOpen(val);
    else setOpen(false);
  };

  if (!matches) {
    return (
      <Drawer open={open} onOpenChange={handleClose} shouldScaleBackground>
        <DrawerContent className="fixed inset-0 z-50 bg-white dark:bg-grey-800 flex flex-col">
          <div
            onClick={() => handleClose(false)}
            className="absolute right-4 top-4 cursor-pointer opacity-70 hover:opacity-100 z-50"
          >
            <X className="h-4 w-4 text-black" />
          </div>
          <DrawerHeader className="text-left p-4 pb-2">
            <DrawerTitle
              className={textVariants({
                variant: "header",
                case: "capitalize",
                size: "xl",
                font: "semibold",
              })}
            >
              {title}
            </DrawerTitle>
            <DrawerDescription>{description}</DrawerDescription>
          </DrawerHeader>
          <div className="px-4 flex-1 overflow-y-auto">{children}</div>
          <DrawerFooter className="p-4 pt-2">{footer}</DrawerFooter>
        </DrawerContent>
      </Drawer>
    );
  }

  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogContent
        className={cn(
          "fixed left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] z-50 bg-white flex flex-col",
          "w-full h-full max-w-[100vw]",
          "custom-400:max-h-auto custom-400:h-auto custom-400:w-425px",
          selectedWidth,
          "modal-fullscreen"
        )}
      >
        <div
          onClick={() => handleClose(false)}
          className="absolute right-4 top-4 cursor-pointer opacity-70 hover:opacity-100 z-50"
        >
          <X className="h-4 w-4 text-black" />
        </div>
        <DialogHeader
          className={cn("p-4 pb-2", centeredHeader && "flex items-center")}
        >
          <DialogTitle
            className={textVariants({
              variant: "header",
              font: "medium",
              size: "xxl",
            })}
          >
            {title}
          </DialogTitle>
          <DialogDescription
            className={textVariants({ variant: "desc", size: "xs" })}
          >
            {description}
          </DialogDescription>
        </DialogHeader>
        <div className="px-4 flex-1 overflow-y-auto max-h-[70vh]">
          {children}
        </div>
        <DialogFooter className="p-4 pt-2">{footer}</DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

