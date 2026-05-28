"use client";

import { AlertDialog, Button } from "@heroui/react";
import { Trash2 } from "lucide-react";
import { redirect } from "next/navigation";
import toast, { Toaster } from "react-hot-toast";

const DeleteCarModal = ({ car }) => {
  const { _id } = car;

  const handleDelete = async () => {
    const res = await fetch(`http://localhost:5000/added-cars/${_id}`, {
      method: "DELETE",
    });

    const data = await res.json();
    toast.success("Car delete successfully");

    setTimeout(() => {
      router.push("/");
    }, 1500);
    window.location.reload(); // redirect("/my-added-cars");
  };
  return (
    <div>
      <Toaster></Toaster>
      <AlertDialog>
        <Button
          radius="full"
          className="flex-1 w-35 md:w-50 h-14 bg-red-500 text-white font-semibold hover:bg-red-600 transition-all"
        >
          <Trash2 size={18} />
          Delete
        </Button>
        <AlertDialog.Backdrop>
          <AlertDialog.Container>
            <AlertDialog.Dialog className="sm:max-w-100">
              <AlertDialog.CloseTrigger />
              <AlertDialog.Header>
                <AlertDialog.Icon status="danger" />
                <AlertDialog.Heading>
                  Delete project permanently?
                </AlertDialog.Heading>
              </AlertDialog.Header>
              <AlertDialog.Body>
                <p>
                  This will permanently delete{" "}
                  <strong>My Awesome Project</strong> and all of its data. This
                  action cannot be undone.
                </p>
              </AlertDialog.Body>
              <AlertDialog.Footer>
                <Button slot="close" variant="tertiary">
                  Cancel
                </Button>
                <Button onClick={handleDelete} slot="close" variant="danger">
                  Delete Project
                </Button>
              </AlertDialog.Footer>
            </AlertDialog.Dialog>
          </AlertDialog.Container>
        </AlertDialog.Backdrop>
      </AlertDialog>
    </div>
  );
};

export default DeleteCarModal;
