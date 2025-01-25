"use server";

import { books, users } from "@/database/schema";
import { db } from "@/database/drizzle";
import { eq } from "drizzle-orm";
import { Row } from "@tanstack/react-table";

export const createBook = async (params: BookParams) => {
  try {
    const newBook = await db
      .insert(books)
      .values({
        ...params,
        availableCopies: params.totalCopies,
      })
      .returning();

    return {
      success: true,
      data: JSON.parse(JSON.stringify(newBook[0])),
    };
  } catch (error) {
    console.log(error);

    return {
      success: false,
      message: "An error occurred while creating the book",
    };
  }
};

export const updateBook = async ({
  bookId,
  params,
}: {
  bookId: string;
  params: BookParams;
}) => {
  try {
    const updatedBook = await db
      .update(books)
      .set({
        ...params,
        availableCopies: params.totalCopies,
      })
      .where(eq(books?.id, bookId))
      .returning();

    return {
      success: true,
      data: JSON.parse(JSON.stringify(updatedBook[0])),
    };
  } catch (error) {
    console.log(error);

    return {
      success: false,
      message: "Erreur lors de la mise à jour des informations du livre !",
    };
  }
};

export const deleteUser = async (userId: string) => {
  try {
    const deletedUser = await db
      .delete(users)
      .where(eq(users.id, userId))
      .returning();

    if (deletedUser.length === 0) {
      return {
        success: false,
        message: "User not found or already deleted",
      };
    }

    return {
      success: true,
      data: JSON.parse(JSON.stringify(deletedUser[0])),
    };
  } catch (error) {
    console.error("Error deleting user:", error);

    return {
      success: false,
      message: "An error occurred while deleting the user",
    };
  }
};

// Function to delete a book
export const deleteBook = async (id: string): Promise<boolean> => {
  try {
    const result = await db.delete(books).where(eq(books.id, id)).returning();

    if (result.length === 0) {
      throw new Error("Book not found or delete failed");
    }
    return true;
  } catch (error) {
    console.error("Error deleting book:", error);
    throw error;
  }
};
