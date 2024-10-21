"use client";
import { Button, Dialog, Flex } from "@radix-ui/themes";
import axios from "axios";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { AiOutlineDelete } from "react-icons/ai";
import { toast } from "react-toastify";

interface Props {
  issueId: string;
}

const IssueDeleteDialog = ({ issueId }: Props) => {
  const router = useRouter();
  const { status } = useSession();
  return (
    <Dialog.Root>
      <Dialog.Trigger>
        <Button color="red">
          <AiOutlineDelete className="text-xl" /> Delete Issue
        </Button>
      </Dialog.Trigger>

      <Dialog.Content maxWidth="450px">
        <Dialog.Title>Delete Issue</Dialog.Title>
        <Dialog.Description size="2" mb="4">
          Are your sure yout want to delete this issue? This action cannot be
          undone.
        </Dialog.Description>
        <Flex gap="3" mt="4" justify="end">
          <Dialog.Close>
            <Button variant="soft" color="gray">
              Cancel
            </Button>
          </Dialog.Close>
          <Dialog.Close>
            <Button
              onClick={() => {
                if (status === "unauthenticated") {
                  toast.error("you can't perform this action!");
                } else {
                  axios
                    .delete(`/api/issues/${issueId}`)
                    .then(() => {
                      toast.success("Issue deleted successfully.");
                      router.refresh();
                      setTimeout(() => router.push("/issues"), 1000);
                    })
                    .catch(() => toast.error("Something went worn!"));
                }
              }}
              color="red"
            >
              Delete
            </Button>
          </Dialog.Close>
        </Flex>
      </Dialog.Content>
    </Dialog.Root>
  );
};

export default IssueDeleteDialog;
