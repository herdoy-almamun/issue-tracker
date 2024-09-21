import IssueTable from "@/components/issue-table";
import Pagination from "@/components/pagination";
import prisma from "@/prisma/client";
import { Issue, Status } from "@prisma/client";
import { Button, Container, Flex } from "@radix-ui/themes";
import Link from "next/link";
import IssueStatusFilter from "./issue-status-filter";

interface Props {
  searchParams: {
    page: string;
    orderBy: keyof Issue;
    status: Status;
  };
}

const Issues = async ({ searchParams }: Props) => {
  const pageSize = 5;
  const page = parseInt(searchParams.page) || 1;
  const where = {
    status: searchParams.status ? searchParams.status : undefined,
  };
  const orderBy = {
    [searchParams.orderBy ? searchParams.orderBy : "title"]: "asc",
  };

  const issues = await prisma.issue.findMany({
    where,
    orderBy,
    skip: (page - 1) * pageSize,
    take: pageSize,
  });
  const issueCount = await prisma.issue.count({ where });
  return (
    <Container>
      <div className="space-y-5 pb-6">
        <Flex align="center" justify="between">
          <IssueStatusFilter />
          <Link href="/issues/new">
            <Button>Add Issue</Button>
          </Link>
        </Flex>
        <div className="space-y-4">
          <IssueTable issues={issues} />
          <Pagination
            itemsCount={issueCount}
            pageSize={pageSize}
            currentPage={page}
          />
        </div>
      </div>
    </Container>
  );
};

export default Issues;
