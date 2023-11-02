"use client";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "./ui/button";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "./ui/use-toast";
import { ToastAction } from "@radix-ui/react-toast";
import prisma from "@/prisma/client";

const DeleteJobButton = ({ job }: { job: Job }) => {
  const router = useRouter();
  const [isDeleting, setDeleting] = useState(false);

  if (!job) return null;

  const handleDelete = async () => {
    try {
      setDeleting(true);
      await axios.delete("/api/jobs/" + job.id);
      router.refresh();

      toast({
        title: "Sucessfully Deleted",
        action: <ToastAction altText="Goto schedule to undo">Undo</ToastAction>,
      });
    } catch (error) {
      setDeleting(false);
      toast({
        variant: "destructive",
        title: "Uh oh! Something went wrong.",
      });
      console.log(error);
    }
  };

  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button disabled={isDeleting} variant="secondary">
          Delete
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
          <AlertDialogDescription>
            This action cannot be undone. This will permanently delete your job
            from our servers.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction onClick={handleDelete}>Delete</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};
export default DeleteJobButton;
