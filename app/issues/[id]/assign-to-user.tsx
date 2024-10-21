"use client";

import { User } from "@prisma/client";
import { Button, DropdownMenu } from "@radix-ui/themes";
import axios from "axios";
import { FaCheck } from "react-icons/fa6";
import { toast } from "react-toastify";

interface Props {
  issueId: string;
  users: User[];
  userId: string | null;
}

const AssignToUser = ({ issueId, userId, users }: Props) => {
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger>
        <Button>
          Assign to user
          <DropdownMenu.TriggerIcon />
        </Button>
      </DropdownMenu.Trigger>
      <DropdownMenu.Content>
        {users.map((user) => (
          <DropdownMenu.Item
            key={user.id}
            onClick={() =>
              axios
                .put(`/api/issues/${issueId}`, { email: user.email })
                .then(() => toast.success("Successfully Assigned!"))
                .catch(() => toast.error("Somthing went worn!"))
            }
          >
            <div className="flex items-center justify-between w-full gap-6">
              <span>{user.name} </span>{" "}
              {user.id === userId ? (
                <FaCheck className="text-green-500" />
              ) : (
                <div></div>
              )}{" "}
            </div>
          </DropdownMenu.Item>
        ))}
      </DropdownMenu.Content>
    </DropdownMenu.Root>
  );
};

export default AssignToUser;
