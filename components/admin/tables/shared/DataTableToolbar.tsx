"use client";

import { Table } from "@tanstack/react-table";
import { X } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { DataTableViewOptions } from "../users/DataTableViewOptions";

import { DataTableFacetedFilter } from "../users/DataTableFacetedFilter";

interface DataTableToolbarProps<TData> {
  table: Table<TData>;
}

const roles = [
  {
    label: "USER",
    value: "USER",
  },
  {
    label: "ADMIN",
    value: "ADMIN",
  },
];

export function DataTableToolbar<TData>({
  table,
}: DataTableToolbarProps<TData>) {
  const isFiltered = table.getState().columnFilters.length > 0;

  return (
    <div className="flex items-center justify-between">
      <div className="flex flex-1 items-center space-x-2">
        <Input
          placeholder="Filtrer les utilisateurs..."
          value={
            (table.getColumn("fullName")?.getFilterValue() as string) ?? ""
          }
          onChange={(event) =>
            table.getColumn("fullName")?.setFilterValue(event.target.value)
          }
          className="h-8 w-[150px] lg:w-[250px]"
        />

        {table.getColumn("fullName") && (
          <DataTableFacetedFilter
            column={table.getColumn("role")}
            title="Rôles"
            options={roles}
          />
        )}

        {isFiltered && (
          <Button
            variant="ghost"
            onClick={() => table.resetColumnFilters()}
            className="h-8 px-2 lg:px-3"
          >
            Reset
            <X />
          </Button>
        )}
      </div>

      {/* <DataTableViewOptions table={table} /> */}
    </div>
  );
}