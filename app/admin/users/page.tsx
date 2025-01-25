import React from "react";
import { DataTable } from "@/components/admin/tables/users/DataTable";
import { columns } from "@/components/admin/tables/users/columns";
import { db } from "@/database/drizzle";
import { borrowRecords, users } from "@/database/schema";
import { desc } from "drizzle-orm";

interface UserWithBorrowCount extends RegisteredUser {
  borrowCount: number;
}
const Page = async () => {
  const usersList = (await db
    .select()
    .from(users)
    .orderBy(desc(users.createdAt))) as RegisteredUser[];

  const borrowedBooks = await db
    .select()
    .from(borrowRecords)
    .orderBy(desc(borrowRecords.createdAt));

  // Create an object to store the borrow counts
  const borrowCounts: { [key: string]: number } = {};

  borrowedBooks.forEach((record) => {
    const userId = record.userId;
    if (borrowCounts[userId]) {
      borrowCounts[userId]++;
    } else {
      borrowCounts[userId] = 1;
    }
  });

  const usersWithBorrowCounts: UserWithBorrowCount[] = usersList.map(
    (user) => ({
      ...user,
      borrowCount: borrowCounts[user.id] ?? 0,
    })
  );

  console.log("LIIIIIIIIIIIIIIIIIIIIIIII", borrowedBooks);
  console.log(borrowCounts);

  return (
    <section className="w-full rounded-2xl bg-white p-7">
      <div className="flex flex-wrap items-center justify-between gap-2">
        <h2 className="text-xl font-semibold">Tous les utilisateurs </h2>
      </div>

      <div className="mt-7 w-full overflow-hidden">
        <DataTable data={usersWithBorrowCounts} columns={columns} />
      </div>
    </section>
  );
};

export default Page;
