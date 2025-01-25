"use client";

import { ColumnDef } from "@tanstack/react-table";

import { Checkbox } from "@/components/ui/checkbox";

import { DataTableColumnHeader } from "../shared/DataTableColumnHeader";

import { deleteBook, deleteUser, updateBook } from "@/lib/admin/actions/book";
import { IKImage } from "imagekitio-next";
import { formatDate } from "@/lib/utils";
import { CiEdit } from "react-icons/ci";
import { RiDeleteBin6Line } from "react-icons/ri";
import Image from "next/image";
import BookCover from "@/components/BookCover";
import BookActionModal from "../../BookActionModal";

export const columns: ColumnDef<Book>[] = [
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
    accessorKey: "title",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Titre" />
    ),
    cell: ({ row }) => {
      const book = row.original;
      console.log(book.coverUrl);

      return (
        <div className="flex flex-row gap-4 mx-auto">
          <BookCover
            coverImage={book.coverUrl}
            coverColor={book.coverColor}
            variant="extraSmall"
          />
          <p className="font-semibold text-dark-200 my-auto">{book.title}</p>
        </div>
      );
    },
  },

  // CREATION DATE  COLUMN
  {
    accessorKey: "author",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Auteur" />
    ),
    cell: ({ row }) => {
      return (
        <div className="flex space-x-2">
          <p>{row.original.author}</p>
        </div>
      );
    },
  },

  // ROLE COLUMN
  {
    accessorKey: "genre",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Genre" />
    ),
    cell: ({ row }) => {
      return (
        <div className="flex">
          <p>{row.original.genre}</p>
        </div>
      );
    },
  },
  // CREATION DATE  COLUMN
  {
    accessorKey: "createdAt",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Date d'ajout" />
    ),
    cell: ({ row }) => {
      return (
        <div className="flex space-x-2">
          <p>{formatDate(row.original.createdAt!)}</p>
        </div>
      );
    },
  },

  {
    id: "actions",
    header: () => <div>Action</div>,
    cell: ({ row }) => {
      const book = row.original;
      return (
        <div className="flex flex-row">
          <BookActionModal type="update" book={book} />
          <BookActionModal type="delete" book={book} />
        </div>
      );
    },
  },
];
