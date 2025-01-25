import React from "react";
import { Avatar, AvatarFallback } from "../ui/avatar";
import { User } from "next-auth";
import { getInitials } from "@/lib/utils";

const UserNav = ({ user }: { user: User | undefined }) => {
  return (
    <>
      <Avatar>
        <AvatarFallback className="bg-amber-100">
          {getInitials(user?.name || "IN")}
        </AvatarFallback>
      </Avatar>
      <div className="flex flex-col max-md:hidden px-4">
        <p className="font-semibold text-dark-200">{user?.name}</p>
        <p className="text-xs text-light-500">{user?.email}</p>
      </div>
    </>
  );
};

export default UserNav;
