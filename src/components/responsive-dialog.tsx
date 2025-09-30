"use client";

import { useIsMobile } from "@/hooks/use-mobile";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "./ui/dialog";

import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerDescription,
} from "./ui/drawer";
import React from "react";

interface ResponsiveDialogProps {
  title: string;
  description: string;
  children: React.ReactNode;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export const ResponsiveDialog = ({
  title,
  description,
  children,
  open,
  onOpenChange,
}: ResponsiveDialogProps) => {
    const isMobile = useIsMobile()

    isMobile ? (<Drawer open={open} onOpenChange={onOpenChange}>
        <DrawerContent>
            <DrawerHeader>
                <DrawerTitle>{title}</DrawerTitle>
                <DrawerDescription>{description}</DrawerDescription>
            </DrawerHeader>
            <div className="p-4">{children}</div>
        </DrawerContent>
    </Drawer>) : (<Dialog open={open} onOpenChange={onOpenChange}>
        <DialogContent>
            <DialogHeader>
                <DialogTitle>{title}</DialogTitle>
                <DialogDescription>{description}</DialogDescription>
            </DialogHeader>
            {children}
        </DialogContent>
    </Dialog>)
};
