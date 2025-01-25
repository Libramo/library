"use client";

import { ColumnDef } from "@tanstack/react-table";

import { Checkbox } from "@/components/ui/checkbox";

import { DataTableColumnHeader } from "../shared/DataTableColumnHeader";
import { formatDate } from "@/lib/utils";

import RolesBadge from "@/components/RolesBadge";
import { RiDeleteBin6Line } from "react-icons/ri";
import { deleteUser } from "@/lib/admin/actions/book";

interface UserWithBorrowCount extends RegisteredUser {
  borrowCount: number;
}
export const columns: ColumnDef<UserWithBorrowCount>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && "indeterminate")
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
        className="translate-y-[5px]"
      />
    ),

    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
        className="translate-y-[2px]"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },

  //NAME COLUMN
  {
    id: "fullName",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Nom" />
    ),
    cell: ({ row }) => {
      const user = row.original;
      return (
        <div className="user">
          <div className="flex flex-col max-md:hidden">
            <p className="font-semibold text-dark-200">{user.fullName}</p>
            <p className="text-xs text-light-500">{user.email}</p>
          </div>
        </div>
      );
    },
  },

  // CREATION DATE  COLUMN
  {
    accessorKey: "createdAt",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Date d'inscription" />
    ),
    cell: ({ row }) => {
      return (
        <div className="flex space-x-2">
          <p>{formatDate(row.original.createdAt)}</p>
        </div>
      );
    },
  },

  // ROLE COLUMN
  {
    accessorKey: "role",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Role" />
    ),
    cell: ({ row }) => {
      console.log("liban", row.original.status);
      return (
        <div className="w-fit items-center text-center">
          <RolesBadge role={row.original.role} />
        </div>
      );
    },
  },
  {
    accessorKey: "borrowCount",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Emprunts" />
    ),
    cell: ({ row }) => {
      return (
        <div className="w-fit items-center text-center">
          {row.original.borrowCount}
        </div>
      );
    },
  },

  // BAN_ID COLUMN
  {
    accessorKey: "banUserId",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Identifiant (ID)" />
    ),
    cell: ({ row }) => {
      return (
        <div className="flex space-x-2">
          <p>{row.original.banUserId}</p>
        </div>
      );
    },
  },

  {
    id: "actions",
    header: () => <div>Action</div>,
    cell: ({ row }) => {
      const handleDelete = async () => {
        try {
          const result = await deleteUser(row.original.id);
          // Here, you might want to refresh your table or show some feedback
          console.log(result);
        } catch (error) {
          console.error("Error in handleDelete:", error);
        }
      };

      return (
        <button onClick={handleDelete}>
          <RiDeleteBin6Line className="text-red-300 items-center" />
        </button>
      );
    },
  },
];
