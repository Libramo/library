import clsx from "clsx";
import React from "react";

const RolesBadge = ({ role }: { role: string }) => {
  return (
    <div
      className={clsx("role-badge", {
        "bg-green-200": role === "ADMIN",
        "bg-blue-200": role === "USER",
      })}
    >
      <p
        className={clsx("text-12-semibold capitalize", {
          "bg-green-200": role === "ADMIN",
          "bg-blue-200": role === "USER",
        })}
      >
        {role === "ADMIN" ? "Admin" : "User"}
      </p>
    </div>
  );
};

export default RolesBadge;
