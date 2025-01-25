import { Button } from "@/components/ui/button";
import Link from "next/link";
import BookForm from "@/components/admin/forms/BookForm";
import { db } from "@/database/drizzle";
import { books } from "@/database/schema";
import { asc, eq } from "drizzle-orm";

interface Props extends Partial<Book> {
  type?: "create" | "update";
}

const Page = async ({ params }: { params: { bookId?: string } }) => {
  let type: "create" | "update" = "create";
  let book: Partial<Book> | undefined;

  if (params.bookId) {
    type = "update";
    const result = await db
      .select()
      .from(books)
      .where(eq(books.id, params.bookId));
    [book] = result; // Assuming the query returns an array, or use result[0] if you're sure it's always an array
  }

  return (
    <>
      <Button asChild className="back-btn">
        <Link href="/admin/books">Go Back</Link>
      </Button>

      <section className="w-full max-w-2xl">
        <BookForm {...book} type={type} />
      </section>
    </>
  );
};

export default Page;
