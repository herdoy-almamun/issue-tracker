import { Issue } from "@prisma/client";
import { Table } from "@radix-ui/themes";

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
  return (
    <Table.Root variant="surface">
      <Table.Header>
        <Table.Row>
          {columns.map((column) => (
            <Table.ColumnHeaderCell
              key={column.lable}
              className={column.className}
            >
              {column.lable}
            </Table.ColumnHeaderCell>
          ))}
        </Table.Row>
      </Table.Header>

      <Table.Body>
        {issues.map((issue) => (
          <Table.Row key={issue.id}>
            <Table.Cell>
              {issue.title}
              <div className="block md:hidden">
                <p> {issue.status} </p>
              </div>
            </Table.Cell>
            <Table.Cell className="hidden md:table-cell">
              {issue.status}
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
