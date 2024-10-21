"use client";
import { Issue } from "@prisma/client";
import { Skeleton, Table } from "@radix-ui/themes";

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

const IssueTableSkeleton = () => {
  return (
    <Table.Root variant="surface">
      <Table.Header>
        <Table.Row>
          {columns.map((column) => (
            <Table.ColumnHeaderCell
              key={column.lable}
              className={column.className}
            ></Table.ColumnHeaderCell>
          ))}
        </Table.Row>
      </Table.Header>

      <Table.Body>
        {Array.from({ length: 6 }).map((_, index) => (
          <Table.Row key={index}>
            <Table.Cell>
              <Skeleton />
            </Table.Cell>
            <Table.Cell className="hidden md:table-cell">
              <Skeleton />
            </Table.Cell>
            <Table.Cell className="hidden md:table-cell">
              <Skeleton />
            </Table.Cell>
          </Table.Row>
        ))}
      </Table.Body>
    </Table.Root>
  );
};

export default IssueTableSkeleton;
