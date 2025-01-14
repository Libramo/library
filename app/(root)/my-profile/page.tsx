import React from "react";
import { Button } from "@/components/ui/button";
import { signOut } from "@/auth";
import BookList from "@/components/BookList";
import { sampleBooks } from "@/constants";
import { db } from "@/database/drizzle";
import { borrowRecords } from "@/database/schema";
import { desc } from "drizzle-orm";

const Page = async () => {
  const borrowedBooks = (await db
    .select()
    .from(borrowRecords)
    .limit(10)
    .orderBy(desc(borrowRecords.createdAt))) as BookItem[];

  return (
    <>
      <form
        action={async () => {
          "use server";

          await signOut();
        }}
        className="mb-10"
      >
        {/* <Button>Logout</Button> */}
      </form>

      <BookList title="Borrowed Books" books={borrowedBooks} />
    </>
  );
};
export default Page;
