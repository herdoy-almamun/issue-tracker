"use client";

import useAssignIssue from "@/hooks/useAssignIssue";
import useUsers from "@/hooks/useUsers";
import { Button, DropdownMenu } from "@radix-ui/themes";
import { FaCheck } from "react-icons/fa6";

interface Props {
  issueId: string;
  userEmail: string;
  userId: string | null;
}

const AssignToUser = ({ issueId, userId, userEmail }: Props) => {
  const { data } = useUsers(userEmail);
  const { mutate } = useAssignIssue(issueId);

  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger>
        <Button>
          Assign to user
          <DropdownMenu.TriggerIcon />
        </Button>
      </DropdownMenu.Trigger>
      <DropdownMenu.Content>
        {data?.map((user) => (
          <DropdownMenu.Item key={user.id} onClick={() => mutate(user.email!)}>
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
