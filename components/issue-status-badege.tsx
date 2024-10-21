import { Status } from "@prisma/client";
import { Badge } from "@radix-ui/themes";

interface Props {
  status: Status;
}

const issueStatusMap: Record<
  Status,
  {
    label: "Open" | "In Progress" | "Closed";
    color: "red" | "green" | "purple";
  }
> = {
  OPEN: { label: "Open", color: "red" },
  IN_PROGRESS: { label: "In Progress", color: "purple" },
  CLOSED: { label: "Closed", color: "green" },
};

const IssueStatusBadege = ({ status }: Props) => {
  return (
    <Badge variant="soft" color={issueStatusMap[status].color}>
      {issueStatusMap[status].label}
    </Badge>
  );
};

export default IssueStatusBadege;
