import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import { Button } from "../ui/button";
import BookForm from "./forms/BookForm";
import { CiEdit, CiTrash } from "react-icons/ci";
import { useRouter } from "next/navigation";

const BookActionModal = ({
  book,
  type,
}: {
  book: Book;
  type?: "update" | "delete" | "create";
}) => {
  const router = useRouter();
  const [open, setOpen] = useState(false);

  // Function to handle navigation for editing with the book data
  const handleEdit = () => {
    router.push(`/admin/books/update/${book.id}`);
  };

  return (
    <div>
      {type === "delete" && (
        <Dialog open={open} onOpenChange={setOpen}>
          <DialogTrigger asChild>
            <Button variant="ghost" className="text-red-400">
              <CiTrash size={25} />
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Supprimer le livre</DialogTitle>
            </DialogHeader>

            <div>
              Mettre à jour les informations du livre avec le id : <br />
              {book.id}
            </div>

            {type == "delete" && <div>Supprimer le livre</div>}
            {/* <BookForm
            bookId={bookId}
            type={type}
            book={appointment}
            setOpen={setOpen}
          /> */}
          </DialogContent>
        </Dialog>
      )}

      {type === "update" && (
        <Button variant="ghost" onClick={handleEdit} className="text-blue-400">
          <CiEdit size={25} />
        </Button>
      )}
    </div>
  );
};

export default BookActionModal;
