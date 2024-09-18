"use client";

import { Avatar, AvatarImage } from "@/components/ui/avatar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { signOut } from "next-auth/react";
import useHeaderController from "./header-controller";

const Header = () => {
  const { isUserPopoverOpen, setIsUserPopoverOpen } = useHeaderController();

  return (
    <div
      className={cn(
        "container left-0 right-0 z-50 transition-all duration-500",
      )}
    >
      <div className={cn("flex h-24 items-center justify-between")}>
        <div className="px-12">LOGO</div>
        <div className="px-12">
          <Popover
            open={isUserPopoverOpen}
            onOpenChange={(open) => {
              setIsUserPopoverOpen(open);
            }}
          >
            <PopoverTrigger>
              <Avatar>
                <AvatarImage
                  src="https://github.com/shadcn.png"
                  alt="@shadcn"
                />
              </Avatar>
            </PopoverTrigger>
            <PopoverContent
              className={"mt-2 flex w-full flex-col space-y-2 px-0 py-1"}
              align="end"
            >
              <div
                className="cursor-pointer px-4 py-1 leading-relaxed hover:bg-gray-100"
                onClick={() => {
                  signOut({ callbackUrl: "/login" });
                }}
              >
                Logout
              </div>
            </PopoverContent>
          </Popover>
        </div>
      </div>
    </div>
  );
};

export default Header;
