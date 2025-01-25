import React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { DataTable } from "@/components/admin/tables/books/DataTable";
import { columns } from "@/components/admin/tables/books/columns";
import { books } from "@/database/schema";
import { asc, desc } from "drizzle-orm";
import { db } from "@/database/drizzle";

const Page = async () => {
  const bookList = await db.select().from(books).orderBy(asc(books.createdAt));

  return (
    <section className="w-full rounded-2xl bg-white p-7">
      <div className="flex flex-wrap items-center justify-between gap-2">
        <h2 className="text-xl font-semibold">All Books</h2>
        <Button className="bg-primary-admin" asChild>
          <Link href="/admin/books/new" className="text-white">
            + Add a New Book
          </Link>
        </Button>
      </div>

      <div className="mt-7 w-full overflow-hidden">
        <DataTable columns={columns} data={bookList} />
      </div>
    </section>
  );
};

export default Page;
