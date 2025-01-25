import { db } from "@/database/drizzle";
import { Row } from "@tanstack/react-table";
import { clsx, type ClassValue } from "clsx";
import { split } from "postcss/lib/list";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const getInitials = (name: string): string =>
  name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .toUpperCase()
    .slice(0, 2);

export function formatDate(date: Date): string {
  // Define the formatting options
  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "numeric",
    day: "numeric",
    // hour: "",
    // minute: "2-digit",
    // second: "2-digit",
    // timeZoneName: "short",
  };

  // Format the date and return it as a string
  return date.toLocaleString("fr-FR", options);
}

// export const handleBooksActions = async ({
//   action,
//   row,
// }: {
//   action: string;
//   row: Row<Book>;
// }) => {try {
//   if (action === 'edit') {
//     const updatedRow = await editUser(row.original.id, /* new data */);
//     setTableData(prevData =>
//       prevData.map(item => item.id === row.original.id ? updatedRow : item)
//     );
//   } else if (action === 'delete') {
//     await deleteUser(row.original.id);
//     setTableData(prevData => prevData.filter(item => item.id !== row.original.id));
//   }
// } catch (error) {
//   console.error(`Error in ${action}:`, error);
// }};
