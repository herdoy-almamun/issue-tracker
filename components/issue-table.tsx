"use client";
import { Issue } from "@prisma/client";
import { Table } from "@radix-ui/themes";
import { useRouter, useSearchParams } from "next/navigation";
import { FaSortUp } from "react-icons/fa";
import IssueStatusBadeg from "./issue-status-badeg";
import Link from "next/link";

interface Props {
  issues: Issue[];
}

const columns: { lable: string; value: keyof Issue; className: string }[] = [
  { lable: "Title", value: "title", className: "cursor-pointer" },
  {
    lable: "Status",
    value: "status",
    className: "cursor-pointer hidden md:table-cell",
  },
  {
    lable: "CreatedAt",
    value: "createdAt",
    className: "cursor-pointer hidden md:table-cell",
  },
];

const IssueTable = ({ issues }: Props) => {
  const searchParams = useSearchParams();
  const router = useRouter();

  const handleSort = (value: keyof Issue) => {
    const params = new URLSearchParams(searchParams.toString());
    if (searchParams.get("orderBy")) {
      params.set("orderBy", value);
    } else {
      params.append("orderBy", value);
    }
    const query = params.toString();
    return router.push("?" + query);
  };

  const renderSortIcon = (value: keyof Issue) => {
    const params = new URLSearchParams(searchParams.toString());
    return (
      params.get("orderBy") === value && <FaSortUp className="inline-block" />
    );
  };

  return (
    <Table.Root variant="surface">
      <Table.Header>
        <Table.Row>
          {columns.map((column) => (
            <Table.ColumnHeaderCell
              key={column.lable}
              onClick={() => handleSort(column.value)}
              className={column.className}
            >
              {column.lable} {renderSortIcon(column.value)}
            </Table.ColumnHeaderCell>
          ))}
        </Table.Row>
      </Table.Header>

      <Table.Body>
        {issues.map((issue) => (
          <Table.Row key={issue.id}>
            <Table.Cell>
              <Link href={`/issues/${issue.id}`}>{issue.title}</Link>
              <div className="block mt-1 md:hidden">
                <IssueStatusBadeg status={issue.status} />
              </div>
            </Table.Cell>
            <Table.Cell className="hidden md:table-cell">
              <IssueStatusBadeg status={issue.status} />
            </Table.Cell>
            <Table.Cell className="hidden md:table-cell">
              {issue.createdAt.toDateString()}
            </Table.Cell>
          </Table.Row>
        ))}
      </Table.Body>
    </Table.Root>
  );
};

export default IssueTable;
