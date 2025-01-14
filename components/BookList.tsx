import React from "react";
import BookCard from "./BookCard";
import { db } from "@/database/drizzle";

// interface Props {
//   title: string;
//   books: Book[];
//   containerClassName?: string;
// }

interface Props {
  title: string;
  books: Book[];
  containerClassName?: string;
}

const BookList = async ({ title, books, containerClassName }: Props) => {
  // const borrowedBooks = (await db.select().from(books).eq()) as Book[];

  // console.log(books[1]);

  if (books.length < 2) return;

  return (
    <section className={containerClassName}>
      <h2 className="font-bebas-neue text-4xl text-light-100">{title}</h2>

      <ul className="book-list">
        {books.map((book) => (
          <BookCard key={book.id} {...book} />
        ))}
      </ul>
    </section>
  );
};
export default BookList;
