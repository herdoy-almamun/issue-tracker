"use client";
import { Status } from "@prisma/client";
import { Button, DropdownMenu } from "@radix-ui/themes";
import { useRouter, useSearchParams } from "next/navigation";

const statuses: { label: string; value: Status | "all" }[] = [
  { label: "All", value: "all" },
  { label: "Open", value: "OPEN" },
  { label: "In Progress", value: "IN_PROGRESS" },
  { label: "Closed", value: "CLOSED" },
];

const IssueStatusFilter = () => {
  const searchParams = useSearchParams();
  const router = useRouter();

  const handleIssueStatusFilter = (value: Status | "all") => {
    const params = new URLSearchParams(searchParams.toString());
    if (params.get("status")) {
      value === "all" ? params.delete("status") : params.set("status", value);
    } else {
      value === "all" ? null : params.append("status", value);
    }
    const query = params.toString();
    return router.push("?" + query);
  };

  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger>
        <Button variant="soft">
          Filter Issue
          <DropdownMenu.TriggerIcon />
        </Button>
      </DropdownMenu.Trigger>
      <DropdownMenu.Content>
        {statuses.map((status) => (
          <DropdownMenu.Item
            onClick={() => handleIssueStatusFilter(status.value)}
            key={status.value}
          >
            {status.label}
          </DropdownMenu.Item>
        ))}
      </DropdownMenu.Content>
    </DropdownMenu.Root>
  );
};

export default IssueStatusFilter;
